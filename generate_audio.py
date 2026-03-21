#!/usr/bin/env python3
"""
Gera arquivos MP3 para todos os caracteres/palavras dos módulos
usando Google Text-to-Speech (gTTS). Salva em /audio/.
Nomeação: codepoints hex separados por _ (ex: あ → 3042.mp3)
"""
import re, os, time
from gtts import gTTS

BASE    = '/var/www/html/dicasjapao-v2'
OUT_DIR = os.path.join(BASE, 'audio')
os.makedirs(OUT_DIR, exist_ok=True)

def to_filename(text):
    return '_'.join(f'{ord(c):04x}' for c in text) + '.mp3'

def generate(text):
    path = os.path.join(OUT_DIR, to_filename(text))
    if os.path.exists(path):
        print(f'  skip  {text}')
        return
    try:
        gTTS(text, lang='ja').save(path)
        print(f'  ok    {text}  →  {to_filename(text)}')
        time.sleep(0.35)   # evita rate-limit do Google
    except Exception as e:
        print(f'  ERRO  {text}: {e}')

# ─── Módulos de kana: fala current.c diretamente ──────────────────────────────
print('\n── Kana (hiragana, katakana, hira-kata, quiz-hiragana, quiz-katakana) ──')
kana_modules = ['hiragana', 'katakana', 'hira-kata', 'quiz-hiragana', 'quiz-katakana']
kana_texts = set()
for mod in kana_modules:
    content = open(f'{BASE}/{mod}/main.js').read()
    kana_texts.update(re.findall(r"c:'([^']+)'", content))

for text in sorted(kana_texts):
    generate(text)

# ─── Módulos de kanji: fala a leitura kana de current.r ──────────────────────
print('\n── Kanji (kanji-n5, kanji-n4) ──')
kanji_modules = ['kanji-n5', 'kanji-n4']
kanji_texts = set()
for mod in kanji_modules:
    content = open(f'{BASE}/{mod}/main.js').read()
    for r in re.findall(r"r:'([^']+)'", content):
        kana_part = r.split(' (')[0]
        readings  = [k.strip() for k in kana_part.split('・') if k.strip()]
        text = '、'.join(readings)
        if text:
            kanji_texts.add(text)

for text in sorted(kanji_texts):
    generate(text)

print(f'\nConcluído. {len(kana_texts)} kana + {len(kanji_texts)} kanji = {len(kana_texts)+len(kanji_texts)} textos.')
