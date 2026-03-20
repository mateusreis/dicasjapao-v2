// ─── Quiz – Katakana Words data ──────────────────────────────────────────────
// 400 common Japanese words in katakana
// {c: katakana word, r: romaji, m: English meaning}
const ROWS = {

  food: [
    {"c":"パン","r":"pan","m":"bread"}, {"c":"ミルク","r":"miruku","m":"milk"},
    {"c":"サラダ","r":"sarada","m":"salad"}, {"c":"パスタ","r":"pasuta","m":"pasta"},
    {"c":"ピザ","r":"piza","m":"pizza"}, {"c":"スープ","r":"sūpu","m":"soup"},
    {"c":"チョコ","r":"choko","m":"chocolate"}, {"c":"ケーキ","r":"kēki","m":"cake"},
    {"c":"ステーキ","r":"sutēki","m":"steak"}, {"c":"ハム","r":"hamu","m":"ham"},
    {"c":"ソース","r":"sōsu","m":"sauce"}, {"c":"コーラ","r":"kōra","m":"cola"},
    {"c":"コーヒー","r":"kōhī","m":"coffee"}, {"c":"ココア","r":"kokoa","m":"cocoa"},
    {"c":"ビール","r":"bīru","m":"beer"}, {"c":"ワイン","r":"wain","m":"wine"},
    {"c":"ジュース","r":"jūsu","m":"juice"}, {"c":"ソーダ","r":"sōda","m":"soda"},
    {"c":"バター","r":"batā","m":"butter"}, {"c":"チーズ","r":"chīzu","m":"cheese"},
    {"c":"カレー","r":"karē","m":"curry"}, {"c":"ライス","r":"raisu","m":"rice"},
    {"c":"ドーナツ","r":"dōnatsu","m":"donut"}, {"c":"ゼリー","r":"zerī","m":"jelly"},
    {"c":"サンド","r":"sando","m":"sandwich"}, {"c":"ポテト","r":"poteto","m":"potato"},
    {"c":"レモン","r":"remon","m":"lemon"}, {"c":"バナナ","r":"banana","m":"banana"},
    {"c":"トマト","r":"tomato","m":"tomato"}, {"c":"ジャム","r":"jamu","m":"jam"},
    {"c":"アイス","r":"aisu","m":"ice cream"}, {"c":"ガム","r":"gamu","m":"gum"},
    {"c":"キャンディ","r":"kyandi","m":"candy"}, {"c":"マンゴー","r":"mangō","m":"mango"},
    {"c":"キウイ","r":"kiui","m":"kiwi"}, {"c":"ソーセージ","r":"sōsēji","m":"sausage"},
    {"c":"ヨーグルト","r":"yōguruto","m":"yogurt"}, {"c":"マヨネーズ","r":"mayonēzu","m":"mayo"},
    {"c":"ケチャップ","r":"kechappu","m":"ketchup"}, {"c":"デザート","r":"dezāto","m":"dessert"},
    {"c":"ランチ","r":"ranchi","m":"lunch"}, {"c":"ディナー","r":"dinā","m":"dinner"},
    {"c":"メニュー","r":"menyū","m":"menu"}, {"c":"セルフ","r":"serufu","m":"self-service"},
    {"c":"バイキング","r":"baikingu","m":"buffet"}, {"c":"ガストロ","r":"gasutoro","m":"gastro"},
    {"c":"ミント","r":"minto","m":"mint"}, {"c":"バニラ","r":"banira","m":"vanilla"},
    {"c":"シナモン","r":"shinamon","m":"cinnamon"}, {"c":"コショウ","r":"koshō","m":"pepper"},
    {"c":"ナッツ","r":"nattsu","m":"nuts"}, {"c":"クッキー","r":"kukkī","m":"cookie"},
    {"c":"パイ","r":"pai","m":"pie"}, {"c":"タルト","r":"taruto","m":"tart"},
    {"c":"グリル","r":"guriru","m":"grill"}, {"c":"フライ","r":"furai","m":"fry"},
    {"c":"カツ","r":"katsu","m":"cutlet"}, {"c":"ソテー","r":"sotē","m":"sauté"},
    {"c":"ピラフ","r":"pirafu","m":"pilaf"}, {"c":"オムレツ","r":"omuretsu","m":"omelette"}
  ],
  tech: [
    {"c":"テレビ","r":"terebi","m":"TV"}, {"c":"スマホ","r":"sumaho","m":"smartphone"},
    {"c":"パソコン","r":"pasokon","m":"PC"}, {"c":"アプリ","r":"apuri","m":"app"},
    {"c":"カメラ","r":"kamera","m":"camera"}, {"c":"ビデオ","r":"bideo","m":"video"},
    {"c":"ラジオ","r":"rajio","m":"radio"}, {"c":"ネット","r":"netto","m":"internet"},
    {"c":"データ","r":"dēta","m":"data"}, {"c":"ソフト","r":"sofuto","m":"software"},
    {"c":"ハード","r":"hādo","m":"hardware"}, {"c":"マウス","r":"mausu","m":"mouse"},
    {"c":"メール","r":"mēru","m":"email"}, {"c":"ウェブ","r":"uebu","m":"web"},
    {"c":"サイト","r":"saito","m":"site"}, {"c":"ブログ","r":"burogu","m":"blog"},
    {"c":"デジタル","r":"dejitaru","m":"digital"}, {"c":"ボタン","r":"botan","m":"button"},
    {"c":"リンク","r":"rinku","m":"link"}, {"c":"コード","r":"kōdo","m":"code"},
    {"c":"キーボード","r":"kībōdo","m":"keyboard"}, {"c":"モニター","r":"monitā","m":"monitor"},
    {"c":"ソフト","r":"sofuto","m":"soft"}, {"c":"ハード","r":"hādo","m":"hard"},
    {"c":"ノイズ","r":"noizu","m":"noise"}, {"c":"マイク","r":"maiku","m":"mic"},
    {"c":"スピーカー","r":"supīkā","m":"speaker"}, {"c":"リモコン","r":"rimokon","m":"remote"},
    {"c":"センサー","r":"sensā","m":"sensor"}, {"c":"チップ","r":"chippu","m":"chip"},
    {"c":"ロボット","r":"robotto","m":"robot"}, {"c":"エンジン","r":"enjin","m":"engine"},
    {"c":"マシン","r":"mashin","m":"machine"}, {"c":"パワー","r":"pawā","m":"power"},
    {"c":"ライト","r":"raito","m":"light"}, {"c":"モード","r":"mōdo","m":"mode"},
    {"c":"エラー","r":"erā","m":"error"}, {"c":"バグ","r":"bagu","m":"bug"},
    {"c":"ログ","r":"rogu","m":"log"}, {"c":"パスワード","r":"pasuwādo","m":"password"},
    {"c":"ユーザー","r":"yūzā","m":"user"}, {"c":"アイコン","r":"aikon","m":"icon"},
    {"c":"ファイル","r":"fairu","m":"file"}, {"c":"フォルダ","r":"foruda","m":"folder"},
    {"c":"ツール","r":"tsūru","m":"tool"}, {"c":"コピー","r":"kopī","m":"copy"},
    {"c":"カット","r":"katto","m":"cut"}, {"c":"ペースト","r":"pēsuto","m":"paste"},
    {"c":"タブ","r":"tabu","m":"tab"}, {"c":"ウィンドウ","r":"windō","m":"window"},
    {"c":"チャット","r":"chatto","m":"chat"}, {"c":"ゲーム","r":"gēmu","m":"game"},
    {"c":"ムービー","r":"mūbī","m":"movie"}, {"c":"オーディオ","r":"ōdio","m":"audio"},
    {"c":"グラフ","r":"gurafu","m":"graph"}, {"c":"リスト","r":"risuto","m":"list"},
    {"c":"テスト","r":"tesuto","m":"test"}, {"c":"プログラ","r":"purogura","m":"program"},
    {"c":"システム","r":"shisutemu","m":"system"}, {"c":"モバイル","r":"mobairu","m":"mobile"}
  ],
  animals: [
    {"c":"イヌ","r":"inu","m":"dog"}, {"c":"ネコ","r":"neko","m":"cat"},
    {"c":"パンダ","r":"panda","m":"panda"}, {"c":"コアラ","r":"koara","m":"koala"},
    {"c":"ライオン","r":"raion","m":"lion"}, {"c":"トラ","r":"tora","m":"tiger"},
    {"c":"ゴリラ","r":"gorira","m":"gorilla"}, {"c":"ゾウ","r":"zō","m":"elephant"},
    {"c":"キリン","r":"kirin","m":"giraffe"}, {"c":"シマウマ","r":"shimauma","m":"zebra"},
    {"c":"ウサギ","r":"usagi","m":"rabbit"}, {"c":"ネズミ","r":"nezumi","m":"mouse"},
    {"c":"クマ","r":"kuma","m":"bear"}, {"c":"ペンギン","r":"pengin","m":"penguin"},
    {"c":"サル","r":"saru","m":"monkey"}, {"c":"カエル","r":"kaeru","m":"frog"},
    {"c":"ヘビ","r":"hebi","m":"snake"}, {"c":"ラクダ","r":"rakuda","m":"camel"},
    {"c":"カバ","r":"kaba","m":"hippo"}, {"c":"リス","r":"risu","m":"squirrel"},
    {"c":"サイ","r":"sai","m":"rhino"}, {"c":"シカ","r":"shika","m":"deer"},
    {"c":"キツネ","r":"kitsune","m":"fox"}, {"c":"タヌキ","r":"tanuki","m":"raccoon dog"},
    {"c":"ハムスター","r":"hamusutā","m":"hamster"}, {"c":"モルモット","r":"morumotto","m":"guinea pig"},
    {"c":"ワニ","r":"wani","m":"crocodile"}, {"c":"カメ","r":"kame","m":"turtle"},
    {"c":"サメ","r":"same","m":"shark"}, {"c":"クジラ","r":"kujira","m":"whale"},
    {"c":"イルカ","r":"iruka","m":"dolphin"}, {"c":"アザラシ","r":"azarashi","m":"seal"},
    {"c":"ペンギン","r":"pengin","m":"penguin"}, {"c":"フラミンゴ","r":"furamingo","m":"flamingo"},
    {"c":"オウム","r":"oumu","m":"parrot"}, {"c":"タカ","r":"taka","m":"hawk"},
    {"c":"ワシ","r":"washi","m":"eagle"}, {"c":"スズメ","r":"suzume","m":"sparrow"},
    {"c":"カラス","r":"karasu","m":"crow"}, {"c":"アヒル","r":"ahiru","m":"duck"},
    {"c":"ニワトリ","r":"niwatori","m":"chicken"}, {"c":"ヒツジ","r":"hitsuji","m":"sheep"},
    {"c":"ヤギ","r":"yagi","m":"goat"}, {"c":"ウマ","r":"uma","m":"horse"},
    {"c":"ウシ","r":"ushi","m":"cow"}, {"c":"ブタ","r":"buta","m":"pig"},
    {"c":"ロバ","r":"roba","m":"donkey"}, {"c":"アリ","r":"ari","m":"ant"},
    {"c":"ハチ","r":"hachi","m":"bee"}, {"c":"チョウ","r":"chou","m":"butterfly"},
    {"c":"クモ","r":"kumo","m":"spider"}, {"c":"ムシ","r":"mushi","m":"insect"},
    {"c":"カニ","r":"kani","m":"crab"}, {"c":"エビ","r":"ebi","m":"shrimp"},
    {"c":"イカ","r":"ika","m":"squid"}, {"c":"タコ","r":"tako","m":"octopus"},
    {"c":"サカナ","r":"sakana","m":"fish"}, {"c":"メダカ","r":"medaka","m":"killifish"},
    {"c":"マグロ","r":"maguro","m":"tuna"}, {"c":"サーモン","r":"sāmon","m":"salmon"}
  ],
  home: [
    {"c":"ドア","r":"doa","m":"door"}, {"c":"ベッド","r":"beddo","m":"bed"},
    {"c":"ソファ","r":"sofā","m":"sofa"}, {"c":"テーブル","r":"tēburu","m":"table"},
    {"c":"ライト","r":"raito","m":"light"}, {"c":"デスク","r":"desuku","m":"desk"},
    {"c":"カーテン","r":"kāten","m":"curtain"}, {"c":"トイレ","r":"toire","m":"toilet"},
    {"c":"シャワー","r":"shawā","m":"shower"}, {"c":"タオル","r":"taoru","m":"towel"},
    {"c":"カップ","r":"kappu","m":"cup"}, {"c":"グラス","r":"gurasu","m":"glass"},
    {"c":"ナイフ","r":"naifu","m":"knife"}, {"c":"フォーク","r":"fōku","m":"fork"},
    {"c":"スプーン","r":"supūn","m":"spoon"}, {"c":"プレート","r":"purēto","m":"plate"},
    {"c":"キッチン","r":"kicchin","m":"kitchen"}, {"c":"レンジ","r":"renji","m":"oven/range"},
    {"c":"トースター","r":"tōsutā","m":"toaster"}, {"c":"ポット","r":"potto","m":"pot/kettle"},
    {"c":"ボトル","r":"botoru","m":"bottle"}, {"c":"ボックス","r":"bokkusu","m":"box"},
    {"c":"ケース","r":"kēsu","m":"case"}, {"c":"バッグ","r":"baggu","m":"bag"},
    {"c":"カギ","r":"kagi","m":"key"}, {"c":"フック","r":"fukku","m":"hook"},
    {"c":"ミラー","r":"mirā","m":"mirror"}, {"c":"マット","r":"matto","m":"mat"},
    {"c":"ラグ","r":"ragu","m":"rug"}, {"c":"クッション","r":"kusshon","m":"cushion"},
    {"c":"シーツ","r":"shītsu","m":"sheet"}, {"c":"ピアノ","r":"piano","m":"piano"},
    {"c":"ギター","r":"gitā","m":"guitar"}, {"c":"ドラム","r":"doramu","m":"drums"},
    {"c":"ファン","r":"fan","m":"fan (ceiling)"}, {"c":"ストーブ","r":"sutōbu","m":"stove/heater"},
    {"c":"エアコン","r":"eakon","m":"AC"}, {"c":"スイッチ","r":"suicchi","m":"switch"},
    {"c":"コンセント","r":"konsento","m":"outlet"}, {"c":"コード","r":"kōdo","m":"cord"},
    {"c":"トレイ","r":"torei","m":"tray"}, {"c":"バケツ","r":"baketsu","m":"bucket"},
    {"c":"ブラシ","r":"burashi","m":"brush"}, {"c":"ソープ","r":"sōpu","m":"soap"},
    {"c":"バスタブ","r":"basutabu","m":"bathtub"}, {"c":"ラック","r":"rakku","m":"rack"},
    {"c":"パイプ","r":"paipu","m":"pipe"}, {"c":"ハンマー","r":"hanmā","m":"hammer"},
    {"c":"ドライバ","r":"doraiba","m":"driver"}, {"c":"ペンキ","r":"penki","m":"paint"},
    {"c":"インク","r":"inku","m":"ink"}, {"c":"シール","r":"shīru","m":"sticker/seal"},
    {"c":"テープ","r":"tēpu","m":"tape"}, {"c":"ノート","r":"nōto","m":"notebook"},
    {"c":"ペン","r":"pen","m":"pen"}, {"c":"マーカー","r":"mākā","m":"marker"},
    {"c":"デスク","r":"desuku","m":"desk"}, {"c":"チェア","r":"chea","m":"chair"},
    {"c":"スタンド","r":"sutando","m":"stand"}, {"c":"ブック","r":"bukku","m":"book"}
  ],
  body_fashion: [
    {"c":"ヒザ","r":"hiza","m":"knee"}, {"c":"ヒジ","r":"hiji","m":"elbow"},
    {"c":"ウエスト","r":"uesuto","m":"waist"}, {"c":"バスト","r":"basuto","m":"bust"},
    {"c":"ヒップ","r":"hippu","m":"hip"}, {"c":"ネイル","r":"neiru","m":"nail"},
    {"c":"メイク","r":"meiku","m":"makeup"}, {"c":"シャツ","r":"shatsu","m":"shirt"},
    {"c":"パンツ","r":"pantsu","m":"pants"}, {"c":"ドレス","r":"doresu","m":"dress"},
    {"c":"コート","r":"kōto","m":"coat"}, {"c":"バッグ","r":"baggu","m":"bag"},
    {"c":"ベルト","r":"beruto","m":"belt"}, {"c":"ネクタイ","r":"nekutai","m":"tie"},
    {"c":"スーツ","r":"sūtsu","m":"suit"}, {"c":"ジーンズ","r":"jīnzu","m":"jeans"},
    {"c":"スカート","r":"sukāto","m":"skirt"}, {"c":"セーター","r":"sētā","m":"sweater"},
    {"c":"ベスト","r":"besuto","m":"vest"}, {"c":"ソックス","r":"sokkusu","m":"socks"},
    {"c":"ブーツ","r":"būtsu","m":"boots"}, {"c":"サンダル","r":"sandaru","m":"sandals"},
    {"c":"ヒール","r":"hīru","m":"heels"}, {"c":"ピアス","r":"piasu","m":"pierce"},
    {"c":"リング","r":"ringu","m":"ring"}, {"c":"マスク","r":"masuku","m":"mask"},
    {"c":"メガネ","r":"megane","m":"glasses"}, {"c":"リボン","r":"ribon","m":"ribbon"},
    {"c":"ボタン","r":"botan","m":"button"}, {"c":"ジッパー","r":"jippā","m":"zipper"},
    {"c":"サイズ","r":"saizu","m":"size"}, {"c":"モデル","r":"moderu","m":"model"},
    {"c":"センス","r":"sensu","m":"sense/style"}, {"c":"モード","r":"mōdo","m":"mode/fashion"},
    {"c":"レトロ","r":"retoro","m":"retro"}, {"c":"モダン","r":"modan","m":"modern"},
    {"c":"カラー","r":"karā","m":"color"}, {"c":"パーマ","r":"pāma","m":"perm"},
    {"c":"カット","r":"katto","m":"haircut"}, {"c":"セット","r":"setto","m":"set"},
    {"c":"シャンプー","r":"shanpū","m":"shampoo"}, {"c":"リンス","r":"rinsu","m":"rinse"},
    {"c":"クリーム","r":"kurīmu","m":"cream"}, {"c":"ローション","r":"rōshon","m":"lotion"},
    {"c":"オイル","r":"oiru","m":"oil"}, {"c":"パウダー","r":"paudā","m":"powder"},
    {"c":"リップ","r":"rippu","m":"lip"}, {"c":"チーク","r":"chīku","m":"cheek/blush"},
    {"c":"シャドウ","r":"shadō","m":"shadow"}, {"c":"ライン","r":"rain","m":"liner"},
    {"c":"ケア","r":"kea","m":"care"}, {"c":"エステ","r":"esute","m":"esthe"},
    {"c":"ダイエット","r":"daietto","m":"diet"}, {"c":"スリム","r":"surimu","m":"slim"},
    {"c":"マッチョ","r":"maccho","m":"macho"}, {"c":"ハート","r":"hāto","m":"heart"},
    {"c":"ボーン","r":"bōn","m":"bone"}, {"c":"マッスル","r":"massuru","m":"muscle"},
    {"c":"スキン","r":"sukin","m":"skin"}, {"c":"ボディ","r":"bodi","m":"body"}
  ],
  places: [
    {"c":"ビル","r":"biru","m":"building"}, {"c":"ホテル","r":"hoteru","m":"hotel"},
    {"c":"パーク","r":"pāku","m":"park"}, {"c":"プール","r":"pūru","m":"pool"},
    {"c":"バンク","r":"banku","m":"bank"}, {"c":"ジム","r":"jimu","m":"gym"},
    {"c":"バー","r":"bā","m":"bar"}, {"c":"カフェ","r":"kafe","m":"cafe"},
    {"c":"シアター","r":"shiatā","m":"theater"}, {"c":"ロビー","r":"robī","m":"lobby"},
    {"c":"ホール","r":"hōru","m":"hall"}, {"c":"ストア","r":"sutoa","m":"store"},
    {"c":"マーケット","r":"māketto","m":"market"}, {"c":"デパート","r":"depāto","m":"dept store"},
    {"c":"コンビニ","r":"konbini","m":"convenience"}, {"c":"サロン","r":"saron","m":"salon"},
    {"c":"クラブ","r":"kurabu","m":"club"}, {"c":"ライブ","r":"raibu","m":"live house"},
    {"c":"ドーム","r":"dōmu","m":"dome"}, {"c":"スタジアム","r":"sutajiamu","m":"stadium"},
    {"c":"コース","r":"kōsu","m":"course"}, {"c":"エリア","r":"eria","m":"area"},
    {"c":"ゾーン","r":"zōn","m":"zone"}, {"c":"コーナー","r":"kōnā","m":"corner"},
    {"c":"ゲート","r":"gēto","m":"gate"}, {"c":"ルート","r":"rūto","m":"route"},
    {"c":"テラス","r":"terasu","m":"terrace"}, {"c":"ガーデン","r":"gāden","m":"garden"},
    {"c":"ファーム","r":"fāmu","m":"farm"}, {"c":"キャンプ","r":"kyampu","m":"camp site"},
    {"c":"ビーチ","r":"bīchi","m":"beach"}, {"c":"アイランド","r":"airando","m":"island"},
    {"c":"タウン","r":"taun","m":"town"}, {"c":"シティ","r":"shiti","m":"city"},
    {"c":"ビレッジ","r":"birejji","m":"village"}, {"c":"センター","r":"sentā","m":"center"},
    {"c":"オフィス","r":"ofisu","m":"office"}, {"c":"スタジオ","r":"sutajio","m":"studio"},
    {"c":"スクール","r":"sukūru","m":"school"}, {"c":"クラス","r":"kurasu","m":"class"},
    {"c":"ラボ","r":"rabo","m":"lab"}, {"c":"ファクトリ","r":"fakutori","m":"factory"},
    {"c":"ガレージ","r":"garēji","m":"garage"}, {"c":"タワー","r":"tawā","m":"tower"},
    {"c":"ブリッジ","r":"burijji","m":"bridge"}, {"c":"ダム","r":"damu","m":"dam"},
    {"c":"トンネル","r":"tonneru","m":"tunnel"}, {"c":"ポート","r":"pōto","m":"port"},
    {"c":"ターミナル","r":"tāminaru","m":"terminal"}, {"c":"プラット","r":"puratto","m":"platform"},
    {"c":"ステーション","r":"sutēshon","m":"station"}, {"c":"パーキング","r":"pākingu","m":"parking"},
    {"c":"フロント","r":"furonto","m":"front desk"}, {"c":"レジ","r":"reji","m":"register"},
    {"c":"カウンター","r":"kauntā","m":"counter"}, {"c":"シート","r":"shīto","m":"seat"},
    {"c":"ブース","r":"būsu","m":"booth"}, {"c":"スペース","r":"supēsu","m":"space"},
    {"c":"サイト","r":"saito","m":"site"}, {"c":"スポット","r":"supotto","m":"spot"}
  ],
  actions_sports: [
    {"c":"ダンス","r":"dansu","m":"dance"}, {"c":"テスト","r":"tesuto","m":"test"},
    {"c":"キック","r":"kikku","m":"kick"}, {"c":"パス","r":"pasu","m":"pass"},
    {"c":"ドライブ","r":"doraibu","m":"drive"}, {"c":"ジョグ","r":"jogu","m":"jog"},
    {"c":"ゴルフ","r":"gorufu","m":"golf"}, {"c":"テニス","r":"tenisu","m":"tennis"},
    {"c":"スキー","r":"sukī","m":"ski"}, {"c":"スケート","r":"sukēto","m":"skate"},
    {"c":"サーフィン","r":"sāfin","m":"surfing"}, {"c":"ダイブ","r":"daibu","m":"dive"},
    {"c":"ヨガ","r":"yoga","m":"yoga"}, {"c":"ジム","r":"jimu","m":"gymnastics"},
    {"c":"リレー","r":"rirē","m":"relay"}, {"c":"ゲーム","r":"gēmu","m":"game"},
    {"c":"プレイ","r":"purei","m":"play"}, {"c":"ヒット","r":"hitto","m":"hit"},
    {"c":"ラン","r":"ran","m":"run"}, {"c":"ジャンプ","r":"janpu","m":"jump"},
    {"c":"スロー","r":"surō","m":"throw"}, {"c":"キャッチ","r":"kyacchi","m":"catch"},
    {"c":"シュート","r":"shūto","m":"shoot"}, {"c":"ゴール","r":"gōru","m":"goal"},
    {"c":"マーク","r":"māku","m":"mark"}, {"c":"ガード","r":"gādo","m":"guard"},
    {"c":"ブロック","r":"burokku","m":"block"}, {"c":"タックル","r":"takkuru","m":"tackle"},
    {"c":"ファウル","r":"fauru","m":"foul"}, {"c":"タイム","r":"taimu","m":"time"},
    {"c":"スコア","r":"sukoa","m":"score"}, {"c":"レース","r":"rēsu","m":"race"},
    {"c":"ツアー","r":"tsuā","m":"tour"}, {"c":"ハイキング","r":"haikingu","m":"hiking"},
    {"c":"サイクリング","r":"saikuringu","m":"cycling"}, {"c":"フィッシング","r":"fisshingu","m":"fishing"},
    {"c":"クッキング","r":"kukkingu","m":"cooking"}, {"c":"ランチ","r":"ranchi","m":"having lunch"},
    {"c":"トーク","r":"tōku","m":"talk"}, {"c":"コール","r":"kōru","m":"call"},
    {"c":"メール","r":"mēru","m":"emailing"}, {"c":"コピー","r":"kopī","m":"copying"},
    {"c":"プリント","r":"purinto","m":"printing"}, {"c":"カット","r":"katto","m":"cutting"},
    {"c":"ペースト","r":"pēsuto","m":"pasting"}, {"c":"クリック","r":"kurikku","m":"clicking"},
    {"c":"セレクト","r":"serekuto","m":"selecting"}, {"c":"キャンセル","r":"kyanseru","m":"canceling"},
    {"c":"スタート","r":"sutāto","m":"start"}, {"c":"ストップ","r":"sutoppu","m":"stop"},
    {"c":"オープン","r":"ōpun","m":"open"}, {"c":"クローズ","r":"kurōzu","m":"close"},
    {"c":"チェンジ","r":"chenji","m":"change"}, {"c":"キープ","r":"kīpu","m":"keep"},
    {"c":"リード","r":"rīdo","m":"lead"}, {"c":"サポート","r":"sapōto","m":"support"},
    {"c":"ケア","r":"kea","m":"care"}, {"c":"サービス","r":"sābisu","m":"service"},
    {"c":"サイン","r":"sain","m":"sign"}, {"c":"マーク","r":"māku","m":"mark"}
  ],
  feelings: [
    {"c":"ドライ","r":"dorai","m":"dry"}, {"c":"ウェット","r":"uetto","m":"wet"},
    {"c":"ホット","r":"hotto","m":"hot"}, {"c":"クール","r":"kūru","m":"cool"},
    {"c":"タフ","r":"tafu","m":"tough"}, {"c":"ピュア","r":"pyua","m":"pure"},
    {"c":"フリー","r":"furī","m":"free"}, {"c":"ハッピー","r":"happī","m":"happy"},
    {"c":"ダーク","r":"dāku","m":"dark"}, {"c":"ライト","r":"raito","m":"light"},
    {"c":"ソフト","r":"sofuto","m":"soft"}, {"c":"ハード","r":"hādo","m":"hard"},
    {"c":"スマート","r":"sumāto","m":"smart"}, {"c":"ルーズ","r":"rūzu","m":"loose"},
    {"c":"タイト","r":"taito","m":"tight"}, {"c":"シャープ","r":"shāpu","m":"sharp"},
    {"c":"ヘビー","r":"hebī","m":"heavy"}, {"c":"マイルド","r":"mairudo","m":"mild"},
    {"c":"ワイルド","r":"wairudo","m":"wild"}, {"c":"ユニーク","r":"yunīku","m":"unique"},
    {"c":"レア","r":"rea","m":"rare"}, {"c":"ベタ","r":"beta","m":"cliché"},
    {"c":"ナイス","r":"naisu","m":"nice"}, {"c":"グッド","r":"guddo","m":"good"},
    {"c":"ベスト","r":"besuto","m":"best"}, {"c":"バッド","r":"baddo","m":"bad"},
    {"c":"ラッキー","r":"rakkī","m":"lucky"}, {"c":"アンラッキー","r":"anrakkī","m":"unlucky"},
    {"c":"ハイ","r":"hai","m":"high"}, {"c":"ロー","r":"rō","m":"low"},
    {"c":"ニュー","r":"nyū","m":"new"}, {"c":"オールド","r":"ōrudo","m":"old"},
    {"c":"ヤング","r":"yangu","m":"young"}, {"c":"アダルト","r":"adaruto","m":"adult"},
    {"c":"ピュア","r":"pyua","m":"pure"}, {"c":"リアル","r":"riaru","m":"real"},
    {"c":"フェイク","r":"feiku","m":"fake"}, {"c":"マジック","r":"majikku","m":"magic"},
    {"c":"ミラクル","r":"mirakuru","m":"miracle"}, {"c":"ショック","r":"shokku","m":"shock"},
    {"c":"パニック","r":"panikku","m":"panic"}, {"c":"ストレス","r":"sutoresu","m":"stress"},
    {"c":"リラックス","r":"rirakkusu","m":"relax"}, {"c":"ロマン","r":"roman","m":"romance"},
    {"c":"ドラマ","r":"dorama","m":"drama"}, {"c":"ファンタジー","r":"fantajī","m":"fantasy"},
    {"c":"ホラー","r":"horā","m":"horror"}, {"c":"コメディ","r":"komedi","m":"comedy"},
    {"c":"ジョーク","r":"jōku","m":"joke"}, {"c":"ユーモア","r":"yūmoa","m":"humor"},
    {"c":"センス","r":"sensu","m":"sense"}, {"c":"スタイル","r":"sutairu","m":"style"},
    {"c":"ビジョン","r":"bijon","m":"vision"}, {"c":"イメージ","r":"imēji","m":"image"},
    {"c":"アイデア","r":"aidea","m":"idea"}, {"c":"ヒント","r":"hinto","m":"hint"},
    {"c":"ミス","r":"misu","m":"mistake"}, {"c":"トラブル","r":"toraburu","m":"trouble"},
    {"c":"チャンス","r":"chansu","m":"chance"}, {"c":"ドリーム","r":"dorīmu","m":"dream"}
  ],
  nature: [
    {"c":"アイス","r":"aisu","m":"ice"}, {"c":"ガス","r":"gasu","m":"gas"},
    {"c":"コア","r":"koa","m":"core"}, {"c":"サボテン","r":"saboten","m":"cactus"},
    {"c":"ジャングル","r":"janguru","m":"jungle"}, {"c":"オーシャン","r":"ōshan","m":"ocean"},
    {"c":"スター","r":"sutā","m":"star"}, {"c":"ローズ","r":"rōzu","m":"rose"},
    {"c":"ハーブ","r":"hābu","m":"herb"}, {"c":"ウッド","r":"uddo","m":"wood"},
    {"c":"リーフ","r":"rīfu","m":"leaf"}, {"c":"フラワー","r":"furawā","m":"flower"},
    {"c":"ガーデン","r":"gāden","m":"garden"}, {"c":"フィールド","r":"fīrudo","m":"field"},
    {"c":"エリア","r":"eria","m":"area"}, {"c":"アース","r":"āsu","m":"earth"},
    {"c":"プラネット","r":"puranetto","m":"planet"}, {"c":"ムーン","r":"mūn","m":"moon"},
    {"c":"サン","r":"san","m":"sun"}, {"c":"スカイ","r":"sukai","m":"sky"},
    {"c":"エアー","r":"eā","m":"air"}, {"c":"ウィンド","r":"windo","m":"wind"},
    {"c":"レイン","r":"rein","m":"rain"}, {"c":"スノー","r":"sunō","m":"snow"},
    {"c":"クラウド","r":"kuraudo","m":"cloud"}, {"c":"オーロラ","r":"ōrora","m":"aurora"},
    {"c":"デザート","r":"dezāto","m":"desert"}, {"c":"バレー","r":"barē","m":"valley"},
    {"c":"リバー","r":"ribā","m":"river"}, {"c":"レイク","r":"reiku","m":"lake"},
    {"c":"フォレスト","r":"foresuto","m":"forest"}, {"c":"マウンテン","r":"maunten","m":"mountain"},
    {"c":"ヒル","r":"hiru","m":"hill"}, {"c":"ストーン","r":"sutōn","m":"stone"},
    {"c":"ロック","r":"rokku","m":"rock/stone"}, {"c":"メタル","r":"metaru","m":"metal"},
    {"c":"ゴールド","r":"gōrudo","m":"gold"}, {"c":"シルバー","r":"shirubā","m":"silver"},
    {"c":"ダイア","r":"daia","m":"diamond"}, {"c":"クリスタル","r":"kurisutaru","m":"crystal"},
    {"c":"エネルギー","r":"enerugī","m":"energy"}, {"c":"パワー","r":"pawā","m":"power"},
    {"c":"ミスト","r":"misuto","m":"mist"}, {"c":"スモーク","r":"sumōku","m":"smoke"},
    {"c":"ファイア","r":"faia","m":"fire"}, {"c":"ウォーター","r":"wōtā","m":"water"},
    {"c":"ウェーブ","r":"wēbu","m":"wave"}, {"c":"ビーチ","r":"bīchi","m":"beach"},
    {"c":"サンゴ","r":"sango","m":"coral"}, {"c":"シェル","r":"sheru","m":"shell"},
    {"c":"パーム","r":"pāmu","m":"palm"}, {"c":"バナナ","r":"banana","m":"banana tree"},
    {"c":"オレンジ","r":"orenji","m":"orange"}, {"c":"アップル","r":"appuru","m":"apple"},
    {"c":"ベリー","r":"berī","m":"berry"}, {"c":"ナッツ","r":"nattsu","m":"nuts"},
    {"c":"シード","r":"shīdo","m":"seed"}, {"c":"モス","r":"mosu","m":"moss"},
    {"c":"キノコ","r":"kinoko","m":"mushroom"}, {"c":"カビ","r":"kabi","m":"mold"}
  ],
  people: [
    {"c":"ママ","r":"mama","m":"mom"}, {"c":"パパ","r":"papa","m":"dad"},
    {"c":"ファン","r":"fan","m":"fan"}, {"c":"プロ","r":"puro","m":"pro"},
    {"c":"スター","r":"sutā","m":"star"}, {"c":"モデル","r":"moderu","m":"model"},
    {"c":"ゲスト","r":"gesuto","m":"guest"}, {"c":"ガイド","r":"gaido","m":"guide"},
    {"c":"リーダー","r":"rīdā","m":"leader"}, {"c":"ボス","r":"bosu","m":"boss"},
    {"c":"コーチ","r":"kōchi","m":"coach"}, {"c":"スタッフ","r":"sutaffu","m":"staff"},
    {"c":"メンバー","r":"menbā","m":"member"}, {"c":"パートナー","r":"pātonā","m":"partner"},
    {"c":"ライバル","r":"raibaru","m":"rival"}, {"c":"ヒーロー","r":"hīrō","m":"hero"},
    {"c":"ヒロイン","r":"hiroin","m":"heroine"}, {"c":"アイドル","r":"aidoru","m":"idol"},
    {"c":"キャスト","r":"kyasuto","m":"cast"}, {"c":"ユーザー","r":"yūzā","m":"user"},
    {"c":"オーナー","r":"ōnā","m":"owner"}, {"c":"マスター","r":"masutā","m":"master"},
    {"c":"ドクター","r":"dokutā","m":"doctor"}, {"c":"ナース","r":"nāsu","m":"nurse"},
    {"c":"シェフ","r":"shefu","m":"chef"}, {"c":"パイロット","r":"pairotto","m":"pilot"},
    {"c":"ドライバー","r":"doraibā","m":"driver"}, {"c":"ライダー","r":"raidā","m":"rider"},
    {"c":"ダンサー","r":"dansā","m":"dancer"}, {"c":"シンガー","r":"shingā","m":"singer"},
    {"c":"ベテラン","r":"beteran","m":"veteran"}, {"c":"ルーキー","r":"rūkī","m":"rookie"},
    {"c":"ビギナー","r":"biginā","m":"beginner"}, {"c":"シニア","r":"shinia","m":"senior"},
    {"c":"ジュニア","r":"junia","m":"junior"}, {"c":"ベビー","r":"bebī","m":"baby"},
    {"c":"キッズ","r":"kizzu","m":"kids"}, {"c":"ボーイ","r":"bōi","m":"boy"},
    {"c":"ガール","r":"gāru","m":"girl"}, {"c":"レディ","r":"redi","m":"lady"},
    {"c":"メンズ","r":"menzu","m":"men's"}, {"c":"ファン","r":"fan","m":"fan"},
    {"c":"チーム","r":"chīmu","m":"team"}, {"c":"グループ","r":"gurūpu","m":"group"},
    {"c":"クラス","r":"kurasu","m":"class"}, {"c":"ペア","r":"pea","m":"pair"},
    {"c":"コンビ","r":"konbi","m":"duo"}, {"c":"ソロ","r":"soro","m":"solo"},
    {"c":"エージェント","r":"ējento","m":"agent"}, {"c":"ガード","r":"gādo","m":"guard"},
    {"c":"ポリス","r":"porisu","m":"police"}, {"c":"ナイスガイ","r":"naisugai","m":"nice guy"},
    {"c":"マニア","r":"mania","m":"enthusiast"}, {"c":"オタク","r":"otaku","m":"otaku"},
    {"c":"ニート","r":"nīto","m":"NEET"}, {"c":"セレブ","r":"serebu","m":"celeb"},
    {"c":"ヒッピー","r":"hippī","m":"hippie"}, {"c":"パンク","r":"panku","m":"punk"},
    {"c":"ファンク","r":"fanku","m":"funk/funky"}, {"c":"エイリアン","r":"eirian","m":"alien"}
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
let current    = { c: 'イヌ', r: 'inu', m: 'dog' };
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
  return pool.length ? pool : ROWS.food;
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

  isSpeaking = true;
  btnPlay.classList.add('btn--say-on');

  const utt = new SpeechSynthesisUtterance(current.c);
  utt.lang = 'ja-JP';
  utt.rate = parseFloat(speechRate.value);
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
  setCookie('quiz_kata_rows', checked);
}

function loadCheckboxes() {
  const val = getCookie('quiz_kata_rows');
  if (!val) return;
  const saved = val.split(',');
  checkboxes.forEach(cb => { cb.checked = saved.includes(cb.dataset.row); });
}

checkboxes.forEach(cb => cb.addEventListener('change', saveCheckboxes));

// ─── Dropdown → cookie ────────────────────────────────────────────────────────
timerDuration.addEventListener('change', () => {
  setCookie('quiz_kata_timer', timerDuration.value);
  if (isPlaying) startTimer();
});

function loadDropdown() {
  const val = getCookie('quiz_kata_timer');
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
