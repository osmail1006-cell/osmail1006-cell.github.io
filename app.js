/* 図解・イラスト(SVG/HTML)。内容は data/ の検証済みの事実と法令の条文に合わせている。 */
window.DOKUGEKI_FIGS = (function () {
  "use strict";
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fig = (title, body, cap) => '<figure class="fig"><figcaption class="fig-title">' + esc(title) + "</figcaption>" + body + (cap ? '<p class="fig-cap">' + cap + "</p>" : "") + "</figure>";
  const chip = (color, label, sub, dark) => '<span class="cchip"><span class="cdot' + (dark ? " cdot-dark" : "") + '" style="background:' + color + '" aria-hidden="true"></span><span><b>' + esc(label) + "</b>" + (sub ? "<small>" + esc(sub) + "</small>" : "") + "</span></span>";

  const F = {};

  F.cat = () => fig("毒物・劇物・特定毒物の関係",
    '<div class="venn"><div class="venn-doku"><span class="venn-h">毒物(法 別表第一+指定令1条)</span><span class="venn-ex">例: 水銀、砒素、セレン、ニコチン、シアン化ナトリウム、シアン化水素、弗化水素、黄リン</span>' +
    '<div class="venn-tok"><span class="venn-h">特定毒物(別表第三+指定令3条)</span><span class="venn-ex">四アルキル鉛、モノフルオール酢酸(塩・アミド)、TEPP、パラチオン など</span></div></div>' +
    '<div class="venn-geki"><span class="venn-h">劇物(法 別表第二+指定令2条)</span><span class="venn-ex">例: 硫酸、水酸化ナトリウム、アンモニア、クロロホルム、ナトリウム、カリウム、塩化第一水銀</span></div></div>',
    "特定毒物は毒物の一部です。劇物の中に特定毒物はありません。医薬品・医薬部外品は、毒物・劇物から除かれます(法2条)。");

  F.labels = () => fig("表示の見分け方(どこに・何色で)",
    '<div class="labels">' +
    '<div class="lab-item"><svg viewBox="0 0 120 150" class="lab-svg" role="img" aria-label="毒物の容器の表示。赤地に白い文字で毒物"><path d="M38 8h44v18l14 18v96a6 6 0 0 1-6 6H30a6 6 0 0 1-6-6V44l14-18z" class="ill-glass"/><rect x="30" y="62" width="60" height="54" rx="2" class="ill-red"/><text x="60" y="80" class="ill-t-small ill-white" text-anchor="middle">医薬用外</text><text x="60" y="104" class="ill-t-big ill-white" text-anchor="middle">毒物</text></svg><p><b>毒物の容器・被包</b><br>赤地に白い文字</p></div>' +
    '<div class="lab-item"><svg viewBox="0 0 120 150" class="lab-svg" role="img" aria-label="劇物の容器の表示。白地に赤い文字で劇物"><path d="M38 8h44v18l14 18v96a6 6 0 0 1-6 6H30a6 6 0 0 1-6-6V44l14-18z" class="ill-glass"/><rect x="30" y="62" width="60" height="54" rx="2" class="ill-whitebox"/><text x="60" y="80" class="ill-t-small ill-redtxt" text-anchor="middle">医薬用外</text><text x="60" y="104" class="ill-t-big ill-redtxt" text-anchor="middle">劇物</text></svg><p><b>劇物の容器・被包</b><br>白地に赤い文字</p></div>' +
    '<div class="lab-item"><svg viewBox="0 0 120 150" class="lab-svg" role="img" aria-label="貯蔵・陳列場所の表示。医薬用外と劇物の文字。色の指定はない"><rect x="14" y="20" width="92" height="120" rx="3" class="ill-door"/><rect x="26" y="40" width="68" height="44" rx="2" class="ill-plate"/><text x="60" y="58" class="ill-t-small ill-ink" text-anchor="middle">医薬用外</text><text x="60" y="78" class="ill-t-mid ill-ink" text-anchor="middle">劇物</text><circle cx="94" cy="104" r="4" class="ill-ink-f"/></svg><p><b>貯蔵・陳列の場所</b><br>「医薬用外」+「毒物」「劇物」。色の指定なし</p></div>' +
    '<div class="lab-item"><svg viewBox="0 0 120 150" class="lab-svg" role="img" aria-label="運搬車両の標識。黒地に白い文字で毒。0.3メートル平方"><rect x="22" y="34" width="76" height="76" class="ill-black"/><text x="60" y="88" class="ill-t-huge ill-white" text-anchor="middle">毒</text><line x1="22" y1="122" x2="98" y2="122" class="ill-dim"/><text x="60" y="138" class="ill-t-small ill-ink" text-anchor="middle">0.3m平方</text></svg><p><b>運搬車両の標識</b><br>黒地に白い「毒」。車両の前後</p></div>' +
    "</div>", "容器は法12条1項、販売時の表示事項は12条2項、貯蔵・陳列の場所は12条3項、車両の標識は規則13条の5。");

  F.timeline = () => {
    const rows = [["直ちに", "流出・漏えいで危害のおそれ → 保健所・警察署・消防機関。盗難・紛失 → 警察署", "法17条"],
      ["15日以内", "登録が失効したとき、持っている特定毒物の品名・数量を届け出る", "法21条1項"],
      ["30日以内", "取扱責任者を置いた・変えた、氏名・住所・設備の重要な部分・店舗の名称を変えた、営業を廃止した、業務上取扱者になった", "法7条3項・10条・22条"],
      ["50日以内", "失効後に、持っている特定毒物を営業者などに譲り渡せる期間", "法21条2項"],
      ["5年", "譲渡手続の書面・交付の確認の帳簿の保存。製造業・輸入業の登録の更新", "法14条4項・15条4項・4条3項"],
      ["6年", "販売業の登録の更新", "法4条3項"]];
    return fig("期限と期間の時間軸", '<ol class="tline">' + rows.map((r) => '<li><span class="tl-when">' + esc(r[0]) + '</span><span class="tl-what">' + esc(r[1]) + '<small>' + esc(r[2]) + "</small></span></li>").join("") + "</ol>",
      "「あらかじめ」が必要なのは、品目を増やすときの登録の変更(法9条)。事後の届出と混同しないこと。");
  };

  F.transport = () => fig("5,000kg以上を車両で運ぶときの4点セット",
    '<svg viewBox="0 0 320 120" class="truck" role="img" aria-label="トラックのイラスト。前後に黒地に白の毒の標識"><rect x="20" y="30" width="190" height="62" rx="4" class="ill-body"/><path d="M210 48h46l26 22v22h-72z" class="ill-body"/><rect x="232" y="54" width="22" height="16" rx="2" class="ill-glass"/><circle cx="64" cy="96" r="13" class="ill-ink-f"/><circle cx="246" cy="96" r="13" class="ill-ink-f"/><circle cx="64" cy="96" r="5" class="ill-wheel"/><circle cx="246" cy="96" r="5" class="ill-wheel"/>' +
    '<rect x="24" y="36" width="26" height="26" class="ill-black"/><text x="37" y="55" class="ill-t-mid ill-white" text-anchor="middle">毒</text><rect x="284" y="66" width="22" height="22" class="ill-black"/><text x="295" y="82" class="ill-t-small2 ill-white" text-anchor="middle">毒</text><text x="120" y="68" class="ill-t-mid ill-ink" text-anchor="middle">5,000kg以上</text></svg>' +
    '<div class="four"><div><b>① 交替運転者</b>連続4時間超(やむを得ない場合4時間30分)、2日平均で1日9時間超のとき</div><div><b>② 標識</b>0.3m平方、黒地に白字の「毒」を前後に</div><div><b>③ 保護具</b>2人分以上(物質ごとに規則別表第五)</div><div><b>④ 書面</b>名称、成分と含量、事故の際の応急措置</div></div>',
    "根拠: 令40条の5第2項、規則13条の4〜13条の6。運搬を委託するときは、荷送人が運送人に書面(数量も書く)を渡す。1回1,000kg以下なら不要(令40条の6、規則13条の7)。");

  F.disposal = () => {
    const rows = [["酸・アルカリ", "中和法", "薄めて中和すれば、塩と水になる", "硫酸、硝酸、塩酸、水酸化ナトリウム、アンモニア水"],
      ["燃える有機物", "燃焼法", "炭素・水素・酸素だけなら、燃やすと二酸化炭素と水", "トルエン、キシレン、メタノール、酢酸エチル"],
      ["塩素を含む有機物", "燃焼法(スクラバー付き)", "燃やすと塩化水素が出るので、アルカリで洗って除く", "クロロホルム、四塩化炭素、トリクロル酢酸"],
      ["六価クロム", "還元沈殿法", "還元して三価にし、水酸化物として沈める", "重クロム酸カリウム、無水クロム酸"],
      ["酸化剤(塩素酸塩)", "還元法", "還元剤で酸化力をなくす", "塩素酸ナトリウム、塩素酸カリウム"],
      ["シアン化合物", "酸化法", "アルカリ性(pH11以上)にしてから酸化分解。酸性だとシアン化水素が出る", "シアン化ナトリウム、シアン化カリウム"],
      ["水に溶けない重金属", "固化隔離法", "セメントで固めて溶け出さないようにする", "砒素(単体)、セレン、一酸化鉛"],
      ["水銀(単体)", "回収法", "燃やすと蒸気になるので、蒸留して回収する", "水銀"],
      ["バリウム・弗素", "沈殿法", "水に溶けない塩(硫酸バリウム・弗化カルシウム)にする", "塩化バリウム、弗化水素"],
      ["過酸化水素", "希釈法", "分解すると水と酸素だけになる", "過酸化水素"]];
    return fig("廃棄法は「性質」で選ぶ", '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>性質</th><th>方法</th><th>なぜ</th><th>例</th></tr></thead><tbody>' +
      rows.map((r) => "<tr><td>" + esc(r[0]) + "</td><td><b>" + esc(r[1]) + "</b></td><td>" + esc(r[2]) + "</td><td>" + esc(r[3]) + "</td></tr>").join("") + "</tbody></table></div>",
      "物質ごとの正式な方法は、厚生労働省「毒物及び劇物の廃棄の方法に関する基準」によります(物質ページの「廃棄」欄)。");
  };

  F.flame = () => fig("炎色反応の色見本",
    '<div class="cgrid">' + chip("#d32f2f", "Li リチウム", "赤") + chip("#f9c80e", "Na ナトリウム", "黄 ★過去問頻出") + chip("#8e44ad", "K カリウム", "青紫(コバルトガラスで紅紫) ★") +
    chip("#1fa38a", "Cu 銅", "青緑") + chip("#ef6c00", "Ca カルシウム", "橙赤") + chip("#c2185b", "Sr ストロンチウム", "紅(深赤)") + chip("#9ccc3c", "Ba バリウム", "黄緑") + "</div>",
    "語呂: 「リアカー無きK村、動力借りるとするもくれない、馬力」。★は毒劇の実地で出る物質(公式正答で確認)。ほかは基礎化学の知識です。");

  F.precip = () => fig("沈殿・呈色の色見本(実地の鑑別法)",
    '<div class="cgrid">' + chip("#ffffff", "硝酸銀 + 塩酸", "白色の沈殿(塩化銀)") + chip("#ffffff", "アンモニア水 + 濃塩酸", "白い霧(塩化アンモニウム)") +
    chip("#ffffff", "水酸化カリウム + 酒石酸", "白色の結晶性沈殿") + chip("#111111", "一酸化鉛 → 希硝酸 + 硫化水素", "黒色の沈殿(硫化鉛)", true) +
    chip("#c62828", "塩化第二水銀 + 消石灰", "赤色の沈殿") + chip("#283593", "臭素 → ヨウ化カリウムでんぷん紙", "藍色(青色)") +
    chip("#6a1b9a", "フェノール + 塩化鉄(III)", "紫色") + chip("#6a1b9a", "アニリン + さらし粉", "紫色") +
    chip("#1565c0", "硝酸 + 銅くず", "藍色に溶け、赤褐色の気体") + chip("#8d4a1d", "亜硝酸ナトリウム + 希硫酸", "褐色の蒸気") + "</div>",
    "色が手がかりになる鑑別法です。実地は2択なので、色の決め手を1つ覚えておけば正答できます。");

  F.colors = () => fig("物質そのものの色",
    '<div class="cgrid">' + chip("#c6d93a", "塩素", "黄緑色の気体") + chip("#8b2e16", "臭素", "赤褐色の液体") + chip("#3b2f4a", "沃素", "黒灰色の結晶・紫の蒸気", true) +
    chip("#e8602c", "重クロム酸塩", "橙赤色の結晶") + chip("#8e1b1b", "無水クロム酸", "暗赤色の結晶") + chip("#f3e27a", "ピクリン酸", "淡黄色の結晶") +
    chip("#f4e9b8", "黄リン", "白〜淡黄色のロウ状") + chip("#d9822b", "一酸化鉛", "黄色〜赤色の粉末") + chip("#555b61", "燐化亜鉛", "暗灰色", true) +
    chip("#a0522d", "アニリン", "無色 → 空気で赤褐色") + chip("#8a6d3b", "ニコチン", "無色 → 空気で褐色") + chip("#f2b8b8", "フェノール", "無色の結晶 → 空気で赤(紅)色") + "</div>",
    "語呂: 「黄緑の塩素、赤茶の臭素、黒紫の沃素」。色見本は目安です。実際の色合いは、濃さや純度で変わります。");

  F.storage = () => fig("貯蔵法のグループ",
    '<div class="sgrid">' +
    '<div class="sbox"><svg viewBox="0 0 60 60" aria-hidden="true"><rect x="12" y="14" width="36" height="38" rx="4" class="ill-oil"/><rect x="18" y="8" width="12" height="8" rx="1" class="ill-ink-f"/></svg><b>石油(灯油)の中</b><span>ナトリウム、カリウム<br>水・空気と激しく反応するから</span></div>' +
    '<div class="sbox"><svg viewBox="0 0 60 60" aria-hidden="true"><path d="M14 20h32v30a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z" class="ill-water"/><path d="M14 20h32" class="ill-dim"/></svg><b>水の中</b><span>黄リン(空気で発火するから)<br>二硫化炭素(水を張って蒸発を防ぐ)</span></div>' +
    '<div class="sbox"><svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="12" class="ill-sun"/><line x1="12" y1="48" x2="48" y2="12" class="ill-ban"/></svg><b>光を避ける</b><span>ベタナフトール(光で赤変)<br>過酸化水素(褐色びん、3分の1の空間)</span></div>' +
    '<div class="sbox"><svg viewBox="0 0 60 60" aria-hidden="true"><path d="M22 10h16v12l8 10v18a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V32l8-10z" class="ill-glass"/><circle cx="30" cy="40" r="5" class="ill-red"/></svg><b>何かを加える</b><span>クロロホルム(アルコール)<br>アクロレイン(安定剤)<br>ピクリン酸(水で湿らせる)</span></div>' +
    '<div class="sbox"><svg viewBox="0 0 60 60" aria-hidden="true"><rect x="14" y="18" width="32" height="34" rx="4" class="ill-gas"/><text x="30" y="40" class="ill-t-small ill-ink" text-anchor="middle">N₂</text></svg><b>不活性ガスの中</b><span>アクリルニトリル(窒素など)</span></div>' +
    '<div class="sbox"><svg viewBox="0 0 60 60" aria-hidden="true"><rect x="16" y="14" width="28" height="38" rx="3" class="ill-body"/><path d="M16 22h28" class="ill-dim"/></svg><b>ガラスはだめ</b><span>弗化水素酸(ガラスを侵すので、ポリエチレンなどの容器)</span></div>' +
    "</div>", "語呂: 「リンは水の中、ナトカリは油の中」。");

  F.exclusion = () => {
    const pts = [[1, "ホルムアルデヒド、ベタナフトール"], [5, "水酸化ナトリウム、水酸化カリウム、フェノール、クレゾール、過酸化ナトリウム"], [6, "過酸化水素"], [10, "硫酸、硝酸、塩化水素、アンモニア、蓚酸"], [11, "ヘキサン酸"]];
    return fig("除外濃度(この%以下なら劇物でない)", '<div class="xbars">' + pts.map((p) => '<div class="xrow"><span class="xval">' + p[0] + '%</span><span class="xbar"><span style="width:' + Math.round((p[0] / 11) * 100) + '%"></span></span><span class="xnames">' + esc(p[1]) + "</span></div>").join("") + "</div>",
      "語呂: 「アル・ゴー、サン・トー」(アルカリ5%、酸10%)、「過酸化はロク(6)」、「ホルマリンはワン(1)」。根拠: 指定令2条1項。");
  };

  F.states = () => fig("状態変化の名前",
    '<svg viewBox="0 0 320 200" class="states" role="img" aria-label="固体・液体・気体の間の状態変化の図"><circle cx="60" cy="160" r="30" class="ill-solid"/><text x="60" y="166" class="ill-t-mid ill-ink" text-anchor="middle">固体</text><circle cx="260" cy="160" r="30" class="ill-liquid"/><text x="260" y="166" class="ill-t-mid ill-ink" text-anchor="middle">液体</text><circle cx="160" cy="40" r="30" class="ill-gasc"/><text x="160" y="46" class="ill-t-mid ill-ink" text-anchor="middle">気体</text>' +
    '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="ill-ink-f"/></marker></defs>' +
    '<line x1="94" y1="152" x2="226" y2="152" class="ill-arrow" marker-end="url(#ah)"/><text x="160" y="146" class="ill-t-small ill-ink" text-anchor="middle">融解</text>' +
    '<line x1="226" y1="170" x2="94" y2="170" class="ill-arrow" marker-end="url(#ah)"/><text x="160" y="186" class="ill-t-small ill-ink" text-anchor="middle">凝固</text>' +
    '<line x1="244" y1="130" x2="186" y2="62" class="ill-arrow" marker-end="url(#ah)"/><text x="236" y="92" class="ill-t-small ill-ink">蒸発</text>' +
    '<line x1="174" y1="70" x2="232" y2="138" class="ill-arrow" marker-end="url(#ah)"/><text x="176" y="112" class="ill-t-small ill-ink">凝縮</text>' +
    '<line x1="76" y1="130" x2="134" y2="62" class="ill-arrow" marker-end="url(#ah)"/><text x="62" y="92" class="ill-t-small ill-ink">昇華</text>' +
    '<line x1="146" y1="70" x2="88" y2="138" class="ill-arrow" marker-end="url(#ah)"/><text x="118" y="116" class="ill-t-small ill-ink">昇華</text></svg>',
    "固体と気体の間の変化は、どちら向きも「昇華」(気体→固体は「凝華」とも言います)。埼玉R7問12では「気体から液体=凝縮」が正答でした。");

  F.calc = () => fig("計算は2つの式でほぼ解ける",
    '<div class="calc-grid"><div class="formula"><p class="f-name">モル濃度</p><p class="f-eq"><span>mol/L</span> = <span class="frac"><span>溶質の mol</span><span>溶液の L</span></span></p>' +
    '<p class="f-ex">例(埼玉R7問15): グルコース90g(分子量180)を500mLに<br>① 90 ÷ 180 = 0.50 mol<br>② 500mL = 0.500 L<br>③ 0.50 ÷ 0.500 = <b>1.0 mol/L</b></p></div>' +
    '<div class="formula"><p class="f-name">中和</p><p class="f-eq">価数 × 濃度 × 体積(酸) = 価数 × 濃度 × 体積(塩基)</p>' +
    '<p class="f-ex">例(埼玉R7問18): 0.10mol/Lの硫酸10mLを、0.10mol/Lの水酸化ナトリウムで中和<br>2 × 0.10 × 10 = 1 × 0.10 × V<br>V = <b>20 mL</b>(硫酸は2価、NaOHは1価)</p></div></div>',
    "語呂: 「モルはリットルで割る」「かける価数を忘れずに」。");

  const MAP = { definition: ["cat"], labeling: ["labels"], transport: ["transport"], notification: ["timeline"], accident: ["timeline"], transfer: ["timeline"], disposal: ["disposal"], manager: [], prohibition: ["timeline"] };
  const SUB = { na: ["flame"], k: ["flame"], agno3: ["precip"], nh3: ["precip"], koh: ["precip"], pbo: ["precip", "colors"], hgcl2: ["precip"], br2: ["precip", "colors"], phenol: ["precip", "colors"], aniline: ["precip", "colors"], hno3: ["precip"], nano2: ["precip"], cl2: ["colors"], i2: ["colors"], k2cr2o7: ["colors"], nh4cr2o7: ["colors"], cro3: ["colors"], picric: ["colors"], p4: ["colors", "storage"], zn3p2: ["colors"], nicotine: ["colors"], cs2: ["storage"], bnaphthol: ["storage"], h2o2: ["storage"], chcl3: ["storage"], acrolein: ["storage"], acrylonitrile: ["storage"], hf: ["storage"] };
  const ALL = [["cat", "区分の関係"], ["labels", "表示の見分け方"], ["timeline", "期限の時間軸"], ["transport", "運搬の4点セット"], ["exclusion", "除外濃度の数直線"], ["disposal", "廃棄法の選び方"], ["storage", "貯蔵法のグループ"], ["colors", "物質の色"], ["flame", "炎色反応"], ["precip", "沈殿・呈色"], ["states", "状態変化"], ["calc", "計算の式"]];
  return { render: (id) => (F[id] ? F[id]() : ""), forLaw: (id) => (MAP[id] || []), forSub: (id) => (SUB[id] || []), all: ALL };
})();

