// ─── Quiz – Hiragana Words data ───────────────────────────────────────────────
// 504 common Japanese words in hiragana
// {c: hiragana word, r: romaji, m: English meaning}
const ROWS = {

  // ── Body (51) ──────────────────────────────────────────────────────────────
  body: [
    {c:'あし',r:'ashi',m:'foot / leg'},
    {c:'あせ',r:'ase',m:'sweat'},
    {c:'うで',r:'ude',m:'arm'},
    {c:'かお',r:'kao',m:'face'},
    {c:'かた',r:'kata',m:'shoulder'},
    {c:'きず',r:'kizu',m:'wound'},
    {c:'くち',r:'kuchi',m:'mouth'},
    {c:'くび',r:'kubi',m:'neck'},
    {c:'こし',r:'koshi',m:'waist / hip'},
    {c:'こえ',r:'koe',m:'voice'},
    {c:'せい',r:'sei',m:'height'},
    {c:'せな',r:'sena',m:'back (body)'},
    {c:'ち',r:'chi',m:'blood'},
    {c:'つめ',r:'tsume',m:'nail / claw'},
    {c:'て',r:'te',m:'hand'},
    {c:'のど',r:'nodo',m:'throat'},
    {c:'は',r:'ha',m:'tooth'},
    {c:'はだ',r:'hada',m:'skin'},
    {c:'はな',r:'hana',m:'nose'},
    {c:'ひげ',r:'hige',m:'beard'},
    {c:'ひざ',r:'hiza',m:'knee'},
    {c:'ほね',r:'hone',m:'bone'},
    {c:'みみ',r:'mimi',m:'ear'},
    {c:'むね',r:'mune',m:'chest'},
    {c:'め',r:'me',m:'eye'},
    {c:'もも',r:'momo',m:'thigh'},
    {c:'ゆび',r:'yubi',m:'finger'},
    {c:'かか',r:'kaka',m:'heel'},
    {c:'あご',r:'ago',m:'chin'},
    {c:'はら',r:'hara',m:'belly'},
    {c:'のう',r:'nou',m:'brain'},
    {c:'すね',r:'sune',m:'shin'},
    {c:'ほお',r:'hoo',m:'cheek'},
    {c:'まゆ',r:'mayu',m:'eyebrow'},
    {c:'わき',r:'waki',m:'armpit'},
    {c:'すじ',r:'suji',m:'muscle / tendon'},
    {c:'こつ',r:'kotsu',m:'bone (colloq.)'},
    {c:'つば',r:'tsuba',m:'saliva'},
    {c:'へそ',r:'heso',m:'navel'},
    {c:'にき',r:'niki',m:'acne (niki·bi)'},
    {c:'しわ',r:'shiwa',m:'wrinkle'},
    {c:'ひふ',r:'hifu',m:'skin (formal)'},
    {c:'こぶ',r:'kobu',m:'bump / lump'},
    {c:'けつ',r:'ketsu',m:'buttocks'},
    {c:'もみ',r:'momi',m:'temple (head)'},
    {c:'うな',r:'una',m:'nape (una·ji)'},
    {c:'いき',r:'iki',m:'breath'},
    {c:'はい',r:'hai',m:'lung'},
    {c:'きも',r:'kimo',m:'liver / guts'},
    {c:'ちょ',r:'cho',m:'intestine'},
    {c:'じん',r:'jin',m:'kidney'},
  ],

  // ── Animals (48) ───────────────────────────────────────────────────────────
  animals: [
    {c:'いぬ',r:'inu',m:'dog'},
    {c:'うし',r:'ushi',m:'cow'},
    {c:'うま',r:'uma',m:'horse'},
    {c:'えび',r:'ebi',m:'shrimp'},
    {c:'かに',r:'kani',m:'crab'},
    {c:'かめ',r:'kame',m:'turtle'},
    {c:'くま',r:'kuma',m:'bear'},
    {c:'さめ',r:'same',m:'shark'},
    {c:'さる',r:'saru',m:'monkey'},
    {c:'しか',r:'shika',m:'deer'},
    {c:'たい',r:'tai',m:'sea bream'},
    {c:'ねこ',r:'neko',m:'cat'},
    {c:'ねず',r:'nezu',m:'mouse'},
    {c:'はち',r:'hachi',m:'bee'},
    {c:'はと',r:'hato',m:'pigeon'},
    {c:'ひつ',r:'hitsu',m:'sheep'},
    {c:'ぶた',r:'buta',m:'pig'},
    {c:'へび',r:'hebi',m:'snake'},
    {c:'むし',r:'mushi',m:'insect'},
    {c:'わし',r:'washi',m:'eagle'},
    {c:'かい',r:'kai',m:'shellfish'},
    {c:'とり',r:'tori',m:'bird'},
    {c:'あり',r:'ari',m:'ant'},
    {c:'いか',r:'ika',m:'squid'},
    {c:'うさ',r:'usa',m:'rabbit (usa·gi)'},
    {c:'かも',r:'kamo',m:'duck'},
    {c:'きじ',r:'kiji',m:'pheasant'},
    {c:'くじ',r:'kuji',m:'whale (kuji·ra)'},
    {c:'すめ',r:'sume',m:'sparrow (suzu·me)'},
    {c:'たこ',r:'tako',m:'octopus'},
    {c:'つる',r:'tsuru',m:'crane (bird)'},
    {c:'とか',r:'toka',m:'lizard (toka·ge)'},
    {c:'のみ',r:'nomi',m:'flea'},
    {c:'はえ',r:'hae',m:'fly (insect)'},
    {c:'ふな',r:'funa',m:'crucian carp'},
    {c:'ほた',r:'hota',m:'firefly (hota·ru)'},
    {c:'やぎ',r:'yagi',m:'goat'},
    {c:'りす',r:'risu',m:'squirrel'},
    {c:'ろば',r:'roba',m:'donkey'},
    {c:'わに',r:'wani',m:'crocodile'},
    {c:'がち',r:'gachi',m:'goose (ga·cho)'},
    {c:'ごり',r:'gori',m:'gorilla'},
    {c:'しし',r:'shishi',m:'lion (old)'},
    {c:'たぬ',r:'tanu',m:'tanuki / racoon'},
    {c:'ひよ',r:'hiyo',m:'chick (hiyo·ko)'},
    {c:'もぐ',r:'mogu',m:'mole (mogu·ra)'},
    {c:'いの',r:'ino',m:'wild boar'},
    {c:'かば',r:'kaba',m:'hippo'},
  ],

  // ── Food & Drink (46) ──────────────────────────────────────────────────────
  food: [
    {c:'いも',r:'imo',m:'potato'},
    {c:'うめ',r:'ume',m:'plum'},
    {c:'かき',r:'kaki',m:'persimmon'},
    {c:'かす',r:'kasu',m:'dregs / lees'},
    {c:'くり',r:'kuri',m:'chestnut'},
    {c:'こな',r:'kona',m:'flour / powder'},
    {c:'こめ',r:'kome',m:'rice (raw)'},
    {c:'さけ',r:'sake',m:'sake / alcohol'},
    {c:'しお',r:'shio',m:'salt'},
    {c:'しる',r:'shiru',m:'soup / broth'},
    {c:'すし',r:'sushi',m:'sushi'},
    {c:'たね',r:'tane',m:'seed'},
    {c:'ちゃ',r:'cha',m:'tea'},
    {c:'なし',r:'nashi',m:'pear'},
    {c:'にく',r:'niku',m:'meat'},
    {c:'のり',r:'nori',m:'seaweed'},
    {c:'まめ',r:'mame',m:'bean'},
    {c:'みそ',r:'miso',m:'miso'},
    {c:'もち',r:'mochi',m:'rice cake'},
    {c:'ゆず',r:'yuzu',m:'yuzu citrus'},
    {c:'あぶ',r:'abu',m:'oil (abu·ra)'},
    {c:'とう',r:'tou',m:'sugar (tou)'},
    {c:'むぎ',r:'mugi',m:'wheat'},
    {c:'あじ',r:'aji',m:'flavor / horse mackerel'},
    {c:'かぶ',r:'kabu',m:'turnip'},
    {c:'なす',r:'nasu',m:'eggplant'},
    {c:'だし',r:'dashi',m:'broth / stock'},
    {c:'にら',r:'nira',m:'chives'},
    {c:'ねぎ',r:'negi',m:'green onion'},
    {c:'はす',r:'hasu',m:'lotus root'},
    {c:'ふき',r:'fuki',m:'butterbur'},
    {c:'みか',r:'mika',m:'tangerine (mi·kan)'},
    {c:'もや',r:'moya',m:'bean sprout'},
    {c:'ゆば',r:'yuba',m:'tofu skin'},
    {c:'あん',r:'an',m:'red bean paste'},
    {c:'ごま',r:'goma',m:'sesame'},
    {c:'さば',r:'saba',m:'mackerel'},
    {c:'しそ',r:'shiso',m:'perilla leaf'},
    {c:'ぶり',r:'buri',m:'yellowtail'},
    {c:'まぐ',r:'magu',m:'tuna (magu·ro)'},
    {c:'やき',r:'yaki',m:'grilled'},
    {c:'わさ',r:'wasa',m:'wasabi'},
    {c:'うに',r:'uni',m:'sea urchin'},
    {c:'すだ',r:'suda',m:'sudachi citrus'},
    {c:'ひじ',r:'hiji',m:'hijiki seaweed'},
    {c:'ふぐ',r:'fugu',m:'pufferfish'},
  ],

  // ── Nature (42) ────────────────────────────────────────────────────────────
  nature: [
    {c:'あめ',r:'ame',m:'rain'},
    {c:'いし',r:'ishi',m:'stone'},
    {c:'うみ',r:'umi',m:'sea'},
    {c:'かぜ',r:'kaze',m:'wind'},
    {c:'かわ',r:'kawa',m:'river'},
    {c:'きり',r:'kiri',m:'fog'},
    {c:'くさ',r:'kusa',m:'grass'},
    {c:'くも',r:'kumo',m:'cloud'},
    {c:'けむ',r:'kemu',m:'smoke'},
    {c:'こおり',r:'koori',m:'ice'},
    {c:'しま',r:'shima',m:'island'},
    {c:'すな',r:'suna',m:'sand'},
    {c:'そら',r:'sora',m:'sky'},
    {c:'たに',r:'tani',m:'valley'},
    {c:'つき',r:'tsuki',m:'moon'},
    {c:'つち',r:'tsuchi',m:'soil / earth'},
    {c:'なみ',r:'nami',m:'wave'},
    {c:'にじ',r:'niji',m:'rainbow'},
    {c:'ひ',r:'hi',m:'fire / sun'},
    {c:'ほし',r:'hoshi',m:'star'},
    {c:'みず',r:'mizu',m:'water'},
    {c:'もり',r:'mori',m:'forest'},
    {c:'やま',r:'yama',m:'mountain'},
    {c:'ゆき',r:'yuki',m:'snow'},
    {c:'いけ',r:'ike',m:'pond'},
    {c:'おか',r:'oka',m:'hill'},
    {c:'たき',r:'taki',m:'waterfall'},
    {c:'ぬま',r:'numa',m:'swamp'},
    {c:'みさ',r:'misa',m:'cape (misa·ki)'},
    {c:'いわ',r:'iwa',m:'rock / boulder'},
    {c:'おり',r:'ori',m:'rain (downpour)'},
    {c:'きし',r:'kishi',m:'shore / bank'},
    {c:'こけ',r:'koke',m:'moss'},
    {c:'さく',r:'saku',m:'bloom'},
    {c:'しも',r:'shimo',m:'frost'},
    {c:'たけ',r:'take',m:'bamboo'},
    {c:'つゆ',r:'tsuyu',m:'rainy season'},
    {c:'なだ',r:'nada',m:'open sea'},
    {c:'はた',r:'hata',m:'field / farm'},
    {c:'ふち',r:'fuchi',m:'deep pool'},
    {c:'みね',r:'mine',m:'peak / summit'},
    {c:'やけ',r:'yake',m:'volcano (ya·ke)'},
    {c:'わら',r:'wara',m:'straw'},
    {c:'かげ',r:'kage',m:'shadow'},
    {c:'くぼ',r:'kubo',m:'hollow / dip'},
    {c:'さわ',r:'sawa',m:'marsh / creek'},
    {c:'しば',r:'shiba',m:'grass / lawn'},
    {c:'ほら',r:'hora',m:'cave'},
    {c:'えだ',r:'eda',m:'branch / twig'},
  ],

  // ── Family & People (51) ───────────────────────────────────────────────────
  people: [
    {c:'あに',r:'ani',m:'older brother'},
    {c:'あね',r:'ane',m:'older sister'},
    {c:'いえ',r:'ie',m:'house / family'},
    {c:'おじ',r:'oji',m:'uncle'},
    {c:'おば',r:'oba',m:'aunt'},
    {c:'おや',r:'oya',m:'parent'},
    {c:'おと',r:'oto',m:'younger bro'},
    {c:'かれ',r:'kare',m:'he / boyfriend'},
    {c:'きみ',r:'kimi',m:'you (casual)'},
    {c:'こ',r:'ko',m:'child'},
    {c:'ちち',r:'chichi',m:'father'},
    {c:'つま',r:'tsuma',m:'wife'},
    {c:'とも',r:'tomo',m:'friend'},
    {c:'はは',r:'haha',m:'mother'},
    {c:'ひめ',r:'hime',m:'princess'},
    {c:'ひと',r:'hito',m:'person'},
    {c:'まご',r:'mago',m:'grandchild'},
    {c:'むこ',r:'muko',m:'son-in-law'},
    {c:'むす',r:'musu',m:'son (musu·ko)'},
    {c:'よめ',r:'yome',m:'bride / wife'},
    {c:'わた',r:'wata',m:'I (wata·shi)'},
    {c:'おう',r:'ou',m:'king'},
    {c:'ぬし',r:'nushi',m:'master / owner'},
    {c:'たみ',r:'tami',m:'people / folk'},
    {c:'おに',r:'oni',m:'ogre / demon'},
    {c:'かみ',r:'kami',m:'god'},
    {c:'にん',r:'nin',m:'person (counter)'},
    {c:'だれ',r:'dare',m:'who'},
    {c:'あか',r:'aka',m:'baby / infant'},
    {c:'うば',r:'uba',m:'wet nurse'},
    {c:'おっ',r:'otto',m:'husband'},
    {c:'がき',r:'gaki',m:'brat / kid'},
    {c:'きぞ',r:'kizo',m:'noble'},
    {c:'けら',r:'kera',m:'servant'},
    {c:'しゅ',r:'shu',m:'master / lord'},
    {c:'そふ',r:'sofu',m:'grandfather'},
    {c:'そぼ',r:'sobo',m:'grandmother'},
    {c:'ちご',r:'chigo',m:'infant'},
    {c:'てき',r:'teki',m:'enemy'},
    {c:'なこ',r:'nako',m:'go-between'},
    {c:'はか',r:'haka',m:'doctor (old)'},
    {c:'びと',r:'bito',m:'person (suffix)'},
    {c:'ふう',r:'fuu',m:'husband & wife'},
    {c:'まじ',r:'maji',m:'witch / mage'},
    {c:'みこ',r:'miko',m:'shrine maiden'},
    {c:'やつ',r:'yatsu',m:'fellow / guy'},
    {c:'よう',r:'you',m:'infant (you·ji)'},
    {c:'りょ',r:'ryo',m:'companion'},
    {c:'しん',r:'shin',m:'retainer'},
    {c:'ぶし',r:'bushi',m:'warrior'},
    {c:'めし',r:'meshi',m:'servant (meshi·tsukai)'},
  ],

  // ── Home & Objects (57) ────────────────────────────────────────────────────
  home: [
    {c:'いす',r:'isu',m:'chair'},
    {c:'うち',r:'uchi',m:'home / inside'},
    {c:'えん',r:'en',m:'yen / circle'},
    {c:'おく',r:'oku',m:'interior'},
    {c:'かぎ',r:'kagi',m:'key'},
    {c:'かさ',r:'kasa',m:'umbrella'},
    {c:'かね',r:'kane',m:'money / bell'},
    {c:'くつ',r:'kutsu',m:'shoes'},
    {c:'ごみ',r:'gomi',m:'trash'},
    {c:'さら',r:'sara',m:'plate / dish'},
    {c:'たな',r:'tana',m:'shelf'},
    {c:'つぼ',r:'tsubo',m:'jar / pot'},
    {c:'てん',r:'ten',m:'point / dot'},
    {c:'なべ',r:'nabe',m:'pot / pan'},
    {c:'にわ',r:'niwa',m:'garden'},
    {c:'はこ',r:'hako',m:'box'},
    {c:'ふた',r:'futa',m:'lid / cover'},
    {c:'ふで',r:'fude',m:'brush (writing)'},
    {c:'へや',r:'heya',m:'room'},
    {c:'ほん',r:'hon',m:'book'},
    {c:'まど',r:'mado',m:'window'},
    {c:'もの',r:'mono',m:'thing / object'},
    {c:'やね',r:'yane',m:'roof'},
    {c:'ゆか',r:'yuka',m:'floor'},
    {c:'わん',r:'wan',m:'bowl'},
    {c:'かべ',r:'kabe',m:'wall'},
    {c:'すみ',r:'sumi',m:'corner / ink'},
    {c:'にも',r:'nimo',m:'luggage'},
    {c:'ふく',r:'fuku',m:'clothes'},
    {c:'あみ',r:'ami',m:'net'},
    {c:'いと',r:'ito',m:'thread'},
    {c:'おけ',r:'oke',m:'bucket / tub'},
    {c:'かま',r:'kama',m:'pot / kettle'},
    {c:'きぬ',r:'kinu',m:'silk cloth'},
    {c:'くぎ',r:'kugi',m:'nail (metal)'},
    {c:'こま',r:'koma',m:'spinning top'},
    {c:'ざる',r:'zaru',m:'bamboo basket'},
    {c:'すず',r:'suzu',m:'bell'},
    {c:'たる',r:'taru',m:'barrel'},
    {c:'ちり',r:'chiri',m:'dust'},
    {c:'つえ',r:'tsue',m:'cane / staff'},
    {c:'てぬ',r:'tenu',m:'hand towel'},
    {c:'とこ',r:'toko',m:'alcove / bed'},
    {c:'なわ',r:'nawa',m:'rope'},
    {c:'はり',r:'hari',m:'needle'},
    {c:'ひも',r:'himo',m:'string / cord'},
    {c:'ふえ',r:'fue',m:'flute'},
    {c:'ほう',r:'hou',m:'broom (hou·ki)'},
    {c:'まく',r:'maku',m:'curtain'},
    {c:'みの',r:'mino',m:'straw raincoat'},
    {c:'もん',r:'mon',m:'gate'},
    {c:'やり',r:'yari',m:'spear'},
    {c:'ろう',r:'rou',m:'candle (rou·soku)'},
    {c:'わな',r:'wana',m:'trap'},
    {c:'がら',r:'gara',m:'pattern / design'},
    {c:'ぞう',r:'zou',m:'statue / image'},
    {c:'ぼう',r:'bou',m:'stick / pole'},
  ],

  // ── Actions & Verbs (44) ───────────────────────────────────────────────────
  actions: [
    {c:'あう',r:'au',m:'to meet'},
    {c:'あく',r:'aku',m:'to open'},
    {c:'いく',r:'iku',m:'to go'},
    {c:'うつ',r:'utsu',m:'to hit'},
    {c:'おす',r:'osu',m:'to push'},
    {c:'かう',r:'kau',m:'to buy'},
    {c:'きく',r:'kiku',m:'to listen'},
    {c:'くる',r:'kuru',m:'to come'},
    {c:'けす',r:'kesu',m:'to erase'},
    {c:'こす',r:'kosu',m:'to cross'},
    {c:'さす',r:'sasu',m:'to point'},
    {c:'しぬ',r:'shinu',m:'to die'},
    {c:'すう',r:'suu',m:'to inhale'},
    {c:'たつ',r:'tatsu',m:'to stand'},
    {c:'つく',r:'tsuku',m:'to arrive'},
    {c:'でる',r:'deru',m:'to exit'},
    {c:'とぶ',r:'tobu',m:'to fly / jump'},
    {c:'なく',r:'naku',m:'to cry'},
    {c:'にる',r:'niru',m:'to boil'},
    {c:'ぬう',r:'nuu',m:'to sew'},
    {c:'ねる',r:'neru',m:'to sleep'},
    {c:'のむ',r:'nomu',m:'to drink'},
    {c:'ひく',r:'hiku',m:'to pull'},
    {c:'ふる',r:'furu',m:'to fall (rain)'},
    {c:'まつ',r:'matsu',m:'to wait'},
    {c:'みる',r:'miru',m:'to see'},
    {c:'もつ',r:'motsu',m:'to hold'},
    {c:'やく',r:'yaku',m:'to grill'},
    {c:'よむ',r:'yomu',m:'to read'},
    {c:'あげ',r:'age',m:'to raise / give'},
    {c:'あら',r:'ara',m:'to wash (ara·u)'},
    {c:'いれ',r:'ire',m:'to put in'},
    {c:'うる',r:'uru',m:'to sell'},
    {c:'かく',r:'kaku',m:'to write'},
    {c:'かつ',r:'katsu',m:'to win'},
    {c:'きる',r:'kiru',m:'to cut / wear'},
    {c:'くう',r:'kuu',m:'to eat (casual)'},
    {c:'する',r:'suru',m:'to do'},
    {c:'だす',r:'dasu',m:'to take out'},
    {c:'とる',r:'toru',m:'to take'},
    {c:'なお',r:'nao',m:'to fix (nao·su)'},
    {c:'にげ',r:'nige',m:'to escape'},
    {c:'ぬく',r:'nuku',m:'to pull out'},
    {c:'のる',r:'noru',m:'to ride'},
    {c:'ほる',r:'horu',m:'to dig'},
    {c:'まぜ',r:'maze',m:'to mix'},
    {c:'むく',r:'muku',m:'to peel'},
    {c:'めく',r:'meku',m:'to turn (page)'},
    {c:'やめ',r:'yame',m:'to stop / quit'},
    {c:'よぶ',r:'yobu',m:'to call'},
    {c:'わく',r:'waku',m:'to boil'},
    {c:'わる',r:'waru',m:'to break / split'},
  ],

  // ── Feelings & Adjectives (54) ─────────────────────────────────────────────
  feelings: [
    {c:'あい',r:'ai',m:'love'},
    {c:'いや',r:'iya',m:'unpleasant'},
    {c:'うそ',r:'uso',m:'lie'},
    {c:'かな',r:'kana',m:'sad (kana·shii)'},
    {c:'きつ',r:'kitsu',m:'tough / strict'},
    {c:'こわ',r:'kowa',m:'scary'},
    {c:'すき',r:'suki',m:'like / love'},
    {c:'ねつ',r:'netsu',m:'fever / passion'},
    {c:'はず',r:'hazu',m:'shame'},
    {c:'ゆめ',r:'yume',m:'dream'},
    {c:'らく',r:'raku',m:'comfort / ease'},
    {c:'いい',r:'ii',m:'good'},
    {c:'おお',r:'oo',m:'big / great'},
    {c:'こい',r:'koi',m:'romantic love'},
    {c:'にが',r:'niga',m:'bitter'},
    {c:'ひま',r:'hima',m:'free time'},
    {c:'むり',r:'muri',m:'impossible'},
    {c:'げき',r:'geki',m:'intense'},
    {c:'じみ',r:'jimi',m:'plain / modest'},
    {c:'だめ',r:'dame',m:'no good'},
    {c:'へん',r:'hen',m:'strange'},
    {c:'まし',r:'mashi',m:'better'},
    {c:'りこ',r:'riko',m:'clever'},
    {c:'あつ',r:'atsu',m:'hot'},
    {c:'さむ',r:'samu',m:'cold'},
    {c:'かる',r:'karu',m:'light (weight)'},
    {c:'おも',r:'omo',m:'heavy'},
    {c:'はや',r:'haya',m:'fast / early'},
    {c:'おそ',r:'oso',m:'slow / late'},
    {c:'えら',r:'era',m:'great / admirable'},
    {c:'きび',r:'kibi',m:'strict / severe'},
    {c:'くら',r:'kura',m:'dark'},
    {c:'けち',r:'kechi',m:'stingy'},
    {c:'しず',r:'shizu',m:'quiet / calm'},
    {c:'せま',r:'sema',m:'narrow'},
    {c:'たか',r:'taka',m:'high / expensive'},
    {c:'つよ',r:'tsuyo',m:'strong'},
    {c:'とい',r:'toi',m:'far / distant'},
    {c:'ない',r:'nai',m:'none / nothing'},
    {c:'にぶ',r:'nibu',m:'dull / slow'},
    {c:'ぬる',r:'nuru',m:'lukewarm'},
    {c:'ねむ',r:'nemu',m:'sleepy'},
    {c:'のろ',r:'noro',m:'slow / sluggish'},
    {c:'ひど',r:'hido',m:'terrible / cruel'},
    {c:'ふか',r:'fuka',m:'deep'},
    {c:'ほそ',r:'hoso',m:'thin / slender'},
    {c:'まる',r:'maru',m:'round'},
    {c:'みじ',r:'miji',m:'short (miji·kai)'},
    {c:'やわ',r:'yawa',m:'soft'},
    {c:'よわ',r:'yowa',m:'weak'},
    {c:'るす',r:'rusu',m:'absent'},
    {c:'わか',r:'waka',m:'young'},
    {c:'ずる',r:'zuru',m:'sly / cunning'},
    {c:'うす',r:'usu',m:'thin / pale'},
  ],

  // ── Time & Days (49) ───────────────────────────────────────────────────────
  time: [
    {c:'あさ',r:'asa',m:'morning'},
    {c:'あす',r:'asu',m:'tomorrow'},
    {c:'いま',r:'ima',m:'now'},
    {c:'きの',r:'kino',m:'yesterday'},
    {c:'きょ',r:'kyo',m:'today'},
    {c:'けさ',r:'kesa',m:'this morning'},
    {c:'すぐ',r:'sugu',m:'immediately'},
    {c:'とき',r:'toki',m:'time / moment'},
    {c:'なつ',r:'natsu',m:'summer'},
    {c:'はる',r:'haru',m:'spring'},
    {c:'ひる',r:'hiru',m:'noon / daytime'},
    {c:'ふゆ',r:'fuyu',m:'winter'},
    {c:'まえ',r:'mae',m:'before / front'},
    {c:'よる',r:'yoru',m:'night'},
    {c:'あき',r:'aki',m:'autumn'},
    {c:'あと',r:'ato',m:'after / later'},
    {c:'ごご',r:'gogo',m:'afternoon'},
    {c:'ごぜ',r:'goze',m:'forenoon (AM)'},
    {c:'たび',r:'tabi',m:'occasion'},
    {c:'つぎ',r:'tsugi',m:'next'},
    {c:'にち',r:'nichi',m:'day / sun'},
    {c:'まい',r:'mai',m:'every (prefix)'},
    {c:'むか',r:'muka',m:'long ago'},
    {c:'やす',r:'yasu',m:'holiday'},
    {c:'ゆう',r:'yuu',m:'evening'},
    {c:'れき',r:'reki',m:'history'},
    {c:'わり',r:'wari',m:'proportion'},
    {c:'かこ',r:'kako',m:'past'},
    {c:'みら',r:'mira',m:'future (mira·i)'},
    {c:'げつ',r:'getsu',m:'Monday / month'},
    {c:'かよ',r:'kayo',m:'Tuesday'},
    {c:'すい',r:'sui',m:'Wednesday'},
    {c:'もく',r:'moku',m:'Thursday'},
    {c:'きん',r:'kin',m:'Friday'},
    {c:'どよ',r:'doyo',m:'Saturday'},
    {c:'ねん',r:'nen',m:'year'},
    {c:'しき',r:'shiki',m:'four seasons'},
    {c:'つい',r:'tsui',m:'first day'},
    {c:'たま',r:'tama',m:'sometimes'},
    {c:'じき',r:'jiki',m:'soon / period'},
    {c:'まだ',r:'mada',m:'not yet / still'},
    {c:'もう',r:'mou',m:'already'},
    {c:'やが',r:'yaga',m:'soon (yaga·te)'},
    {c:'つね',r:'tsune',m:'always / usual'},
    {c:'のち',r:'nochi',m:'later / after'},
    {c:'ひび',r:'hibi',m:'daily / every day'},
    {c:'まも',r:'mamo',m:'soon (mamo·naku)'},
    {c:'よあ',r:'yoa',m:'dawn (yo·ake)'},
    {c:'たそ',r:'taso',m:'twilight'},
  ],

  // ── Place & Direction (47) ─────────────────────────────────────────────────
  place: [
    {c:'うえ',r:'ue',m:'above / up'},
    {c:'きた',r:'kita',m:'north'},
    {c:'くに',r:'kuni',m:'country'},
    {c:'こう',r:'kou',m:'public'},
    {c:'さと',r:'sato',m:'village'},
    {c:'した',r:'shita',m:'below / under'},
    {c:'そこ',r:'soko',m:'there / bottom'},
    {c:'そと',r:'soto',m:'outside'},
    {c:'ちか',r:'chika',m:'near / underground'},
    {c:'どこ',r:'doko',m:'where'},
    {c:'なか',r:'naka',m:'inside / middle'},
    {c:'にし',r:'nishi',m:'west'},
    {c:'はし',r:'hashi',m:'bridge / edge'},
    {c:'ひだ',r:'hida',m:'left (hida·ri)'},
    {c:'まち',r:'machi',m:'town / city'},
    {c:'みぎ',r:'migi',m:'right'},
    {c:'みち',r:'michi',m:'road / path'},
    {c:'みな',r:'mina',m:'south (mina·mi)'},
    {c:'もと',r:'moto',m:'origin / base'},
    {c:'よこ',r:'yoko',m:'side / beside'},
    {c:'えき',r:'eki',m:'station'},
    {c:'おき',r:'oki',m:'open sea'},
    {c:'かど',r:'kado',m:'corner'},
    {c:'さか',r:'saka',m:'slope / hill'},
    {c:'しろ',r:'shiro',m:'castle'},
    {c:'てら',r:'tera',m:'temple'},
    {c:'ひが',r:'higa',m:'east (higa·shi)'},
    {c:'みせ',r:'mise',m:'shop / store'},
    {c:'あた',r:'ata',m:'area (ata·ri)'},
    {c:'いり',r:'iri',m:'entrance'},
    {c:'うら',r:'ura',m:'back side'},
    {c:'きわ',r:'kiwa',m:'edge / brink'},
    {c:'さき',r:'saki',m:'ahead / tip'},
    {c:'せき',r:'seki',m:'seat'},
    {c:'ちく',r:'chiku',m:'district / area'},
    {c:'てま',r:'tema',m:'front of temple'},
    {c:'はば',r:'haba',m:'width'},
    {c:'ふも',r:'fumo',m:'foot of mountain'},
    {c:'へい',r:'hei',m:'wall / fence'},
    {c:'ほり',r:'hori',m:'moat'},
    {c:'まわ',r:'mawa',m:'surroundings'},
    {c:'みや',r:'miya',m:'shrine / palace'},
    {c:'むら',r:'mura',m:'village'},
    {c:'やど',r:'yado',m:'inn / lodging'},
    {c:'りく',r:'riku',m:'land'},
    {c:'ごう',r:'gou',m:'district (admin)'},
    {c:'はま',r:'hama',m:'beach / shore'},
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
let current    = { c: 'いぬ', r: 'inu', m: 'dog' };
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
}

function revealCaption() {
  captionRomanji.textContent = current.r;
  captionMeaning.innerHTML =
    `<strong>${current.c}</strong> — <em>${current.r}</em> — ${current.m}`;
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
  setCookie('quiz_hira_rows', checked);
}

function loadCheckboxes() {
  const val = getCookie('quiz_hira_rows');
  if (!val) return;
  const saved = val.split(',');
  checkboxes.forEach(cb => { cb.checked = saved.includes(cb.dataset.row); });
}

checkboxes.forEach(cb => cb.addEventListener('change', saveCheckboxes));

// ─── Dropdown → cookie ────────────────────────────────────────────────────────
timerDuration.addEventListener('change', () => {
  setCookie('quiz_hira_timer', timerDuration.value);
  if (isPlaying) startTimer();
});

function loadDropdown() {
  const val = getCookie('quiz_hira_timer');
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
