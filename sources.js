'use strict';

const mediaArticles = {
 '峰飞航空': {
  '上海证券报': 'https://m.cnstock.com/commonDetail/789040',
  '中国证券报·中证网': 'https://www.cs.com.cn/ssgs/01/2026/09/11/detail_2026091110038606.html',
  '界面新闻': 'https://www.jiemian.com/article/15085665.html',
  '低空经济网': 'https://www.dikongjingji.com.cn/tt/7083.html',
  '人民网': 'https://paper.people.com.cn/rmrb/pc/content/202610/22/content_30187036.html',
  '新华财经': 'https://www.cnfin.com/gs-lb/detail/20260911/4468902_1.html',
  '广州日报': 'https://huacheng.gz-cmc.com/pages/2026/10/15/ffd3121b301d41a694ab934544a88d20.html',
  '澎湃新闻': 'https://m.thepaper.cn/newsDetail_forward_34052543',
  '证券时报': 'https://www.stcn.com/article/detail/4182137.html',
  '中国证券报': 'https://www.cs.com.cn/ssgs/01/2026/09/11/detail_2026091110038606.html',
  '21财经': 'https://m.21jingji.com/article/20260911/herald/456ca67faac6b77acd3aaecc4fbbc7cb.html',
  '中国经营报': 'https://finance.eastmoney.com/a/202609173877657073.html',
  '新浪财经': 'https://finance.sina.com.cn/jjxw/2026-09-11/doc-inirnaiy8983599.shtml',
  '北京商报': 'https://www.bbtnews.com.cn/2026/0912/605699.shtml',
  'Urban Air Mobility News': 'https://www.urbanairmobilitynews.com/uam-infrastructure/autoflight-and-malaysian-real-estate-developer-sunway-group-link-to-develop-aam-programmes-in-malaysia/',
  'The Star': 'https://www.thestar.com.my/business/business-news/2026/10/21/sunway-taps-global-mobility-partners'
 },
 '沃飞长空': {
  '界面新闻 · AE200 安全解析': 'https://www.jiemian.com/article/15149563.html',
  '央广网 · 成都未来产业先导区': 'http://sc.cnr.cn/scpd/hygc/20260901/t20260901_527800762.shtml',
  '中国行业信息网': 'http://www.zghangyexinxi.nancai.top/archives/20709.html',
  '自动化网': 'https://www.zidonghua.com.cn/CECTF/ShowInME/377466.html',
  '红星新闻': 'https://static.cdsb.com/micropub/Articles/202610/d69c7cae9cf1eb031695ec1cb217912b.html',
  '四川日报': 'https://sc.people.com.cn/n2/2026/1015/c345167-41722084.html',
  '财富中文网': 'https://www.fortunechina.com/shangye/c/2026-10/22/content_477568.htm'
 },
 '沃兰特': {
  '安徽日报 · 世界制造业大会四川馆': 'http://fbh.anhuinews.com/waixuanxx/202609/t20260920_9600704.html',
  '自贡日报 · 整机制造': 'https://dp.zgm.cn/show/46398',
  '自贡网': 'https://www.zgm.cn/content/6a992fe1866e5',
  '人民网': 'http://sc.people.com.cn/n2/2026/1112/c345167-41749007.html',
  '中国航空报': 'https://news.qq.com/rain/a/20261016A05TPF00',
  '香港财经时报': 'https://www.businesstimes.com.hk/articles/349901/%e6%b2%83%e8%98%ad%e7%89%b9%e8%88%aa%e7%a9%ba%e7%8d%b2%e5%be%97%e5%b7%9d%e8%88%aa%e4%bd%8e%e7%a9%bave25-100%e8%bc%89%e4%ba%baevtol%e7%a2%ba%e8%aa%8d%e8%a8%82%e5%96%ae/',
  'Aviation News Online': 'https://www.aviationnews-online.com/article/sichuan-airlines-low-altitude-orders-upto-50-ve25-100-passenger-evtols-from-volant',
  '新华财经': 'https://www.cnfin.com/gs-lb/detail/20261015/4481118_1.html',
  '界面新闻': 'https://m.jiemian.com/article/15190484.html',
  '证券时报': 'https://www.stcn.com/article/detail/4218808.html',
  '上海证券报': 'https://finance.eastmoney.com/a/202610153896916138.html',
  '美通社': 'https://www.prnewswire.com/apac/news-releases/volant-aerotech-secures-firm-order-from-sichuan-airlines-low-altitude-for-ve25-100-passenger-evtols-302912243.html',
  'FlyingCars.report': 'https://flyingcars.report/news/2026-10-14-volant-sichuan-airlines-order/',
  'Yahoo Finance': 'https://finance.yahoo.com/technology/articles/volant-aerotech-secures-firm-order-041900778.html'
 },
 '时的科技': {
  '中国航空工业集团 / 看航空 · E20 航电审查': 'https://m.weibo.cn/detail/5338337411859047',
  '界面新闻 · 马来西亚低空经济': 'https://www.jiemian.com/article/15150184.html',
  '上观新闻 · 闵行航空航天': 'http://m.toutiao.com/group/7690817791221334564/',
  '上观新闻 · 原文': 'https://www.shobserver.com/sgh/detail?id=4065953',
  '人民网': 'http://ah.people.com.cn/n2/2026/0920/c375162-41701681.html',
  '新华网': 'http://ah.news.cn/20260903/ecb804332247406389802815633eef96/c.html',
  '太平洋科技': 'https://zhikeji.pconline.com.cn/article/1651440',
  '新浪网': 'https://finance.sina.com.cn/stock/estate/integration/2026-09-04/doc-iniqrpqw4132179.shtml',
  '顶端新闻': 'https://m.topnews.cn/news/145ED1ED49BB4870',
  '南洋商报': 'https://www.enanyang.my/news/20261008/NYPLUS/1407402',
  '星洲日报': 'https://www.sinchew.com.my/news/20261009/nation/7929052',
  'BERNAMA': 'https://web26.bernama.com/en/business/news.php?id=2617572',
  '东方日报': 'https://www.orientaldaily.com.my/news/central/2026/10/09/854038',
  'The Star': 'https://www.thestar.com.my/metro/metro-news/2026/10/10/sgor-eyes-electric-aviation',
  'Astro Awani': 'https://international.astroawani.com/video/awani-review-flying-taxis-malaysian-founders-push-bring-them-market',
  'Digital News Asia': 'https://www.digitalnewsasia.com/digital-economy/malaysians-get-first-look-five-seat-flying-taxi-sidec-and-tcab-tech-sign-mou',
  'eVTOL Insights': 'https://evtolinsights.com/tcab-tech-and-sidec-sign-mou-to-explore-e20-evtol-commercialisation-in-malaysia/',
  'AAMI': 'https://www.aaminternational.com/2026/10/partners-to-advance-tilt-rotor-evtol-commercialization-in-malaysia/',
  'Urban Air Mobility News': 'https://www.urbanairmobilitynews.com/uam-infrastructure/tcab-tech-and-sidec-partner-to-advanced-aam-projects-in-malaysia/',
  'VoltDigest': 'https://voltdigest.com/news/1188-tcab-tech-and-sidec-sign-mou-to-explore-e20-evtol-commercialisation-in-malaysia'
 }
};

