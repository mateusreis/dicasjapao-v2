#!/usr/bin/env python3
"""
generate_videos.py — Gera vídeos MP4 de flashcards de hiragana.

Cada vídeo replica visualmente o modo fullscreen do site:
  - Background neon yellow (#e8ff00)
  - Grid animado 30×30px
  - Caractere grande centralizado
  - Barra timer drenando em 3s
  - Revelação da romanização + áudio sincronizado

Uso:
  python3 generate_videos.py              # gera todas as 21 fileiras
  python3 generate_videos.py vowels k s   # gera fileiras específicas
"""

import os
import sys
import random
import subprocess
import struct
import time
from PIL import Image, ImageDraw, ImageFont

# ─── Constantes ───────────────────────────────────────────────────────────────
AUDIO_DIR  = '/var/www/html/dicasjapao-v2/audio'
FONT_DIR   = '/var/www/html/dicasjapao-v2/suuji/fonts'
OUT_DIR    = '/var/www/html/dicasjapao-v2/videos'

WIDTH, HEIGHT = 1280, 720
FPS           = 30
TIMER_SECS    = 3.0          # duração do timer (card duration)
REVEAL_SECS   = 0.6          # tempo mostrando romanização após revelar
PAUSE_SECS    = 0.25         # pausa antes de trocar o card
CARD_DURATION = TIMER_SECS + REVEAL_SECS + PAUSE_SECS  # 3.85s
TARGET_SECS   = 20 * 60      # 20 minutos
N_CARDS       = int(TARGET_SECS / CARD_DURATION)       # ~311 cards

# Cores (RGB)
ACCENT     = (232, 255, 0)    # #e8ff00
BLACK      = (17,  17,  17)   # #111111
GRID_COLOR = (int(232*0.9), int(255*0.9), 0)  # rgba(0,0,0,0.1) sobre o accent

GRID_SIZE    = 30
SCROLL_PERIOD = 8.4   # segundos por ciclo do scroll do grid

CAPTION_HEIGHT = 130  # px da banda preta na base

