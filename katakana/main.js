// ─── Katakana data ────────────────────────────────────────────────────────────
const ROWS = {
  vowels:   [{c:'ア',r:'a'},{c:'イ',r:'i'},{c:'ウ',r:'u'},{c:'エ',r:'e'},{c:'オ',r:'o'}],
  k:        [{c:'カ',r:'ka'},{c:'キ',r:'ki'},{c:'ク',r:'ku'},{c:'ケ',r:'ke'},{c:'コ',r:'ko'}],
  s:        [{c:'サ',r:'sa'},{c:'シ',r:'shi'},{c:'ス',r:'su'},{c:'セ',r:'se'},{c:'ソ',r:'so'}],
  t:        [{c:'タ',r:'ta'},{c:'チ',r:'chi'},{c:'ツ',r:'tsu'},{c:'テ',r:'te'},{c:'ト',r:'to'}],
  n_row:    [{c:'ナ',r:'na'},{c:'ニ',r:'ni'},{c:'ヌ',r:'nu'},{c:'ネ',r:'ne'},{c:'ノ',r:'no'}],
  h:        [{c:'ハ',r:'ha'},{c:'ヒ',r:'hi'},{c:'フ',r:'fu'},{c:'ヘ',r:'he'},{c:'ホ',r:'ho'}],
  m:        [{c:'マ',r:'ma'},{c:'ミ',r:'mi'},{c:'ム',r:'mu'},{c:'メ',r:'me'},{c:'モ',r:'mo'}],
  y:        [{c:'ヤ',r:'ya'},{c:'ユ',r:'yu'},{c:'ヨ',r:'yo'}],
  r:        [{c:'ラ',r:'ra'},{c:'リ',r:'ri'},{c:'ル',r:'ru'},{c:'レ',r:'re'},{c:'ロ',r:'ro'}],
  w:        [{c:'ワ',r:'wa'},{c:'ヲ',r:'wo'}],
  n_single: [{c:'ン',r:'n'}],
  g:        [{c:'ガ',r:'ga'},{c:'ギ',r:'gi'},{c:'グ',r:'gu'},{c:'ゲ',r:'ge'},{c:'ゴ',r:'go'}],
  z:        [{c:'ザ',r:'za'},{c:'ジ',r:'ji'},{c:'ズ',r:'zu'},{c:'ゼ',r:'ze'},{c:'ゾ',r:'zo'}],
  d:        [{c:'ダ',r:'da'},{c:'ヂ',r:'di'},{c:'ヅ',r:'du'},{c:'デ',r:'de'},{c:'ド',r:'do'}],
  b:        [{c:'バ',r:'ba'},{c:'ビ',r:'bi'},{c:'ブ',r:'bu'},{c:'ベ',r:'be'},{c:'ボ',r:'bo'}],
  p:        [{c:'パ',r:'pa'},{c:'ピ',r:'pi'},{c:'プ',r:'pu'},{c:'ペ',r:'pe'},{c:'ポ',r:'po'}],
  yoon_k:   [{c:'キャ',r:'kya'},{c:'キュ',r:'kyu'},{c:'キョ',r:'kyo'}],
  yoon_s:   [{c:'シャ',r:'sha'},{c:'シュ',r:'shu'},{c:'ショ',r:'sho'}],
  yoon_t:   [{c:'チャ',r:'cha'},{c:'チュ',r:'chu'},{c:'チョ',r:'cho'}],
  yoon_n:   [{c:'ニャ',r:'nya'},{c:'ニュ',r:'nyu'},{c:'ニョ',r:'nyo'}],
  yoon_h:   [{c:'ヒャ',r:'hya'},{c:'ヒュ',r:'hyu'},{c:'ヒョ',r:'hyo'}],
  yoon_m:   [{c:'ミャ',r:'mya'},{c:'ミュ',r:'myu'},{c:'ミョ',r:'myo'}],
  yoon_r:   [{c:'リャ',r:'rya'},{c:'リュ',r:'ryu'},{c:'リョ',r:'ryo'}],
  yoon_g:   [{c:'ギャ',r:'gya'},{c:'ギュ',r:'gyu'},{c:'ギョ',r:'gyo'}],
  yoon_z:   [{c:'ジャ',r:'ja'},{c:'ジュ',r:'ju'},{c:'ジョ',r:'jo'}],
  yoon_b:   [{c:'ビャ',r:'bya'},{c:'ビュ',r:'byu'},{c:'ビョ',r:'byo'}],
  yoon_p:   [{c:'ピャ',r:'pya'},{c:'ピュ',r:'pyu'},{c:'ピョ',r:'pyo'}],
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
const charDisplay    = document.getElementById('charDisplay');
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
let current    = { c: 'ア', r: 'a' };
let timerId    = null;
let isPlaying  = false;
let isSpeaking = false;       // true while speech synthesis is active
let speakToken = 0;           // increments on each speak(); guards stale callbacks
let history    = [];   // stack of past characters
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
  while (next.c === current.c);
  return next;
}