const eventSources = {
 "2026-09|沃飞长空|09.15|品牌传播": {
  "label": "沃飞长空微信公众号",
  "url": "https://mp.weixin.qq.com/s/3JEnWb65-nnvV8rlGwj1zg"
 },
 "2026-10|峰飞航空|10.14|品牌传播": {
  "label": "低空经济网",
  "url": "https://www.dikongjingji.com.cn/tt/7083.html"
 },
 "2026-09|亿航智能|09.24|品牌传播": {
  "label": "太平洋科技",
  "url": "https://g.pconline.com.cn/x/2182/21827901.html"
 },
 "2026-09|国际|09.02|监管试点": {
  "label": "Elroy Air",
  "url": "https://elroyair.com/company/news/press-releases/elroy-air-completes-first-autonomous-and-uncrewed-flights-under-eIPP/"
 },
 "2026-10|国际|10.07|监管试点": {
  "label": "BETA Technologies",
  "url": "https://beta.team/stories/beta-completes-utah-eipp-operations-to-support-the-future-of-radiopharmaceutical-delivery-and-treatment"
 },
 "2026-09|国内|09.28|产业政策": {
  "label": "工信部",
  "url": "https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2026/art_255ea93df118460fa105c46c2f546d9a.html"
 },
 "2026-09|国内|09.24|地方政策": {
  "label": "广州市天河区发展改革局",
  "url": "https://www.thnet.gov.cn/thdt/tzgg/qtgg/content/post_11019713.html"
 },
 "2026-09|国内|09.08|地方政策": {
  "label": "澎湃新闻",
  "url": "https://www.thepaper.cn/newsDetail_forward_34103463"
 },
 "2026-09|国内|09.11|地方政策": {
  "label": "北京市公安局",
  "url": "https://gaj.beijing.gov.cn/wsgs/2024zcwj/zcfg/202609/t20260914_4862705.html"
 },
 "2026-09|国内|09.28起|地方政策": {
  "label": "龙岩市人民政府（地方通告示例）",
  "url": "https://www.longyan.gov.cn/gk/flgk/gg/202609/t20260928_2316053.htm"
 },
 "2026-09|国际|09.21|国际合作": {
  "label": "中国民航局",
  "url": "https://www.caac.gov.cn/XWZX/MHYW/202609/t20260921_231764.html"
 },
 "2026-10|国内|10.26|监管政策": {
  "label": "中国民航局",
  "url": "https://app.caac.gov.cn/HDJL/YJZJ/202610/t20261026_231937.html"
 },
 "2026-10|国内|10.09|产业政策": {
  "label": "工信部转载新华社",
  "url": "https://www.miit.gov.cn/xwfb/szyw/art/2026/art_bb063b402f814c2d829cb53688ee84c0.html"
 },
 "2026-10|国际|10.22|监管标准": {
  "label": "美国联邦航空局",
  "url": "https://www.faa.gov/newsroom/faa-releases-draft-design-standards-vertical-flight-facilities"
 },
 "2026-09|时的科技|09.03–05|品牌传播": {
  "label": "时的科技",
  "url": "https://www.tcabtech.com/tcab-tech-e20-evtol-factory-layout/"
 },
 "2026-09|时的科技|09.23|品牌传播": {
  "label": "时的科技",
  "url": "https://www.tcabtech.com/e20-evtol-structural-strength-and-validation/"
 },
 "2026-09|亿航智能|09.07–11|海外进展": {
  "label": "亿航智能",
  "url": "https://www.ehang.com/news/1396.html"
 },
 "2026-09|亿航智能|09.09|品牌传播": {
  "label": "亿航智能",
  "url": "https://www.ehang.com/news/1398.html"
 },
 "2026-09|亿航智能|09.14|订单与合作": {
  "label": "亿航智能",
  "url": "https://www.ehang.com/news/1401.html"
 },
 "2026-09|亿航智能|09.29|海外进展": {
  "label": "亿航智能",
  "url": "https://www.ehang.com/news/1403.html"
 },
 "2026-09|峰飞航空|09.10|订单与合作": {
  "label": "峰飞航空",
  "url": "https://www.autoflight.com/zh/news/30evtol/"
 },
 "2026-09|Joby|09.10|试飞进展": {
  "label": "Joby",
  "url": "https://www.jobyaviation.com/news/joby-launches-eipp-flights-in-texas"
 },
 "2026-09|Joby|09.18|试飞进展": {
  "label": "Joby",
  "url": "https://www.jobyaviation.com/news/joby-completes-first-ever-fully-autonomous-flight-across-the-united-states"
 },
 "2026-09|Joby|09.29|资本与经营": {
  "label": "路透社",
  "url": "https://www.reuters.com/legal/litigation/archer-says-us-court-narrows-joby-aero-lawsuit-claims-2026-10-02/"
 },
 "2026-09|Archer|09.22|试飞进展": {
  "label": "Archer",
  "url": "https://investors.archer.com/news/news-details/2026/Archer-to-Showcase-Midnight-Flights-at-2026-California-International-Air-Show-as-Part-of-Its-No-Roads-Flight-Tour/default.aspx"
 },
 "2026-09|Vertical|09.25|海外进展": {
  "label": "Vertical",
  "url": "https://vertical-aerospace.com/wp-content/uploads/2026/09/20260924-AAC-Opening-Ceremony-PR_v1.pdf"
 },
 "2026-09|Vertical|09.28|品牌传播": {
  "label": "NYSE Floor Talk",
  "url": "https://finance.yahoo.com/video/vertical-aerospace-ceo-stuart-simpson-184405048.html"
 },
 "2026-09|BETA|09.24|试飞进展": {
  "label": "BETA",
  "url": "https://beta.team/stories/metro-aviation-beta-technologies-and-washington-county-ems-fly-electric-aircraft-in-texas-emergency-response-demonstration"
 },
 "2026-09|BETA|09.25–28|品牌传播": {
  "label": "美国国防视觉信息发布服务",
  "url": "https://www.dvidshub.net/video/1024616/americas-air-show-2026-day-2-beta-alia-cx300"
 },
 "2026-09|齐飞航空|09.01|适航与技术": {
  "label": "NE时代",
  "url": "https://www.ne-time.cn/web/article/39594"
 },
 "2026-09|追梦空天|09.03|资本与经营": {
  "label": "科创板日报",
  "url": "https://finance.eastmoney.com/a/202609033864347198.html"
 },
 "2026-09|览翌航空|09.04|资本与经营": {
  "label": "上海证券报",
  "url": "https://finance.sina.com.cn/roll/2026-09-04/doc-iniqsenq4072777.shtml"
 },
 "2026-09|广汽高域|9月|资本与经营": {
  "label": "中国证券报",
  "url": "https://www.cs.com.cn/ssgs/01/2026/09/25/detail_2026092510041799.html"
 },
 "2026-09|零重力|09.03–05|品牌传播": {
  "label": "零重力",
  "url": "https://www.lzlair.com/news/156.html"
 },
 "2026-09|零重力|09.19|订单与合作": {
  "label": "零重力",
  "url": "https://www.lzlair.com/news/161.html"
 },
 "2026-09|零重力|9月下旬|品牌传播": {
  "label": "零重力",
  "url": "https://www.lzlair.com/news/164.html"
 },
 "2026-09|零重力|09.23|订单与合作": {
  "label": "零重力",
  "url": "https://www.lzlair.com/news/162.html"
 },
 "2026-09|蓝霄航空|9月|资本与经营": {
  "label": "华夏时报",
  "url": "https://finance.sina.com.cn/roll/2026-09-20/doc-inisnwyu6438584.shtml"
 },
 "2026-09|蓝色向量|9月 · 数贸会|订单与合作": {
  "label": "新浪财经",
  "url": "https://finance.sina.com.cn/stock/bxjj/2026-09-24/doc-inisxnuz4992556.shtml"
 },
 "2026-09|小鹏汇天|9月|海外进展": {
  "label": "汇天官网",
  "url": "https://intl.aridge.com/news?id=289"
 },
 "2026-09|亿维特|09.23–27|订单与合作": {
  "label": "东方财富",
  "url": "https://finance.eastmoney.com/a/202609263884382526.html"
 },
 "2026-09|华羽先翔|9月|品牌传播": {
  "label": "中国eVTOL产业网",
  "url": "https://chinaevtol.org/archives/986"
 },
 "2026-10|时的科技|10.09|海外进展": {
  "label": "时的科技",
  "url": "https://www.tcabtech.com/e20-evtol-malaysia-debut-tcab-tech-southeast-asia-regional-business-center/"
 },
 "2026-10|亿航智能|10月上旬|品牌传播": {
  "label": "亿航智能",
  "url": "https://www.ehang.com/news/1406.html"
 },
 "2026-10|亿航智能|10.20–21|海外进展": {
  "label": "亿航智能",
  "url": "https://www.ehang.com/news/1408.html"
 },
 "2026-10|亿航智能|10.30|海外进展": {
  "label": "亿航智能",
  "url": "https://www.ehang.com/news/1412.html"
 },
 "2026-10|峰飞航空|10.15|订单与合作": {
  "label": "峰飞航空",
  "url": "https://www.autoflight.com/en/news/autoflight-and-jc-aviation-sign-mou-to-accelerate-evtol-deployment-acr/"
 },
 "2026-10|峰飞航空|10月中旬|品牌传播": {
  "label": "峰飞航空",
  "url": "https://www.autoflight.com/en/news/autoflight-showcases-evtol-solutions-at-the-140th-canton-fair/"
 },
 "2026-10|峰飞航空|10月|海外进展": {
  "label": "Sunway集团",
  "url": "https://www.sunway.com.my/media/press-release/sunway-eyes-autonomous-transport-electric-aviation-in-malaysia/"
 },
 "2026-10|沃飞长空|10.14|品牌传播": {
  "label": "自动化网",
  "url": "https://www.zidonghua.com.cn/CECTF/ShowInME/377466.html"
 },
 "2026-10|沃飞长空|10.22|品牌传播": {
  "label": "红星新闻",
  "url": "https://static.cdsb.com/micropub/Articles/202610/d69c7cae9cf1eb031695ec1cb217912b.html"
 },
 "2026-10|沃兰特|10.14|订单与合作": {
  "label": "沃兰特官网转载新华财经",
  "url": "https://www.volantaerotech.com/news/inner/id/35.html"
 },
 "2026-10|Joby|10月|品牌传播": {
  "label": "Santa Cruz Works（附 TIME 原文）",
  "url": "https://santacruzworks.squarespace.com/news/joby-aviation-named-one-of-times-best-inventions-of-2026"
 },
 "2026-10|Joby|10.30|试飞进展": {
  "label": "Joby",
  "url": "https://www.jobyaviation.com/news/joby-brings-its-vertical-takeoff-and-landing-air-taxi-to-florida"
 },
 "2026-10|Archer|10月|试飞进展": {
  "label": "Archer",
  "url": "https://www.investors.archer.com/news/news-details/2026/Archer-Completes-Historic-Electric-Air-Taxi-Flights-Over-San-Francisco-Bay/default.aspx"
 },
 "2026-10|Archer|10.06|品牌传播": {
  "label": "Fast Company",
  "url": "https://www.fastcompany.com/91612660/transportation-next-big-things-in-tech-2026"
 },
 "2026-10|Archer|10月下旬|品牌传播": {
  "label": "Archer",
  "url": "https://www.investors.archer.com/news/news-details/2026/Archer-Unveils-Texas-Air-Taxi-Networks-Across-Houston-Dallas-and-Austin/default.aspx"
 },
 "2026-10|Archer|10.29|海外进展": {
  "label": "Archer",
  "url": "https://investors.archer.com/news/news-details/2026/Archer-and-ITA-Airways-Partner-on-the-Development-of-Air-Taxi-Services-in-Italy/default.aspx"
 },
 "2026-10|Vertical|10.15|品牌传播": {
  "label": "克兰菲尔德大学",
  "url": "https://alumni.cranfield.ac.uk/public/Event.aspx?Id=3867"
 },
 "2026-10|Vertical|10.15–16|订单与合作": {
  "label": "Vertical",
  "url": "https://vertical-aerospace.com/wp-content/uploads/2026/10/ANH-Northrop-Grumman-Litef-Press-Release.pdf"
 },
 "2026-10|Vertical|10.21|适航与技术": {
  "label": "Vertical Mag",
  "url": "https://verticalmag.com/news/vertical-aerospaces-next-moves-ceo-stuart-simpson-on-certification-growth-and-strategic-partners/"
 },
 "2026-10|Vertical|10.22|试飞进展": {
  "label": "Vertical Aerospace",
  "url": "https://dk.linkedin.com/company/vertical-aerospace-ltd"
 },
 "2026-10|BETA|10.20–21|适航与技术": {
  "label": "BETA",
  "url": "https://beta.team/stories/beta-becomes-first-company-to-secure-landmark-faa-authorization-to-conduct-flight-operations-with-prospective-customers-in-electric-vtol-aircraft"
 },
 "2026-10|BETA|10.07|试飞进展": {
  "label": "BETA",
  "url": "https://beta.team/stories/beta-completes-utah-eipp-operations-to-support-the-future-of-radiopharmaceutical-delivery-and-treatment"
 },
 "2026-10|齐飞航空|10月|资本与经营": {
  "label": "36氪",
  "url": "https://www.36kr.com/p/4018318436110215"
 },
 "2026-10|零重力|10.10|订单与合作": {
  "label": "零重力",
  "url": "https://www.lzlair.com/news/165.html"
 },
 "2026-10|零重力|10.22|品牌传播": {
  "label": "零重力",
  "url": "https://www.lzlair.com/news/166.html"
 },
 "2026-10|奇瑞|10.20|品牌传播": {
  "label": "奇瑞汽车",
  "url": "https://www.cheryinternational.com/global/news/news1/20261020/detail-2675.html"
 },
 "2026-10|御风未来|10月 · 工博会|品牌传播": {
  "label": "东方财富",
  "url": "https://caifuhao.eastmoney.com/news/20261013163226726954910"
 },
 "2026-10|小鹏汇天|10月|海外进展": {
  "label": "中国新闻网",
  "url": "https://www.ecns.cn/cns-wire/2026-10-21/detail-ihfmiwhm0738291.shtml"
 },
 "2026-10|沃兰特|10月|适航与技术": {
  "label": "沃兰特官网转载新华财经",
  "url": "https://www.volantaerotech.com/news/inner/id/35.html"
 },
 "2026-10|峰飞航空|10月|品牌传播": {
  "label": "峰飞航空 LinkedIn",
  "url": "https://de.linkedin.com/company/autoflight-official"
 },
 "2026-10|小鹏汇天|10.15|品牌传播": {
  "label": "红点设计奖颁奖活动",
  "url": "https://www.red-dot.org/magazine/red-dot-award-design-concept-award-ceremony-2026-en"
 }
};

