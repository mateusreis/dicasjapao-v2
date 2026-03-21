// ─── Kanji N5 data (grouped by theme) ────────────────────────────────────────
// on = 音読み (Chinese-derived), kun = 訓読み (native Japanese)
const ROWS = {
  numbers: [
    {c:'一',r:'いち (ichi)',        m:'one',           on:'いち (ichi)',          kun:'ひと (hito)'},
    {c:'二',r:'に (ni)',            m:'two',           on:'に (ni)',              kun:'ふた (futa)'},
    {c:'三',r:'さん (san)',         m:'three',         on:'さん (san)',           kun:'み (mi)'},
    {c:'四',r:'し・よん (shi / yon)',m:'four',          on:'し (shi)',             kun:'よん・よ (yon / yo)'},
    {c:'五',r:'ご (go)',            m:'five',          on:'ご (go)',              kun:'いつ (itsu)'},
    {c:'六',r:'ろく (roku)',        m:'six',           on:'ろく (roku)',          kun:'む (mu)'},
    {c:'七',r:'しち・なな (shichi / nana)',m:'seven',  on:'しち (shichi)',        kun:'なな (nana)'},
    {c:'八',r:'はち (hachi)',       m:'eight',         on:'はち (hachi)',         kun:'や (ya)'},
    {c:'九',r:'く・きゅう (ku / kyuu)',m:'nine',       on:'く・きゅう (ku / kyuu)',kun:'ここの (kokono)'},
    {c:'十',r:'じゅう (juu)',       m:'ten',           on:'じゅう (juu)',         kun:'とお (too)'},
    {c:'百',r:'ひゃく (hyaku)',     m:'hundred',       on:'ひゃく (hyaku)',       kun:null},
    {c:'千',r:'せん (sen)',         m:'thousand',      on:'せん (sen)',           kun:'ち (chi)'},
    {c:'万',r:'まん (man)',         m:'ten thousand',  on:'まん・ばん (man / ban)',kun:null},
  ],
  time: [
    {c:'日',r:'にち・ひ (nichi / hi)',    m:'day / sun',       on:'にち・じつ (nichi / jitsu)', kun:'ひ・か (hi / ka)'},
    {c:'月',r:'げつ・つき (getsu / tsuki)',m:'month / moon',    on:'げつ・がつ (getsu / gatsu)', kun:'つき (tsuki)'},
    {c:'火',r:'か・ひ (ka / hi)',         m:'fire / Tuesday',  on:'か (ka)',                    kun:'ひ (hi)'},
    {c:'水',r:'すい・みず (sui / mizu)',   m:'water / Wednesday',on:'すい (sui)',                kun:'みず (mizu)'},
    {c:'木',r:'もく・き (moku / ki)',      m:'wood / Thursday', on:'もく・ぼく (moku / boku)',   kun:'き (ki)'},
    {c:'金',r:'きん (kin)',               m:'gold / Friday',   on:'きん・こん (kin / kon)',      kun:'かね (kane)'},
    {c:'土',r:'ど・つち (do / tsuchi)',    m:'earth / Saturday',on:'ど・と (do / to)',            kun:'つち (tsuchi)'},
    {c:'年',r:'ねん・とし (nen / toshi)', m:'year',            on:'ねん (nen)',                 kun:'とし (toshi)'},
    {c:'時',r:'じ・とき (ji / toki)',     m:'hour / time',     on:'じ (ji)',                    kun:'とき (toki)'},
    {c:'分',r:'ふん・ぶん (fun / bun)',   m:'minute',          on:'ぶん・ふん (bun / fun)',      kun:'わける (wakeru)'},
    {c:'半',r:'はん (han)',               m:'half',            on:'はん (han)',                 kun:'なかば (nakaba)'},
    {c:'週',r:'しゅう (shuu)',            m:'week',            on:'しゅう (shuu)',              kun:null},
  ],
  nature: [
    {c:'山',r:'やま・さん (yama / san)',m:'mountain', on:'さん・ざん (san / zan)', kun:'やま (yama)'},
    {c:'川',r:'かわ (kawa)',            m:'river',    on:'せん (sen)',             kun:'かわ (kawa)'},
    {c:'田',r:'た (ta)',               m:'rice field',on:'でん (den)',             kun:'た (ta)'},
    {c:'森',r:'もり (mori)',            m:'forest',   on:'しん (shin)',            kun:'もり (mori)'},
    {c:'林',r:'はやし (hayashi)',       m:'woods',    on:'りん (rin)',             kun:'はやし (hayashi)'},
    {c:'花',r:'はな (hana)',            m:'flower',   on:'か (ka)',               kun:'はな (hana)'},
    {c:'雨',r:'あめ (ame)',             m:'rain',     on:'う (u)',                kun:'あめ・あま (ame / ama)'},
    {c:'空',r:'そら・くう (sora / kuu)',m:'sky',      on:'くう (kuu)',             kun:'そら (sora)'},
  ],
  people: [
    {c:'人',r:'ひと・じん (hito / jin)',m:'person', on:'じん・にん (jin / nin)',   kun:'ひと (hito)'},
    {c:'男',r:'おとこ (otoko)',         m:'man',    on:'だん・なん (dan / nan)',   kun:'おとこ (otoko)'},
    {c:'女',r:'おんな (onna)',          m:'woman',  on:'じょ・にょ (jo / nyo)',    kun:'おんな (onna)'},
    {c:'子',r:'こ・し (ko / shi)',      m:'child',  on:'し・す (shi / su)',        kun:'こ (ko)'},
    {c:'父',r:'ちち (chichi)',          m:'father', on:'ふ (fu)',                 kun:'ちち (chichi)'},
    {c:'母',r:'はは (haha)',            m:'mother', on:'ぼ (bo)',                 kun:'はは (haha)'},
    {c:'友',r:'とも (tomo)',            m:'friend', on:'ゆう (yuu)',              kun:'とも (tomo)'},
    {c:'名',r:'な・めい (na / mei)',    m:'name',   on:'めい・みょう (mei / myou)',kun:'な (na)'},
  ],
  body: [
    {c:'口',r:'くち・こう (kuchi / kou)',m:'mouth',    on:'こう・く (kou / ku)',       kun:'くち (kuchi)'},
    {c:'手',r:'て (te)',                m:'hand',     on:'しゅ (shu)',               kun:'て (te)'},
    {c:'足',r:'あし (ashi)',            m:'foot / leg',on:'そく (soku)',              kun:'あし (ashi)'},
    {c:'目',r:'め (me)',                m:'eye',      on:'もく・ぼく (moku / boku)', kun:'め (me)'},
    {c:'耳',r:'みみ (mimi)',            m:'ear',      on:'じ (ji)',                  kun:'みみ (mimi)'},
  ],
  adjectives: [
    {c:'大',r:'おお・だい (oo / dai)',    m:'big / large',      on:'だい・たい (dai / tai)', kun:'おお (oo)'},
    {c:'小',r:'ちい・しょう (chii / shou)',m:'small',           on:'しょう (shou)',          kun:'ちいさい・こ (chiisai / ko)'},
    {c:'高',r:'たか・こう (taka / kou)', m:'high / expensive',  on:'こう (kou)',             kun:'たか (taka)'},
    {c:'安',r:'やす・あん (yasu / an)',  m:'cheap / safe',      on:'あん (an)',              kun:'やすい (yasui)'},
    {c:'新',r:'あたら・しん (atara / shin)',m:'new',             on:'しん (shin)',            kun:'あたらしい (atarashii)'},
    {c:'古',r:'ふる・こ (furu / ko)',    m:'old',               on:'こ (ko)',               kun:'ふるい (furui)'},
    {c:'長',r:'なが・ちょう (naga / chou)',m:'long',            on:'ちょう (chou)',          kun:'なが (naga)'},
    {c:'多',r:'おお・た (oo / ta)',      m:'many',              on:'た (ta)',               kun:'おおい (ooi)'},
  ],
  direction: [
    {c:'上',r:'うえ・じょう (ue / jou)',    m:'above / up',    on:'じょう・しょう (jou / shou)', kun:'うえ・かみ (ue / kami)'},
    {c:'下',r:'した・か (shita / ka)',      m:'below / down',  on:'か・げ (ka / ge)',            kun:'した・しも (shita / shimo)'},
    {c:'左',r:'ひだり (hidari)',            m:'left',          on:'さ (sa)',                     kun:'ひだり (hidari)'},
    {c:'右',r:'みぎ (migi)',               m:'right',         on:'う・ゆう (u / yuu)',           kun:'みぎ (migi)'},
    {c:'前',r:'まえ・ぜん (mae / zen)',     m:'front / before',on:'ぜん (zen)',                  kun:'まえ (mae)'},
    {c:'後',r:'うしろ・ご (ushiro / go)',   m:'behind / after',on:'ご・こう (go / kou)',           kun:'うしろ・あと (ushiro / ato)'},
    {c:'東',r:'ひがし・とう (higashi / tou)',m:'east',         on:'とう (tou)',                  kun:'ひがし (higashi)'},
    {c:'西',r:'にし・せい (nishi / sei)',   m:'west',          on:'せい・さい (sei / sai)',        kun:'にし (nishi)'},
    {c:'南',r:'みなみ・なん (minami / nan)',m:'south',         on:'なん・な (nan / na)',           kun:'みなみ (minami)'},
    {c:'北',r:'きた・ほく (kita / hoku)',   m:'north',         on:'ほく (hoku)',                  kun:'きた (kita)'},
  ],
  school: [
    {c:'学',r:'まな・がく (mana / gaku)',m:'study / learn',    on:'がく (gaku)',            kun:'まなぶ (manabu)'},
    {c:'校',r:'こう (kou)',             m:'school',            on:'こう (kou)',             kun:null},
    {c:'先',r:'さき・せん (saki / sen)',m:'ahead / teacher',   on:'せん (sen)',             kun:'さき (saki)'},
    {c:'生',r:'せい・い (sei / i)',     m:'life / student',    on:'せい・しょう (sei / shou)',kun:'いきる (ikiru)'},
    {c:'本',r:'ほん・もと (hon / moto)',m:'book / origin',     on:'ほん (hon)',             kun:'もと (moto)'},
    {c:'文',r:'ぶん・もん (bun / mon)',m:'writing / sentence', on:'ぶん・もん (bun / mon)', kun:'ふみ (fumi)'},
    {c:'字',r:'じ (ji)',               m:'character / letter', on:'じ (ji)',               kun:'あざ (aza)'},
    {c:'語',r:'ご (go)',               m:'language / word',    on:'ご (go)',               kun:'かたる (kataru)'},
  ],
  society: [
    {c:'国',r:'くに・こく (kuni / koku)',m:'country',         on:'こく (koku)',   kun:'くに (kuni)'},
    {c:'電',r:'でん (den)',             m:'electricity',      on:'でん (den)',    kun:null},
    {c:'車',r:'くるま・しゃ (kuruma / sha)',m:'car / vehicle', on:'しゃ (sha)',    kun:'くるま (kuruma)'},
    {c:'気',r:'き (ki)',               m:'spirit / feeling',  on:'き・け (ki / ke)',kun:null},
    {c:'円',r:'えん (en)',             m:'circle / yen',      on:'えん (en)',     kun:'まるい (marui)'},
  ],
  actions: [
    {c:'食',r:'た・しょく (ta / shoku)',m:'eat / food',  on:'しょく (shoku)',            kun:'たべる (taberu)'},
    {c:'飲',r:'の・いん (no / in)',     m:'drink',        on:'いん (in)',                 kun:'のむ (nomu)'},
    {c:'来',r:'く・らい (ku / rai)',    m:'come',         on:'らい (rai)',                kun:'くる (kuru)'},
    {c:'行',r:'い・こう (i / kou)',     m:'go',           on:'こう・ぎょう (kou / gyou)', kun:'いく (iku)'},
    {c:'見',r:'み・けん (mi / ken)',    m:'see / look',   on:'けん (ken)',                kun:'みる (miru)'},
    {c:'聞',r:'き・ぶん (ki / bun)',    m:'listen / hear',on:'ぶん・もん (bun / mon)',     kun:'きく (kiku)'},
    {c:'読',r:'よ・どく (yo / doku)',   m:'read',         on:'どく・とく (doku / toku)', kun:'よむ (yomu)'},
    {c:'書',r:'か・しょ (ka / sho)',    m:'write',        on:'しょ (sho)',                kun:'かく (kaku)'},
    {c:'買',r:'か・ばい (ka / bai)',    m:'buy',          on:'ばい (bai)',                kun:'かう (kau)'},
  ],
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
const captionReadings = document.getElementById('captionReadings');
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
let current    = { c: '一', r: 'いち (ichi)', m: 'one' };
let timerId    = null;
let isPlaying  = false;
let isSpeaking = false;
let speakToken = 0;
let history    = [];
const MAX_HIST = 50;

// ─── Pool ─────────────────────────────────────────────────────────────────────
function buildPool() {
  const pool = [];
  checkboxes.forEach(cb => {
    if (cb.checked && ROWS[cb.dataset.row]) pool.push(...ROWS[cb.dataset.row]);
  });
  return pool.length ? pool : ROWS.numbers;
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
  speakToken++;
  btnPlay.classList.remove('btn--say-on');
  speechSynthesis.cancel();
}

function revealCaption() {
  captionRomanji.textContent = current.r;
  captionMeaning.innerHTML =
    `The kanji <strong>${current.c}</strong> means <em>${current.m}</em>.`;

  let tagsHtml = '';
  if (current.on)  tagsHtml += `<span class="rtag rtag--on">音</span><span class="rtag-val">${current.on}</span>`;
  if (current.kun) tagsHtml += `<span class="rtag rtag--kun">訓</span><span class="rtag-val">${current.kun}</span>`;
  captionReadings.innerHTML = tagsHtml;

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

function textToFilename(text) {
  return Array.from(text).map(c => c.codePointAt(0).toString(16).padStart(4,'0')).join('_') + '.mp3';
}
function speak(onDone) {
  const token = ++speakToken;
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }

  isSpeaking = true;
  btnPlay.classList.add('btn--say-on');

  // Speak the kana reading(s), not the kanji — a single kanji is ambiguous for TTS.
  // current.r format: 'いち (ichi)' or 'し・よん (shi / yon)' → join readings with pause
  const kanaReadings = current.r.split(' (')[0].split('・').map(k => k.trim());
  const kana = kanaReadings.join('、');

  const done = () => {
    if (token !== speakToken) return;
    isSpeaking = false;
    btnPlay.classList.remove('btn--say-on');
    if (onDone) onDone();
  };

  const audio = new Audio('/audio/' + textToFilename(kana));
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
  setCookie('kanjin5_rows', checked);
}

function loadCheckboxes() {
  const val = getCookie('kanjin5_rows');
  if (!val) return;
  const saved = val.split(',');
  checkboxes.forEach(cb => { cb.checked = saved.includes(cb.dataset.row); });
}

checkboxes.forEach(cb => cb.addEventListener('change', saveCheckboxes));

// ─── Dropdown → cookie ────────────────────────────────────────────────────────
timerDuration.addEventListener('change', () => {
  setCookie('kanjin5_timer', timerDuration.value);
  if (isPlaying) startTimer();
});

function loadDropdown() {
  const val = getCookie('kanjin5_timer');
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