// ─── Display ──────────────────────────────────────────────────────────────────
function showChar(entry, pushHistory = true) {
  if (pushHistory && current) {
    history.push(current);
    if (history.length > MAX_HIST) history.shift();
  }
  current = entry;
  charDisplay.textContent = entry.c;
  charDisplay.setAttribute('title', entry.r);
  captionSection.classList.add('caption--hidden');
  captionRomanji.style.transition = '';
  captionMeaning.style.transition = '';
  isSpeaking = false;
  speakToken++;                           // invalidate any in-flight speak callback
  btnPlay.classList.remove('btn--say-on');
  speechSynthesis.cancel();
}

function revealCaption() {
  captionRomanji.textContent = current.r.toUpperCase();
  captionMeaning.innerHTML =
    `The katakana character <strong>${current.c}</strong> is romanised as <em>${current.r}</em>.`;
  captionSection.classList.remove('caption--hidden');
}

function showPrev() {
  if (!history.length) return;
  const prev = history.pop();
  setPlaying(false);        // stop the timer
  showChar(prev, false);   // don't push to history when going back
  revealCaption();         // immediately show romanji + meaning
}

// ─── Voice settings (shared via cookie across all pages) ─────────────────────
const speechRate  = document.getElementById('speechRate');
const speechVoice = document.getElementById('speechVoice');

function getSelectedVoice() {
  const voices  = speechSynthesis.getVoices();
  const jaAll   = voices.filter(v => v.lang.startsWith('ja'));
  const pref    = speechVoice ? speechVoice.value : '';

  if (!pref) {
    return jaAll[0]
        || voices.find(v => v.lang === 'ja-JP')
        || null;
  }

  const byKeyword = jaAll.filter(v => v.name.toLowerCase().includes(pref));
  if (byKeyword.length) return byKeyword[0];

  if (pref === 'female') return jaAll[0] || null;
  if (pref === 'male')   return jaAll[jaAll.length - 1] || jaAll[0] || null;
  return null;
}

speechRate.addEventListener('change', () => setCookie('speech_rate', speechRate.value));
speechVoice.addEventListener('change', () => setCookie('speech_voice', speechVoice.value));