# ─── Dados dos caracteres (mirror de main.js) ─────────────────────────────────
ROWS = {
    'vowels':   [{'c':'あ','r':'a'},{'c':'い','r':'i'},{'c':'う','r':'u'},{'c':'え','r':'e'},{'c':'お','r':'o'}],
    'k':        [{'c':'か','r':'ka'},{'c':'き','r':'ki'},{'c':'く','r':'ku'},{'c':'け','r':'ke'},{'c':'こ','r':'ko'}],
    's':        [{'c':'さ','r':'sa'},{'c':'し','r':'shi'},{'c':'す','r':'su'},{'c':'せ','r':'se'},{'c':'そ','r':'so'}],
    't':        [{'c':'た','r':'ta'},{'c':'ち','r':'chi'},{'c':'つ','r':'tsu'},{'c':'て','r':'te'},{'c':'と','r':'to'}],
    'n_row':    [{'c':'な','r':'na'},{'c':'に','r':'ni'},{'c':'ぬ','r':'nu'},{'c':'ね','r':'ne'},{'c':'の','r':'no'}],
    'h':        [{'c':'は','r':'ha'},{'c':'ひ','r':'hi'},{'c':'ふ','r':'fu'},{'c':'へ','r':'he'},{'c':'ほ','r':'ho'}],
    'm':        [{'c':'ま','r':'ma'},{'c':'み','r':'mi'},{'c':'む','r':'mu'},{'c':'め','r':'me'},{'c':'も','r':'mo'}],
    'y':        [{'c':'や','r':'ya'},{'c':'ゆ','r':'yu'},{'c':'よ','r':'yo'}],
    'r':        [{'c':'ら','r':'ra'},{'c':'り','r':'ri'},{'c':'る','r':'ru'},{'c':'れ','r':'re'},{'c':'ろ','r':'ro'}],
    'w':        [{'c':'わ','r':'wa'},{'c':'を','r':'wo'}],
    'n_single': [{'c':'ん','r':'n'}],
    'g':        [{'c':'が','r':'ga'},{'c':'ぎ','r':'gi'},{'c':'ぐ','r':'gu'},{'c':'げ','r':'ge'},{'c':'ご','r':'go'}],
    'z':        [{'c':'ざ','r':'za'},{'c':'じ','r':'ji'},{'c':'ず','r':'zu'},{'c':'ぜ','r':'ze'},{'c':'ぞ','r':'zo'}],
    'd':        [{'c':'だ','r':'da'},{'c':'ぢ','r':'di'},{'c':'づ','r':'du'},{'c':'で','r':'de'},{'c':'ど','r':'do'}],
    'b':        [{'c':'ば','r':'ba'},{'c':'び','r':'bi'},{'c':'ぶ','r':'bu'},{'c':'べ','r':'be'},{'c':'ぼ','r':'bo'}],
    'p':        [{'c':'ぱ','r':'pa'},{'c':'ぴ','r':'pi'},{'c':'ぷ','r':'pu'},{'c':'ぺ','r':'pe'},{'c':'ぽ','r':'po'}],
    'yoon_k':   [{'c':'きゃ','r':'kya'},{'c':'きゅ','r':'kyu'},{'c':'きょ','r':'kyo'}],
    'yoon_s':   [{'c':'しゃ','r':'sha'},{'c':'しゅ','r':'shu'},{'c':'しょ','r':'sho'}],
    'yoon_t':   [{'c':'ちゃ','r':'cha'},{'c':'ちゅ','r':'chu'},{'c':'ちょ','r':'cho'}],
    'yoon_n':   [{'c':'にゃ','r':'nya'},{'c':'にゅ','r':'nyu'},{'c':'にょ','r':'nyo'}],
    'yoon_h':   [{'c':'ひゃ','r':'hya'},{'c':'ひゅ','r':'hyu'},{'c':'ひょ','r':'hyo'}],
    'yoon_m':   [{'c':'みゃ','r':'mya'},{'c':'みゅ','r':'myu'},{'c':'みょ','r':'myo'}],
    'yoon_r':   [{'c':'りゃ','r':'rya'},{'c':'りゅ','r':'ryu'},{'c':'りょ','r':'ryo'}],
    'yoon_g':   [{'c':'ぎゃ','r':'gya'},{'c':'ぎゅ','r':'gyu'},{'c':'ぎょ','r':'gyo'}],
    'yoon_z':   [{'c':'じゃ','r':'ja'},{'c':'じゅ','r':'ju'},{'c':'じょ','r':'jo'}],
    'yoon_b':   [{'c':'びゃ','r':'bya'},{'c':'びゅ','r':'byu'},{'c':'びょ','r':'byo'}],
    'yoon_p':   [{'c':'ぴゃ','r':'pya'},{'c':'ぴゅ','r':'pyu'},{'c':'ぴょ','r':'pyo'}],
}

