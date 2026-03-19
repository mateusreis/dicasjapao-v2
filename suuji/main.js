// ─── Number → Kana converter ──────────────────────────────────────────────────
function numberToKana(n) {
  if (n === 0) return 'ぜろ';

  const hyaku  = ['','ひゃく','にひゃく','さんびゃく','よんひゃく','ごひゃく','ろっぴゃく','ななひゃく','はっぴゃく','きゅうひゃく'];
  const juuArr = ['','じゅう','にじゅう','さんじゅう','よんじゅう','ごじゅう','ろくじゅう','ななじゅう','はちじゅう','きゅうじゅう'];
  const ones   = ['','いち','に','さん','よん','ご','ろく','なな','はち','きゅう'];

  function senRead(s) {
    if (s === 1) return 'せん';
    if (s === 3) return 'さんぜん';
    if (s === 8) return 'はっせん';
    return ones[s] + 'せん';
  }

  function group4(g) {
    const s = Math.floor(g / 1000);
    const h = Math.floor((g % 1000) / 100);
    const j = Math.floor((g % 100) / 10);
    const o = g % 10;
    let r = '';
    if (s) r += senRead(s);
    if (h) r += hyaku[h];
    if (j) r += (j === 1 ? 'じゅう' : juuArr[j]);
    if (o) r += ones[o];
    return r;
  }

  const oku  = Math.floor(n / 100000000);
  const man  = Math.floor((n % 100000000) / 10000);
  const rest = n % 10000;

  let result = '';
  if (oku  > 0) result += (oku  === 1 ? 'いちおく' : group4(oku)  + 'おく');
  if (man  > 0) result += (man  === 1 ? 'いちまん' : group4(man)  + 'まん');
  if (rest > 0 || result === '') result += group4(rest);

  return result;
}

// ─── Number → Kanji converter ─────────────────────────────────────────────────
function numberToKanji(n) {
  if (n === 0) return '零';

  const k = ['','一','二','三','四','五','六','七','八','九'];

  function group4k(g) {
    const s = Math.floor(g / 1000);
    const h = Math.floor((g % 1000) / 100);
    const j = Math.floor((g % 100) / 10);
    const o = g % 10;
    let r = '';
    if (s) r += (s === 1 ? '千' : k[s] + '千');
    if (h) r += (h === 1 ? '百' : k[h] + '百');
    if (j) r += (j === 1 ? '十' : k[j] + '十');
    if (o) r += k[o];
    return r;
  }

  const oku  = Math.floor(n / 100000000);
  const man  = Math.floor((n % 100000000) / 10000);
  const rest = n % 10000;

  let result = '';
  if (oku  > 0) result += group4k(oku)  + '億';
  if (man  > 0) result += group4k(man)  + '万';
  if (rest > 0 || result === '') result += group4k(rest);

  return result;
}

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
const rangeSelect    = document.getElementById('range');
const zerosSelect    = document.getElementById('zeros');
const timerBarToggle = document.getElementById('timerBarToggle');

// ─── State ────────────────────────────────────────────────────────────────────
let current    = { n: 0, display: '0', kana: 'ぜろ' };
let timerId    = null;
let isPlaying  = false;
let isSpeaking = false;
let speakToken = 0;
let history    = [];
const MAX_HIST = 50;

// ─── Number picker ────────────────────────────────────────────────────────────
function pickRandom() {
  const [minStr, maxStr] = rangeSelect.value.split('-');
  const min   = parseInt(minStr);
  const max   = parseInt(maxStr);
  const zeros = zerosSelect.value;

  let display, fullN, attempts = 0;
  do {
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    display = (zeros !== 'none') ? String(n) + zeros : String(n);
    fullN   = parseInt(display);
    attempts++;
  } while (display === current.display && (max - min) > 0 && attempts < 20);

  return { n: fullN, display, kana: numberToKana(fullN) };
}

// ─── Display ──────────────────────────────────────────────────────────────────
function adjustSize(len) {
  if      (len <= 3) charDisplay.style.fontSize = '';
  else if (len <= 5) charDisplay.style.fontSize = 'clamp(5rem, 18vw, 13rem)';
  else if (len <= 7) charDisplay.style.fontSize = 'clamp(3rem, 13vw, 9rem)';
  else               charDisplay.style.fontSize = 'clamp(2rem, 9vw, 6rem)';
}