function loadVoiceSettings() {
  const rate  = getCookie('speech_rate');
  const voice = getCookie('speech_voice');
  if (rate)  speechRate.value  = rate;
  if (voice) speechVoice.value = voice;
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

function speak(onDone) {
  if (!window.speechSynthesis) return;
  const token = ++speakToken;
  speechSynthesis.cancel();

  // Lock & highlight immediately — don't wait for onstart
  isSpeaking = true;
  btnPlay.classList.add('btn--say-on');

  const utt = new SpeechSynthesisUtterance(current.c);
  utt.lang = 'ja-JP';
  utt.rate = parseFloat(speechRate.value);
  const selVoice = getSelectedVoice();
  if (selVoice) utt.voice = selVoice;

  let called = false;
  const cleanup = () => {
    if (token !== speakToken) return;  // cancelled by showChar or a newer speak()
    if (called) return; called = true;
    isSpeaking = false;
    btnPlay.classList.remove('btn--say-on');
    if (onDone) onDone();
  };

  utt.onend   = cleanup;
  utt.onerror = cleanup;
  speechSynthesis.speak(utt);
}

// ─── Timer ────────────────────────────────────────────────────────────────────
function getDuration() {
  return parseInt(timerDuration.value, 10) * 1000;
}

function startTimer() {
  clearTimeout(timerId);
  const duration = getDuration();

  // animate progress bar
  timerBar.style.transition = 'none';
  timerBar.style.width = '100%';
  fsTimerBar.style.transition = 'none';
  fsTimerBar.style.width = '100%';
  timerBar.getBoundingClientRect(); // force reflow
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
    // advance to next card after a short pause so user can see the answer
    timerId = setTimeout(() => {
      if (isPlaying) {
        showChar(pickRandom());
        startTimer();
      }
    }, 300);
  });
}

// ─── Play / Stop ──────────────────────────────────────────────────────────────
function setPlaying(val) {
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
  if (isSpeaking) return;  // locked while audio is playing

  if (isPlaying) {
    // Interrupt the current countdown and play audio now,
    // then advance to next card after speech finishes (same as natural timer end)
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
    // Timer is stopped — just reveal and speak
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
  setCookie('kata_rows', checked);
}

function loadCheckboxes() {
  const val = getCookie('kata_rows');
  if (!val) return;
  const saved = val.split(',');
  checkboxes.forEach(cb => { cb.checked = saved.includes(cb.dataset.row); });
}

checkboxes.forEach(cb => cb.addEventListener('change', saveCheckboxes));

// ─── Dropdown → cookie ────────────────────────────────────────────────────────
timerDuration.addEventListener('change', () => {
  setCookie('kata_timer', timerDuration.value);
  if (isPlaying) startTimer(); // restart with new duration
});

function loadDropdown() {
  const val = getCookie('kata_timer');
  if (val) timerDuration.value = val;
}

// ─── Font picker ──────────────────────────────────────────────────────────────
const FONTS = {
  'san-serif':  "'Noto Sans JP', sans-serif",
  'rounded':    "'M PLUS Rounded 1c', sans-serif",
  'serif':      "'Noto Serif JP', serif",
  'pixelated':  "'DotGothic16', sans-serif",
  'handwritten': "'Anzu Moji 2020', sans-serif",
};

const charFont = document.getElementById('charFont');

function applyFont(val) {
  charDisplay.style.fontFamily = FONTS[val] || FONTS['san-serif'];
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
  charDisplay.classList.toggle('char-bold', charBold.checked);
  setCookie('char_bold', charBold.checked ? '1' : '0');
});

function loadBold() {
  const val = getCookie('char_bold');
  if (val === '1') {
    charBold.checked = true;
    charDisplay.classList.add('char-bold');
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
// Space = Say  |  P = Play/Stop  |  > / ArrowRight = Next  |  < / ArrowLeft = Previous
document.addEventListener('keydown', e => {
  // Ignore when focus is inside an input / select
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
const fsCharDisplay    = document.getElementById('fsCharDisplay');
const fsCaptionSection = document.getElementById('fsCaptionSection');
const fsCaptionRomanji = document.getElementById('fsCaptionRomanji');
const fsCaptionMeaning = document.getElementById('fsCaptionMeaning');
const fsTimerBar       = document.getElementById('fsTimerBar');

function syncFullscreen() {
  fsCharDisplay.textContent = charDisplay.textContent;
  fsCharDisplay.style.fontFamily = charDisplay.style.fontFamily;
  fsCharDisplay.className = charDisplay.className;
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
  if (e.key === 'Escape' && fullscreenModal.classList.contains('fs-open')) {
    closeFullscreen();
  }
});

// keep modal in sync when char changes
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
