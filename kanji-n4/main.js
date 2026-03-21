// ─── Kanji N4 data (grouped by theme) ────────────────────────────────────────
// on = 音読み (Chinese-derived reading), kun = 訓読み (native Japanese reading)
const ROWS = {
  body: [
    {c:'体',r:'からだ (karada)',        m:'body',           on:'たい・てい (tai / tei)',    kun:'からだ (karada)'},
    {c:'頭',r:'あたま (atama)',         m:'head',           on:'とう・ず (tou / zu)',        kun:'あたま (atama)'},
    {c:'顔',r:'かお (kao)',             m:'face',           on:'がん (gan)',                 kun:'かお (kao)'},
    {c:'首',r:'くび (kubi)',            m:'neck',           on:'しゅ (shu)',                 kun:'くび (kubi)'},
    {c:'腹',r:'はら (hara)',            m:'belly',          on:'ふく (fuku)',                kun:'はら (hara)'},
    {c:'背',r:'せ (se)',                m:'back / height',  on:'はい (hai)',                 kun:'せ (se)'},
    {c:'指',r:'ゆび (yubi)',            m:'finger',         on:'し (shi)',                   kun:'ゆび (yubi)'},
    {c:'歯',r:'は (ha)',                m:'tooth',          on:'し (shi)',                   kun:'は (ha)'},
    {c:'皮',r:'かわ (kawa)',            m:'skin',           on:'ひ (hi)',                    kun:'かわ (kawa)'},
    {c:'病',r:'びょう (byou)',          m:'illness',        on:'びょう・へい (byou / hei)',  kun:'やまい (yamai)'},
    {c:'薬',r:'くすり (kusuri)',        m:'medicine',       on:'やく (yaku)',                kun:'くすり (kusuri)'},
    {c:'医',r:'い (i)',                 m:'doctor',         on:'い (i)',                     kun:null},
    {c:'痛',r:'いた・つう (ita / tsuu)',m:'pain',           on:'つう (tsuu)',                kun:'いた (ita)'},
    {c:'熱',r:'ねつ (netsu)',           m:'heat / fever',   on:'ねつ (netsu)',               kun:'あつ (atsu)'},
  ],
  family: [
    {c:'夫',r:'おっと (otto)',          m:'husband',        on:'ふ・ふう (fu / fuu)',        kun:'おっと (otto)'},
    {c:'妻',r:'つま (tsuma)',           m:'wife',           on:'さい (sai)',                 kun:'つま (tsuma)'},
    {c:'兄',r:'あに (ani)',             m:'older brother',  on:'けい・きょう (kei / kyou)',  kun:'あに (ani)'},
    {c:'姉',r:'あね (ane)',             m:'older sister',   on:'し (shi)',                   kun:'あね (ane)'},
    {c:'弟',r:'おとうと (otouto)',      m:'younger brother',on:'てい・だい (tei / dai)',     kun:'おとうと (otouto)'},
    {c:'妹',r:'いもうと (imouto)',      m:'younger sister', on:'まい (mai)',                 kun:'いもうと (imouto)'},
    {c:'祖',r:'そ (so)',                m:'ancestor',       on:'そ (so)',                    kun:null},
    {c:'孫',r:'まご (mago)',            m:'grandchild',     on:'そん (son)',                 kun:'まご (mago)'},
    {c:'親',r:'おや (oya)',             m:'parent',         on:'しん (shin)',                kun:'おや (oya)'},
    {c:'族',r:'ぞく (zoku)',            m:'tribe / family', on:'ぞく (zoku)',                kun:null},
  ],
  nature: [
    {c:'海',r:'うみ (umi)',             m:'sea / ocean',    on:'かい (kai)',                 kun:'うみ (umi)'},
    {c:'池',r:'いけ (ike)',             m:'pond',           on:'ち (chi)',                   kun:'いけ (ike)'},
    {c:'島',r:'しま (shima)',           m:'island',         on:'とう (tou)',                 kun:'しま (shima)'},
    {c:'野',r:'の (no)',                m:'field / wild',   on:'や (ya)',                    kun:'の (no)'},
    {c:'草',r:'くさ (kusa)',            m:'grass',          on:'そう (sou)',                 kun:'くさ (kusa)'},
    {c:'石',r:'いし (ishi)',            m:'stone',          on:'せき・しゃく (seki / shaku)',kun:'いし (ishi)'},
    {c:'雪',r:'ゆき (yuki)',            m:'snow',           on:'せつ (setsu)',               kun:'ゆき (yuki)'},
    {c:'風',r:'かぜ (kaze)',            m:'wind',           on:'ふう・ふ (fuu / fu)',        kun:'かぜ (kaze)'},
    {c:'雲',r:'くも (kumo)',            m:'cloud',          on:'うん (un)',                  kun:'くも (kumo)'},
    {c:'光',r:'ひかり (hikari)',        m:'light',          on:'こう (kou)',                 kun:'ひかり (hikari)'},
    {c:'暗',r:'くら (kura)',            m:'dark',           on:'あん (an)',                  kun:'くら (kura)'},
    {c:'明',r:'あか・めい (aka / mei)', m:'bright / clear', on:'めい・みょう (mei / myou)', kun:'あか・あき (aka / aki)'},
  ],
  places: [
    {c:'店',r:'みせ (mise)',            m:'shop',           on:'てん (ten)',                 kun:'みせ (mise)'},
    {c:'駅',r:'えき (eki)',             m:'station',        on:'えき (eki)',                 kun:null},
    {c:'道',r:'みち (michi)',           m:'road / way',     on:'どう・とう (dou / tou)',     kun:'みち (michi)'},
    {c:'町',r:'まち (machi)',           m:'town',           on:'ちょう (chou)',              kun:'まち (machi)'},
    {c:'市',r:'し・いち (shi / ichi)',  m:'city / market',  on:'し (shi)',                   kun:'いち (ichi)'},
    {c:'村',r:'むら (mura)',            m:'village',        on:'そん (son)',                 kun:'むら (mura)'},
    {c:'場',r:'ば (ba)',                m:'place',          on:'じょう (jou)',               kun:'ば (ba)'},
    {c:'地',r:'ち (chi)',               m:'ground / land',  on:'ち・じ (chi / ji)',          kun:null},
    {c:'所',r:'ところ (tokoro)',        m:'place / spot',   on:'しょ (sho)',                 kun:'ところ (tokoro)'},
    {c:'室',r:'しつ (shitsu)',          m:'room',           on:'しつ (shitsu)',              kun:'むろ (muro)'},
    {c:'橋',r:'はし (hashi)',           m:'bridge',         on:'きょう (kyou)',              kun:'はし (hashi)'},
    {c:'階',r:'かい (kai)',             m:'floor / level',  on:'かい (kai)',                 kun:null},
  ],
  food: [
    {c:'肉',r:'にく (niku)',            m:'meat',           on:'にく (niku)',                kun:null},
    {c:'魚',r:'さかな (sakana)',        m:'fish',           on:'ぎょ (gyo)',                 kun:'さかな (sakana)'},
    {c:'飯',r:'めし (meshi)',           m:'rice / meal',    on:'はん (han)',                 kun:'めし (meshi)'},
    {c:'茶',r:'ちゃ (cha)',             m:'tea',            on:'ちゃ・さ (cha / sa)',        kun:null},
    {c:'酒',r:'さけ (sake)',            m:'alcohol',        on:'しゅ (shu)',                 kun:'さけ (sake)'},
    {c:'料',r:'りょう (ryou)',          m:'fee / materials',on:'りょう (ryou)',              kun:null},
    {c:'味',r:'あじ (aji)',             m:'taste / flavor', on:'み (mi)',                    kun:'あじ (aji)'},
    {c:'牛',r:'うし (ushi)',            m:'cow / beef',     on:'ぎゅう (gyuu)',              kun:'うし (ushi)'},
    {c:'鳥',r:'とり (tori)',            m:'bird / chicken', on:'ちょう (chou)',              kun:'とり (tori)'},
    {c:'豚',r:'ぶた (buta)',            m:'pig / pork',     on:'とん (ton)',                 kun:'ぶた (buta)'},
  ],
  time: [
    {c:'朝',r:'あさ (asa)',             m:'morning',        on:'ちょう (chou)',              kun:'あさ (asa)'},
    {c:'昼',r:'ひる (hiru)',            m:'noon / daytime', on:'ちゅう (chuu)',              kun:'ひる (hiru)'},
    {c:'夜',r:'よる (yoru)',            m:'night',          on:'や (ya)',                    kun:'よる (yoru)'},
    {c:'夕',r:'ゆう (yuu)',             m:'evening',        on:'せき (seki)',                kun:'ゆう (yuu)'},
    {c:'昨',r:'さく (saku)',            m:'yesterday',      on:'さく (saku)',                kun:null},
    {c:'去',r:'さ (sa)',                m:'past / leave',   on:'きょ・こ (kyo / ko)',        kun:'さ (sa)'},
    {c:'始',r:'はじ (haji)',            m:'begin',          on:'し (shi)',                   kun:'はじ (haji)'},
    {c:'終',r:'お (o)',                 m:'end / finish',   on:'しゅう (shuu)',              kun:'お (o)'},
    {c:'速',r:'はや (haya)',            m:'fast / speed',   on:'そく (soku)',                kun:'はや (haya)'},
    {c:'遅',r:'おそ (oso)',             m:'slow / late',    on:'ち (chi)',                   kun:'おそ (oso)'},
  ],
  feelings: [
    {c:'好',r:'す (su)',                m:'like',           on:'こう (kou)',                 kun:'す・この (su / kono)'},
    {c:'嫌',r:'いや (iya)',             m:'dislike',        on:'けん (ken)',                 kun:'いや (iya)'},
    {c:'怖',r:'こわ (kowa)',            m:'scary',          on:'ふ (fu)',                    kun:'こわ (kowa)'},
    {c:'悲',r:'かな (kana)',            m:'sad',            on:'ひ (hi)',                    kun:'かな (kana)'},
    {c:'楽',r:'たの・らく (tano / raku)',m:'fun / easy',   on:'がく・らく (gaku / raku)',   kun:'たの (tano)'},
    {c:'思',r:'おも (omo)',             m:'think',          on:'し (shi)',                   kun:'おも (omo)'},
    {c:'考',r:'かんが (kanga)',         m:'consider',       on:'こう (kou)',                 kun:'かんが (kanga)'},
    {c:'知',r:'し (shi)',               m:'know',           on:'ち (chi)',                   kun:'し (shi)'},
    {c:'忘',r:'わす (wasu)',            m:'forget',         on:'ぼう (bou)',                 kun:'わす (wasu)'},
    {c:'覚',r:'おぼ (obo)',             m:'remember',       on:'かく (kaku)',                kun:'おぼ (obo)'},
    {c:'心',r:'こころ (kokoro)',        m:'heart / mind',   on:'しん (shin)',                kun:'こころ (kokoro)'},
  ],
  describing: [
    {c:'重',r:'おも (omo)',             m:'heavy',          on:'じゅう・ちょう (juu / chou)',kun:'おも (omo)'},
    {c:'軽',r:'かる (karu)',            m:'light',          on:'けい (kei)',                 kun:'かる (karu)'},
    {c:'広',r:'ひろ (hiro)',            m:'wide',           on:'こう (kou)',                 kun:'ひろ (hiro)'},
    {c:'近',r:'ちか (chika)',           m:'near',           on:'きん (kin)',                 kun:'ちか (chika)'},
    {c:'遠',r:'とお (too)',             m:'far',            on:'えん (en)',                  kun:'とお (too)'},
    {c:'低',r:'ひく (hiku)',            m:'low',            on:'てい (tei)',                 kun:'ひく (hiku)'},
    {c:'若',r:'わか (waka)',            m:'young',          on:'じゃく (jaku)',              kun:'わか (waka)'},
    {c:'暖',r:'あたた (atata)',         m:'warm',           on:'だん (dan)',                 kun:'あたた (atata)'},
    {c:'涼',r:'すず (suzu)',            m:'cool',           on:'りょう (ryou)',              kun:'すず (suzu)'},
    {c:'正',r:'ただ (tada)',            m:'correct',        on:'せい・しょう (sei / shou)', kun:'ただ (tada)'},
    {c:'丸',r:'まる (maru)',            m:'round',          on:'がん (gan)',                 kun:'まる (maru)'},
    {c:'便',r:'べん (ben)',             m:'convenient',     on:'べん・びん (ben / bin)',     kun:null},
  ],
  actions: [
    {c:'走',r:'はし (hashi)',           m:'run',            on:'そう (sou)',                 kun:'はし (hashi)'},
    {c:'動',r:'うご (ugo)',             m:'move',           on:'どう (dou)',                 kun:'うご (ugo)'},
    {c:'泳',r:'およ (oyo)',             m:'swim',           on:'えい (ei)',                  kun:'およ (oyo)'},
    {c:'歩',r:'ある (aru)',             m:'walk',           on:'ほ・ぶ (ho / bu)',           kun:'ある (aru)'},
    {c:'乗',r:'の (no)',                m:'ride',           on:'じょう (jou)',               kun:'の (no)'},
    {c:'起',r:'お (o)',                 m:'wake up / rise', on:'き (ki)',                    kun:'お (o)'},
    {c:'寝',r:'ね (ne)',                m:'sleep',          on:'しん (shin)',                kun:'ね (ne)'},
    {c:'使',r:'つか (tsuka)',           m:'use',            on:'し (shi)',                   kun:'つか (tsuka)'},
    {c:'作',r:'つく (tsuku)',           m:'make / create',  on:'さく・さ (saku / sa)',       kun:'つく (tsuku)'},
    {c:'開',r:'あ (a)',                 m:'open',           on:'かい (kai)',                 kun:'あ (a)'},
    {c:'閉',r:'し (shi)',               m:'close / shut',   on:'へい (hei)',                 kun:'し (shi)'},
    {c:'待',r:'ま (ma)',                m:'wait',           on:'たい (tai)',                 kun:'ま (ma)'},
    {c:'持',r:'も (mo)',                m:'hold / carry',   on:'じ (ji)',                    kun:'も (mo)'},
    {c:'急',r:'いそ (iso)',             m:'hurry',          on:'きゅう (kyuu)',              kun:'いそ (iso)'},
  ],
  learning: [
    {c:'働',r:'はたら (hatara)',        m:'work',           on:'どう (dou)',                 kun:'はたら (hatara)'},
    {c:'教',r:'おし (oshi)',            m:'teach',          on:'きょう (kyou)',              kun:'おし (oshi)'},
    {c:'習',r:'なら (nara)',            m:'learn',          on:'しゅう (shuu)',              kun:'なら (nara)'},
    {c:'貸',r:'か (ka)',                m:'lend',           on:'たい (tai)',                 kun:'か (ka)'},
    {c:'借',r:'か (ka)',                m:'borrow',         on:'しゃく (shaku)',             kun:'か (ka)'},
    {c:'練',r:'れん (ren)',             m:'practice',       on:'れん (ren)',                 kun:'ね (ne)'},
    {c:'試',r:'こころ (kokoro)',        m:'try / test',     on:'し (shi)',                   kun:'こころ (kokoro)'},
    {c:'研',r:'けん (ken)',             m:'research',       on:'けん (ken)',                 kun:null},
    {c:'究',r:'きゅう (kyuu)',          m:'investigate',    on:'きゅう (kyuu)',              kun:'きわ (kiwa)'},
    {c:'答',r:'こた (kota)',            m:'answer',         on:'とう (tou)',                 kun:'こた (kota)'},
    {c:'問',r:'と (to)',                m:'question',       on:'もん (mon)',                 kun:'と (to)'},
    {c:'質',r:'しつ (shitsu)',          m:'quality',        on:'しつ・しち (shitsu / shichi)',kun:null},
  ],
  daily: [
    {c:'物',r:'もの (mono)',            m:'thing',          on:'もつ・ぶつ (motsu / butsu)', kun:'もの (mono)'},
    {c:'事',r:'こと (koto)',            m:'matter / thing', on:'じ (ji)',                    kun:'こと (koto)'},
    {c:'旅',r:'たび (tabi)',            m:'travel',         on:'りょ (ryo)',                 kun:'たび (tabi)'},
    {c:'結',r:'むす (musu)',            m:'tie / result',   on:'けつ (ketsu)',               kun:'むす (musu)'},
    {c:'婚',r:'こん (kon)',             m:'marriage',       on:'こん (kon)',                 kun:null},
    {c:'服',r:'ふく (fuku)',            m:'clothes',        on:'ふく (fuku)',                kun:null},
    {c:'洗',r:'あら (ara)',             m:'wash',           on:'せん (sen)',                 kun:'あら (ara)'},
    {c:'送',r:'おく (oku)',             m:'send',           on:'そう (sou)',                 kun:'おく (oku)'},
    {c:'置',r:'お (o)',                 m:'place / put',    on:'ち (chi)',                   kun:'お (o)'},
    {c:'番',r:'ばん (ban)',             m:'number / turn',  on:'ばん (ban)',                 kun:null},
    {c:'銀',r:'ぎん (gin)',             m:'silver',         on:'ぎん (gin)',                 kun:null},
    {c:'度',r:'ど・たび (do / tabi)',   m:'degree / time',  on:'ど・たく (do / taku)',       kun:'たび (tabi)'},
  ],
  society: [
    {c:'会',r:'かい (kai)',             m:'meeting',        on:'かい (kai)',                 kun:'あ (a)'},
    {c:'社',r:'しゃ (sha)',             m:'company',        on:'しゃ (sha)',                 kun:'やしろ (yashiro)'},
    {c:'公',r:'こう (kou)',             m:'public',         on:'こう (kou)',                 kun:'おおやけ (ooyake)'},
    {c:'私',r:'わたし (watashi)',       m:'I / private',    on:'し (shi)',                   kun:'わたし (watashi)'},
    {c:'部',r:'ぶ (bu)',                m:'part / section', on:'ぶ (bu)',                    kun:null},
    {c:'計',r:'けい (kei)',             m:'measure / plan', on:'けい (kei)',                 kun:'はか (haka)'},
    {c:'注',r:'ちゅう (chuu)',          m:'pour / attention',on:'ちゅう (chuu)',             kun:'そそ (soso)'},
    {c:'意',r:'い (i)',                 m:'meaning / mind', on:'い (i)',                     kun:null},
    {c:'説',r:'せつ (setsu)',           m:'explain',        on:'せつ・ぜい (setsu / zei)',   kun:'と (to)'},
    {c:'台',r:'だい (dai)',             m:'platform / counter',on:'だい・たい (dai / tai)', kun:null},
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
let current    = { c: '海', r: 'うみ (umi)', m: 'sea / ocean', on: 'かい (kai)', kun: 'うみ (umi)' };
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
  return pool.length ? pool : ROWS.body;
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
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if (window.speechSynthesis) speechSynthesis.cancel();
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

  const done = () => {
    if (token !== speakToken) return;
    isSpeaking = false;
    btnPlay.classList.remove('btn--say-on');
    if (onDone) onDone();
  };

  // Speak the kana reading(s), not the kanji — a single kanji is ambiguous for TTS.
  const kanaReadings = current.r.split(' (')[0].split('・').map(k => k.trim());
  const kana = kanaReadings.join('、');

  if (window.speechSynthesis) {
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(kana);
    utt.lang = 'ja-JP';
    utt.rate = parseFloat(speechRate.value) || 1;
    const selVoice = getSelectedVoice();
    if (selVoice) utt.voice = selVoice;
    utt.onend   = done;
    utt.onerror = done;
    speechSynthesis.speak(utt);
  } else {
    const audio = new Audio('/audio/' + textToFilename(kana));
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
  setCookie('kanjin4_rows', checked);
}

function loadCheckboxes() {
  const val = getCookie('kanjin4_rows');
  if (!val) return;
  const saved = val.split(',');
  checkboxes.forEach(cb => { cb.checked = saved.includes(cb.dataset.row); });
}

checkboxes.forEach(cb => cb.addEventListener('change', saveCheckboxes));

// ─── Dropdown → cookie ────────────────────────────────────────────────────────
timerDuration.addEventListener('change', () => {
  setCookie('kanjin4_timer', timerDuration.value);
  if (isPlaying) startTimer();
});

function loadDropdown() {
  const val = getCookie('kanjin4_timer');
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

// ─── Init ────────────────────────────────────────────────────────────────────
loadVoiceSettings();
loadTimerBarSetting();
loadCheckboxes();
loadDropdown();
loadFont();
loadBold();
showChar(pickRandom(), false);