ROW_LABELS = {
    'vowels':   'Vogais  —  a i u e o',
    'k':        'Fileira K  —  ka ki ku ke ko',
    's':        'Fileira S  —  sa shi su se so',
    't':        'Fileira T  —  ta chi tsu te to',
    'n_row':    'Fileira N  —  na ni nu ne no',
    'h':        'Fileira H  —  ha hi fu he ho',
    'm':        'Fileira M  —  ma mi mu me mo',
    'y':        'Fileira Y  —  ya yu yo',
    'r':        'Fileira R  —  ra ri ru re ro',
    'w':        'Fileira W  —  wa wo',
    'n_single': 'N  —  n',
    'g':        'Fileira G  —  ga gi gu ge go',
    'z':        'Fileira Z  —  za ji zu ze zo',
    'd':        'Fileira D  —  da di du de do',
    'b':        'Fileira B  —  ba bi bu be bo',
    'p':        'Fileira P  —  pa pi pu pe po',
    'yoon_k':   'Yōon K  —  kya kyu kyo',
    'yoon_s':   'Yōon S  —  sha shu sho',
    'yoon_t':   'Yōon T  —  cha chu cho',
    'yoon_n':   'Yōon N  —  nya nyu nyo',
    'yoon_h':   'Yōon H  —  hya hyu hyo',
    'yoon_m':   'Yōon M  —  mya myu myo',
    'yoon_r':   'Yōon R  —  rya ryu ryo',
    'yoon_g':   'Yōon G  —  gya gyu gyo',
    'yoon_z':   'Yōon Z  —  ja ju jo',
    'yoon_b':   'Yōon B  —  bya byu byo',
    'yoon_p':   'Yōon P  —  pya pyu pyo',
}

# ─── Fonts ────────────────────────────────────────────────────────────────────
_FONT_CACHE = {}

def get_font(size):
    if size not in _FONT_CACHE:
        _FONT_CACHE[size] = ImageFont.truetype(
            os.path.join(FONT_DIR, 'NotoSerifJP-Bold.ttf'), size)
    return _FONT_CACHE[size]

