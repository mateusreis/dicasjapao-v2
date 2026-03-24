# Geração de vídeos de Hiragana

Scripts para gerar vídeos MP4 prontos para YouTube — um por fileira de hiragana — replicando visualmente o modo fullscreen do site.

## Resultado

- Resolução: 1280×720 (720p) @ 30fps
- Duração: 20 minutos por vídeo (~311 cards × 3.85s cada)
- Codec: H.264 + AAC, pronto para upload no YouTube
- Tamanho: ~57 MB por vídeo / ~1.2 GB total (21 vídeos)
- Tempo de geração: ~3 min por vídeo

## Visual

Idêntico ao modo fullscreen do site:

| Fase | Duração | Conteúdo |
|---|---|---|
| **Timer** | 3s | Background neon yellow, grid animado, caractere grande, barra preta drenando na base |
| **Revelação** | 0.6s | Mesmo layout + banda preta na base com romanização em amarelo |
| **Pausa** | 0.25s | Idem, antes de trocar o card |

Áudio (pronúncia japonesa) toca no início da fase de revelação, sincronizado via FFmpeg `adelay`.

## Como usar

```bash
cd /var/www/html/dicasjapao-v2

# Gerar todas as 21 fileiras (~1h total)
python3 generate_videos.py

# Gerar fileiras específicas
python3 generate_videos.py vowels k s t
python3 generate_videos.py yoon_k yoon_s yoon_t yoon_n
```

Os vídeos são salvos em `videos/hiragana_<fileira>.mp4`.

## Fileiras disponíveis

| Chave | Conteúdo |
|---|---|
| `vowels` | a i u e o |
| `k` | ka ki ku ke ko |
| `s` | sa shi su se so |
| `t` | ta chi tsu te to |
| `n_row` | na ni nu ne no |
| `h` | ha hi fu he ho |
| `m` | ma mi mu me mo |
| `y` | ya yu yo |
| `r` | ra ri ru re ro |
| `w` | wa wo |
| `n_single` | n |
| `g` | ga gi gu ge go |
| `z` | za ji zu ze zo |
| `d` | da di du de do |
| `b` | ba bi bu be bo |
| `p` | pa pi pu pe po |
| `yoon_k` | kya kyu kyo |
| `yoon_s` | sha shu sho |
| `yoon_t` | cha chu cho |
| `yoon_n` | nya nyu nyo |
| `yoon_h` | hya hyu hyo |
| `yoon_m` | mya myu myo |
| `yoon_r` | rya ryu ryo |
| `yoon_g` | gya gyu gyo |
| `yoon_z` | ja ju jo |
| `yoon_b` | bya byu byo |
| `yoon_p` | pya pyu pyo |

## Dependências

- Python 3 + Pillow (`pip install Pillow`)
- FFmpeg com libx264 e AAC (`apt install ffmpeg`)
- Fonte: `suuji/fonts/NotoSerifJP-Bold.ttf` (já inclusa no projeto)
- Áudios: `audio/*.mp3` (já inclusos no projeto)