(function () {
  "use strict";
  const PROG_KEY = "dokugeki.progress.v1";
  const OLD_HIST_KEY = "dokugeki.history.v1";
  const PKEY = "dokugeki.prefs.v1";
  const SUBJECTS = ["法規", "基礎化学", "性質・貯蔵・取扱", "実地"];
  const LEVELS = ["S", "A", "B", "C"];
  const ST = ["未学習", "学習中", "覚えた"];
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rich = (s) => esc(s).replace(/[（(]要確認[）)]/g, '<span class="chk">要確認</span>');
  const dkey = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const today = () => dkey(new Date());
  const fmtDate = (t) => { const d = new Date(t); return (d.getMonth() + 1) + "/" + d.getDate() + " " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); };

  function load(key, def) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch (e) { return def; } }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* 保存できない環境でも動かす */ } }

  /* ---------- 学習記録(この端末 + claude.ai アカウント) ---------- */
  function emptyProg() { return { v: 1, hist: {}, subs: {}, law: {}, days: {}, target: "", upd: 0 }; }
  let P = load(PROG_KEY, null) || emptyProg();
  ["hist", "subs", "law", "days"].forEach((k) => { if (!P[k]) P[k] = {}; });
  (function migrate() {
    const old = load(OLD_HIST_KEY, null);
    if (old && !P.migrated) { Object.keys(old).forEach((k) => { if (!P.hist[k]) P.hist[k] = Object.assign({ log: [] }, old[k]); }); P.migrated = 1; save(PROG_KEY, P); }
  })();
  const sync = { ref: null, status: "local", timer: null, busy: false, again: false };
  function touch() {
    P.upd = Date.now(); save(PROG_KEY, P);
    if (sync.ref) { clearTimeout(sync.timer); sync.timer = setTimeout(pushRemote, 1500); }
  }
  async function pushRemote() {
    if (!sync.ref) return;
    if (sync.busy) { sync.again = true; return; }
    sync.busy = true;
    try { await sync.ref.set(JSON.parse(JSON.stringify(P))); sync.status = "synced"; } catch (e) { sync.status = "error"; }
    sync.busy = false; updateSyncBadge();
    if (sync.again) { sync.again = false; pushRemote(); }
  }
  function mergeProg(a, b) {
    const out = emptyProg();
    out.target = ((a.upd || 0) >= (b.upd || 0) ? a.target : b.target) || a.target || b.target || "";
    ["subs", "law"].forEach((k) => {
      const keys = new Set([...Object.keys(a[k] || {}), ...Object.keys(b[k] || {})]);
      keys.forEach((id) => { const x = (a[k] || {})[id], y = (b[k] || {})[id]; out[k][id] = !x ? y : !y ? x : ((x.t || 0) >= (y.t || 0) ? x : y); });
    });
    const hk = new Set([...Object.keys(a.hist || {}), ...Object.keys(b.hist || {})]);
    hk.forEach((id) => {
      const x = (a.hist || {})[id], y = (b.hist || {})[id];
      if (!x || !y) { out.hist[id] = x || y; return; }
      const logs = {}; [...(x.log || []), ...(y.log || [])].forEach((l) => { logs[l[0]] = l; });
      const log = Object.values(logs).sort((p, q) => p[0] - q[0]);
      const base = (x.n || 0) >= (y.n || 0) ? x : y;
      out.hist[id] = { n: Math.max(x.n || 0, y.n || 0), c: base.c, last: log.length ? !!log[log.length - 1][2] : base.last, t: Math.max(x.t || 0, y.t || 0), log: log.slice(-8) };
    });
    const dk = new Set([...Object.keys(a.days || {}), ...Object.keys(b.days || {})]);
    dk.forEach((d) => { out.days[d] = Math.max((a.days || {})[d] || 0, (b.days || {})[d] || 0); });
    out.upd = Math.max(a.upd || 0, b.upd || 0); out.migrated = 1;
    return out;
  }
  async function connectRemote() {
    if (!window.claude || !window.claude.use) return;
    try {
      const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
      if (!db || !user) return;
      const id = await user.id();
      if (!id) return;
      sync.ref = db.collection("data/users/" + id).doc("progress");
      const timer = setTimeout(() => { sync.status = "error"; updateSyncBadge(); }, 10000);
      const snap = await sync.ref.get();
      clearTimeout(timer);
      if (snap.exists) { P = mergeProg(P, snap.data() || {}); save(PROG_KEY, P); }
      sync.status = "synced"; await pushRemote(); render(false);
    } catch (e) { sync.status = "error"; updateSyncBadge(); }
  }
  function syncText() {
    if (sync.status === "synced") return "記録: claude.ai アカウントに保存しています(別の端末でも続きができます)";
    if (sync.status === "error") return "記録: この端末に保存しています(アカウントへの同期はできませんでした)";
    return "記録: この端末のブラウザに保存しています";
  }
  function updateSyncBadge() { const el = $("#syncnote"); if (el) el.textContent = syncText(); }
  function bumpDay() { const d = today(); P.days[d] = (P.days[d] || 0) + 1; }
  function subSt(id) { return (P.subs[id] && P.subs[id].st) || 0; }
  function lawSt(id) { return (P.law[id] && P.law[id].st) || 0; }
  function setSt(kind, id, st) { P[kind][id] = { st, t: Date.now() }; touch(); }

  let D = null;
  const emptyF = () => ({ cat: [], lv: [], state: [], st: [], saitama: false, unexp: false, ident: false, check: false });
  const state = { tab: "home", q: "", sort: "level", f: emptyF(), memo: false, prefs: load(PKEY, {}), quiz: null, confirmReset: false, ioOpen: false, ioMsg: "", drill: {}, wrongAll: false };
  if (state.prefs.memo) state.memo = true;
  if (state.prefs.sort) state.sort = state.prefs.sort;

  /* ---------- data ---------- */
  async function getData() {
    if (window.DOKUGEKI_DATA) return window.DOKUGEKI_DATA;
    const names = ["substances", "law", "questions", "tips", "meta", "amendments", "goro"];
    const got = await Promise.all(names.map((n) => fetch("data/" + n + ".json").then((r) => r.json()).catch(() => null)));
    const o = {}; names.forEach((n, i) => (o[n] = got[i])); return o;
  }
  function prepare(d) {
    d.tips = d.tips || { intro: [], sheets: [] }; d.meta = d.meta || { method: [], facts: [] }; d.amendments = d.amendments || { items: [] }; d.goro = d.goro || { groups: [] };
    const byName = new Map();
    d.substances.forEach((s) => {
      const base = s.name.replace(/[（(].*?[）)]/g, "");
      [s.name, base, ...(s.match || []), ...(s.aliases || [])].filter(Boolean).forEach((n) => { if (!byName.has(n)) byName.set(n, s.id); });
    });
    d.questions.forEach((q) => { q._sids = []; (q.substances || []).forEach((n) => { const id = byName.get(n); if (id && !q._sids.includes(id)) q._sids.push(id); }); });
    d.substances.forEach((s) => { s._qn = d.questions.filter((q) => q._sids.includes(s.id)).length; });
    d.byId = new Map(d.substances.map((s) => [s.id, s]));
    d.qById = new Map(d.questions.map((q) => [q.id, q]));
    const art = (t) => (String(t).match(/(法|令|規則|指定令)\s*\d+条(の\d+)?/g) || []).map((x) => x.replace(/\s/g, ""));
    const hiArts = new Set();
    d.law.items.forEach((it) => { if (["S", "A"].includes((it.likelihood || {}).level)) it.articles.forEach((a) => art(a).forEach((x) => hiArts.add(x))); });
    d.questions.forEach((q) => { q._hiLaw = q.subject === "法規" && ((q.explanation || {}).law_basis || []).some((b) => art(b).some((x) => hiArts.has(x))); });
    return d;
  }
  const lv = (s) => (s && s.frequency && s.frequency.level) || "C";
  const unexplored = (s) => !!s && ((s.frequency && s.frequency.flags) || []).some((f) => f.includes("まだ主題"));
  const saitamaTopic = (s) => s.frequency && (s.frequency.saitama_topic || []).length;

  /* ---------- 部品 ---------- */
  function catBadge(cat, hidden) {
    if (hidden) return '<span class="cat cat-hidden" aria-label="区分は暗記モードで非表示"><small>区分</small>？</span>';
    if (cat === "毒物") return '<span class="cat cat-doku"><small>医薬用外</small>毒物</span>';
    if (cat === "特定毒物") return '<span class="cat cat-tokutei"><small>毒物のうち</small>特定毒物</span>';
    if (cat === "劇物") return '<span class="cat cat-geki"><small>医薬用外</small>劇物</span>';
    return '<span class="cat cat-hidden">' + esc(cat || "―") + "</span>";
  }
  function lvBadge(l) { return '<span class="lv lv-' + esc(l) + '" title="出題予想">予想<b>' + esc(l) + "</b></span>"; }
  const MARK = ["○", "◐", "●"];
  function stBadge(st) { return '<span class="stb stb-' + st + '">' + MARK[st] + " " + ST[st] + "</span>"; }
  function stButtons(kind, id, cur) {
    return '<div class="seg" role="group" aria-label="学習状況">' + ST.map((t, i) => '<button type="button" class="seg-b" aria-pressed="' + (cur === i) + '" data-st="' + kind + ":" + esc(id) + ":" + i + '">' + MARK[i] + " " + t + "</button>").join("") + "</div>";
  }
  function coverable(html, key) {
    if (!state.memo) return html;
    return '<button class="cover" type="button" data-reveal="' + esc(key) + '">タップで表示</button><span hidden data-revealed="' + esc(key) + '">' + html + "</span>";
  }
  function fold(title, body, open, id) { return '<details class="fold"' + (id ? ' id="' + esc(id) + '"' : "") + (open ? " open" : "") + "><summary>" + title + '</summary><div class="fold-body">' + body + "</div></details>"; }
  function bar(label, val, max, right) {
    const w = max ? Math.round((val / max) * 100) : 0;
    return '<div class="bar"><span>' + esc(label) + '</span><span class="bar-track" role="img" aria-label="' + esc(label + " " + right) + '"><span class="bar-fill" style="width:' + w + '%"></span></span><span class="bar-num">' + esc(right) + "</span></div>";
  }
  function ad(slot) {
    const C = window.DOKUGEKI_CONFIG || {};
    if (!C.adsenseClient || !C.slots || !C.slots[slot]) return "";
    return '<aside class="ad" aria-label="広告"><span class="ad-label">広告</span><ins class="adsbygoogle" style="display:block" data-ad-client="' + esc(C.adsenseClient) + '" data-ad-slot="' + esc(C.slots[slot]) + '" data-ad-format="auto" data-full-width-responsive="true"></ins></aside>';
  }
  function fillAds() {
    const C = window.DOKUGEKI_CONFIG || {};
    if (!C.adsenseClient) return;
    document.querySelectorAll("ins.adsbygoogle:not([data-done])").forEach((el) => { el.setAttribute("data-done", "1"); try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {} });
  }

  const FG = window.DOKUGEKI_FIGS || { render: () => "", forLaw: () => [], forSub: () => [], all: [] };
  function goroFor(pred) { const out = []; (D.goro.groups || []).forEach((g) => (g.items || []).forEach((it) => { if (pred(it)) out.push(it); })); return out; }
  function goroBox(items) {
    if (!items.length) return "";
    return '<div class="goro-box"><h3><span class="goro-tag">語呂</span>覚えるきっかけ</h3>' + items.map((it) => '<div class="goro-item"><p class="goro-line">' + esc(it.goro) + '</p><p class="goro-fact">' + rich(it.fact) + "</p></div>").join("") + "</div>";
  }

  /* ---------- 集計 ---------- */
  function statsFor(qs) { let a = 0, c = 0, seen = 0; qs.forEach((q) => { const r = P.hist[q.id]; if (r) { seen++; a += r.n; c += r.c; } }); return { a, c, seen, total: qs.length }; }
  function pct(c, a) { return a ? Math.round((c / a) * 100) + "%" : "―"; }
  function wrongList() {
    return D.questions.filter((q) => { const r = P.hist[q.id]; return r && ((r.log || []).some((l) => !l[2]) || r.c < r.n); })
      .map((q) => { const r = P.hist[q.id]; const lastWrong = [...(r.log || [])].reverse().find((l) => !l[2]); return { q, r, lastWrong }; })
      .sort((x, y) => (y.lastWrong ? y.lastWrong[0] : y.r.t || 0) - (x.lastWrong ? x.lastWrong[0] : x.r.t || 0));
  }
  function weakSubs() {
    const m = new Map();
    D.questions.forEach((q) => { const r = P.hist[q.id]; if (!r) return; q._sids.forEach((id) => { const o = m.get(id) || { w: 0, n: 0 }; o.w += r.n - r.c; o.n += r.n; m.set(id, o); }); });
    return [...m.entries()].filter(([, o]) => o.w > 0).map(([id, o]) => ({ s: D.byId.get(id), w: o.w, n: o.n })).sort((a, b) => b.w - a.w || b.n - a.n);
  }

  /* ---------- ホーム ---------- */
  function renderHome() {
    const subsDone = D.substances.filter((s) => subSt(s.id) === 2).length, subsWip = D.substances.filter((s) => subSt(s.id) === 1).length;
    const lawDone = D.law.items.filter((i) => lawSt(i.id) === 2).length;
    const all = statsFor(D.questions), days = Object.keys(P.days).length;
    const wl = wrongList(), weak = weakSubs().slice(0, 5), todayN = P.days[today()] || 0;
    let cd = "試験日を設定すると、残りの日数を表示します";
    if (P.target) { const n = Math.ceil((new Date(P.target + "T00:00:00") - new Date(today() + "T00:00:00")) / 86400000); cd = n >= 0 ? "試験まで あと <b>" + n + "</b> 日" : "設定した試験日を過ぎています"; }
    let h = '<div class="view">';
    h += '<section class="hero"><div class="hero-label"><span class="hero-mark">医薬用外</span><span class="hero-title">毒劇ノート</span></div>' +
      '<p class="hero-sub">毒物劇物取扱者試験(一般品目)の独学ノート。' + (D.edition === "public" ? "過去問13回分の傾向をもとに作っています。過去問クイズは関西広域連合の公開問題(R3〜R7)を収録しています。" : "埼玉県の出題形式に合わせて、過去問13回分から作っています。") + "</p>" +
      '<div class="hero-row"><span class="hero-cd">' + cd + '</span><label class="hero-date"><span>試験日</span><input id="target" type="date" value="' + esc(P.target || "") + '"></label></div>' +
      '<p class="hero-today">今日の解答 ' + todayN + "問 ／ 学習した日 " + days + "日</p></section>";
    h += '<section class="panel"><h3 class="ghs">進み具合</h3><div class="bars">' +
      bar("物質 覚えた", subsDone, D.substances.length, subsDone + "/" + D.substances.length) +
      bar("物質 学習中", subsWip, D.substances.length, subsWip + "/" + D.substances.length) +
      bar("法規 覚えた", lawDone, D.law.items.length, lawDone + "/" + D.law.items.length) +
      bar("過去問 解いた", all.seen, all.total, all.seen + "/" + all.total) + "</div>" +
      '<p class="note">過去問の正答率 <b>' + pct(all.c, all.a) + "</b>(" + all.c + "/" + all.a + "回)。科目別:</p>" +
      '<div class="bars">' + SUBJECTS.map((sj) => { const st = statsFor(D.questions.filter((q) => q.subject === sj)); return bar(sj, st.c, st.a || 1, pct(st.c, st.a)); }).join("") + "</div></section>";
    const nextS = D.substances.filter((s) => ["S", "A"].includes(lv(s)) && subSt(s.id) < 2).sort((a, b) => LEVELS.indexOf(lv(a)) - LEVELS.indexOf(lv(b)) || b.frequency.sets - a.frequency.sets);
    const nextL = D.law.items.filter((i) => (i.likelihood || {}).level === "S" && lawSt(i.id) < 2);
    const todo = [];
    if (wl.length) todo.push('<li><button type="button" class="todo-b" data-act="wrong-retry"><b>まちがえた問題を解き直す</b><span>' + wl.filter((x) => !x.r.last).length + "問が、前回まちがえたままです</span></button></li>");
    if (nextL.length) todo.push('<li><button type="button" class="todo-b" data-goto="law:' + esc(nextL[0].id) + '"><b>法規「' + esc(nextL[0].title) + "」</b><span>予想Sで、まだ「覚えた」にしていない論点が " + nextL.length + "項目あります</span></button></li>");
    if (nextS.length) todo.push('<li><button type="button" class="todo-b" data-open="' + esc(nextS[0].id) + '"><b>' + esc(nextS[0].name) + "</b><span>予想" + esc(lv(nextS[0])) + "。予想S・Aで、まだ覚えていない物質が " + nextS.length + "あります</span></button></li>");
    if (D.edition === "public") todo.push('<li><button type="button" class="todo-b" data-act="quiz-any"><b>過去問を10問</b><span>関西広域連合の過去問(R3〜R7)からランダムに出題</span></button></li>');
    else todo.push('<li><button type="button" class="todo-b" data-act="quiz-saitama"><b>埼玉県の過去問を10問</b><span>本番と同じ形式で腕試し</span></button></li>');
    h += '<section class="panel"><h3 class="ghs">次にやること</h3><ul class="todo">' + todo.join("") + "</ul></section>";
    h += '<section class="panel"><h3 class="ghs">最近まちがえた問題</h3>' + (wl.length ? '<ul class="wl">' + wl.slice(0, 5).map(wrongRow).join("") + "</ul>" +
      '<div class="row-actions"><button type="button" class="btn btn-ghost btn-small" data-act="wrong-all">一覧を見る(' + wl.length + "問)</button></div>"
      : '<p class="note">まだありません。過去問を解くと、まちがえた問題がここにたまります。</p>') + "</section>";
    h += '<section class="panel"><h3 class="ghs">苦手な物質</h3>' + (weak.length ? '<ul class="wl">' + weak.map((x) => '<li><button type="button" class="wl-b" data-open="' + esc(x.s.id) + '">' + catBadge(x.s.category) + '<span class="wl-main"><span class="sname">' + esc(x.s.name) + '</span><span class="note">まちがえた ' + x.w + "回 ／ 解いた " + x.n + "回</span></span></button></li>").join("") + "</ul>"
      : '<p class="note">過去問でまちがえた物質が、多い順に並びます。</p>') + "</section>";
    const ds = []; for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const k = dkey(d); ds.push([k, P.days[k] || 0]); }
    const mx = Math.max(1, ...ds.map((x) => x[1]));
    h += '<section class="panel"><h3 class="ghs">最近14日の解答数</h3><div class="spark" role="img" aria-label="最近14日の解答数">' + ds.map(([k, n]) => '<span class="spark-col" title="' + k + " " + n + '問"><span class="spark-n">' + (n || "") + '</span><span class="spark-bar" style="height:' + Math.round((n / mx) * 100) + '%"></span><span class="spark-d">' + Number(k.slice(8)) + "</span></span>").join("") + "</div></section>";
    h += renderIO() + ad("home");
    return h + "</div>";
  }
  function wrongRow(x) {
    const q = x.q, lw = x.lastWrong;
    return '<li><button type="button" class="wl-b" data-review="' + esc(q.id) + '"><span class="wl-main"><span class="wl-meta">' + esc(q.org + " " + q.year + " 問" + q.no + " ／ " + q.subject) + "</span>" +
      '<span class="wl-stem">' + esc(q.stem.slice(0, 60)) + (q.stem.length > 60 ? "…" : "") + "</span>" +
      '<span class="note">' + (lw ? fmtDate(lw[0]) + " に「" + esc(lw[1]) + "」を選んで不正解(正答は " + esc(q.answer) + ")。" : "") + x.r.c + "/" + x.r.n + "回正解" + (x.r.last ? "。前回は正解" : "") + "</span></span></button></li>";
  }
  function renderIO() {
    let h = '<section class="panel"><h3 class="ghs">記録の保存</h3><p class="note" id="syncnote">' + esc(syncText()) + "</p>";
    h += '<div class="row-actions"><button type="button" class="btn btn-ghost btn-small" data-act="io" aria-expanded="' + state.ioOpen + '">記録を書き出す・読み込む</button>' +
      (state.confirmReset ? "" : '<button type="button" class="btn btn-ghost btn-small" data-act="reset">記録を消す</button>') + "</div>";
    if (state.confirmReset) h += '<div class="confirm"><span>学習記録をすべて消します。元に戻せません。</span><button type="button" class="btn btn-small" data-act="reset-yes">消す</button><button type="button" class="btn btn-ghost btn-small" data-act="reset-no">やめる</button></div>';
    if (state.ioOpen) h += '<div class="io"><p class="note">別のブラウザに移すときは、下の文字をすべてコピーし、移した先で貼り付けて「読み込む」を押します。読み込むと、両方の記録が合わさります。</p>' +
      '<textarea id="iotext" rows="4" spellcheck="false" aria-label="学習記録のデータ">' + esc(JSON.stringify(P)) + "</textarea>" +
      '<div class="row-actions"><button type="button" class="btn btn-small" data-act="copy">コピー</button><button type="button" class="btn btn-ghost btn-small" data-act="import">貼り付けた記録を読み込む</button><span class="note" role="status">' + esc(state.ioMsg) + "</span></div></div>";
    return h + "</section>";
  }
  function renderWrongAll() {
    const wl = wrongList();
    return '<div class="view"><button type="button" class="btn btn-ghost btn-small back" data-act="home">ホームに戻る</button><section class="panel"><h3 class="ghs">まちがえた問題(' + wl.length + "問)</h3>" +
      '<p class="note">一度でもまちがえた問題です。新しくまちがえた順に並びます。問題を押すと、その1問だけ解き直せます。</p>' +
      (wl.length ? '<div class="row-actions"><button type="button" class="btn btn-small" data-act="wrong-retry">前回まちがえた問題をまとめて解く</button></div><ul class="wl">' + wl.map(wrongRow).join("") + "</ul>" : '<p class="note">まだありません。</p>') + "</section></div>";
  }

  /* ---------- 物質 ---------- */
  function filtered() {
    const q = state.q.trim().toLowerCase(), f = state.f;
    const list = D.substances.filter((s) => {
      if (q && ![s.name, s.reading, s.formula, s.cas, ...(s.aliases || [])].join(" ").toLowerCase().includes(q)) return false;
      if (f.cat.length && !f.cat.includes(s.category)) return false;
      if (f.lv.length && !f.lv.includes(lv(s))) return false;
      if (f.state.length && !f.state.includes(s.state)) return false;
      if (f.st.length && !f.st.includes(String(subSt(s.id)))) return false;
      if (f.saitama && !saitamaTopic(s)) return false;
      if (f.unexp && !unexplored(s)) return false;
      if (f.ident && !(s.identification && s.identification.length)) return false;
      if (f.check && !(s.needs_check && s.needs_check.length)) return false;
      return true;
    });
    const weak = new Map(weakSubs().map((x) => [x.s.id, x.w]));
    const by = {
      level: (a, b) => LEVELS.indexOf(lv(a)) - LEVELS.indexOf(lv(b)) || b.frequency.sets - a.frequency.sets || b.frequency.count - a.frequency.count,
      kana: (a, b) => a.reading.localeCompare(b.reading, "ja"),
      weak: (a, b) => (weak.get(b.id) || 0) - (weak.get(a.id) || 0) || LEVELS.indexOf(lv(a)) - LEVELS.indexOf(lv(b)),
    };
    return list.sort(by[state.sort] || by.level);
  }
  function chip(group, val, label) {
    const on = Array.isArray(state.f[group]) ? state.f[group].includes(val) : state.f[group];
    return '<button type="button" class="chip" aria-pressed="' + on + '" data-chip="' + group + '" data-val="' + esc(val) + '">' + esc(label || val) + "</button>";
  }
  function activeFilters() { const f = state.f; return f.cat.length + f.lv.length + f.state.length + f.st.length + ["saitama", "unexp", "ident", "check"].filter((k) => f[k]).length; }
  function renderSubsList() {
    const list = filtered(), open = state.prefs.filtersOpen, n = activeFilters();
    const done = D.substances.filter((s) => subSt(s.id) === 2).length;
    return '<div class="view">' +
      '<div class="search"><input id="sq" type="search" placeholder="物質名・別名・化学式で検索" value="' + esc(state.q) + '" aria-label="物質を検索" autocomplete="off"></div>' +
      '<div class="row-actions"><button type="button" class="btn btn-ghost btn-small" data-act="toggle-filters" aria-expanded="' + !!open + '">絞り込み' + (n ? "(" + n + ")" : "") + "</button>" +
      '<label class="sortsel"><span>並び順</span><select id="sort">' + opt("level", "出題予想が高い順", state.sort) + opt("weak", "苦手な順", state.sort) + opt("kana", "50音順", state.sort) + "</select></label>" +
      '<label class="toggle"><input id="memo" type="checkbox"' + (state.memo ? " checked" : "") + "> 暗記モード</label></div>" +
      '<div class="filters"' + (open ? "" : " hidden") + ">" +
      '<div class="filter-group"><span class="filter-label">区分</span><div class="chips">' + chip("cat", "毒物") + chip("cat", "劇物") + chip("cat", "特定毒物") + "</div></div>" +
      '<div class="filter-group"><span class="filter-label">出題予想(過去問13回分で出た回数)</span><div class="chips">' + chip("lv", "S", "S 10回以上") + chip("lv", "A", "A 7〜9回") + chip("lv", "B", "B 4〜6回") + chip("lv", "C", "C 3回以下") + "</div></div>" +
      '<div class="filter-group"><span class="filter-label">学習状況</span><div class="chips">' + chip("st", "0", "○ 未学習") + chip("st", "1", "◐ 学習中") + chip("st", "2", "● 覚えた") + "</div></div>" +
      '<div class="filter-group"><span class="filter-label">状態</span><div class="chips">' + chip("state", "固体") + chip("state", "液体") + chip("state", "気体") + "</div></div>" +
      '<div class="filter-group"><span class="filter-label">メタ読み・その他</span><div class="chips">' + chip("saitama", "1", "埼玉で主題になった") + chip("unexp", "1", "他県頻出・埼玉未出題") + chip("ident", "1", "識別法あり") + chip("check", "1", "要確認あり") + "</div></div>" +
      (n ? '<div><button type="button" class="btn btn-ghost btn-small" data-act="clear-filters">絞り込みを解除</button></div>' : "") + "</div>" +
      '<p class="count" aria-live="polite">' + list.length + "物質を表示 ／ 覚えた " + done + "/" + D.substances.length + "</p>" +
      (list.length ? '<ul class="slist">' + list.map((s) =>
        '<li><button type="button" class="sitem" data-open="' + esc(s.id) + '">' + catBadge(s.category, state.memo) +
        '<span class="sitem-main"><span class="sname">' + esc(s.name) + '<span class="sformula">' + esc(s.formula || "") + "</span></span>" +
        (state.memo ? "" : '<span class="sline">' + esc((s.summary && (s.summary[1] || s.summary[0])) || "") + "</span>") +
        '<span class="smeta">' + stBadge(subSt(s.id)) + (unexplored(s) ? '<span class="flag">他県頻出・埼玉未出題</span>' : "") + ((s.needs_check && s.needs_check.length) ? '<span class="chk">要確認</span>' : "") + "</span></span>" +
        lvBadge(lv(s)) + "</button></li>").join("") + "</ul>"
        : '<div class="empty">条件に合う物質がありません。<br>検索語を短くするか、絞り込みを解除してください。</div>') + "</div>";
  }
  function fact(label, val, key) {
    if (!val || (Array.isArray(val) && !val.length)) return "";
    const html = Array.isArray(val) ? (val.length > 1 ? "<ul>" + val.map((v) => "<li>" + rich(v) + "</li>").join("") + "</ul>" : rich(val[0])) : rich(val);
    return "<div><dt>" + esc(label) + "</dt><dd>" + coverable(html, key) + "</dd></div>";
  }
  const FIELD = { category: "区分", category_note: "区分の注記", appearance: "性状", properties: "性質", toxicity: "毒性", first_aid: "応急措置", antidote: "解毒剤", storage: "貯蔵", disposal: "廃棄", leak: "漏えい時", identification: "識別法", uses: "用途" };
  function tipRowsFor(id) { const out = []; (D.tips.sheets || []).forEach((sh) => (sh.rows || []).forEach((r) => { if ((r.sids || []).includes(id)) out.push({ sheet: sh.title, cue: r.cue, answer: r.answer }); })); return out; }
  const ORG = { saitama: "埼玉", kansai: "関西", fukuoka: "福岡" };
  function renderSubDetail(s) {
    const fq = s.frequency || {}, checks = s.needs_check || [];
    let h = '<div class="view"><button type="button" class="btn btn-ghost btn-small back" data-act="back">一覧に戻る</button>';
    h += '<div class="dhead">' + catBadge(s.category, state.memo) + '<div class="dhead-main"><h2>' + esc(s.name) + "</h2>" +
      '<div class="dsub">' + esc([s.reading, s.formula, (s.aliases || []).length ? "別名: " + s.aliases.join("、") : ""].filter(Boolean).join(" ／ ")) + "</div>" +
      '<div class="dsub">' + (state.memo ? "区分: " + coverable(esc(s.category + (s.category_note ? "(" + s.category_note + ")" : "")), "cat") : esc(s.category_note || "")) + "</div></div></div>";
    h += stButtons("subs", s.id, subSt(s.id));
    h += '<section class="panel pred"><h3 class="ghs">出題予想 ' + lvBadge(lv(s)) + '</h3><ul class="points"><li>過去問13回分のうち <b>' + esc(fq.sets) + "回</b>出題(約" + esc(fq.count) + "問)。出た団体: " + esc((fq.orgs || []).map((o) => ORG[o] || o).join("・") || "なし") + "</li>" +
      "<li>埼玉で主題になった年: " + esc((fq.saitama_topic || []).join("、") || "なし(R5〜R7)") + "</li>" + (fq.flags || []).map((f) => "<li>" + esc(f) + "</li>").join("") + "</ul>" +
      (s._qn ? '<button type="button" class="btn btn-small" data-quiz-sub="' + esc(s.id) + '">この物質の過去問を解く(' + s._qn + "問)</button>" : "") + "</section>";
    if (checks.length) h += '<div class="panel"><h3><span class="chk">要確認</span> 公的資料で確認できなかった項目</h3><ul class="points">' + checks.map((c) => "<li>" + esc(FIELD[c.field] || c.field) + ": " + esc(c.note) + "</li>").join("") + "</ul></div>";
    h += '<section class="panel"><h3 class="ghs">要点</h3><ul class="points">' + (s.summary || []).map((p, i) => "<li>" + coverable(rich(p), "sum" + i) + "</li>").join("") + "</ul></section>";
    if (s.mnemonic) h += '<section class="memo-box" aria-label="覚え方"><h3>覚え方</h3><p>' + coverable(rich(s.mnemonic), "mn") + "</p></section>";
    h += goroBox(goroFor((it) => (it.sids || []).includes(s.id)));
    const sf = FG.forSub(s.id);
    if (sf.length) h += fold("図解で見る(" + sf.length + ")", sf.map((f) => FG.render(f)).join(""), false, "sd-fig");
    h += fold("性状・貯蔵・廃棄など(試験に出る事実)", '<dl class="facts">' +
      fact("区分", s.category + (s.category_note ? "。" + s.category_note : ""), "f-cat") + fact("法令の根拠", s.law_basis, "f-law") +
      fact("状態・性状", s.appearance, "f-app") + fact("性質", s.properties, "f-prop") + fact("毒性", s.toxicity, "f-tox") +
      fact("応急措置", s.first_aid, "f-aid") + fact("解毒剤", s.antidote, "f-anti") + fact("貯蔵", s.storage, "f-sto") +
      fact("廃棄", (s.disposal || []).join("、") + (s.disposal_note ? "。" + s.disposal_note : ""), "f-dis") + fact("漏えい時", s.leak, "f-leak") +
      fact("識別・鑑別", s.identification, "f-id") + fact("用途", s.uses, "f-use") + "</dl>", !state.memo, "sd-facts");
    if (s.details) h += fold("詳しく(なぜそうなるか)", "<p>" + rich(s.details) + "</p>", false, "sd-det");
    if (s.example) h += fold("具体例(使う場面と起きうる事故)", "<p>" + rich(s.example) + "</p>", false, "sd-ex");
    if ((s.compare || []).length || (s.hikkake || []).length) h += fold("似た物質との違い・ひっかけ注意",
      ((s.compare || []).length ? '<ul class="cmp">' + s.compare.map((c) => "<li><b>" + esc(c.with) + "</b><br>" + rich(c.diff) + "</li>").join("") + "</ul>" : "") +
      ((s.hikkake || []).length ? '<ul class="hk">' + s.hikkake.map((x) => "<li>" + rich(x) + "</li>").join("") + "</ul>" : ""), false, "sd-cmp");
    const rel = tipRowsFor(s.id);
    if (rel.length) h += fold("早見表に出てくる手がかり(" + rel.length + ")", '<ul class="sheet-rows">' + rel.map((r) => '<li><span class="sheet-note">' + esc(r.sheet) + '</span><span class="sheet-cue">' + rich(r.cue) + '</span><span class="sheet-ans"><span class="arrow">→</span>' + rich(r.answer) + "</span></li>").join("") + "</ul>", false, "sd-tip");
    if ((s.sources || []).length) h += fold("出典", '<div class="src">' + s.sources.map((x) => "<div>" + esc(x.type ? "[" + x.type + "] " : "") + esc(x.label) + (x.url ? '<br><a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.url) + "</a>" : "") + "</div>").join("") + "</div>", false, "sd-src");
    return h + ad("detail") + "</div>";
  }

  /* ---------- 法規 ---------- */
  function renderLaw() {
    const L = D.law, done = L.items.filter((i) => lawSt(i.id) === 2).length;
    const items = [...L.items].sort((a, b) => LEVELS.indexOf((a.likelihood || {}).level || "C") - LEVELS.indexOf((b.likelihood || {}).level || "C"));
    let h = '<div class="view"><div class="panel"><h3 class="ghs">法規まとめ</h3><p class="note">' + esc(L.meta.as_of) + "の条文で作成しています。" + esc(L.meta.abbr) + "。出題予想が高い順に並べています(覚えた " + done + "/" + L.items.length + ")。</p>" +
      '<p class="note legend">' + lvBadge("S") + " 埼玉で3年連続 " + lvBadge("A") + " 埼玉で1〜2回か他県で多い " + '<span class="amend">法改正注意</span> 出題時から条文が変わった</p></div>';
    h += items.map((it) => {
      const lk = it.likelihood || {}, amended = (it.hikkake || []).some((x) => x.includes("法改正注意"));
      const body = stButtons("law", it.id, lawSt(it.id)) +
        '<p class="pred-line">' + lvBadge(lk.level || "C") + " " + esc(lk.note || "") + "</p>" +
        '<blockquote class="law-text">' + esc(it.law_text) + "</blockquote>" +
        '<ul class="points">' + it.summary.map((p) => "<li>" + rich(p) + "</li>").join("") + "</ul>" +
        (it.mnemonic ? '<div class="memo-box"><h3>覚え方</h3><p>' + rich(it.mnemonic) + "</p></div>" : "") +
        goroBox(goroFor((g) => g.law === it.id)) +
        FG.forLaw(it.id).map((f) => FG.render(f)).join("") +
        (it.why ? "<p><b>なぜ:</b> " + rich(it.why) + "</p>" : "") +
        (it.scenarios || []).map((sc) => '<div class="scene"><p class="q">' + rich(sc.q) + '</p><p class="a">' + rich(sc.a) + "</p></div>").join("") +
        ((it.compare || []).length ? '<ul class="cmp">' + it.compare.map((c) => "<li><b>" + esc(c.with) + "</b><br>" + rich(c.diff) + "</li>").join("") + "</ul>" : "") +
        ((it.hikkake || []).length ? '<ul class="hk">' + it.hikkake.map((x) => "<li>" + rich(x).replace("【法改正注意】", '<span class="amend">法改正注意</span> ') + "</li>").join("") + "</ul>" : "") +
        '<div class="row-actions"><button type="button" class="btn btn-small" data-quiz-law="1">法規の過去問を解く</button></div>';
      return fold('<span class="lawhead"><span class="lawtitle">' + lvBadge(lk.level || "C") + "<span>" + esc(it.title) + (amended ? ' <span class="amend">法改正注意</span>' : "") + '</span></span><span class="law-art">' + esc(it.articles.join("、")) + " ／ " + MARK[lawSt(it.id)] + " " + ST[lawSt(it.id)] + "</span></span>", body, false, "law-" + it.id);
    }).join("");
    h += '<div class="src">' + L.meta.sources.map((s) => "<div>" + esc(s.label) + ': <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.url) + "</a></div>").join("") + "</div>";
    return h + "</div>";
  }

  /* ---------- 過去問 ---------- */
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(cur) === String(v) ? " selected" : "") + ">" + esc(label) + "</option>"; }
  function field(id, label, opts) { return '<div class="field"><label for="' + id + '">' + esc(label) + '</label><select id="' + id + '">' + opts + "</select></div>"; }
  function renderQuizHome() {
    const all = statsFor(D.questions);
    const wrong = D.questions.filter((q) => P.hist[q.id] && P.hist[q.id].last === false).length;
    const sets = [...new Set(D.questions.map((q) => q.org + " " + q.year))];
    const subsWithQ = D.substances.filter((s) => s._qn).sort((a, b) => a.reading.localeCompare(b.reading, "ja"));
    const p = state.prefs.quiz || {};
    let h = '<div class="view"><section class="panel stats"><h3 class="ghs">これまでの成績</h3>' +
      '<div class="stat-top"><span class="stat-big">' + pct(all.c, all.a) + '</span><span class="count">正答率(' + all.c + "/" + all.a + "回)。解いた問題 " + all.seen + "/" + all.total + "問</span></div>" +
      '<div class="bars">' + SUBJECTS.map((sj) => { const st = statsFor(D.questions.filter((q) => q.subject === sj)); return bar(sj, st.c, st.a || 1, pct(st.c, st.a)); }).join("") + "</div>" +
      '<div class="row-actions"><button type="button" class="btn btn-ghost btn-small" data-act="wrong-all">まちがえた問題の一覧</button></div></section>';
    h += '<section class="panel setup"><h3 class="ghs">出題の設定</h3>' +
      field("qfocus", "重点", opt("", "指定しない", p.focus) + opt("hi", "出題予想の高い物質(S・A)と法規の頻出論点", p.focus) + opt("unexp", "他県では頻出・埼玉ではまだ出ていない物質", p.focus) + opt("new", "まだ解いていない問題", p.focus)) +
      field("qsubj", "科目", '<option value="">すべての科目</option>' + SUBJECTS.map((s) => opt(s, s, p.subj)).join("")) +
      field("qsub", "物質", '<option value="">指定しない</option>' + subsWithQ.map((s) => opt(s.id, s.name + "(" + s._qn + "問)", p.sub)).join("")) +
      field("qset", "試験(団体・年度)", '<option value="">すべての試験</option>' + (D.edition === "public" ? "" : opt("埼玉県", "埼玉県のみ(R5〜R7)", p.set)) + sets.map((s) => opt(s, s, p.set)).join("")) +
      field("qnum", "問題数", [10, 20, 40, 0].map((n) => opt(String(n), n ? n + "問" : "条件に合う全問", String(p.num != null ? p.num : 10))).join("")) +
      field("qorder", "順番", opt("rand", "ランダム", p.order || "rand") + opt("seq", "試験の順", p.order)) +
      '<label class="toggle"><input id="qwrong" type="checkbox"' + (p.wrong ? " checked" : "") + "> 前回まちがえた問題だけ(" + wrong + "問)</label>" +
      '<div class="row-actions"><button type="button" class="btn" data-act="start">出題する</button><span class="count" id="qcount"></span></div></section>';
    return h + "</div>";
  }
  function readSetup() { return { focus: $("#qfocus").value, subj: $("#qsubj").value, sub: $("#qsub").value, set: $("#qset").value, num: Number($("#qnum").value), order: $("#qorder").value, wrong: $("#qwrong").checked }; }
  function pool(p) {
    return D.questions.filter((q) => {
      if (p.ids) return p.ids.includes(q.id);
      if (p.subj && q.subject !== p.subj) return false;
      if (p.sub && !q._sids.includes(p.sub)) return false;
      if (p.set) { if (p.set === "埼玉県") { if (q.org !== "埼玉県") return false; } else if (q.org + " " + q.year !== p.set) return false; }
      if (p.wrong && !(P.hist[q.id] && P.hist[q.id].last === false)) return false;
      if (p.focus === "hi" && !(q._hiLaw || q._sids.some((id) => ["S", "A"].includes(lv(D.byId.get(id)))))) return false;
      if (p.focus === "unexp" && !q._sids.some((id) => unexplored(D.byId.get(id)))) return false;
      if (p.focus === "new" && P.hist[q.id]) return false;
      return true;
    });
  }
  function startQuiz(p, keep) {
    state.lastQuiz = p;
    if (keep !== false) { state.prefs.quiz = p; save(PKEY, state.prefs); }
    let qs = pool(p);
    if (p.order === "rand") { for (let i = qs.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [qs[i], qs[j]] = [qs[j], qs[i]]; } }
    if (p.num) qs = qs.slice(0, p.num);
    state.tab = "quiz"; state.wrongAll = false;
    state.quiz = qs.length ? { list: qs, i: 0, picked: null, score: 0 } : { list: [], i: 0, empty: true };
    render(true);
  }
  function memoBox(mems) { return mems.length ? '<div class="memo-box"><h3>覚え方</h3>' + mems.map((x) => '<p><span class="memo-name">' + esc(x.name) + "</span>: " + rich(x.mnemonic) + "</p>").join("") + "</div>" : ""; }
  function renderQuestion() {
    const z = state.quiz;
    if (z.empty) return '<div class="view"><div class="empty">この条件に合う問題がありません。<br>重点・科目・物質・試験の指定を減らしてください。</div><button type="button" class="btn" data-act="quiz-home">設定に戻る</button></div>';
    if (z.i >= z.list.length) {
      return '<div class="view"><section class="panel"><h3 class="ghs">おつかれさまでした</h3><p class="stat-big">' + z.score + " / " + z.list.length + '問 正解</p><p class="note">まちがえた問題は、ホームの「最近まちがえた問題」と、まちがえた問題の一覧にたまります。</p></section>' +
        '<div class="row-actions"><button type="button" class="btn" data-act="again">同じ設定でもう一度</button><button type="button" class="btn btn-ghost" data-act="wrong-retry">まちがえた問題を解き直す</button><button type="button" class="btn btn-ghost" data-act="quiz-home">設定に戻る</button></div>' + ad("result") + "</div>";
    }
    const q = z.list[z.i], done = z.picked != null, ex = q.explanation || {}, r = P.hist[q.id];
    let h = '<div class="view"><div class="qnav"><button type="button" class="btn btn-ghost btn-small" data-act="quiz-home">設定に戻る</button><span class="progress">' + (z.i + 1) + " / " + z.list.length + "問(正解 " + z.score + ")</span></div>";
    h += '<div class="panel"><div class="qmeta"><span>' + esc(q.org + " " + q.year + " 問" + q.no) + "</span><span>" + esc(q.subject) + "</span>" +
      (q.amendment_note ? '<span class="amend">法改正注意</span>' : "") + (q.needs_check ? '<span class="chk">要確認</span>' : "") +
      '<span class="hist-tag">' + (r ? "これまで " + r.c + "/" + r.n + "回正解" : "はじめて") + "</span></div>" +
      '<p class="qstem">' + rich(q.stem) + "</p>" +
      ((q.statements || []).length ? '<ul class="qstmts">' + q.statements.map((s) => "<li><b>" + esc(s.label) + "</b><span>" + rich(s.text) + "</span></li>").join("") + "</ul>" : "") + "</div>";
    h += '<div class="choices" role="group" aria-label="選択肢">' + q.choices.map((c) => {
      let cls = "choice", v = "";
      if (done) { if (c.n === q.answer) { cls += " is-answer"; v = "正答"; } else if (c.n === z.picked) { cls += " is-picked-wrong"; v = "あなたの解答"; } }
      return '<button type="button" class="' + cls + '" data-pick="' + c.n + '"' + (done ? " disabled" : "") + '><span class="cn">' + c.n + '</span><span class="ct">' + rich(c.text) + '</span><span class="cv">' + v + "</span></button>";
    }).join("") + "</div>";
    if (done) {
      const ok = z.picked === q.answer;
      const subs = q._sids.map((id) => D.byId.get(id)).filter(Boolean), mems = subs.filter((x) => x.mnemonic);
      h += '<div class="verdict ' + (ok ? "ok" : "ng") + '" role="status"><span class="verdict-icon" aria-hidden="true">' + (ok ? "○" : "×") + "</span>" + (ok ? "正解" : "不正解。正答は " + q.answer) + "</div>";
      if (!ok) h += memoBox(mems);
      h += '<section class="panel"><h3>解説</h3><p>' + rich(ex.conclusion || "") + "</p>";
      if ((ex.statements || []).length) h += '<h3>各記述の正誤</h3><ul class="why-list">' + ex.statements.map((s) => '<li><span class="tf ' + (s.tf ? "t" : "f") + '">' + esc(s.label) + (s.tf ? " 正" : " 誤") + "</span><span>" + rich(s.why) + "</span></li>").join("") + "</ul>";
      if ((ex.choices || []).length) h += '<h3>各選択肢</h3><ul class="why-list">' + ex.choices.map((c) => '<li><span class="tf ' + (c.ok ? "t" : "f") + '">' + esc(c.n) + (c.ok ? " ○" : " ×") + "</span><span>" + rich(c.why) + "</span></li>").join("") + "</ul>";
      if (ex.calc) h += '<h3>計算の手順</h3><p class="calc">' + rich(ex.calc) + "</p>";
      if (ex.tip) h += '<p class="tip">' + rich(ex.tip) + "</p>";
      if ((ex.law_basis || []).length) h += '<p class="note">根拠: ' + esc(ex.law_basis.join("、")) + "</p>";
      if (q.amendment_note) h += '<p><span class="amend">法改正注意</span> ' + rich(q.amendment_note) + "</p>";
      if (q.needs_check) h += '<p><span class="chk">要確認</span> ' + esc(q.needs_check) + "</p>";
      if (ok) h += memoBox(mems);
      h += '<p class="note">出典: <a href="' + esc(q.source_url) + '" target="_blank" rel="noopener">問題</a> ／ <a href="' + esc(q.answer_url) + '" target="_blank" rel="noopener">公式の正答</a></p>' + (q.credit ? '<p class="note">' + esc(q.credit) + "</p>" : "");
      if (subs.length) h += '<div class="row-actions">' + subs.map((s) => '<button type="button" class="btn btn-ghost btn-small" data-open="' + esc(s.id) + '">' + esc(s.name) + "の物質ページ</button>").join("") + "</div>";
      h += "</section>";
      h += '<div class="qnav"><span></span><button type="button" class="btn" data-act="next">' + (z.i + 1 < z.list.length ? "次の問題" : "結果を見る") + "</button></div>";
    }
    return h + "</div>";
  }
  function pick(n) {
    const z = state.quiz, q = z.list[z.i];
    if (z.picked != null) return;
    z.picked = n;
    const ok = n === q.answer, now = Date.now();
    if (ok) z.score++;
    const r = P.hist[q.id] || { n: 0, c: 0, log: [] };
    r.n++; if (ok) r.c++; r.last = ok; r.t = now; r.log = [...(r.log || []), [now, n, ok ? 1 : 0]].slice(-8);
    P.hist[q.id] = r; bumpDay();
    q._sids.forEach((id) => { if (!subSt(id)) P.subs[id] = { st: 1, t: now }; });
    touch();
    render(false);
    const v = $(".verdict"); if (v) v.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  /* ---------- 対策(メタ読み・法改正・覚え方) ---------- */
  function renderPrep() {
    const M = D.meta, A = D.amendments, T = D.tips;
    let h = '<div class="view"><section class="panel"><h3 class="ghs">対策ノート</h3><p class="note">過去問13回分から読み取れる出題の癖、次の試験で出そうな法改正、覚え方の早見表をまとめています。</p>' +
      '<div class="jump"><a href="#prep-meta" data-jump="prep-meta">出題の癖</a><a href="#prep-rank" data-jump="prep-rank">出題予想</a><a href="#prep-amend" data-jump="prep-amend">法改正PICK</a><a href="#prep-figs" data-jump="prep-figs">図解</a><a href="#prep-goro" data-jump="prep-goro">語呂合わせ</a><a href="#prep-tips" data-jump="prep-tips">早見表</a></div></section>';
    h += fold('<span class="lawhead"><span>出題の癖(メタ読み)</span><span class="law-art">' + (M.facts || []).length + "項目。数字はすべて過去問から集計</span></span>",
      (M.facts || []).map((f) => '<div class="meta-item"><p class="meta-title">' + esc(f.title) + '</p><p class="meta-fact"><span class="meta-k">事実</span>' + rich(f.fact) + '</p><p class="meta-how"><span class="meta-k k2">対策</span>' + rich(f.howto) + "</p></div>").join(""), false, "prep-meta");
    const top = [...D.substances].sort((a, b) => b.frequency.sets - a.frequency.sets || b.frequency.count - a.frequency.count).slice(0, 25);
    h += fold('<span class="lawhead"><span>出題予想ランキング</span><span class="law-art">物質25・法規S。計算方法つき</span></span>',
      '<ul class="intro-list">' + (M.method || []).map((x) => "<li>" + rich(x) + "</li>").join("") + "</ul>" +
      '<h3>物質</h3><ol class="rank">' + top.map((s) => '<li><button type="button" class="wl-b" data-open="' + esc(s.id) + '">' + lvBadge(lv(s)) + '<span class="wl-main"><span class="sname">' + esc(s.name) + '</span><span class="note">13回中' + s.frequency.sets + "回 ／ 埼玉の主題: " + esc((s.frequency.saitama_topic || []).join("、") || "なし") + " ／ " + MARK[subSt(s.id)] + " " + ST[subSt(s.id)] + "</span></span></button></li>").join("") + "</ol>" +
      '<h3>法規(予想S)</h3><ul class="intro-list">' + D.law.items.filter((i) => (i.likelihood || {}).level === "S").map((i) => '<li><button type="button" class="linkish" data-goto="law:' + esc(i.id) + '">' + esc(i.title) + "</button>(" + esc(i.articles[0]) + ")</li>").join("") + "</ul>", false, "prep-rank");
    h += fold('<span class="lawhead"><span>次の試験で出そうな法改正 <span class="amend">PICK</span></span><span class="law-art">' + (A.items || []).length + "件。○×の確認問題つき</span></span>",
      '<p class="note">' + esc(A.as_of || "") + '</p><p class="note">' + esc(A.how || "") + "</p>" + (A.items || []).map(amendCard).join(""), false, "prep-amend");
    h += '<section class="panel" id="prep-figs"><h3 class="ghs">図解で覚える</h3><p class="note">見たい図解のボタンを押すと、その図が開きます。下の一覧の見出しを押しても開けます。</p><div class="fig-btns">' +
      FG.all.map(([id, t]) => '<button type="button" class="fig-btn" data-fig="' + esc(id) + '">' + esc(t) + "</button>").join("") + "</div></section>" +
      FG.all.map(([id, t]) => fold('<span class="lawhead"><span>' + esc(t) + "</span></span>", FG.render(id), false, "fig-" + id)).join("");
    const G = D.goro;
    h += '<section class="panel" id="prep-goro"><h3 class="ghs">語呂合わせ集</h3><p class="note">' + esc(G.intro || "") + "</p></section>" +
      (G.groups || []).map((g) => fold('<span class="lawhead"><span><span class="goro-tag">語呂</span>' + esc(g.title) + '</span><span class="law-art">' + g.items.length + "個</span></span>",
        '<div class="goro-list">' + g.items.map((it, i) => {
          const key = "g-" + g.id + "-" + i, hideG = !!state.prefs.tipsHide;
          const links = (it.sids || []).map((id) => D.byId.get(id)).filter(Boolean).map((x) => '<button type="button" class="linkish" data-open="' + esc(x.id) + '">' + esc(x.name) + "</button>").join(" ") +
            (it.law ? ' <button type="button" class="linkish" data-goto="law:' + esc(it.law) + '">法規まとめ</button>' : "");
          return '<div class="goro-item"><p class="goro-line">' + esc(it.goro) + "</p>" + (hideG ? '<button class="cover" type="button" data-reveal="' + key + '">覚える事実を見る</button><p hidden data-revealed="' + key + '" class="goro-fact">' + rich(it.fact) + "</p>" : '<p class="goro-fact">' + rich(it.fact) + "</p>") + (links ? '<p class="sheet-links">' + links + "</p>" : "") + "</div>";
        }).join("") + "</div>", false, "goro-" + g.id)).join("");
    const hide = !!state.prefs.tipsHide;
    h += '<section class="panel" id="prep-tips"><h3 class="ghs">覚え方の早見表</h3><ul class="intro-list">' + (T.intro || []).map((x) => "<li>" + rich(x) + "</li>").join("") + "</ul>" +
      '<label class="toggle"><input id="tipshide" type="checkbox"' + (hide ? " checked" : "") + "> 答えを隠す(早見表と語呂合わせを一問一答にする)</label></section>";
    h += (T.sheets || []).map((sh) => {
      const rows = (sh.rows || []).map((r, i) => {
        const key = "t-" + sh.id + "-" + i, ans = rich(r.answer);
        const links = (r.sids || []).map((id) => D.byId.get(id)).filter(Boolean).map((x) => '<button type="button" class="linkish" data-open="' + esc(x.id) + '">' + esc(x.name) + "</button>").join(" ");
        return "<tr><td>" + rich(r.cue) + (r.note ? '<small class="sheet-note">' + rich(r.note) + "</small>" : "") + "</td><td>" + (hide ? '<button class="cover" type="button" data-reveal="' + key + '">答え</button><span hidden data-revealed="' + key + '"><b>' + ans + "</b></span>" : "<b>" + ans + "</b>") + (links ? '<span class="sheet-links">' + links + "</span>" : "") + "</td></tr>";
      }).join("");
      return fold('<span class="lawhead"><span>' + esc(sh.title) + '</span><span class="law-art">' + (sh.rows || []).length + "項目</span></span>",
        (sh.why ? '<p class="sheet-why">' + rich(sh.why) + "</p>" : "") + '<div class="tbl-wrap"><table class="tbl tbl-sheet"><thead><tr><th>手がかり</th><th>答え</th></tr></thead><tbody>' + rows + "</tbody></table></div>" + (sh.tip ? '<p class="sheet-tip">' + rich(sh.tip) + "</p>" : ""), false, "tip-" + sh.id);
    }).join("");
    return h + "</div>";
  }
  function amendCard(it) {
    const past = (it.past || []).map((id) => D.qById.get(id)).filter(Boolean);
    return '<article class="amend-card"><div class="amend-head"><span class="rank-no">' + esc(it.rank) + '</span><div><p class="amend-title">' + esc(it.title) + '</p><p class="note">' + esc(it.law) + " ／ 施行 " + esc(it.date) + ' ／ 出そう度 <b class="lk">' + esc(it.level) + "</b></p></div></div>" +
      '<dl class="facts"><div><dt>改正前</dt><dd>' + rich(it.before) + "</dd></div><div><dt>改正後</dt><dd><b>" + rich(it.after) + "</b></dd></div><div><dt>出そうな理由</dt><dd>" + rich(it.why_likely) + "</dd></div><div><dt>出題の形</dt><dd>" + rich(it.how_asked) + "</dd></div>" + (it.trap ? "<div><dt>ひっかけ</dt><dd>" + rich(it.trap) + "</dd></div>" : "") + "</dl>" +
      ((it.drill || []).length ? '<div class="drill"><p class="meta-title">確認の○×(オリジナル問題)</p>' + it.drill.map((d, i) => {
        const k = it.id + "-" + i, ans = state.drill[k], right = d.a ? 1 : 0;
        return '<div class="drill-q"><p>' + rich(d.q) + '</p><div class="row-actions"><button type="button" class="btn btn-ghost btn-small" data-drill="' + k + ':1"' + (ans != null ? " disabled" : "") + '>○ 正しい</button><button type="button" class="btn btn-ghost btn-small" data-drill="' + k + ':0"' + (ans != null ? " disabled" : "") + ">× 誤り</button></div>" +
          (ans != null ? '<p class="verdict ' + (ans === right ? "ok" : "ng") + '">' + (ans === right ? "○ 正解" : "× 不正解") + "。答えは「" + (d.a ? "正しい" : "誤り") + "」。" + rich(d.why) + "</p>" : "") + "</div>";
      }).join("") + "</div>" : "") +
      (past.length ? '<div class="row-actions"><button type="button" class="btn btn-small" data-quiz-ids="' + esc(past.map((q) => q.id).join(",")) + '">関係する過去問を解く(' + past.length + "問)</button></div>" : "") + "</article>";
  }

  /* ---------- 画面の切り替え ---------- */
  function currentSub() { const m = location.hash.match(/^#s-([a-z0-9-]+)$/); return m && D.byId.get(m[1]); }
  function render(resetScroll) {
    const main = $("#main");
    document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t.dataset.tab === state.tab));
    const open = resetScroll ? [] : [...main.querySelectorAll("details[open]")].map((d) => d.id).filter(Boolean);
    if (state.tab === "home") main.innerHTML = state.wrongAll ? renderWrongAll() : renderHome();
    else if (state.tab === "subs") { const s = currentSub(); main.innerHTML = s ? renderSubDetail(s) : renderSubsList(); }
    else if (state.tab === "law") main.innerHTML = renderLaw();
    else if (state.tab === "prep") main.innerHTML = renderPrep();
    else { main.innerHTML = state.quiz ? renderQuestion() : renderQuizHome(); if (!state.quiz) updateCount(); }
    open.forEach((id) => { const d = document.getElementById(id); if (d) d.open = true; });
    if (resetScroll) window.scrollTo(0, 0);
    fillAds();
  }
  function updateCount() { const el = $("#qcount"); if (el) el.textContent = "条件に合う問題: " + pool(readSetup()).length + "問"; }
  function setTab(t) {
    state.tab = t; state.wrongAll = false; state.prefs.tab = t; save(PKEY, state.prefs);
    if (t !== "subs" && location.hash.startsWith("#s-")) history.replaceState(null, "", location.pathname + location.search);
    render(true);
  }
  function openSub(id) {
    if (!subSt(id)) setSt("subs", id, 1);
    state.tab = "subs";
    if (location.hash === "#s-" + id) render(true); else location.hash = "s-" + id;
  }
  function clearHash() { if (location.hash) history.replaceState(null, "", location.pathname + location.search); }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("button, a"); if (!t) return;
    if (t.dataset.tab) return setTab(t.dataset.tab);
    if (t.dataset.open) return openSub(t.dataset.open);
    if (t.dataset.fig) { const d = document.getElementById("fig-" + t.dataset.fig); if (d) { d.open = true; d.scrollIntoView({ block: "start" }); } return; }
    if (t.dataset.jump) { e.preventDefault(); const d = document.getElementById(t.dataset.jump); if (d) { if (d.tagName === "DETAILS") d.open = true; d.scrollIntoView({ block: "start" }); } return; }
    if (t.dataset.reveal) { const k = t.dataset.reveal, sp = t.parentNode.querySelector('[data-revealed="' + k + '"]'); if (sp) { sp.hidden = false; t.remove(); } return; }
    if (t.dataset.st) { const [kind, id, st] = t.dataset.st.split(":"); setSt(kind, id, Number(st)); return render(false); }
    if (t.dataset.chip) {
      const g = t.dataset.chip, v = t.dataset.val;
      if (Array.isArray(state.f[g])) { const i = state.f[g].indexOf(v); i >= 0 ? state.f[g].splice(i, 1) : state.f[g].push(v); } else state.f[g] = !state.f[g];
      return render();
    }
    if (t.dataset.goto) { const [tab, id] = t.dataset.goto.split(":"); clearHash(); state.tab = tab; state.wrongAll = false; render(true); const d = document.getElementById(tab + "-" + id); if (d) { d.open = true; d.scrollIntoView({ block: "start" }); } return; }
    if (t.dataset.drill) { const [k, v] = t.dataset.drill.split(":"); state.drill[k] = Number(v); return render(false); }
    if (t.dataset.review) { clearHash(); return startQuiz({ ids: [t.dataset.review], order: "seq", num: 0 }, false); }
    if (t.dataset.quizIds) { clearHash(); return startQuiz({ ids: t.dataset.quizIds.split(","), order: "seq", num: 0 }, false); }
    if (t.dataset.quizSub) { clearHash(); return startQuiz({ sub: t.dataset.quizSub, order: "seq", num: 0 }, false); }
    if (t.dataset.quizLaw) return startQuiz({ subj: "法規", order: "rand", num: 10 }, false);
    if (t.dataset.pick) return pick(Number(t.dataset.pick));
    const a = t.dataset.act;
    if (a === "back") { location.hash = ""; return; }
    if (a === "home") { state.wrongAll = false; return render(true); }
    if (a === "toggle-filters") { state.prefs.filtersOpen = !state.prefs.filtersOpen; save(PKEY, state.prefs); return render(); }
    if (a === "clear-filters") { state.f = emptyF(); return render(); }
    if (a === "start") return startQuiz(readSetup());
    if (a === "next") { state.quiz.i++; state.quiz.picked = null; return render(true); }
    if (a === "again") return startQuiz(state.lastQuiz || state.prefs.quiz || {}, false);
    if (a === "quiz-home") { state.quiz = null; return render(true); }
    if (a === "quiz-saitama") return startQuiz({ set: "埼玉県", order: "rand", num: 10 }, false);
    if (a === "quiz-any") return startQuiz({ order: "rand", num: 10 }, false);
    if (a === "wrong-all") { clearHash(); state.tab = "home"; state.wrongAll = true; return render(true); }
    if (a === "wrong-retry") return startQuiz({ wrong: true, order: "rand", num: 0 }, false);
    if (a === "reset") { state.confirmReset = true; return render(); }
    if (a === "reset-no") { state.confirmReset = false; return render(); }
    if (a === "reset-yes") { const target = P.target; P = emptyProg(); P.target = target; P.migrated = 1; touch(); state.confirmReset = false; return render(); }
    if (a === "io") { state.ioOpen = !state.ioOpen; state.ioMsg = ""; return render(); }
    if (a === "copy") {
      const ta = $("#iotext"); if (!ta) return;
      const fallback = () => { ta.focus(); ta.select(); const m = t.parentNode.querySelector('[role="status"]'); if (m) m.textContent = "選択しました。コピーしてください"; };
      try { navigator.clipboard.writeText(ta.value).then(() => { state.ioMsg = "コピーしました"; render(); }, fallback); } catch (x) { fallback(); }
      return;
    }
    if (a === "import") {
      try { const o = JSON.parse($("#iotext").value); if (!o || typeof o !== "object" || !o.hist) throw 0; P = mergeProg(P, o); touch(); state.ioMsg = "読み込みました(記録を合わせました)"; }
      catch (x) { state.ioMsg = "読み込めませんでした。書き出した文字をすべて貼り付けてください"; }
      return render();
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "sq") { state.q = e.target.value; const pos = e.target.selectionStart; render(); const el = $("#sq"); if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (x) {} } }
  });
  document.addEventListener("change", (e) => {
    const id = e.target.id;
    if (id === "memo") { state.memo = e.target.checked; state.prefs.memo = state.memo; save(PKEY, state.prefs); render(); }
    else if (id === "sort") { state.sort = e.target.value; state.prefs.sort = state.sort; save(PKEY, state.prefs); render(); }
    else if (id === "tipshide") { state.prefs.tipsHide = e.target.checked; save(PKEY, state.prefs); render(false); }
    else if (id === "target") { P.target = e.target.value; touch(); render(false); }
    else if (/^q(focus|subj|sub|set|num|order|wrong)$/.test(id)) updateCount();
  });
  window.addEventListener("hashchange", () => { if (location.hash.startsWith("#s-")) state.tab = "subs"; render(true); });

  getData().then((d) => {
    D = prepare(d);
    if (location.hash.startsWith("#s-")) state.tab = "subs"; else if (state.prefs.tab) state.tab = state.prefs.tab;
    render();
    connectRemote();
  }).catch(() => { $("#main").innerHTML = '<div class="empty">データを読み込めませんでした。ページを再読み込みしてください。</div>'; });

  const C = window.DOKUGEKI_CONFIG || {};
  if (C.adsenseClient && location.protocol.startsWith("http") && !document.querySelector('script[src*="adsbygoogle.js"]')) {
    const s = document.createElement("script"); s.async = true; s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(C.adsenseClient);
    document.head.appendChild(s);
  }
  if ("serviceWorker" in navigator && location.protocol.startsWith("http") && !/claude\.ai$|claudeusercontent\.com$/.test(location.hostname)) {
    const hadController = !!navigator.serviceWorker.controller;
    let reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => { if (hadController && !reloaded) { reloaded = true; location.reload(); } });
    navigator.serviceWorker.register("sw.js").then((reg) => reg.update()).catch(() => {});
  }
})();
