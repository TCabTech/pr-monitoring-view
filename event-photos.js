'use strict';

// Verified images from reporting on the corresponding event.
const eventPhotos = {
 "2026-10|时的科技|10.09|海外进展": {
  "file": "event-photos/event-00.webp",
  "article": "https://www.tcabtech.com/e20-evtol-malaysia-debut-tcab-tech-southeast-asia-regional-business-center/"
 },
 "2026-10|峰飞航空|10.14|品牌传播": {
  "file": "event-photos/event-03.webp",
  "article": "https://www.dikongjingji.com.cn/tt/7083.html"
 },
 "2026-10|峰飞航空|10月|海外进展": {
  "file": "event-photos/event-05.webp",
  "article": "https://www.sunway.com.my/media/press-release/sunway-eyes-autonomous-transport-electric-aviation-in-malaysia/"
 },
 "2026-10|沃飞长空|10.14|品牌传播": {
  "file": "event-photos/event-06.webp",
  "article": "https://www.zidonghua.com.cn/CECTF/ShowInME/377466.html"
 },
 "2026-10|沃飞长空|10.22|品牌传播": {
  "file": "event-photos/event-07.webp",
  "article": "https://static.cdsb.com/micropub/Articles/202610/d69c7cae9cf1eb031695ec1cb217912b.html"
 },
 "2026-10|亿航智能|10月上旬|品牌传播": {
  "file": "event-photos/event-09.webp",
  "article": "https://www.ehang.com/news/1406.html"
 },
 "2026-10|亿航智能|10.20–21|海外进展": {
  "file": "event-photos/event-10.webp",
  "article": "https://www.ehang.com/news/1408.html"
 },
 "2026-10|BETA|10.20–21|适航与技术": {
  "file": "event-photos/event-11.webp",
  "article": "https://beta.team/stories/beta-becomes-first-company-to-secure-landmark-faa-authorization-to-conduct-flight-operations-with-prospective-customers-in-electric-vtol-aircraft"
 },
 "2026-10|BETA|10.07|试飞进展": {
  "file": "event-photos/event-12.webp",
  "article": "https://beta.team/stories/beta-completes-utah-eipp-operations-to-support-the-future-of-radiopharmaceutical-delivery-and-treatment"
 },
 "2026-10|Joby|10.30|试飞进展": {
  "file": "event-photos/event-13.webp",
  "article": "https://www.jobyaviation.com/news/joby-brings-its-vertical-takeoff-and-landing-air-taxi-to-florida"
 },
 "2026-10|Joby|10月|品牌传播": {
  "file": "event-photos/event-14.webp",
  "article": "https://santacruzworks.squarespace.com/news/joby-aviation-named-one-of-times-best-inventions-of-2026"
 },
 "2026-10|Archer|10月|试飞进展": {
  "file": "event-photos/event-15.webp",
  "article": "https://www.investors.archer.com/news/news-details/2026/Archer-Completes-Historic-Electric-Air-Taxi-Flights-Over-San-Francisco-Bay/default.aspx"
 },
 "2026-10|Archer|10.06|品牌传播": {
  "file": "event-photos/event-16.webp",
  "article": "https://www.fastcompany.com/91612660/transportation-next-big-things-in-tech-2026"
 },
 "2026-10|Archer|10月下旬|品牌传播": {
  "file": "event-photos/event-17.webp",
  "article": "https://www.investors.archer.com/news/news-details/2026/Archer-Unveils-Texas-Air-Taxi-Networks-Across-Houston-Dallas-and-Austin/default.aspx"
 },
 "2026-10|Archer|10.29|海外进展": {
  "file": "event-photos/event-18.webp",
  "article": "https://investors.archer.com/news/news-details/2026/Archer-and-ITA-Airways-Partner-on-the-Development-of-Air-Taxi-Services-in-Italy/default.aspx"
 },
 "2026-10|小鹏汇天|10月|海外进展": {
  "file": "event-photos/event-21.webp",
  "article": "https://www.ecns.cn/cns-wire/2026-10-21/detail-ihfmiwhm0738291.shtml"
 },
 "2026-10|齐飞航空|10月|资本与经营": {
  "file": "event-photos/event-23.webp",
  "article": "https://www.36kr.com/p/4018318436110215"
 },
 "2026-10|零重力|10.10|订单与合作": {
  "file": "event-photos/event-24.webp",
  "article": "https://www.lzlair.com/news/165.html"
 },
 "2026-10|零重力|10.22|品牌传播": {
  "file": "event-photos/event-25.webp",
  "article": "https://www.lzlair.com/news/166.html"
 },
 "2026-10|御风未来|10月 · 工博会|品牌传播": {
  "file": "event-photos/event-27.webp",
  "article": "https://caifuhao.eastmoney.com/news/20261013163226726954910"
 },
 "2026-09|时的科技|09.03–05|品牌传播": {
  "file": "event-photos/event-28.webp",
  "article": "https://www.tcabtech.com/tcab-tech-e20-evtol-factory-layout/"
 },
 "2026-09|时的科技|09.23|品牌传播": {
  "file": "event-photos/event-29.webp",
  "article": "https://www.tcabtech.com/e20-evtol-structural-strength-and-validation/"
 },
 "2026-09|亿航智能|09.29|海外进展": {
  "file": "event-photos/event-32.webp",
  "article": "https://www.ehang.com/news/1403.html"
 },
 "2026-09|亿航智能|09.07–11|海外进展": {
  "file": "event-photos/event-33.webp",
  "article": "https://www.ehang.com/news/1396.html"
 },
 "2026-09|亿航智能|09.09|品牌传播": {
  "file": "event-photos/event-34.webp",
  "article": "https://www.ehang.com/news/1398.html"
 },
 "2026-09|亿航智能|09.14|订单与合作": {
  "file": "event-photos/event-35.webp",
  "article": "https://www.ehang.com/news/1401.html"
 },
 "2026-09|BETA|09.24|试飞进展": {
  "file": "event-photos/event-37.webp",
  "article": "https://beta.team/stories/metro-aviation-beta-technologies-and-washington-county-ems-fly-electric-aircraft-in-texas-emergency-response-demonstration"
 },
 "2026-09|Joby|09.10|试飞进展": {
  "file": "event-photos/event-39.webp",
  "article": "https://www.jobyaviation.com/news/joby-launches-eipp-flights-in-texas"
 },
 "2026-09|Joby|09.18|试飞进展": {
  "file": "event-photos/event-40.webp",
  "article": "https://www.jobyaviation.com/news/joby-completes-first-ever-fully-autonomous-flight-across-the-united-states"
 },
 "2026-09|零重力|09.03–05|品牌传播": {
  "file": "event-photos/event-47.webp",
  "article": "https://www.lzlair.com/news/156.html"
 },
 "2026-09|零重力|09.19|订单与合作": {
  "file": "event-photos/event-48.webp",
  "article": "https://www.lzlair.com/news/161.html"
 },
 "2026-09|零重力|9月下旬|品牌传播": {
  "file": "event-photos/event-49.webp",
  "article": "https://www.lzlair.com/news/164.html"
 },
 "2026-09|零重力|09.23|订单与合作": {
  "file": "event-photos/event-50.webp",
  "article": "https://www.lzlair.com/news/162.html"
 },
 "2026-10|沃兰特|10.14|订单与合作": {
  "file": "event-photos/event-60.webp",
  "article": "https://www.volantaerotech.com/news/inner/id/36.html"
 },
 "2026-10|沃兰特|10月|适航与技术": {
  "file": "event-photos/event-61.webp",
  "article": "https://www.feiauto.com/xx/1885.html"
 },
 "2026-10|峰飞航空|10.15|订单与合作": {
  "file": "event-photos/event-62.webp",
  "article": "https://huacheng.gz-cmc.com/pages/2026/10/15/ffd3121b301d41a694ab934544a88d20.html"
 },
 "2026-09|小鹏汇天|9月|海外进展": {
  "file": "event-photos/event-66.webp",
  "article": "https://www.rakta.gov.ae/news/ras-alkhaimah-transport-authority-ras-al-khaimah-civil-aviation-department-and-aridge-sign-strategic-partnership-to-enhance-the-advanced-air-mobility-ecosystem-in-the-emirate/"
 },
 "2026-09|华羽先翔|9月|品牌传播": {
  "file": "event-photos/event-67.webp",
  "article": "https://www.hunantoday.cn/news/xhn/202609/33771885.html"
 },
 "2026-10|峰飞航空|10月中旬|品牌传播": {
  "file": "event-photos/event-71.webp",
  "article": "https://www.dikongjingji.com.cn/tt/7083.html"
 },
 "2026-09|Vertical|09.25|海外进展": {
  "file": "event-photos/event-72.webp",
  "article": "https://www.adsadvance.co.uk/vertical-aerospace-valo-uk-manufacturing/"
 },
 "2026-09|峰飞航空|09.10|订单与合作": {
  "file": "event-photos/event-73.webp",
  "article": "https://huacheng.gz-cmc.com/pages/2026/09/11/958b5bbbccec4dd29e1ecea2ff51f470.html"
 }
};
// Verified images from the associated articles and event records.
Object.assign(eventPhotos, {
 "2026-11|Joby|11.04|试飞进展": {
  "file": "event-photos/article-094-01.webp",
  "article": "https://flymco.com/media/press-releases/item/mco-hosts-joby-demonstration-flight-at-new-vertipad/"
 },
 "2026-11|Joby|11.04|资本与经营": {
  "file": "event-photos/article-037-03.webp",
  "article": "https://www.jobyaviation.com/news/joby-reports-third-quarter-2026-financial-results"
 },
 "2026-11|Archer|11.09|适航与技术": {
  "file": "event-photos/article-038-00.webp",
  "article": "https://investors.archer.com/news/news-details/2026/Archer-Announces-Q3-2026-Results-Receives-FAA-Market-Survey-Certificate-Unlocking-LA-Operations-and-Boeing-Deal-Close-Imminent/default.aspx"
 },
 "2026-11|Archer|11.09|资本与经营": {
  "file": "event-photos/article-038-00.webp",
  "article": "https://investors.archer.com/news/news-details/2026/Archer-Announces-Q3-2026-Results-Receives-FAA-Market-Survey-Certificate-Unlocking-LA-Operations-and-Boeing-Deal-Close-Imminent/default.aspx"
 },
 "2026-11|Archer|11.12|品牌传播": {
  "file": "event-photos/article-040-00.webp",
  "article": "https://www.investors.archer.com/news/news-details/2026/Archer-Partners-with-Formula-1/default.aspx"
 },
 "2026-11|SkyDrive|11.17|海外进展": {
  "file": "event-photos/article-042-01.webp",
  "article": "https://skydrive.co.jp/en/news/73279/"
 },
 "2026-11|沃飞长空|11.03|品牌传播": {
  "file": "event-photos/article-046-25.webp",
  "article": "https://cbgc.scol.com.cn/news/8114157"
 },
 "2026-11|沃飞长空|11.05–11.10|品牌传播": {
  "file": "event-photos/article-047-02.webp",
  "article": "https://zhikeji.pconline.com.cn/article/1675198"
 },
 "2026-11|峰飞航空|11.21|品牌传播": {
  "file": "event-photos/article-050-13.webp",
  "article": "https://www.chinanews.com/sh/2026/11-21/10735870.shtml"
 },
 "2026-11|亿航智能|11.06|订单与合作": {
  "file": "event-photos/article-055-02.webp",
  "article": "https://www.ehang.com/cn/news/1415.html"
 },
 "2026-11|亿航智能|11.11|试飞进展": {
  "file": "event-photos/article-056-00.webp",
  "article": "https://www.ehang.com/cn/news/1417.html"
 },
 "2026-11|亿航智能|11.20|试飞进展": {
  "file": "event-photos/article-096-00.webp",
  "article": "https://www.euronews.com/video/2026/11/21/japan-autonomous-air-taxi-completes-passenger-flight-without-a-pilot"
 },
 "2026-11|蓝色向量|11.02|订单与合作": {
  "file": "event-photos/article-059-06.webp",
  "article": "https://www.catl.com/news/10349.html"
 },
 "2026-11|亿维特|11.12|订单与合作": {
  "file": "event-photos/article-060-06.webp",
  "article": "https://www.catl.com/news/10368.html"
 },
 "2026-11|御风未来|11.05–11.10|品牌传播": {
  "file": "event-photos/article-062-00.webp",
  "article": "https://finance.eastmoney.com/a/202611103927292697.html"
 },
 "2026-09|BETA|09.25–28|品牌传播": {
  "file": "event-photos/article-073-01.webp",
  "article": "https://www.dvidshub.net/video/1024616/americas-air-show-2026-day-2-beta-alia-cx300"
 },
 "2026-09|Joby|09.29|资本与经营": {
  "file": "event-photos/article-077-00.webp",
  "article": "https://www.reuters.com/legal/litigation/archer-says-us-court-narrows-joby-aero-lawsuit-claims-2026-10-02/"
 },
 "2026-09|Vertical|09.28|品牌传播": {
  "file": "event-photos/article-080-00.webp",
  "article": "https://finance.yahoo.com/video/vertical-aerospace-ceo-stuart-simpson-184405048.html"
 },
 "2026-09|亿维特|09.23–27|订单与合作": {
  "file": "event-photos/article-092-02.webp",
  "article": "https://finance.eastmoney.com/a/202609263884382526.html"
 },
 "2026-11|国内|11.11|供应链": {
  "file": "event-photos/article-097-06.webp",
  "article": "https://www.catl.com/news/10367.html"
 },
 "2026-11|时的科技|11.09|品牌传播": {
  "file": "event-photos/article-tcab-talent.webp",
  "article": "social-samples/november-2026/tcab-talent.webp"
 },
 "2026-11|时的科技|11.23|品牌传播": {
  "file": "event-photos/article-tcab-routes.webp",
  "article": "social-samples/november-2026/tcab-routes.webp"
 },
 "2026-11|沃飞长空|11.18|品牌传播": {
  "file": "event-photos/article-aerofugia-wechat.webp",
  "article": "social-samples/november-2026/aerofugia-wechat.webp"
 },
 "2026-11|亿航智能|11.03–11.05|品牌传播": {
  "file": "event-photos/article-ehang-barcelona.webp",
  "article": "social-samples/november-2026/ehang-barcelona.webp"
 },
 "2026-11|Vertical|11.23|适航与技术": {
  "file": "event-photos/article-vertical-powercentre.webp",
  "article": "https://aviationweek.com/aerospace/advanced-air-mobility/vertical-aerospace-completes-bristol-powertrain-facility"
 },
 "2026-11|BETA|11.03|资本与经营": {
  "file": "event-photos/november-beta-q3.webp",
  "article": "https://investors.beta.team/"
 },
 "2026-11|小鹏汇天|11.05–11.10|品牌传播": {
  "file": "event-photos/november-aridge-expo.webp",
  "article": "https://www.thepaper.cn/newsDetail_forward_34412497"
 },
 "2026-11|亿航智能|11.17–11.18|品牌传播": {
  "file": "event-photos/november-ehang-apec.webp",
  "article": "https://www.iicnet.cn/article/11267"
 },
 "2026-11|零界航空|11.10|资本与经营": {
  "file": "event-photos/november-zero-boundary.webp",
  "article": "https://www.36kr.com/p/4063336242549893"
 },
 "2026-11|小鹏汇天|11.22|试飞进展": {
  "file": "event-photos/november-aridge-a868.webp",
  "article": "https://www.ithome.com/1/030/561.htm"
 },
 "2026-11|国际|11.05|监管标准": {
  "file": "event-photos/november-easa-moc.webp",
  "article": "https://www.easa.europa.eu/en/document-library/product-certification-consultations/special-condition-vtol",
  "alt": "EASA 第五批 VTOL 适航符合性方法文件首页"
 }
});

