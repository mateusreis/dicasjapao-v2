// ─── Combined Hiragana + Katakana data ────────────────────────────────────────
// Each entry: { h: hiragana, k: katakana, r: romanji }
const ROWS = {
  vowels:   [{h:'あ',k:'ア',r:'a'},{h:'い',k:'イ',r:'i'},{h:'う',k:'ウ',r:'u'},{h:'え',k:'エ',r:'e'},{h:'お',k:'オ',r:'o'}],
  k:        [{h:'か',k:'カ',r:'ka'},{h:'き',k:'キ',r:'ki'},{h:'く',k:'ク',r:'ku'},{h:'け',k:'ケ',r:'ke'},{h:'こ',k:'コ',r:'ko'}],
  s:        [{h:'さ',k:'サ',r:'sa'},{h:'し',k:'シ',r:'shi'},{h:'す',k:'ス',r:'su'},{h:'せ',k:'セ',r:'se'},{h:'そ',k:'ソ',r:'so'}],
  t:        [{h:'た',k:'タ',r:'ta'},{h:'ち',k:'チ',r:'chi'},{h:'つ',k:'ツ',r:'tsu'},{h:'て',k:'テ',r:'te'},{h:'と',k:'ト',r:'to'}],
  n_row:    [{h:'な',k:'ナ',r:'na'},{h:'に',k:'ニ',r:'ni'},{h:'ぬ',k:'ヌ',r:'nu'},{h:'ね',k:'ネ',r:'ne'},{h:'の',k:'ノ',r:'no'}],
  h:        [{h:'は',k:'ハ',r:'ha'},{h:'ひ',k:'ヒ',r:'hi'},{h:'ふ',k:'フ',r:'fu'},{h:'へ',k:'ヘ',r:'he'},{h:'ほ',k:'ホ',r:'ho'}],
  m:        [{h:'ま',k:'マ',r:'ma'},{h:'み',k:'ミ',r:'mi'},{h:'む',k:'ム',r:'mu'},{h:'め',k:'メ',r:'me'},{h:'も',k:'モ',r:'mo'}],
  y:        [{h:'や',k:'ヤ',r:'ya'},{h:'ゆ',k:'ユ',r:'yu'},{h:'よ',k:'ヨ',r:'yo'}],
  r:        [{h:'ら',k:'ラ',r:'ra'},{h:'り',k:'リ',r:'ri'},{h:'る',k:'ル',r:'ru'},{h:'れ',k:'レ',r:'re'},{h:'ろ',k:'ロ',r:'ro'}],
  w:        [{h:'わ',k:'ワ',r:'wa'},{h:'を',k:'ヲ',r:'wo'}],
  n_single: [{h:'ん',k:'ン',r:'n'}],
  g:        [{h:'が',k:'ガ',r:'ga'},{h:'ぎ',k:'ギ',r:'gi'},{h:'ぐ',k:'グ',r:'gu'},{h:'げ',k:'ゲ',r:'ge'},{h:'ご',k:'ゴ',r:'go'}],
  z:        [{h:'ざ',k:'ザ',r:'za'},{h:'じ',k:'ジ',r:'ji'},{h:'ず',k:'ズ',r:'zu'},{h:'ぜ',k:'ゼ',r:'ze'},{h:'ぞ',k:'ゾ',r:'zo'}],
  d:        [{h:'だ',k:'ダ',r:'da'},{h:'ぢ',k:'ヂ',r:'di'},{h:'づ',k:'ヅ',r:'du'},{h:'で',k:'デ',r:'de'},{h:'ど',k:'ド',r:'do'}],
  b:        [{h:'ば',k:'バ',r:'ba'},{h:'び',k:'ビ',r:'bi'},{h:'ぶ',k:'ブ',r:'bu'},{h:'べ',k:'ベ',r:'be'},{h:'ぼ',k:'ボ',r:'bo'}],
  p:        [{h:'ぱ',k:'パ',r:'pa'},{h:'ぴ',k:'ピ',r:'pi'},{h:'ぷ',k:'プ',r:'pu'},{h:'ぺ',k:'ペ',r:'pe'},{h:'ぽ',k:'ポ',r:'po'}],
  yoon_k:   [{h:'きゃ',k:'キャ',r:'kya'},{h:'きゅ',k:'キュ',r:'kyu'},{h:'きょ',k:'キョ',r:'kyo'}],
  yoon_s:   [{h:'しゃ',k:'シャ',r:'sha'},{h:'しゅ',k:'シュ',r:'shu'},{h:'しょ',k:'ショ',r:'sho'}],
  yoon_t:   [{h:'ちゃ',k:'チャ',r:'cha'},{h:'ちゅ',k:'チュ',r:'chu'},{h:'ちょ',k:'チョ',r:'cho'}],
  yoon_n:   [{h:'にゃ',k:'ニャ',r:'nya'},{h:'にゅ',k:'ニュ',r:'nyu'},{h:'にょ',k:'ニョ',r:'nyo'}],
  yoon_h:   [{h:'ひゃ',k:'ヒャ',r:'hya'},{h:'ひゅ',k:'ヒュ',r:'hyu'},{h:'ひょ',k:'ヒョ',r:'hyo'}],
  yoon_m:   [{h:'みゃ',k:'ミャ',r:'mya'},{h:'みゅ',k:'ミュ',r:'myu'},{h:'みょ',k:'ミョ',r:'myo'}],
  yoon_r:   [{h:'りゃ',k:'リャ',r:'rya'},{h:'りゅ',k:'リュ',r:'ryu'},{h:'りょ',k:'リョ',r:'ryo'}],
  yoon_g:   [{h:'ぎゃ',k:'ギャ',r:'gya'},{h:'ぎゅ',k:'ギュ',r:'gyu'},{h:'ぎょ',k:'ギョ',r:'gyo'}],
  yoon_z:   [{h:'じゃ',k:'ジャ',r:'ja'},{h:'じゅ',k:'ジュ',r:'ju'},{h:'じょ',k:'ジョ',r:'jo'}],
  yoon_b:   [{h:'びゃ',k:'ビャ',r:'bya'},{h:'びゅ',k:'ビュ',r:'byu'},{h:'びょ',k:'ビョ',r:'byo'}],
  yoon_p:   [{h:'ぴゃ',k:'ピャ',r:'pya'},{h:'ぴゅ',k:'ピュ',r:'pyu'},{h:'ぴょ',k:'ピョ',r:'pyo'}],
};