// Retain source links saved before a date or category was corrected.
const eventKeyAliases = {
 "2026-09|广汽高域|09.24|经营披露": "2026-09|广汽高域|9月|资本与经营",
 "2026-10|峰飞航空|10.20|海外进展": "2026-10|峰飞航空|10月|海外进展",
 "2026-10|国内|10.09|中央政策": "2026-10|国内|10.09|产业政策",
 "2026-09|国内|09.28|中央政策": "2026-09|国内|09.28|产业政策",
 "2026-09|国内|09.28|地方政策": "2026-09|国内|09.28起|地方政策",
 "2026-10|沃兰特|10.15|适航与技术": "2026-10|沃兰特|10月|适航与技术",
 "2026-10|BETA|10.21|适航与技术": "2026-10|BETA|10.20–21|适航与技术",
 "2026-09|BETA|09.25–09.27|品牌传播": "2026-09|BETA|09.25–28|品牌传播",
 "2026-09|时的科技|09.03–09.05|品牌传播": "2026-09|时的科技|09.03–05|品牌传播",
 "2026-10|小鹏汇天|10.20|海外进展": "2026-10|小鹏汇天|10月|海外进展",
 "2026-09|亿航智能|09.07–09.11|海外进展": "2026-09|亿航智能|09.07–11|海外进展",
 "2026-09|广汽高域|09.25|资本与经营": "2026-09|广汽高域|9月|资本与经营",
 "2026-09|零重力|09.03–09.05|品牌传播": "2026-09|零重力|09.03–05|品牌传播",
 "2026-09|零重力|09.20–09.23|品牌传播": "2026-09|零重力|9月下旬|品牌传播",
 "2026-09|蓝霄航空|09.20|资本与经营": "2026-09|蓝霄航空|9月|资本与经营",
 "2026-09|蓝色向量|09.24|订单与合作": "2026-09|蓝色向量|9月 · 数贸会|订单与合作",
 "2026-09|小鹏汇天|09.18|海外进展": "2026-09|小鹏汇天|9月|海外进展",
 "2026-09|亿维特|09.23–09.27|订单与合作": "2026-09|亿维特|09.23–27|订单与合作",
 "2026-09|华羽先翔|09.09|品牌传播": "2026-09|华羽先翔|9月|品牌传播",
 "2026-10|亿航智能|10.12|品牌传播": "2026-10|亿航智能|10月上旬|品牌传播",
 "2026-10|亿航智能|10.21|海外进展": "2026-10|亿航智能|10.20–21|海外进展",
 "2026-10|峰飞航空|10.15–10.19|品牌传播": "2026-10|峰飞航空|10月中旬|品牌传播",
 "2026-10|峰飞航空|10.21|海外进展": "2026-10|峰飞航空|10月|海外进展",
 "2026-09|峰飞航空|09.24|品牌传播": "2026-10|峰飞航空|10月|品牌传播",
 "2026-10|沃飞长空|10.14–10.19|品牌传播": "2026-10|沃飞长空|10.14–19|品牌传播",
 "2026-10|Joby|10.15|品牌传播": "2026-10|Joby|10月|品牌传播",
 "2026-10|Archer|10.19|试飞进展": "2026-10|Archer|10月|试飞进展",
 "2026-10|Archer|10.23|品牌传播": "2026-10|Archer|10月下旬|品牌传播",
 "2026-10|Vertical|10.15–10.16|订单与合作": "2026-10|Vertical|10.15–16|订单与合作",
 "2026-10|Vertical|10.22|海外进展": "2026-10|Vertical|10.22|试飞进展",
 "2026-10|齐飞航空|10.09|资本与经营": "2026-10|齐飞航空|10月|资本与经营",
 "2026-10|御风未来|10.13|品牌传播": "2026-10|御风未来|10月 · 工博会|品牌传播",
 "2026-10|小鹏汇天|10.26|品牌传播": "2026-10|小鹏汇天|10月|品牌传播"
};
