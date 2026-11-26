'use strict';

const november2026 = (() => {
 const links = {
  easa:'https://www.easa.europa.eu/en/document-library/product-certification-consultations/special-condition-vtol',
  thailand:'https://www.caat.or.th/caat-media/221899/',
  australia:'https://www.casa.gov.au/about-us/news-media-releases-and-speeches/review-draft-guidance-powered-lift-aircraft-certification',
  dubai:'https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/all-news/NewsDetails/completion-of-the-dubai-marina-vertiport-with-a-gcaa-certification',
  shenzhen:'https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_13053144.html',
  batteryLab:'https://www.catl.com/news/10367.html',
  caac:'https://www.caac.gov.cn/PHONE/HDJL/YJZJ/202611/t20261113_232065.html',
  dalian:'https://dikongjie.com/11522.html',
  chengdu:'https://news.ifeng.com/c/8yK7i853SYW',
  orlando:'https://fdot.gov/info/co/news/2026/11042026/',
  joby:'https://www.jobyaviation.com/news/joby-reports-third-quarter-2026-financial-results',
  archer:'https://investors.archer.com/news/news-details/2026/Archer-Announces-Q3-2026-Results-Receives-FAA-Market-Survey-Certificate-Unlocking-LA-Operations-and-Boeing-Deal-Close-Imminent/default.aspx',
  jobyLetter:'https://www.sec.gov/Archives/edgar/data/1819848/000181984826000531/joby-8kx20261104xexx99_2.htm',
  archerLetter:'https://www.sec.gov/Archives/edgar/data/1824502/000182450226000087/archerlettertoshareholde.htm',
  archerCall:'https://s206.q4cdn.com/823642595/files/doc_financials/2026/q3/Transcript_ACHR_Q32026.pdf',
  marketSurveyRule:'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21/subpart-H/section-21.195',
  betaMarketSurvey:'https://www.faa.gov/newsroom/trumps-transportation-secretary-sean-p-duffy-announces-first-ever-special-airworthiness',
  betaRelease:'https://investors.beta.team/news-events/press-releases/detail/121/beta-becomes-first-company-to-secure-landmark-faa-authorization-to-conduct-flight-operations-with-prospective-customers-in-electric-vtol-aircraft',
  betaEarnings:'https://www.sec.gov/Archives/edgar/data/1784570/000162828026069120/q32026earningsrelease.htm',
  f1:'https://www.investors.archer.com/news/news-details/2026/Archer-Partners-with-Formula-1/default.aspx',
  skydrive:'https://skydrive.co.jp/en/news/73279/',
  ascendance:'https://www.ainonline.com/aviation-news/futureflight/2026-11-20/ascendance-rolls-out-atea-hybrid-electric-vtol-aircraft',
  vertical:'https://vertical-aerospace.com/wp-content/uploads/2026/11/20261120-Powertrain-Centre-Press-Release_v2.pdf',
  selangor:'https://mediaselangor.com/en/2026/11/407641',
  aerofugia:'https://cbgc.scol.com.cn/news/8114157',
  ae200:'https://zhikeji.pconline.com.cn/article/1675198',
  formation:'https://www.autoflight.com/en/news/autoflight-completes-worlds-first-5-evtol-mixed-fleet-formation-flight/',
  zeroCarbon:'https://www.chinanews.com/sh/2026/11-21/10735870.shtml',
  volant:'https://sc.people.com.cn/n2/2026/1112/c345167-41749007.html',
  fire:'https://www.ehang.com/cn/news/1413.html',
  ehangApec:'https://www.iicnet.cn/article/11267',
  rescue:'https://www.ehang.com/cn/news/1415.html',
  sriLanka:'https://www.ehang.com/cn/news/1417.html',
  yamanashi:'https://masc-jp.com/secretariat/news/8587/',
  blue:'https://www.catl.com/news/10349.html',
  eivto:'https://www.catl.com/news/10368.html',
  vertax:'https://www.cnstock.com/commonDetail/825927',
  aridge:'https://finance.eastmoney.com/a/202611103927292697.html',
  aridgeExpoPhoto:'https://www.thepaper.cn/newsDetail_forward_34412497',
  aridgeExpoOriginal:'https://mp.weixin.qq.com/s/RPAmORbaXdqfbLwDDr4isg',
  aridgeTransitionOriginal:'https://mp.weixin.qq.com/s/KocnY3diLFzOD42pOCrR5g',
  aridgeTransition:'https://www.chinanews.com/gn/2026/11-22/10736018.shtml',
  zeroBoundary:'https://www.36kr.com/p/4063336242549893'
 };

 const industry = [
  ['11.05','国际','监管标准','<strong>欧洲航空安全局（EASA）</strong>发布第五批 VTOL 适航符合性方法最终版，涉及结构载荷、鸟撞后飞行能力、应急着陆及电传飞控。','欧洲航空安全局',links.easa],
  ['11.09','国际','监管准备','<strong>泰国民航局</strong>公布先进空中交通监管准备工作，涉及航空器安全、运行管理及配套基础设施。','泰国民航局',links.thailand],
  ['11.17','国际','监管标准','<strong>澳大利亚民航安全局</strong>就动力升力航空器型号合格审定指南征求意见，提出基于性能的审定路径。','澳大利亚民航安全局',links.australia],
  ['11.18','国际','基础设施','<strong>迪拜 Marina 垂直起降场完工并获阿联酋民航总局（GCAA）认证</strong>，为迪拜空中出租车网络第二个完工获证站点。','迪拜道路与交通管理局',links.dubai],
  ['11.13','国内','中央政策','中国民航局公开征集<strong>民航规章立改废建议</strong>，涵盖低空、适航、通航、机场及空管。','中国民航局',links.caac],
  ['11.03','国内','地方政策','深圳发布<strong>低空飞行临时管控</strong>通告，分阶段覆盖福田、南山及全市区域（不含深汕特别合作区）。','深圳市人民政府',links.shenzhen],
  ['11.16','国内','地方政策','大连市发改委公告<strong>废止《大连市推动低空经济高质量发展若干政策措施》</strong>，原措施涉及技术改造、场景及基础设施等扶持。','公告原件图文',links.dalian],
  ['11.24','国内','地方政策','成都发布<strong>航空航天产业建圈强链重点举措</strong>，覆盖低空等四个领域，提出到 2029 年航空航天产业规模突破 <strong>2,800 亿元</strong>。','红星新闻',links.chengdu],
  ['11.11','国内','供应链','中国民航大学与宁德时代签约<strong>共建航空电池适航技术创新联合实验室</strong>，开展安全测试、适航标准及符合性验证方法研究，覆盖纯电和混合动力系统。','宁德时代',links.batteryLab]
 ];

 const events = {
  Joby:[
   ['11.04','试飞进展','Joby 与佛罗里达州交通部门及奥兰多国际机场完成验证飞行，<strong>首次使用奥兰多国际机场专用垂直起降区</strong>。','佛罗里达州交通部',links.orlando],
   ['11.04','资本与经营','<strong>Joby 发布 2026 年第三季度财报</strong>，营收 5,510 万美元，净亏损 2.118 亿美元，并更新 Blade 业务、FAA 审定和航空器生产进展。','Joby Aviation',links.joby]
  ],
  Archer:[
   ['11.09','适航与技术','Archer 披露 <strong>Midnight 的常规起降（CTOL）构型获 FAA 市场调研特别适航证</strong>，将用于在洛杉矶开展有人驾驶市场调研飞行。','Archer Aviation',links.archer],
   ['11.09','资本与经营','<strong>Archer 发布 2026 年第三季度财报</strong>，营收 510 万美元，净亏损 2.746 亿美元，并更新 Midnight 型号审定及波音资产收购进度。','Archer Aviation',links.archer],
   ['11.12','品牌传播','Archer 与 <strong>Formula 1</strong> 公布多年合作，将在部分大奖赛开展品牌活动，并探索赛事接驳服务。','Archer Aviation',links.f1]
  ],
  BETA:[
   ['11.03','资本与经营','<strong>BETA Technologies 发布 2026 年第三季度财报</strong>，营收 1,770 万美元，同比增长 98%，净亏损 1.191 亿美元，并上调全年营收指引。','BETA Technologies 财报公告',links.betaEarnings]
  ],
  Vertical:[['11.23','适航与技术','英国布里斯托尔<strong>新动力中心完工</strong>，将承担动力系统集成、电池测试与生产，服务适航试验机和早期量产。','Vertical Aerospace',links.vertical]],
  SkyDrive:[['11.17','海外进展','与<strong>澳大利亚黄金海岸市</strong>签署谅解备忘录，研究起降场选址、示范飞行与本地运行条件，目标于 2028 年启动商业服务。','SkyDrive',links.skydrive]],
  Ascendance:[['11.19','适航与技术','在法国图卢兹发布首架<strong>全尺寸 ATEA 混合动力垂直起降样机</strong>，展示与自研 Sterna 系统的整机集成。','Aviation International News',links.ascendance]],
  '时的科技':[
   ['11.09','品牌传播','时的科技参与 <strong>UniKL MIAT 和 JobGiga</strong> 联办的航空职业交流，与学生探讨航空行业机会和职业发展。','时的科技活动资料','social-samples/november-2026/tcab-talent.webp'],
   ['11.23','品牌传播','时的科技以云顶高原、梳邦机场、吉隆坡国际机场和马六甲为例，展示 <strong>E20 在马来西亚的潜在机场接驳和文旅出行场景</strong>。','时的科技活动资料','social-samples/november-2026/tcab-routes.webp']
  ],
  '沃飞长空':[
   ['11.03','品牌传播','CEO 兼首席科学家郭亮获<strong>四川省杰出青年科学技术创新奖</strong>。','川观新闻',links.aerofugia],
   ['11.05–11.10','品牌传播','<strong>AE200 系列亮相第九届进博会中国馆</strong>，展示倾转旋翼 eVTOL 的产品构型。','太平洋科技',links.ae200],
   ['11.18','品牌传播','沃飞长空参与<strong>清华大学产教融合交流</strong>，围绕航空行业实践和人才培养展开讨论。','沃飞长空活动资料','social-samples/november-2026/aerofugia-wechat.webp']
  ],
  '峰飞航空':[
   ['11.01','试飞进展','峰飞在昆山完成<strong>跨吨级、跨机型的五机自主编队演示</strong>，由 1 架 5 吨级和 4 架 2 吨级航空器组成，涵盖三种机型。编队飞行<strong>47 分钟、超过 133 公里</strong>。','峰飞航空',links.formation],
   ['11.21','品牌传播','峰飞以<strong>《联手宁德时代，点亮零碳未来》</strong>为主题，介绍在宁德举行的全国大学生零碳科技创新大赛总决赛。','中新网',links.zeroCarbon]
  ],
  '沃兰特':[['11.12','品牌传播','<strong>沃兰特自贡研发团队</strong>介绍了天行 VE25-100 的研制工作。','人民网四川频道',links.volant]],
  '亿航智能':[
   ['11.03–11.05','品牌传播','<strong>EH216-S</strong>亮相巴塞罗那全球智慧城市大会，展示城市空中交通应用。','亿航智能活动资料','social-samples/november-2026/ehang-barcelona.webp'],
   ['11.04','适航与技术','亿航发布<strong>EH216-EK 大载重消防 eVTOL</strong>，首批航空器在浙江文成完成组装下线，并开展现场消防演示。','亿航智能',links.fire],
   ['11.06','订单与合作','亿航披露与<strong>环天国际救援</strong>签署框架协议，探索 eVTOL、直升机与地面医疗资源协同。','亿航智能',links.rescue],
   ['11.11','试飞进展','<strong>EH216-S</strong>在斯里兰卡科伦坡港口城完成当地首次载人演示飞行。','亿航智能',links.sriLanka],
   ['11.17–11.18','品牌传播','亿航团队参加深圳<strong>APEC 工商领导人峰会</strong>，与亚太政商界代表交流低空科技创新与合作。','亿航智能参会报道',links.ehangApec],
   ['11.20','试飞进展','<strong>EH216-S</strong>在日本山梨县完成载人与空载演示，载人飞行约 380 米，空载飞行约 1,800 米。','日本一般社团法人 MASC',links.yamanashi]
  ],
  '蓝色向量':[['11.02','订单与合作','宁德时代宣布与蓝色向量合作，将为 <strong>SKYLA V30</strong>定制航空动力电池，并担任独家电池合作伙伴。','宁德时代',links.blue]],
  '亿维特':[['11.12','订单与合作','亿维特与宁德时代达成<strong>独家航空动力电池合作</strong>，覆盖载人及载物 eVTOL。','宁德时代',links.eivto]],
  '御风未来':[['11.05–11.10','品牌传播','<strong>M1 载人 eVTOL 真机</strong>亮相进博会，展示航空器构型与低空出行场景。','上海证券报·中国证券网',links.vertax]],
  '小鹏汇天':[['11.05–11.10','品牌传播','<strong>「陆地航母」</strong>亮相进博会，展示分体式飞行汽车方案。','华夏时报',links.aridge]]
 };

 const media = [
  ['时的科技',[
   ['东方日报','https://www.orientaldaily.com.my/news/central/2026/11/18/863890'],
   ['Media Selangor',links.selangor],
   ['星洲日报','https://pocketimes.sinchew.com.my/news/20261109/pocketimes/8050446']
  ],'东方日报和 Media Selangor 报道雪兰莪州行政议员介绍与时的科技的合作，聚焦 E20 商业化探索和东南亚业务布局。'],
  ['沃飞长空',[
   ['川观新闻',links.aerofugia],
   ['华夏时报','https://news.sohu.com/a/1101259437_122438197']
  ],'川观新闻报道郭亮获四川省杰出青年科学技术创新奖，并介绍 AE200 研发和试飞进展。进博会低空专题报道提及沃飞长空参展。'],
  ['峰飞航空',[
   ['央视网（11.09）','https://5g.cctv.com/2026/11/09/ARTI8oZ5DbFIIRqLh5KxXAOh261109.shtml'],
   ['中国证券报','https://www.cs.com.cn/ssgs/01/2026/11/04/detail_2026110410049804.html'],
   ['中国交通报','https://www.zgjtb.com/m/2026-11/06/content_543850.html'],
   ['Aviation International News','https://www.ainonline.com/aviation-news/futureflight/2026-11-05/five-evtol-formation-flight-autoflight'],
   ['新浪财经（11.20，谢嘉发言）','https://finance.sina.com.cn/jjxw/2026-11-20/doc-inizkyww7116448.shtml'],
   ['中国经营网','http://www.cb.com.cn/index/show/jr/cv/cv135278482418'],
   ['上海证券报（东方财富转载）','https://finance.eastmoney.com/a/202611043921923029.html'],
   ['新浪科技','https://finance.sina.com.cn/tech/shenji/2026-11-05/doc-inixsezu8876804.shtml'],
   ['美通社（峰飞航空通稿）','https://www.prnewswire.com/apac/zh/news-releases/evtol-302930403.html']
  ],'央视网、财经媒体和航空专业媒体报道昆山五机编队，关注多机型、跨吨级协同飞行。另有报道聚焦峰飞航空谢嘉谈大型 eVTOL 和全球化布局。'],
  ['沃兰特',[
   ['人民网四川频道',links.volant]
  ],'人物报道聚焦天行 VE25-100 和沃兰特自贡研发团队。']
 ];

 const social = [
  ['时的科技',0,4,4,4,null,'E20 马来西亚展示回顾、UniKL MIAT 航空职业交流、E20 区域出行场景。'],
  ['沃飞长空',5,5,null,4,null,'四川省科技奖、AE200 亮相进博会、《飞行试验室》科普、清华产教融合。'],
  ['峰飞航空',2,1,2,2,null,'五机编队及斯坦福校友参访、零碳科技活动、宁德时代在 APEC 讨论亚太 eVTOL 出行潜力。'],
  ['沃兰特',0,0,null,0,null,'—']
 ];

 const judgment = {
  headline:'海外聚焦适航与运营，国内试飞和电池合作活跃',
  regions:[
   ['海外','欧洲和澳大利亚的监管机构推进 eVTOL 适航文件，泰国开展 AAM 运营监管准备。迪拜 Marina 垂直起降场完工，成为当地空中出租车网络第二个获证站点。'],
   ['国内','主机厂频繁披露试飞进展，峰飞五机自主编队演示与小鹏汇天全倾转过渡试飞受到行业关注。试飞之外，航空动力电池合作集中披露，以宁德时代的配套与适航合作为代表。']
  ]
 };

 const highlights = [
  {
   id:'nov-easa', scope:'国际', category:'监管标准', date:'11.05', region:'欧洲', topic:'适航标准',
   title:'EASA 发布第五批 VTOL 适航符合性方法最终版',
   summary:'更新结构载荷、应急着陆、电传飞控和鸟撞后飞行能力等验证要求。',
   details:[
    '欧洲航空安全局（EASA）此前以 VTOL 专用条件（SC-VTOL）规定这类航空器的安全目标。符合性方法（MoC）进一步说明，制造商可以用哪些分析、试验和验证材料来证明设计满足这些目标。',
    '第五批文件初稿于 2025 年 7 月至 10 月公开征求意见。EASA 于 2026 年 11 月 5 日发布 Issue 2 最终版，并公布意见回应文件。这一批的方法涉及结构载荷、鸟撞后保持飞行的能力、应急着陆及电传飞控系统等项目。'
   ],
   sources:[['欧洲航空安全局','监管文件',links.easa]],
  },
  {
   id:'nov-archer', scope:'Archer', category:'适航与技术', date:'11.09', region:'美国', topic:'适航进展',
   title:'Archer 披露 Midnight 获 FAA 市场调研特别适航证',
   summary:'许可范围限于 Midnight 的常规起降（CTOL）构型。Archer 当时计划在 2026 年底前完成有人驾驶过渡飞行。',
   details:[
    'FAA 的市场调研特别适航证属于实验类许可。按美国联邦航空规章，这类许可可用于市场调研、销售演示或客户机组训练，实际可执行的活动以证书和运行限制为准。Archer 于 11 月 9 日披露获证，并在财报电话会上确认，本次许可仅适用于 Midnight 的常规起降（CTOL）构型，即像固定翼飞机一样在跑道上滑跑起降。',
    'Midnight 当时仍在进行有人驾驶过渡飞行试验，也就是由旋翼支撑的垂直起飞或悬停，转入依靠机翼提供升力的前飞。公司目标是在 2026 年底前完成这一里程碑。据管理层披露，垂直起降构型对应一项单独的市场调研许可申请，须有该构型的飞行数据作为依据。',
    '在此之前，BETA Technologies 的 ALIA 固定翼构型已取得同类授权。FAA 于 10 月 21 日进一步宣布向 BETA 的 ALIA A250 颁发首张面向电动垂直起降航空器的市场调研特别适航证。这一案例对应垂直起降构型，Archer 此次取得的许可对应常规起降构型。'
   ],
   sources:[['Archer Aviation 第三季度财报电话会','公司原始披露',links.archerCall],['Archer Aviation 股东信','SEC 披露',links.archerLetter],['美国联邦航空规章 § 21.195','法规原文',links.marketSurveyRule],['FAA 关于 BETA A250 的公告','监管公告',links.betaMarketSurvey],['BETA Technologies','企业公告',links.betaRelease]],
  },
  {
   id:'nov-dubai', scope:'国际', category:'基础设施', date:'11.18', region:'阿联酋', topic:'基础设施',
   title:'迪拜 Marina 垂直起降场完工并获 GCAA 认证',
   summary:'迪拜空中出租车网络已有两个完工获证站点。Marina 站设计年吞吐量最高 8.4 万人次。',
   details:[
    '迪拜道路与交通管理局与 Skyports 宣布，Marina 站完工并通过阿联酋民航总局（GCAA）的商业 eVTOL 起降场认证。它是继迪拜国际机场站之后，迪拜空中出租车网络第二个完工获证的站点。',
    '站点位于迪拜美国大学附近，可步行接驳地铁。场内设有高架起降区、充电设施和旅客航站空间，设计年容量约 2.1 万次降落，旅客吞吐量最高 8.4 万人次。',
    '迪拜市中心与朱美拉棕榈岛两站仍在开发，Joby 拟运营该网络。此次进展落在地面设施，航空器和商业运营还各有相应准备与审批环节。'
   ],
   sources:[['迪拜道路与交通管理局','官方公告',links.dubai]],
  },
  {
   id:'nov-ascendance', scope:'Ascendance', category:'适航与技术', date:'11.19', region:'法国', topic:'样机发布',
   title:'Ascendance 发布全尺寸 ATEA 混合动力垂直起降样机',
   summary:'首架全尺寸样机在图卢兹亮相，展示 ATEA 与 Sterna 混合动力系统的整机集成。',
   details:[
    '法国 Ascendance 于 11 月 19 日在图卢兹展示首架全尺寸 ATEA。其自研 Sterna 混合动力系统把机载发电、储能和电力管理整合在一起，企业希望让这套系统也能用于其他航空器。',
    '发布时，首架全尺寸样机已开始地面测试。公司接下来拟申请 EASA 试飞许可，取得许可后再开展有人飞行测试。Sterna 的生产扩充计划从 2027 年推进，既支持 ATEA 项目，也面向潜在产业伙伴。'
   ],
   sources:[['Ascendance','企业公告','https://www.ascendance-ft.com/resources/news/ascendance-joins-choose-france-2026'],['Aviation International News','航空媒体报道',links.ascendance]],
  },
  {
   id:'nov-battery-lab', scope:'国内', category:'供应链', date:'11.11', region:'中国', topic:'供应链',
   title:'中国民航大学与宁德时代签约共建航空电池适航实验室',
   summary:'联合开展航空电池安全测试、适航标准和符合性验证方法研究，覆盖纯电及混合动力系统。',
   details:[
    '中国民航大学与宁德时代于 11 月 11 日在福建宁德签约，拟共建航空电池适航技术创新联合实验室。研究范围包括航空纯电、混合动力能源系统及相应低空应用场景。',
    '双方将搭建测试验证平台，研究航空电池安全测试与符合性验证方法，并联合参与相关民航技术标准和团体标准的编制、修订。合作也包括电动航空方向的校企课程和人才培养。'
   ],
   sources:[['宁德时代','企业公告',links.batteryLab]],
  },
  {
   id:'nov-formation', scope:'峰飞航空', category:'试飞进展', date:'11.01', region:'中国', topic:'试飞进展',
   title:'峰飞完成跨吨级、跨机型的五机自主编队演示',
   summary:'1 架 5 吨级与 4 架 2 吨级航空器参与昆山演示，编队飞行 47 分钟、超过 133 公里。',
   details:[
    '峰飞在昆山于 10 月 31 日和 11 月 1 日进行编队演示。一架 5 吨级 V5000 天际龙领飞，四架 2 吨级航空器参与，包含 V2000CG 货运型及 V2000CGF 消防型。',
    '五机编队自主飞行 47 分钟，领飞机飞行超过 133 公里。不同吨级和任务构型对速度、航迹与机间间隔的要求有差异，这次演示把这些约束放在一次协同飞行中验证。'
   ],
   sources:[['峰飞航空','企业公告',links.formation],['中国交通报','航空交通媒体','https://www.zgjtb.com/m/2026-11/06/content_543850.html']],
  },
  {
   id:'nov-ehang-fire', scope:'亿航智能', category:'适航与技术', date:'11.04', region:'中国', topic:'新机型发布',
   title:'亿航发布 EH216-EK 消防 eVTOL，首批在浙江文成下线',
   summary:'新机型面向森林草原初期火情、工业园和仓储物流等场景，配备独立电控抛投系统。',
   details:[
    '亿航在浙江文成发布 EH216-EK 大载重无人驾驶消防 eVTOL，并完成现场消防演示。该机沿用 EH216 系列的多旋翼平台，配备多通道独立电控抛投系统，面向森林草原初期火情、工业园区和仓储等场景。',
    '首批 EH216-EK 在文成新质智造中心完成组装下线。该基地规划覆盖组装、测试交付与维修服务，首批航空器将用于推进后续产品验证、应用开发和业务合作。'
   ],
   sources:[['亿航智能','企业公告',links.fire],['温州日报','媒体报道','https://news.66wz.com/system/2026/11/05/105866999.shtml']],
  },
  {
   id:'nov-zero-boundary-funding', scope:'零界航空', category:'资本与经营', date:'11.10', region:'中国', topic:'融资',
   title:'零界航空完成千万元天使轮融资',
   summary:'上海互翔独家投资，资金主要用于验证基地建设、运行体系和主机厂合作。',
   details:[
    '安徽天泽零界航空完成千万元天使轮融资，由上海互翔投资管理有限公司独家投资。资金主要用于推进验证基地建设和运营、完善运行体系、拓展主机厂合作，并建设数字化平台和专业团队。',
    '零界航空提供 eVTOL 交易与运力服务，通过融资租赁对接整机厂、金融机构和使用方，并推动航空器在高时效物流等场景运行。此前，零界航空于 9 月与峰飞航空及皖江金租达成 30 架凯瑞鸥货运 eVTOL 的采购及融资租赁合作。',
    '这轮融资的重点是把航空器交易与持续运营衔接起来，支持在实际飞行和租赁业务中积累运营成本、设备利用率及资产定价所需的数据。'
   ],
   funding:[['2026 年 11 月 10 日','天使轮','千万元','上海互翔投资管理有限公司（独家）',links.zeroBoundary]],
   sources:[['36氪','首发报道',links.zeroBoundary]]
  },
  {
   id:'nov-aridge-a868-transition', scope:'小鹏汇天', category:'试飞进展', date:'11.22', region:'中国', topic:'试飞进展',
   title:'小鹏汇天 A868 完成全倾转过渡试飞',
   summary:'全尺寸样机由垂直起降状态转换至高速平飞，完成全倾转构型的关键飞行验证。',
   details:[
    '小鹏汇天于 11 月 22 日公布，A868 全尺寸样机近日成功完成倾转过渡试飞，从垂直起降状态完整转换至高速平飞。该机于 2025 年 11 月完成首次起降试飞，此次验证把试飞范围推进到了两种飞行状态之间的转换。',
    'A868 采用全倾转构型，全部旋翼均可转动，分别为垂直起降和水平飞行提供所需动力。过渡阶段需要倾转机构与飞控协同工作，以维持航空器姿态和升力。',
    'A868 面向多人、中长途商务出行，与面向个人飞行体验的分体式「陆地航母」对应不同应用场景。本次试飞验证的是倾转过渡，试验性质处于型号研制阶段。'
   ],
   sources:[['中国新闻网','媒体报道',links.aridgeTransition],['汇天飞行汽车','微信原文',links.aridgeTransitionOriginal],['科技日报','媒体报道','https://www.ncsti.gov.cn/kjdt/kjrd/qtrd_kjrd/202611/t20261124_265185.html']]
  }
 ];

 const earnings = [
  {
   id:'nov-beta-q3', scope:'BETA', category:'资本与经营', date:'11.03', region:'美国', topic:'第三季度财报',
   title:'BETA Technologies 发布 2026 年第三季度财报',
   summary:'三季度营收 1,770 万美元，同比增长 98%，净亏损 1.191 亿美元。公司上调全年营收指引至 5,200 万至 5,700 万美元。',
   details:[
    'BETA 于 11 月 3 日发布三季度业绩，营收 1,770 万美元，创季度新高。其中产品收入 520 万美元，服务收入 1,250 万美元。季度净亏损 1.191 亿美元，经调整 EBITDA 亏损 9,740 万美元，期末现金及现金等价物约 13.43 亿美元。',
    'BETA 更新了 ALIA A250 的适航与运营进展。该机 10 月获得 FAA 市场调研特别适航证，可在型号审定完成前按许可开展搭载潜在客户的演示飞行。BETA 机队累计飞行超过 25 万海里，已启动其参与的 7 项 eIPP 试点中的 6 项。',
    '企业披露商用飞机在手订单金额超过 40 亿美元，涵盖 1,040 架确认订单及选择权订单。全年营收指引上调至 5,200 万至 5,700 万美元。'
   ],
   sources:[['BETA Technologies 财报公告','SEC 披露',links.betaEarnings]]
  },
  {
   id:'nov-joby-q3', scope:'Joby', category:'资本与经营', date:'11.04', region:'美国', topic:'第三季度财报',
   title:'Joby 发布 2026 年第三季度财报',
   summary:'三季度营收 5,510 万美元，净亏损 2.118 亿美元。公司上调全年营收指引，并报告 17 架航空器在产。',
   details:[
    'Joby 于 11 月 4 日公布截至 9 月 30 日的三季度业绩。营收为 5,510 万美元，主要来自 Blade 业务。季度净亏损为 2.118 亿美元，期末现金、现金等价物及可交易证券投资约 22 亿美元。全年营收指引由公司上调至 1.35 亿至 1.4 亿美元。',
    'Blade 三季度运送超过 4.4 万名乘客，创下该业务季度新高。纽约机场接驳服务乘客量同比增长 61%。这部分业务已有实际客运收入，Joby 自研电动空中出租车仍处于适航与试点阶段。',
    '公司披露已有 17 架航空器在产，并完成机身、螺旋桨桨毂、尾翼和倾转作动器等多项可计入 FAA 型号审定的测试。公司预计 2027 年上半年开展 FAA 飞行员培训及 Joby 自身相关飞行测试，为型号检查授权（TIA）飞行测试做准备。'
   ],
   sources:[['Joby Aviation 财报公告','公司原始披露',links.joby],['Joby Aviation 股东信','SEC 披露',links.jobyLetter]]
  },
  {
   id:'nov-archer-q3', scope:'Archer', category:'资本与经营', date:'11.09', region:'美国', topic:'第三季度财报',
   title:'Archer 发布 2026 年第三季度财报',
   summary:'三季度营收 510 万美元，净亏损 2.746 亿美元。公司同步更新 Midnight 的适航试验和波音资产收购。',
   details:[
    'Archer 于 11 月 9 日公布截至 9 月 30 日的三季度业绩。营收 510 万美元，净亏损 2.746 亿美元，调整后 EBITDA 亏损 1.785 亿美元。期末现金、现金等价物及短期投资约 13.54 亿美元。',
    'Midnight 处于 FAA 型号合格审定的第四阶段，即按已商定的符合性方法和试验计划开展验证。公司在财报中披露常规起降构型获得市场调研特别适航证，并将年底前完成有人驾驶过渡飞行列为目标。',
    '公司同时更新拟从波音收购 Wisk、Insitu 和 SkyGrid 的进度。披露时交割仍待完成。管理层将 Wisk 和 SkyGrid 的相关能力与空中出租车的研发、商业化和规模化联系起来。'
   ],
   sources:[['Archer Aviation 财报公告','公司原始披露',links.archer],['Archer Aviation 股东信','SEC 披露',links.archerLetter],['Archer Aviation 财报电话会','公司原始披露',links.archerCall]]
  }
 ];

 const otherDetails = [
  {
   id:'nov-aridge-expo', scope:'小鹏汇天', category:'品牌传播', date:'11.05–11.10', region:'中国', topic:'展会展示',
   title:'小鹏汇天「陆地航母」亮相第九届进博会',
   summary:'分体式飞行汽车在中国馆展出，展示陆行体与独立双座飞行器的组合方案。',
   details:[
    '小鹏汇天在第九届进博会中国馆展示分体式「陆地航母」。产品由可在地面行驶的陆行体和一架独立双座飞行器组成，飞行器可收纳于车内并通过车载机构分离和结合。',
    '这次展示聚焦个人飞行体验，面向公众呈现从地面行驶到飞行的使用流程。'
   ],
   sources:[['华夏时报','媒体报道',links.aridge],['澎湃新闻','展会现场图片',links.aridgeExpoPhoto],['微信链接','',links.aridgeExpoOriginal]]
  },
  {
   id:'nov-ehang-apec', scope:'亿航智能', category:'品牌传播', date:'11.17–11.18', region:'中国', topic:'国际产业交流',
   title:'亿航智能参加深圳 APEC 工商领导人峰会',
   summary:'亿航团队与亚太政商界代表交流低空科技合作，EH216-S 出现在峰会主宣传片中。',
   details:[
    '2026 年 APEC 工商领导人峰会于 11 月 17 日至 18 日在深圳前海国际会议中心举行。亿航智能中国区总经理李晓娜率队参会，与亚太政商界代表交流低空科技发展与跨区域合作。',
    '亿航 EH216-S 载人 eVTOL 出现在峰会主宣传片中。峰会的粤港澳大湾区专题研讨也以亿航为案例，讨论低空交通在文旅与出行场景中的应用。'
   ],
   sources:[['亿航智能参会报道','活动报道',links.ehangApec],['亿航智能活动资料','公众号截图','social-samples/november-2026/ehang-wechat.webp']]
  }
 ];

 const detailedEvents = [...highlights,...earnings,...otherDetails];
 const detailBySource = Object.fromEntries(detailedEvents.map(event=>[
  `2026-11|${event.scope}|${event.date}|${event.category}`,event.id
 ]));

 const eventSources = {};
 for (const [date, region, category, , label, url] of industry) {
  eventSources[`2026-11|${region}|${date}|${category}`] = {label,url};
 }
 for (const [brand, rows] of Object.entries(events)) {
  for (const [date, category, , label, url] of rows) {
   eventSources[`2026-11|${brand}|${date}|${category}`] = {label,url};
  }
 }

 return {
  report:{
   cutoff:'截至 11.25',
   metrics:[['国内品牌声量','—',''],['品牌声量占比','—','','时的、沃飞、峰飞、沃兰特'],['媒体报道数量','—',''],['中性/敏感信息量','—','']],
   summaries:judgment.regions.map(([region,copy])=>[region,region==='海外'?'industry':'competitorEvents',[['',copy]]]),
   industry, events, stats:[]
  },
  media,social,judgment,highlights,earnings,detailedEvents,detailBySource,eventSources,
  edition:{
   period:'2026 年 11 月 1–25 日',photo:'november-dubai.webp',photoAlt:'迪拜 Marina 垂直起降场',photoCredit:'迪拜道路与交通管理局',photoUrl:links.dubai,
   events:highlights
  }
 };
})();