Object.assign(eventPhotos, {
 "2026-11|国内|11.24|地方政策": {"file": "event-photos/cover-chengdu-aerospace.webp", "article": "https://news.ifeng.com/c/8yK7i853SYW", "alt": "成都航空航天产业建圈强链发布活动"},
 "2026-11|国际|11.09|监管准备": {"file": "event-photos/cover-thailand-caat.webp", "article": "https://www.caat.or.th/caat-media/221899/", "alt": "泰国民航局先进空中交通资料图"},
 "2026-10|国际|10.22|监管标准": {"file": "event-photos/cover-us-dot.webp", "article": "https://www.faa.gov/newsroom/faa-releases-draft-design-standards-vertical-flight-facilities", "alt": "美国交通部标识"},
 "2026-09|国内|09.08|地方政策": {"file": "event-photos/cover-hangzhou-policy.webp", "article": "https://www.thepaper.cn/newsDetail_forward_34103463", "alt": "杭州低空经济政策征求意见公告截图"},
 "2026-09|沃飞长空|09.15|品牌传播": {"file": "social-samples/aerofugia-september.webp", "alt": "沃飞长空《飞行试验室》原帖截图", "article": "https://mp.weixin.qq.com/s/3JEnWb65-nnvV8rlGwj1zg"},
 "2026-10|沃飞长空|10.14–19|品牌传播": {"file": "social-samples/aerofugia.webp", "alt": "沃飞长空赛博财经联动发文截图"},
 "2026-09|追梦空天|09.03|资本与经营": {"file": "event-photos/cover-dreamfly-df600.webp", "article": "https://www.parkworld.net/Post/8ddcc814b9cb3bd", "alt": "追梦空天 DF600 系列机型资料图"},
 "2026-09|蓝色向量|9月 · 数贸会|订单与合作": {"file": "event-photos/cover-skyla-v30.webp", "article": "https://www.ceweekly.cn/finance/macro/2026/0924/500793.html", "alt": "第五届数贸会上的 SKYLA V30"},
 "2026-09|Joby|09.25|品牌传播": {"file": "event-photos/event-40.webp", "article": "https://www.jobyaviation.com/news/joby-completes-first-ever-fully-autonomous-flight-across-the-united-states", "alt": "Joby J208 跨美国自主飞行资料图"},
 "2026-09|览翌航空|09.04|资本与经营": {"file": "event-photos/cover-lanyii-le200.webp", "article": "https://www.tkww.hk/a/202503/24/AP67e129abe4b0fbda9a167d57.html", "alt": "览翌航空 LE200 机型资料图"},
 "2026-09|广汽高域|9月|资本与经营": {"file": "event-photos/cover-govy-airjet.webp", "article": "https://k.sina.com.cn/article_6152752301_16ebb8cad00101abvg.html", "alt": "广汽高域 GOVY AirJet 机型资料图"},
 "2026-09|国际|09.21|国际合作": {"file": "event-photos/september-note-03.webp", "alt": "国际合作资料卡", "article": "https://www.caac.gov.cn/XWZX/MHYW/202609/t20260921_231764.html"},
 "2026-09|国际|09.02|监管试点": {"file": "event-photos/september-note-04.webp", "alt": "监管试点资料卡", "article": "https://elroyair.com/company/news/press-releases/elroy-air-completes-first-autonomous-and-uncrewed-flights-under-eIPP/"},
 "2026-09|国内|09.28|产业政策": {"file": "event-photos/september-note-05.webp", "alt": "产业政策资料卡", "article": "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2026/art_255ea93df118460fa105c46c2f546d9a.html"},
 "2026-09|国内|09.24|地方政策": {"file": "event-photos/september-note-06.webp", "alt": "地方政策资料卡", "article": "https://www.thnet.gov.cn/thdt/tzgg/qtgg/content/post_11019713.html"},
 "2026-09|国内|09.11|地方政策": {"file": "event-photos/september-note-07.webp", "alt": "地方政策资料卡", "article": "https://gaj.beijing.gov.cn/wsgs/2024zcwj/zcfg/202609/t20260914_4862705.html"},
 "2026-09|国内|09.28起|地方政策": {"file": "event-photos/september-note-08.webp", "alt": "地方政策资料卡", "article": "https://www.longyan.gov.cn/gk/flgk/gg/202609/t20260928_2316053.htm"},
 "2026-10|峰飞航空|10月|品牌传播": {"file": "event-photos/september-note-09.webp", "alt": "品牌传播资料卡", "article": "https://de.linkedin.com/company/autoflight-official"},
 "2026-09|亿航智能|09.24|品牌传播": {"file": "event-photos/september-note-10.webp", "alt": "品牌传播资料卡", "article": "https://g.pconline.com.cn/x/2182/21827901.html"},
 "2026-09|Archer|09.22|试飞进展": {"file": "event-photos/september-note-11.webp", "alt": "试飞进展资料卡", "article": "https://www.investors.archer.com/news/news-details/2026/Archer-Completes-Historic-Electric-Air-Taxi-Flights-Over-San-Francisco-Bay/default.aspx"},
 "2026-09|齐飞航空|09.01|适航与技术": {"file": "event-photos/september-note-12.webp", "alt": "适航与技术资料卡", "article": "https://www.ne-time.cn/web/article/39594"}
});
