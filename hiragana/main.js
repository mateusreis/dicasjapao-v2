// ─── Hiragana data ────────────────────────────────────────────────────────────
const ROWS = {
  vowels:   [{c:'あ',r:'a'},{c:'い',r:'i'},{c:'う',r:'u'},{c:'え',r:'e'},{c:'お',r:'o'}],
  k:        [{c:'か',r:'ka'},{c:'き',r:'ki'},{c:'く',r:'ku'},{c:'け',r:'ke'},{c:'こ',r:'ko'}],
  s:        [{c:'さ',r:'sa'},{c:'し',r:'shi'},{c:'す',r:'su'},{c:'せ',r:'se'},{c:'そ',r:'so'}],
  t:        [{c:'た',r:'ta'},{c:'ち',r:'chi'},{c:'つ',r:'tsu'},{c:'て',r:'te'},{c:'と',r:'to'}],
  n_row:    [{c:'な',r:'na'},{c:'に',r:'ni'},{c:'ぬ',r:'nu'},{c:'ね',r:'ne'},{c:'の',r:'no'}],
  h:        [{c:'は',r:'ha'},{c:'ひ',r:'hi'},{c:'ふ',r:'fu'},{c:'へ',r:'he'},{c:'ほ',r:'ho'}],
  m:        [{c:'ま',r:'ma'},{c:'み',r:'mi'},{c:'む',r:'mu'},{c:'め',r:'me'},{c:'も',r:'mo'}],
  y:        [{c:'や',r:'ya'},{c:'ゆ',r:'yu'},{c:'よ',r:'yo'}],
  r:        [{c:'ら',r:'ra'},{c:'り',r:'ri'},{c:'る',r:'ru'},{c:'れ',r:'re'},{c:'ろ',r:'ro'}],
  w:        [{c:'わ',r:'wa'},{c:'を',r:'wo'}],
  n_single: [{c:'ん',r:'n'}],
  g:        [{c:'が',r:'ga'},{c:'ぎ',r:'gi'},{c:'ぐ',r:'gu'},{c:'げ',r:'ge'},{c:'ご',r:'go'}],
  z:        [{c:'ざ',r:'za'},{c:'じ',r:'ji'},{c:'ず',r:'zu'},{c:'ぜ',r:'ze'},{c:'ぞ',r:'zo'}],
  d:        [{c:'だ',r:'da'},{c:'ぢ',r:'di'},{c:'づ',r:'du'},{c:'で',r:'de'},{c:'ど',r:'do'}],
  b:        [{c:'ば',r:'ba'},{c:'び',r:'bi'},{c:'ぶ',r:'bu'},{c:'べ',r:'be'},{c:'ぼ',r:'bo'}],
  p:        [{c:'ぱ',r:'pa'},{c:'ぴ',r:'pi'},{c:'ぷ',r:'pu'},{c:'ぺ',r:'pe'},{c:'ぽ',r:'po'}],
  yoon_k:   [{c:'きゃ',r:'kya'},{c:'きゅ',r:'kyu'},{c:'きょ',r:'kyo'}],
  yoon_s:   [{c:'しゃ',r:'sha'},{c:'しゅ',r:'shu'},{c:'しょ',r:'sho'}],
  yoon_t:   [{c:'ちゃ',r:'cha'},{c:'ちゅ',r:'chu'},{c:'ちょ',r:'cho'}],
  yoon_n:   [{c:'にゃ',r:'nya'},{c:'にゅ',r:'nyu'},{c:'にょ',r:'nyo'}],
  yoon_h:   [{c:'ひゃ',r:'hya'},{c:'ひゅ',r:'hyu'},{c:'ひょ',r:'hyo'}],
  yoon_m:   [{c:'みゃ',r:'mya'},{c:'みゅ',r:'myu'},{c:'みょ',r:'myo'}],
  yoon_r:   [{c:'りゃ',r:'rya'},{c:'りゅ',r:'ryu'},{c:'りょ',r:'ryo'}],
  yoon_g:   [{c:'ぎゃ',r:'gya'},{c:'ぎゅ',r:'gyu'},{c:'ぎょ',r:'gyo'}],
  yoon_z:   [{c:'じゃ',r:'ja'},{c:'じゅ',r:'ju'},{c:'じょ',r:'jo'}],
  yoon_b:   [{c:'びゃ',r:'bya'},{c:'びゅ',r:'byu'},{c:'びょ',r:'byo'}],
  yoon_p:   [{c:'ぴゃ',r:'pya'},{c:'ぴゅ',r:'pyu'},{c:'ぴょ',r:'pyo'}],
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
let current    = { c: 'あ', r: 'a' };
let timerId    = null;
let isPlaying  = false;
let isSpeaking = false;       // true while speech synthesis is active
let speakToken = 0;           // increments on each speak(); guards stale callbacks
let currentAudio = null;      // active Audio element
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
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
}

function revealCaption() {
  captionRomanji.textContent = current.r.toUpperCase();
  captionMeaning.innerHTML =
    `The hiragana character <strong>${current.c}</strong> is romanised as <em>${current.r}</em>.`;
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

function getSelectedVoice() {
  const voices  = cachedVoices;
  const jaAll   = voices.filter(v => v.lang.startsWith('ja'));
  const pref    = speechVoice ? speechVoice.value : '';

  if (!pref) {
    return jaAll[0]
        || voices.find(v => v.lang === 'ja-JP')
        || null;
  }

  // Try to match by 'male' / 'female' keyword in voice name
  const byKeyword = jaAll.filter(v => v.name.toLowerCase().includes(pref));
  if (byKeyword.length) return byKeyword[0];

  // Fallback heuristic: most system ja voices are female by default;
  // for male, take the last one in the list (often a male variant).
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


function textToFilename(text) {
  return Array.from(text).map(c => c.codePointAt(0).toString(16).padStart(4,'0')).join('_') + '.mp3';
}
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

  const audio = new Audio('/audio/' + textToFilename(current.c));
  currentAudio = audio;
  audio.playbackRate = parseFloat(speechRate.value) || 1;
  audio.onended = done;
  audio.onerror = done;
  audio.play().catch(done);
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
  setCookie('hira_rows', checked);
}

function loadCheckboxes() {
  const val = getCookie('hira_rows');
  if (!val) return;
  const saved = val.split(',');
  checkboxes.forEach(cb => { cb.checked = saved.includes(cb.dataset.row); });
}

checkboxes.forEach(cb => cb.addEventListener('change', saveCheckboxes));

// ─── Dropdown → cookie ────────────────────────────────────────────────────────
timerDuration.addEventListener('change', () => {
  setCookie('hira_timer', timerDuration.value);
  if (isPlaying) startTimer(); // restart with new duration
});

function loadDropdown() {
  const val = getCookie('hira_timer');
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
const btnFullscreen   = document.getElementById('btnFullscreen');
const fullscreenModal = document.getElementById('fullscreenModal');
const fsCharDisplay   = document.getElementById('fsCharDisplay');
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
  if (e.key === 'Escape') {
    fullscreenModal.classList.contains('fs-open') ? closeFullscreen() : openFullscreen();
  }
});

fullscreenModal.addEventListener('click', closeFullscreen);

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