// ─── Cookie helpers ───────────────────────────────────────────────────────────
function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 864e5);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const charH          = document.getElementById('charH');
const charK          = document.getElementById('charK');
const captionSection = document.getElementById('captionSection');
const captionRomanji = document.getElementById('captionRomanji');
const captionMeaning = document.getElementById('captionMeaning');
const timerBarWrap   = document.getElementById('timerBarWrap');
const timerBar       = document.getElementById('timerBar');
const btnTimer        = document.getElementById('btnTimer');
const btnPlay         = document.getElementById('btnPlay');
const btnNext        = document.getElementById('btnNext');
const btnPrev        = document.getElementById('btnPrev');
const timerDuration  = document.getElementById('timerDuration');
const checkboxes     = document.querySelectorAll('.checklist input[type="checkbox"]');
const timerBarToggle = document.getElementById('timerBarToggle');

// ─── State ────────────────────────────────────────────────────────────────────
let current    = { h: 'あ', k: 'ア', r: 'a' };
let timerId    = null;
let isPlaying  = false;
let isSpeaking = false;
let speakToken = 0;
let currentAudio = null;      // active Audio element
let history    = [];
const MAX_HIST = 50;

// ─── Pool ─────────────────────────────────────────────────────────────────────
function buildPool() {
  const pool = [];
  checkboxes.forEach(cb => {
    if (cb.checked && ROWS[cb.dataset.row]) pool.push(...ROWS[cb.dataset.row]);
  });
  return pool.length ? pool : ROWS.vowels;
}

function pickRandom() {
  const pool = buildPool();
  if (pool.length === 1) return pool[0];
  let next;
  do { next = pool[Math.floor(Math.random() * pool.length)]; }
  while (next.h === current.h);
  return next;
}

// ─── Display ──────────────────────────────────────────────────────────────────
function showChar(entry, pushHistory = true) {
  if (pushHistory && current) {
    history.push(current);
    if (history.length > MAX_HIST) history.shift();
  }
  current = entry;
  charH.textContent = entry.h;
  charH.setAttribute('title', entry.r);
  charK.textContent = entry.k;
  charK.setAttribute('title', entry.r);
  captionSection.classList.add('caption--hidden');
  captionRomanji.style.transition = '';
  captionMeaning.style.transition = '';
  isSpeaking = false;
  speakToken++;
  btnPlay.classList.remove('btn--say-on');
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if (window.speechSynthesis) speechSynthesis.cancel();
}