def fit_font(text, max_width, max_height, start_size=500, min_size=80):
    """Retorna o maior tamanho de fonte que cabe em max_width × max_height."""
    size = start_size
    while size >= min_size:
        font = get_font(size)
        # Usa textbbox para medir o texto com a fonte
        dummy = Image.new('RGB', (1, 1))
        d = ImageDraw.Draw(dummy)
        bbox = d.textbbox((0, 0), text, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        if w <= max_width and h <= max_height:
            return font, size
        size -= 10
    return get_font(min_size), min_size

# ─── Helpers ──────────────────────────────────────────────────────────────────
def text_to_filename(text):
    """Espelha textToFilename() de main.js."""
    return '_'.join(f'{ord(c):04x}' for c in text) + '.mp3'


def build_card_sequence(row_key):
    """Sequência aleatória de N_CARDS sem repetição imediata entre ciclos."""
    chars = list(ROWS[row_key])
    result = []
    last = None
    while len(result) < N_CARDS:
        pool = chars.copy()
        random.shuffle(pool)
        # evita repetição na junção entre ciclos
        if last is not None and len(pool) > 1 and pool[0]['c'] == last:
            pool[0], pool[1] = pool[1], pool[0]
        result.extend(pool)
        last = pool[-1]['c']
    return result[:N_CARDS]


# ─── Renderização de frames ───────────────────────────────────────────────────
def draw_grid(draw, offset_x, offset_y):
    """Desenha o grid animado 30×30px."""
    ox = int(offset_x) % GRID_SIZE
    oy = int(offset_y) % GRID_SIZE
    # linhas verticais
    x = -ox
    while x < WIDTH:
        draw.line([(x, 0), (x, HEIGHT)], fill=GRID_COLOR, width=1)
        x += GRID_SIZE
    # linhas horizontais
    y = -oy
    while y < HEIGHT:
        draw.line([(0, y), (WIDTH, y)], fill=GRID_COLOR, width=1)
        y += GRID_SIZE


def render_frame_a(char_entry, progress, global_frame, char_font_cache):
    """
    Fase A: background + grid + caractere + barra timer.
    progress: 0.0 (barra cheia) → 1.0 (barra vazia)
    """
    img = Image.new('RGB', (WIDTH, HEIGHT), ACCENT)
    draw = ImageDraw.Draw(img)

    # Grid animado (scroll diagonal)
    t = global_frame / FPS
    offset = (t / SCROLL_PERIOD) * GRID_SIZE
    draw_grid(draw, offset, offset)

    # Caractere centralizado
    text = char_entry['c']
    font = char_font_cache.get(text)
    if font is None:
        max_char_w = int(WIDTH * 0.6)
        max_char_h = int(HEIGHT * 0.65)
        font, _ = fit_font(text, max_char_w, max_char_h)
        char_font_cache[text] = font

    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    cx = (WIDTH - tw) // 2 - bbox[0]
    cy = (HEIGHT - th) // 2 - bbox[1]
    draw.text((cx, cy), text, font=font, fill=BLACK)

    # Barra timer (6px na base, drena da direita para esquerda)
    bar_width = int(WIDTH * (1.0 - progress))
    draw.rectangle([(0, HEIGHT - 6), (bar_width, HEIGHT)], fill=BLACK)

    return img


def render_frame_b(char_entry, global_frame, char_font_cache):
    """
    Fase B: mesma Fase A sem barra timer + banda preta na base + romanização.
    """
    img = Image.new('RGB', (WIDTH, HEIGHT), ACCENT)
    draw = ImageDraw.Draw(img)

    # Grid animado
    t = global_frame / FPS
    offset = (t / SCROLL_PERIOD) * GRID_SIZE
    draw_grid(draw, offset, offset)

    # Caractere — ligeiramente acima do centro para dar espaço à caption
    text = char_entry['c']
    font = char_font_cache.get(text)
    if font is None:
        max_char_w = int(WIDTH * 0.6)
        max_char_h = int(HEIGHT * 0.65)
        font, _ = fit_font(text, max_char_w, max_char_h)
        char_font_cache[text] = font

    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    cx = (WIDTH - tw) // 2 - bbox[0]
    # sobe 30px para afastar da banda
    cy = (HEIGHT - CAPTION_HEIGHT - th) // 2 - bbox[1]
    draw.text((cx, cy), text, font=font, fill=BLACK)

    # Banda preta na base
    draw.rectangle([(0, HEIGHT - CAPTION_HEIGHT), (WIDTH, HEIGHT)], fill=BLACK)

    # Romanização — letra-espaçamento simulado inserindo espaços
    rom = char_entry['r'].upper()
    # letter-spacing: 0.4em → inserir espaços entre cada caractere
    spaced = '  '.join(rom)  # espaços extras simulam letter-spacing

    rom_font = get_font(80)
    rbbox = draw.textbbox((0, 0), spaced, font=rom_font)
    rw = rbbox[2] - rbbox[0]
    rx = (WIDTH - rw) // 2 - rbbox[0]
    ry = HEIGHT - CAPTION_HEIGHT + (CAPTION_HEIGHT - (rbbox[3] - rbbox[1])) // 2 - rbbox[1]
    draw.text((rx, ry), spaced, font=rom_font, fill=ACCENT)

    return img


# ─── Geração de vídeo ─────────────────────────────────────────────────────────
def generate_video(row_key):
    cards = build_card_sequence(row_key)
    n = len(cards)

    # Verifica que todos os áudios existem
    audio_paths = []
    for ch in cards:
        fname = text_to_filename(ch['c'])
        path = os.path.join(AUDIO_DIR, fname)
        if not os.path.exists(path):
            print(f'  AVISO: áudio não encontrado: {path}', flush=True)
            path = None
        audio_paths.append(path)

    valid_audio = [(i, p) for i, p in enumerate(audio_paths) if p is not None]

    out_path = os.path.join(OUT_DIR, f'hiragana_{row_key}.mp4')

    # Monta argumentos do FFmpeg
    # Entradas de vídeo (pipe) + áudios individuais
    audio_args = []
    for _, p in valid_audio:
        audio_args += ['-i', p]

    # filter_complex: adelay em cada áudio + amix
    filter_parts = []
    for out_idx, (card_idx, _) in enumerate(valid_audio):
        t_ms = int((card_idx * CARD_DURATION + TIMER_SECS) * 1000)
        filter_parts.append(f'[{out_idx + 1}:a]adelay={t_ms}|{t_ms}[a{out_idx}]')

    n_valid = len(valid_audio)
    if n_valid > 0:
        mix_inputs = ''.join(f'[a{i}]' for i in range(n_valid))
        filter_parts.append(f'{mix_inputs}amix=inputs={n_valid}:normalize=0[aout]')
        audio_map = ['-map', '[aout]']
        audio_encode = ['-c:a', 'aac', '-b:a', '128k']
    else:
        audio_map = []
        audio_encode = ['-an']

    total_duration = n * CARD_DURATION

    cmd = (
        ['ffmpeg', '-y',
         '-f', 'rawvideo', '-pixel_format', 'rgb24',
         '-video_size', f'{WIDTH}x{HEIGHT}', '-framerate', str(FPS),
         '-i', 'pipe:0']
        + audio_args
        + (['-filter_complex', ';'.join(filter_parts)] if filter_parts else [])
        + ['-map', '0:v']
        + audio_map
        + ['-c:v', 'libx264', '-preset', 'fast', '-crf', '23', '-pix_fmt', 'yuv420p']
        + audio_encode
        + ['-t', f'{total_duration:.3f}',
           '-movflags', '+faststart',
           out_path]
    )

    ff = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)

    phase_a_frames = int(TIMER_SECS * FPS)
    phase_b_frames = int((REVEAL_SECS + PAUSE_SECS) * FPS)

    char_font_cache = {}
    global_frame = 0
    total_frames = n * (phase_a_frames + phase_b_frames)

    try:
        for card_i, ch in enumerate(cards):
            # Fase A: timer
            for f in range(phase_a_frames):
                progress = f / phase_a_frames
                img = render_frame_a(ch, progress, global_frame, char_font_cache)
                ff.stdin.write(img.tobytes())
                global_frame += 1

            # Fase B: revelação
            for f in range(phase_b_frames):
                img = render_frame_b(ch, global_frame, char_font_cache)
                ff.stdin.write(img.tobytes())
                global_frame += 1

            # Progresso a cada 10% dos cards
            if (card_i + 1) % max(1, n // 10) == 0:
                pct = (card_i + 1) / n * 100
                print(f'  {pct:.0f}%  ({card_i+1}/{n} cards)', flush=True)

    finally:
        ff.stdin.close()

    ff.wait()
    if ff.returncode != 0:
        print(f'  ERRO FFmpeg (returncode={ff.returncode})', flush=True)
    else:
        size_mb = os.path.getsize(out_path) / 1e6
        print(f'  Salvo: {out_path}  ({size_mb:.1f} MB)', flush=True)

    return ff.returncode == 0


# ─── Entry point ──────────────────────────────────────────────────────────────
if __name__ == '__main__':
    os.makedirs(OUT_DIR, exist_ok=True)

    rows_to_generate = sys.argv[1:] if len(sys.argv) > 1 else list(ROWS.keys())

    # Valida fileiras fornecidas
    for rk in rows_to_generate:
        if rk not in ROWS:
            print(f'Fileira desconhecida: "{rk}". Disponíveis: {list(ROWS.keys())}')
            sys.exit(1)

    print(f'Gerando {len(rows_to_generate)} vídeo(s) — {N_CARDS} cards × {CARD_DURATION:.2f}s = {TARGET_SECS/60:.0f} min cada')
    print(f'Resolução: {WIDTH}×{HEIGHT} @ {FPS}fps\n')

    total_start = time.time()
    for rk in rows_to_generate:
        label = ROW_LABELS.get(rk, rk)
        print(f'[{rk}]  {label}', flush=True)
        t0 = time.time()
        ok = generate_video(rk)
        elapsed = time.time() - t0
        status = 'OK' if ok else 'FALHOU'
        print(f'  {status} em {elapsed/60:.1f} min\n', flush=True)

    total_elapsed = time.time() - total_start
    print(f'Concluído em {total_elapsed/60:.1f} min total.')
