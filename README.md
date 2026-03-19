# 電気羊 – Ovelha Elétrica

**Versão: 1.0**

Site de flashcards interativos para aprender o sistema de escrita japonês — um caractere por vez.

## Sobre o projeto

Ovelha Elétrica é uma coleção de aplicações web estáticas focadas no estudo do japonês. Cada módulo cobre um sistema de escrita diferente, com flashcards e quizzes para praticar o reconhecimento e a memorização dos caracteres.

### Módulos disponíveis

| Módulo | Descrição |
|---|---|
| **Hiragana** | Os 46 caracteres fonéticos usados em palavras e gramática nativas do japonês |
| **Katakana** | Os 46 caracteres fonéticos usados principalmente para palavras estrangeiras |
| **Suuji** | Numerais japoneses |
| **Kanji N5** | Kanji do nível N5 do JLPT (nível iniciante) |
| **Kanji N4** | Kanji do nível N4 do JLPT |
| **Quiz ひ** | Quiz de Hiragana |
| **Quiz カ** | Quiz de Katakana |

## Estrutura do projeto

```
/
├── index.html          # Página inicial
├── server.py           # Servidor HTTP local (Python)
├── css/                # Estilos globais
├── fonts/              # Fontes locais
├── hiragana/           # Módulo Hiragana
├── katakana/           # Módulo Katakana
├── suuji/              # Módulo Suuji (numerais)
├── kanji-n5/           # Módulo Kanji N5
├── kanji-n4/           # Módulo Kanji N4
├── quiz-hiragana/      # Quiz de Hiragana
└── quiz-katakana/      # Quiz de Katakana
```

## Como rodar localmente

### Pré-requisitos

- Python 3 instalado

### Opção 1 — Servidor Python embutido (recomendado)

O projeto inclui um servidor HTTP simples configurado para servir os arquivos corretamente.

1. Clone ou baixe o repositório na pasta `/var/www/html/dicasjapao` (caminho padrão do servidor), ou edite o `server.py` para apontar para o diretório correto:

```python
DIRECTORY = "/seu/caminho/aqui"
```

2. Execute o servidor:

```bash
python3 server.py
```

3. Acesse no navegador:

```
http://localhost:8181
```

### Opção 2 — Qualquer servidor HTTP estático

O site é composto apenas por arquivos estáticos (HTML, CSS e JS), então qualquer servidor HTTP simples funciona. Exemplos:

```bash
# Python (sem configuração extra)
python3 -m http.server 8080

# Node.js (com npx)
npx serve .
```

Depois acesse `http://localhost:8080` (ou a porta que escolher).

## Tecnologias utilizadas

- HTML5, CSS3 e JavaScript puro (sem frameworks)
- [Google Fonts](https://fonts.google.com/) — Jost e Noto Sans JP
- [Font Awesome](https://fontawesome.com/) — ícones

## Licença

Copyright © Ovelha Elétrica — Todos os direitos reservados.



    {c:'ウツ',r:'utsu',m:'to hit'}, ウツ means depression, not "to hit"


    {c:'サス',r:'sasu',m:'to point'}, https://jisho.org/search/%E3%82%B5%E3%82%B9