function showChar(entry, pushHistory = true) {
  if (pushHistory && current) {
    history.push(current);
    if (history.length > MAX_HIST) history.shift();
  }
  current = entry;
  charDisplay.textContent = entry.display;
  charDisplay.setAttribute('title', entry.kana);
  adjustSize(entry.display.length);
  captionSection.classList.add('caption--hidden');
  captionRomanji.style.transition = '';
  captionMeaning.style.transition = '';
  isSpeaking = false;
  speakToken++;
  btnPlay.classList.remove('btn--say-on');
  speechSynthesis.cancel();
}

function revealCaption() {
  captionRomanji.textContent = current.kana;
  captionMeaning.innerHTML =
    `<strong>${current.display}</strong> → <em>${numberToKanji(current.n)}</em> — ${current.kana}`;
  captionSection.classList.remove('caption--hidden');
}

function showPrev() {
  if (!history.length) return;
  const prev = history.pop();
  setPlaying(false);
  showChar(prev, false);
  revealCaption();
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

// ─── Speech ───────────────────────────────────────────────────────────────────
function speak(onDone) {
  if (!window.speechSynthesis) return;
  const token = ++speakToken;
  speechSynthesis.cancel();

  isSpeaking = true;
  btnPlay.classList.add('btn--say-on');

  const utt = new SpeechSynthesisUtterance(current.kana);
  utt.lang  = 'ja-JP';
  utt.rate  = parseFloat(speechRate.value);
  const selVoice = getSelectedVoice();
  if (selVoice) utt.voice = selVoice;

  let called = false;
  const cleanup = () => {
    if (token !== speakToken) return;
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

  if (timerBarToggle.value !== 'hide') timerBarWrap.style.display = 'block';
  timerBar.style.transition  = 'none';
  timerBar.style.width       = '100%';
  timerBar.getBoundingClientRect();
  timerBar.style.transition  = `width ${duration}ms linear`;
  timerBar.style.width       = '0%';

  timerId = setTimeout(onTimerEnd, duration);
}

function stopTimer() {
  clearTimeout(timerId);
  timerId = null;
  timerBar.style.transition  = 'none';
  timerBarWrap.style.display = 'none';
}

function onTimerEnd() {
  revealCaption();
  speak(() => {
    timerId = setTimeout(() => {
      if (isPlaying) { showChar(pickRandom()); startTimer(); }
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
  if (isSpeaking) return;
  if (isPlaying) {
    stopTimer();
    revealCaption();
    speak(() => {
      timerId = setTimeout(() => {
        if (isPlaying) { showChar(pickRandom()); startTimer(); }
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

// ─── Settings → cookies ───────────────────────────────────────────────────────
rangeSelect.addEventListener('change', () => {
  setCookie('suuji_range', rangeSelect.value);
  showChar(pickRandom());
  if (isPlaying) startTimer();
});

zerosSelect.addEventListener('change', () => {
  setCookie('suuji_zeros', zerosSelect.value);
  showChar(pickRandom());
  if (isPlaying) startTimer();
});

timerDuration.addEventListener('change', () => {
  setCookie('suuji_timer', timerDuration.value);
  if (isPlaying) startTimer();
});

function loadSettings() {
  const range = getCookie('suuji_range');
  const zeros = getCookie('suuji_zeros');
  const timer = getCookie('suuji_timer');
  if (range && rangeSelect.querySelector(`option[value="${range}"]`)) rangeSelect.value = range;
  if (zeros && zerosSelect.querySelector(`option[value="${zeros}"]`)) zerosSelect.value = zeros;
  if (timer) timerDuration.value = timer;
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

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.4)' : 'none';
});

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) return;
  switch (e.key) {
    case ' ':        e.preventDefault(); btnPlay.click(); break;
    case 'p': case 'P': e.preventDefault(); setPlaying(!isPlaying); break;
    case '>': case '.': case 'ArrowRight':
      e.preventDefault(); showChar(pickRandom()); if (isPlaying) startTimer(); break;
    case '<': case ',': case 'ArrowLeft':
      e.preventDefault(); showPrev(); break;
  }
});

// ─── Init ─────────────────────────────────────────────────────────────────────
loadVoiceSettings();
loadTimerBarSetting();
loadSettings();
showChar(pickRandom());