function revealCaption() {
  captionRomanji.textContent = current.r.toUpperCase();
  captionMeaning.innerHTML =
    `Hiragana <strong>${current.h}</strong> e katakana <strong>${current.k}</strong> são romanizados como <em>${current.r}</em>.`;
  captionSection.classList.remove('caption--hidden');
}

function showPrev() {
  if (!history.length) return;
  const prev = history.pop();
  setPlaying(false);
  showChar(prev, false);
  revealCaption();
}

// ─── Voice settings ───────────────────────────────────────────────────────────
const speechRate  = document.getElementById('speechRate');

let cachedVoices = speechSynthesis.getVoices();
speechSynthesis.addEventListener('voiceschanged', () => {
  cachedVoices = speechSynthesis.getVoices();
  if (!cachedVoices.some(v => v.lang.startsWith('ja'))) showNoVoiceModal();
});

function showNoVoiceModal() {
  if (getCookie('tts_notice_seen')) return;

  const overlay = document.createElement('div');
  overlay.style.cssText = [
    'position:fixed', 'inset:0', 'background:rgba(0,0,0,0.75)',
    'display:flex', 'align-items:center', 'justify-content:center',
    'z-index:9999', 'padding:1.5rem'
  ].join(';');

  overlay.innerHTML = `
    <div style="background:#e8ff00;padding:2rem;max-width:420px;width:100%;position:relative;
                color:#111;font-family:var(--font);line-height:1.6;">
      <button id="ttsModalClose" style="position:absolute;top:0.75rem;right:0.75rem;
              background:none;border:none;color:#111;font-size:1.25rem;
              cursor:pointer;padding:0.25rem 0.5rem;">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <p style="margin:0 0 0.75rem;font-size:1rem;display:flex;align-items:center;gap:0.5rem;">
        <i class="fa-solid fa-volume-xmark" style="color:#111;"></i>
        <strong>Sem voz japonesa instalada</strong>
      </p>
      <p style="margin:0 0 1.25rem;font-size:0.875rem;color:#333;">
        O Speech Synthesis API só fala idiomas que o dispositivo tem instalado.
      </p>
      <p style="margin:0;font-size:0.8rem;color:#444;">
        <i class="fa-solid fa-gear" style="color:#111;"></i>
        Configurações → Gerenciamento geral → Idioma e entrada →
        Saída de texto para fala → Google Text-to-Speech →
        <i class="fa-solid fa-gear" style="color:#111;"></i>
        → Instalar dados de voz → <strong style="color:#111;">Japonês</strong>
      </p>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById('ttsModalClose').addEventListener('click', () => {
    setCookie('tts_notice_seen', '1', 365);
    overlay.remove();
  });
}


// Android Chrome requires a user gesture before speechSynthesis.speak() works
document.addEventListener('touchstart', () => {
  const utt = new SpeechSynthesisUtterance('');
  speechSynthesis.speak(utt);
}, { once: true });

speechRate.addEventListener('change', () => setCookie('speech_rate', speechRate.value));

function loadVoiceSettings() {
  const rate  = getCookie('speech_rate');
  if (rate)  speechRate.value  = rate;
}

timerBarToggle.addEventListener('change', () => {
  setCookie('timer_bar', timerBarToggle.value);
  if (timerBarToggle.value === 'hide') {
    timerBarWrap.style.display = 'none';
  } else if (isPlaying) {
    stopTimer();
    startTimer();
  }
});

function loadTimerBarSetting() {
  const v = getCookie('timer_bar');
  if (v) timerBarToggle.value = v;
}

function textToFilename(text) {
  return Array.from(text).map(c => c.codePointAt(0).toString(16).padStart(4,'0')).join('_') + '.mp3';
}
// Speak the hiragana character (both scripts share the same pronunciation)
function speak(onDone) {
  const token = ++speakToken;
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }

  isSpeaking = true;
  btnPlay.classList.add('btn--say-on');

  const done = () => {
    if (token !== speakToken) return;
    isSpeaking = false;
    btnPlay.classList.remove('btn--say-on');
    if (onDone) onDone();
  };

  if (window.speechSynthesis && speechSynthesis.getVoices().some(v => v.lang.startsWith('ja'))) {
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(current.h);
    utt.lang = 'ja-JP';
    utt.rate = parseFloat(speechRate.value) || 1;
    utt.onend   = done;
    utt.onerror = done;
    speechSynthesis.speak(utt);
  } else {
    const audio = new Audio('/audio/' + textToFilename(current.h));
    currentAudio = audio;
    audio.playbackRate = parseFloat(speechRate.value) || 1;
    audio.onended = done;
    audio.onerror = done;
    audio.play().catch(done);
  }
}

// ─── Timer ────────────────────────────────────────────────────────────────────
function getDuration() {
  return parseInt(timerDuration.value, 10) * 1000;
}

function startTimer() {
  clearTimeout(timerId);
  const duration = getDuration();

  timerBar.style.transition = 'none';
  timerBar.style.width = '100%';
  fsTimerBar.style.transition = 'none';
  fsTimerBar.style.width = '100%';
  timerBar.getBoundingClientRect();
  timerBar.style.transition = `width ${duration}ms linear`;
  timerBar.style.width = '0%';
  fsTimerBar.style.transition = `width ${duration}ms linear`;
  fsTimerBar.style.width = '0%';

  timerId = setTimeout(onTimerEnd, duration);
}

function stopTimer() {
  clearTimeout(timerId);
  timerId = null;
  timerBar.style.transition = 'none';
  timerBar.style.width = '0%';
  fsTimerBar.style.transition = 'none';
  fsTimerBar.style.width = '0%';
}

function onTimerEnd() {
  revealCaption();
  speak(() => {
    timerId = setTimeout(() => {
      if (isPlaying) {
        showChar(pickRandom());
        startTimer();
      }
    }, 300);
  });
}

// ─── Play / Stop ──────────────────────────────────────────────────────────────
function playToggleSound(playing) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sine';
  if (playing) {
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.08);
  } else {
    osc.frequency.setValueAtTime(660, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.08);
  }
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.15);
}

function setPlaying(val) {
  playToggleSound(val);
  isPlaying = val;
  if (val) {
    btnTimer.classList.add('buttons--active');
    startTimer();
  } else {
    btnTimer.classList.remove('buttons--active');
    stopTimer();
  }
}

btnTimer.addEventListener('click', () => setPlaying(!isPlaying));

// ─── Say ──────────────────────────────────────────────────────────────────────
btnPlay.addEventListener('click', () => {
  if (isSpeaking) return;

  if (isPlaying) {
    stopTimer();
    revealCaption();
    speak(() => {
      timerId = setTimeout(() => {
        if (isPlaying) {
          showChar(pickRandom());
          startTimer();
        }
      }, 300);
    });
  } else {
    revealCaption();
    speak();
  }
});

// ─── Prev ─────────────────────────────────────────────────────────────────────
btnPrev.addEventListener('click', showPrev);

// ─── Next ─────────────────────────────────────────────────────────────────────
btnNext.addEventListener('click', () => {
  showChar(pickRandom());
  if (isPlaying) startTimer();
});

// ─── Checkboxes → cookie ──────────────────────────────────────────────────────
function saveCheckboxes() {
  const checked = [...checkboxes].filter(cb => cb.checked).map(cb => cb.dataset.row).join(',');
  setCookie('hirakata_rows', checked);
}

function loadCheckboxes() {
  const val = getCookie('hirakata_rows');
  if (!val) return;
  const saved = val.split(',');
  checkboxes.forEach(cb => { cb.checked = saved.includes(cb.dataset.row); });
}

checkboxes.forEach(cb => cb.addEventListener('change', saveCheckboxes));

// ─── Dropdown → cookie ────────────────────────────────────────────────────────
timerDuration.addEventListener('change', () => {
  setCookie('hirakata_timer', timerDuration.value);
  if (isPlaying) startTimer();
});

function loadDropdown() {
  const val = getCookie('hirakata_timer');
  if (val) timerDuration.value = val;
}

// ─── Font picker ──────────────────────────────────────────────────────────────
const FONTS = {
  'san-serif':   "'Noto Sans JP', sans-serif",
  'rounded':     "'M PLUS Rounded 1c', sans-serif",
  'serif':       "'Noto Serif JP', serif",
  'pixelated':   "'DotGothic16', sans-serif",
  'handwritten': "'Anzu Moji 2020', sans-serif",
};

const charFont = document.getElementById('charFont');

function applyFont(val) {
  const family = FONTS[val] || FONTS['san-serif'];
  charH.style.fontFamily = family;
  charK.style.fontFamily = family;
}

charFont.addEventListener('change', () => {
  applyFont(charFont.value);
  setCookie('char_font', charFont.value);
});

function loadFont() {
  const val = getCookie('char_font');
  if (val && FONTS[val]) {
    charFont.value = val;
    applyFont(val);
  }
}

// ─── Bold toggle ──────────────────────────────────────────────────────────────
const charBold = document.getElementById('charBold');

charBold.addEventListener('change', () => {
  charH.classList.toggle('char-bold', charBold.checked);
  charK.classList.toggle('char-bold', charBold.checked);
  setCookie('char_bold', charBold.checked ? '1' : '0');
});

function loadBold() {
  const val = getCookie('char_bold');
  if (val === '1') {
    charBold.checked = true;
    charH.classList.add('char-bold');
    charK.classList.add('char-bold');
  }
}

// ─── Mobile nav ───────────────────────────────────────────────────────────────
const burger   = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.4)' : 'none';
});

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) return;

  switch (e.key) {
    case ' ':
      e.preventDefault();
      btnPlay.click();
      break;
    case 'p':
    case 'P':
      e.preventDefault();
      setPlaying(!isPlaying);
      break;
    case '>':
    case '.':
    case 'ArrowRight':
      e.preventDefault();
      showChar(pickRandom());
      if (isPlaying) startTimer();
      break;
    case '<':
    case ',':
    case 'ArrowLeft':
      e.preventDefault();
      showPrev();
      break;
  }
});

// ─── Fullscreen modal ─────────────────────────────────────────────────────────
const btnFullscreen    = document.getElementById('btnFullscreen');
const fullscreenModal  = document.getElementById('fullscreenModal');
const fsCharH          = document.getElementById('fsCharH');
const fsCharK          = document.getElementById('fsCharK');
const fsCaptionSection = document.getElementById('fsCaptionSection');
const fsCaptionRomanji = document.getElementById('fsCaptionRomanji');
const fsCaptionMeaning = document.getElementById('fsCaptionMeaning');
const fsTimerBar       = document.getElementById('fsTimerBar');

function syncFullscreen() {
  fsCharH.textContent = charH.textContent;
  fsCharH.style.fontFamily = charH.style.fontFamily;
  fsCharH.className = charH.className;
  fsCharK.textContent = charK.textContent;
  fsCharK.style.fontFamily = charK.style.fontFamily;
  fsCharK.className = charK.className;
  if (captionSection.classList.contains('caption--hidden')) {
    fsCaptionSection.classList.add('caption--hidden');
  } else {
    fsCaptionRomanji.textContent = captionRomanji.textContent;
    fsCaptionMeaning.innerHTML   = captionMeaning.innerHTML;
    fsCaptionSection.classList.remove('caption--hidden');
  }
}

function openFullscreen() {
  syncFullscreen();
  fullscreenModal.classList.add('fs-open');
  fullscreenModal.setAttribute('aria-hidden', 'false');
  btnFullscreen.querySelector('i').className = 'fa-solid fa-compress';
}

function closeFullscreen() {
  fullscreenModal.classList.remove('fs-open');
  fullscreenModal.setAttribute('aria-hidden', 'true');
  btnFullscreen.querySelector('i').className = 'fa-solid fa-expand';
}

btnFullscreen.addEventListener('click', () => {
  fullscreenModal.classList.contains('fs-open') ? closeFullscreen() : openFullscreen();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    fullscreenModal.classList.contains('fs-open') ? closeFullscreen() : openFullscreen();
  }
});

fullscreenModal.addEventListener('click', closeFullscreen);

const _origShowChar = showChar;
showChar = function(entry, pushHistory) {
  _origShowChar(entry, pushHistory);
  if (fullscreenModal.classList.contains('fs-open')) syncFullscreen();
};

const _origRevealCaption = revealCaption;
revealCaption = function() {
  _origRevealCaption();
  if (fullscreenModal.classList.contains('fs-open')) syncFullscreen();
};

// ─── Init ─────────────────────────────────────────────────────────────────────
loadVoiceSettings();
loadTimerBarSetting();
loadCheckboxes();
loadDropdown();
loadFont();
loadBold();
showChar(pickRandom());
