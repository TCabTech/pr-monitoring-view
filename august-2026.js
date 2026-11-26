'use strict';

const august2026 = (() => {
 const items = [
  ['archer','08.10','Archer','资本与经营','Archer 宣布拟收购 Wisk、SkyGrid 和 Insitu','交易采用股票对价，涉及自主飞行与数字空域管理。','Archer 于 8 月 9 日签署协议，次日披露。本次交易涵盖 Wisk 的自主飞行技术与 SkyGrid 的空域集成能力，波音拟通过交易成为 Archer 的股东。','SEC','https://www.sec.gov/Archives/edgar/data/1824502/000110465926093056/tm2622394d1_8k.htm'],
  ['joby','08.11','Joby','资本与经营','Joby 宣布拟以约 5 亿美元收购 Resonant Sciences','Joby 将通过此次交易扩展国防业务。','Resonant Sciences 已为美国国防客户提供技术与制造服务。Joby 在公告中表示，原有电动空中出租车业务继续推进取证及商业化。','Joby','https://www.jobyaviation.com/news/joby-aviation-to-scale-defense-business-through-acquisition-of-resonant-sciences'],
  ['eve-test','08.03','Eve','试飞进展','Eve 全尺寸验证机完成首次部分过渡飞行','试验开始验证由悬停向翼载飞行的转换过程。','试飞使用全尺寸工程验证机，测试了部分过渡阶段。该阶段可用于评估构型变化时的飞控响应，并为扩大飞行包线积累数据。','Eve Air Mobility','https://www.eveairmobility.com/eve-air-mobility-achieves-first-transition-flight-milestone-advancing-evtol-program-toward-wing-borne-flight/'],
  ['eve-thai','08.17','Eve','海外进展','Eve 与 RV Connex 推进泰国城市空中交通合作','双方签署谅解备忘录，合作范围包括监管框架及运营准备。','Eve 提供城市空中交通和运营体系经验，RV Connex 参与泰国本地项目对接。','RV Connex','https://www.rvconnex.com/en/newsroom/news-and-events/257/eve-air-mobility-and-rv-connex-sign-mou-to-advance-urban-air-mobility-regulatory-framework-in-thailand'],
  ['policy','08.07','国内','中央政策','三部门印发《民用航空发展“十五五”规划》','规划提出推动低空民用航空安全发展，构建自主可控的创新支撑体系。','中国民航局、国家发展改革委、交通运输部联合印发规划。文件把安全发展作为底线，并将低空民用航空纳入民航系统的设施、运营和产业发展安排。','中国民航局','https://www.caac.gov.cn/XWZX/MHYW/202608/t20260807_231452.html'],
  ['industry','08.26','国内','中央政策','工信部提出加快培育低空经济等新兴支柱产业','到 2035 年，力争培育约 100 家示范园区和约 1,000 家示范企业。','工信部在国务院新闻办公室举行的发布会上提出建设国家新型产业发展示范基地。示范园区和示范企业目标涵盖新兴产业。','科技日报','https://finance.sina.com.cn/roll/2026-08-26/doc-iniprqcs5587099.shtml'],
  ['ccar','08.12','国内','监管政策','民航局就 CCAR-61 等规章修订稿定向征求意见','讨论集中在运动驾驶员的体检要求及初级飞机运动教员的执照资格。','修订稿提出调整运动驾驶员体检资格，并讨论提高相关飞行教员的执照要求。相关条款仍处于征求意见阶段，主要涉及运动类飞行与培训。'],
  ['supply','08.05','国内','产业观察','《经济日报》评论关注低空经济产业链韧性','评论讨论核心部件、产业配套及安全治理。','文章提出，低空经济扩大应用需要核心技术攻关、供应链配套和安全保障能力共同支撑。','经济日报','https://www3.xinhuanet.com/tech/20260805/9f82c2ef6cda425192cebfe04e9256d7/c.html'],
  ['whitesky','08.12','峰飞航空','订单与合作','峰飞与 Whitesky Aviation 签署 60 架盛世龙框架采购协议','双方在雅加达签署协议，采购框架涉及 V2000EM 盛世龙。','Whitesky Aviation 是印尼直升机运营商。当地运营合作与 60 架 V2000EM 的采购框架同时披露，具体交付安排取决于后续协议和项目进度。','界面新闻','https://finance.sina.com.cn/jjxw/2026-08-13/doc-inincnuu4822330.shtml','autoflight-order'],
  ['battery','08.17','峰飞航空','适航与技术','峰飞披露盛世龙配套电池完成相邻双电芯热失控不扩散验证','宁德时代为载人机型开发的电池系统采用 350 Wh/kg 方壳电芯。','相邻两颗电芯发生热失控时，试验验证热失控能否被限制在指定范围。该项验证属于 V2000EM 型号符合性验证的一部分。','IT之家','https://m.ithome.com/html/987585.htm','autoflight-battery'],
  ['af-kz','08.04','峰飞航空','海外进展','峰飞盛世龙亮相阿斯塔纳未来运动会','峰飞在哈萨克斯坦展示载人 eVTOL。','阿斯塔纳的活动为峰飞提供面向中亚市场的公开展示场景。',null,null,'autoflight-kazakhstan'],
  ['af-ca','08.23','峰飞航空','海外进展','泰国民航局代表团到访峰飞航空','双方围绕 eVTOL 技术及合作交流。','来访交流涉及 eVTOL 产业及应用，属于与当地监管部门建立沟通的活动。','峰飞航空','https://www.autoflight.com/zh/news/thai/','autoflight-visit'],
  ['eh-q2','8月','亿航智能','资本与经营','亿航发布 2026 年第二季度财报','营收环比增长 203.5%，同比下降 31.3%，公司撤回全年 6 亿元营收指引。','财报说明监管和落地时间仍有不确定性。管理层短期聚焦海外市场及非载人应用。','亿航投资者关系','https://ir.ehang.com/news-releases/news-release-details/ehang-reports-second-quarter-2026-unaudited-financial-results/'],
  ['eh-hk','08.28','亿航智能','试飞进展','亿航 EH216-S 完成香港首次公开飞行','项目完成香港「监管沙盒 X」首阶段飞行验证。','此次飞行用于验证本地运行条件和流程，为监管沙盒项目提供实际飞行数据。','亿航智能','https://www.ehang.com/cn/news/1386.html','ehang-hong-kong'],
  ['eh-sri','08.19','亿航智能','海外进展','斯里兰卡成为亿航全球 Fast Track 首个市场','计划在科伦坡港口城开展沙盒验证。','亿航与当地民航部门以项目方式推进市场准入，计划在约四个月内验证，并以监管、安全与运营评估为商业化前提。','亿航智能','https://www.ehang.com/cn/news/1381.html','ehang-sri-lanka'],
  ['eh-cscec','08.20','亿航智能','订单与合作','亿航与中建六局达成战略合作意向','海南临高跨海低空走廊作为合作框架下的首个工程。','合作覆盖低空基础设施及跨海场景，临高段项目用于推进双方在起降设施与场景建设上的配合。','亿航智能','https://www.ehang.com/cn/news/1383.html','ehang-cscec'],
  ['eh-kz','8月','亿航智能','试飞进展','亿航 EH216-S 在哈萨克斯坦开展载人演示','飞行位于阿斯塔纳，哈萨克斯坦交通部门代表参与。','现场演示与未来运动会相关，展示 EH216-S 在当地的飞行体验。',null,null,'ehang-kazakhstan'],
  ['eh-local','8月','亿航智能','订单与合作','亿航在合肥骆岗公园开展商业化试运行','项目在骆岗公园验证面向公众的载人体验流程。','试运行涉及起降场地保障与旅客流程。'],
  ['eh-exchange','8月','亿航智能','海外进展','亿航推进泰国运营准备并接待海外来访','本月交流涉及美国及马来西亚代表，并继续推进泰国飞行准备。','泰国项目涉及本地飞行验证和监管准备。管理层提出取得商业运营许可的目标，许可取决于当地审批。'],
  ['ae-ca','08.21','沃飞长空','海外进展','泰国民航局代表团到访沃飞长空','代表团交流 AE200 系列与泰国 eVTOL 运行准备。','双方讨论 eVTOL 技术与本地运行议题。','沃飞长空','https://www.aerofugia.com/news/324','aerofugia-visit'],
  ['ae-trainee','08.20','沃飞长空','品牌传播','沃飞长空完成 2026 届大雁集训营','项目面向新入职员工开展培养。','集训属于企业人才培养项目。',null,null,'aerofugia-trainee'],
  ['ae-profile','08.13','沃飞长空','品牌传播','成都发布报道沃飞长空创始团队与成都低空产业','报道关注从产品研发到城市应用的探索。','专题从创始团队切入，介绍 AE200 研发、运营标准和商业化布局。','成都发布','https://mp.weixin.qq.com/s/3tVA2ItqTjvTiGDyK4kSTQ'],
  ['ae-market','08.06','沃飞长空','品牌传播','《经济参考报》报道沃飞长空的量产布局','报道讨论从整机工程设计走向生产和运营。','文章围绕沃飞长空的产业化进展，讨论飞机从图纸走向航线所需的配套能力。','经济参考报','https://finance.sina.com.cn/tech/roll/2026-08-06/doc-inimivfr3990016.shtml','aerofugia-market'],
  ['vo-interview','8月','沃兰特','品牌传播','沃兰特 CEO 董明谈适航安全与运营经济性','专访讨论行业早期商业闭环。','董明就安全设计与实际运营条件展开讨论。','中国经营网','http://www.cb.com.cn/index/show/gs1/cv/cv12548708138'],
  ['tcab-prop','08.20','时的科技','适航与技术','E20 配套 AP340 螺旋桨首台下线并交付','航空工业惠阳完成首台产品总装下线。','AP340 由时的科技与航空工业惠阳共同推进。该交付对应 E20 关键配套部件进入后续研制与验证的节点。','航空创作计划','https://weibo.com/2/detail/5338270911431501'],
  ['tcab-soi','08.24','时的科技','适航与技术','E20 飞控电子及综合航电系统通过 SOI#1 审查','航空工业计算所承担相关软硬件研制。','SOI#1 是对机载系统软硬件开发计划和流程的阶段性审查。E20 的相关系统由此进入后续审查和验证工作。','中国航空工业集团','https://m.weibo.cn/detail/5338337411859047'],
  ['tcab-study','08.14','时的科技','品牌传播','时的科技开展低空研学活动','活动面向学生及公众介绍航空技术与 eVTOL。','参访者通过现场参观了解电动垂直起降飞行器。',null,null,'tcab-study'],
  ['tcab-center','08.07','时的科技','品牌传播','时的科技获上海市企业技术中心认定','企业技术中心认定涉及企业研发组织与创新能力。','该认定属于上海产业创新体系的一部分。',null,null,'tcab-center'],
  ['tcab-family','8月','时的科技','品牌传播','时的科技开展家庭日活动','员工及家属参加企业交流活动。','活动属于雇主品牌传播。'],
  ['zero','8月','零重力','资本与经营','零重力获阿曼 MGI 长期战略投资','合作同时涉及阿曼制造基地和海湾市场布局。','双方讨论在沙特阿拉伯、阿联酋、科威特、卡塔尔、阿曼和巴林布局业务，涵盖当地制造、适航与应用场景。','C114通信网','https://www.c114.com.cn/la/6544/a1316752.html'],
  ['zero-show','8月','零重力','品牌传播','零重力开展沈阳快闪与齐云山体验活动','活动以登机体验和互动展示面向公众。','展示涉及飞行器在文旅消费场景中的应用。'],
  ['evtol-fin','8月','亿维特','资本与经营','亿维特完成数亿元 A+ 轮融资','上城资本和普华资本联合领投。','融资对应公司 eVTOL 研制与产业化布局。'],
  ['beifei','08.14','倍飞智航','资本与经营','倍飞智航披露完成超亿元战略融资','元筑投资和鑫飞资本联合投资。','本轮资金用于推进 5000 系列 eVTOL 适航取证。','新浪科技','https://finance.sina.com.cn/tech/roll/2026-08-19/doc-ininvfsz9528057.shtml'],
  ['yufeng','8月','御风未来','品牌传播','御风未来在上海环球港开展科普快闪','活动通过商场展陈面向亲子家庭和公众。','现场活动以航空科普及产品展示为主。'],
  ['aridge','08.20','小鹏汇天','试飞进展','小鹏汇天在深圳演示「陆地航母」','展示包括自动分离结合和有人驾驶飞行，约旦国王现场参观。','演示集中呈现车辆与飞行体的分离、结合及飞行操作。','太平洋科技','https://g.pconline.com.cn/x/2180/21807032.html'],
  ['aridge-show','8月','小鹏汇天','品牌传播','「陆地航母」亮相成都车展和珠海东澳岛','两场活动分别面向车展观众和海岛文旅场景。','传播围绕分体式飞行汽车展示及低空文旅应用展开。']
 ];
 const articlePhotos=['joby', 'eve-test', 'eve-thai', 'industry', 'tcab-soi'];
 const eventSources={}, eventPhotos={}, detailBySource={}, events={}, industry=[];
 const detailedEvents=items.map(([slug,date,scope,category,title,summary,detail,name,url,photo])=>{
  const id='aug-'+slug;
  const key=['2026-08',scope,date,category].join('|');
  const sources=url?[[name,'事件来源',url]]:[];
  if(url)eventSources[key]={label:name,url};
  if(photo||articlePhotos.includes(slug))eventPhotos[key]={file:'event-photos/august-'+(photo||slug)+'.webp',alt:title,article:slug==='tcab-soi'?'https://www.sohu.com/a/1066828341_115926':url};
  detailBySource[key]=id;
  if(scope==='国内')industry.push([date,scope,category,title+'。']);
  else (events[scope]??=[]).push([date,category,title+'。']);
  const funding=slug==='beifei'?[[date,'战略融资','超亿元','元筑投资、鑫飞资本',url]]:undefined;
  return {id,date,scope,category,region:scope==='国内'||!/^(Archer|Joby|Eve)$/.test(scope)?'中国':scope==='Eve'?'海外':'美国',topic:category,title,summary,details:[summary,detail],sources,funding};
 });
 const judgment={headline:'海外主机厂拓展业务，国内关注低空安全与产业配套',regions:[
  ['海外','Archer 与 Joby 披露并购计划，自主飞行与国防业务成为两家的新增长方向。Eve 在延伸试飞范围的同时，通过本地合作推进泰国市场准备。'],
  ['国内','民航规划与通航规则修订将安全监管推到前台。峰飞的印尼采购合作和电池安全验证带动关注，时的科技的传播集中在 E20 配套交付和航电审查。']
 ]};
 const highlights=['archer','joby','eve-test','policy','industry','ccar','whitesky','battery','eh-q2','tcab-soi'];
 return {eventSources,eventPhotos,detailBySource,detailedEvents,judgment,
  edition:{period:'2026 年 8 月 1–31 日',photo:'august-autoflight-order.webp',photoAlt:'峰飞航空与 Whitesky Aviation 签约现场',photoCredit:'峰飞航空',photoUrl:'https://www.autoflight.com/en/news/duplicate-of-autoflight-showcases-advanced-air-mobility-during-games-o/',events:highlights.map(slug=>detailedEvents.find(event=>event.id==='aug-'+slug))},
  report:{metrics:[['国内品牌声量','2,298',''],['品牌声量占比','6.4%',''],['媒体报道数量','532',''],['中性/敏感信息量','169','']],summaries:[],industry,events,
  voiceSummary:'亿航智能以 44.2% 的份额居首，峰飞航空和沃飞长空份额接近。时的科技声量主要来自 E20 配套交付与系统适航进展。',
  stats:[['亿航智能','15,834','44.2%','4,370','27.6%','1,690'],['峰飞航空','7,103','19.8%','1,833','25.8%','366'],['沃飞长空','6,912','19.3%','1,438','20.8%','264'],['沃兰特','3,674','10.3%','1,000','27.2%','218'],['时的科技','2,298','6.4%','532','23.1%','174']]},
  media:[
   ['亿航智能',[['亿航投资者关系','https://ir.ehang.com/news-releases/news-release-details/ehang-reports-second-quarter-2026-unaudited-financial-results/'],'央视网','新华财经','界面新闻','钛媒体','GlobeNewswire'],'报道覆盖财报、国际市场计划和香港飞行。'],
   ['峰飞航空',[['界面新闻',eventSources['2026-08|峰飞航空|08.12|订单与合作'].url],['证券时报','https://finance.sina.com.cn/roll/2026-08-13/doc-inincnuy3430161.shtml'],'人民财讯','中国经营报',['卓乎','https://mp.weixin.qq.com/s/PtltUbucDns6KjPwc2D3fA']],'印尼框架采购和电池安全验证是主要议题。'],
   ['沃飞长空',[['经济参考报','https://finance.sina.com.cn/tech/roll/2026-08-06/doc-inimivfr3990016.shtml'],['成都发布','https://mp.weixin.qq.com/s/3tVA2ItqTjvTiGDyK4kSTQ'],['卓乎','https://mp.weixin.qq.com/s/5G5Uu3fBR05AydmYlBtr9Q'],'证券时报','每日经济新闻','中国经营报'],'媒体关注 AE200、创始团队和成都低空产业发展。'],
   ['沃兰特',[['中国经营报','http://www.cb.com.cn/index/show/gs1/cv/cv12548708138'],['低空头部','https://mp.weixin.qq.com/s/PtltUbucDns6KjPwc2D3fA']],'报道讨论安全、经济性与商业化阶段。'],
   ['时的科技',['经济参考报','中国航空报',['中国航空工业集团',eventSources['2026-08|时的科技|08.24|适航与技术'].url]],'E20 航电审查与 AP340 配套交付构成主要技术报道。']
  ],
  social:[
   ['亿航智能',9,4,5,4,null,'海外飞行、市场准入与合作'],
   ['峰飞航空',4,1,6,0,4,'印尼采购合作、电池安全和国际交流'],
   ['沃飞长空',4,5,5,5,null,'海外监管交流、飞行试验室和人才培养，领英含 3 条转载'],
   ['沃兰特',0,0,0,0,0,'本月各监测平台无更新'],
   ['时的科技',2,2,null,3,3,'低空研学、企业技术中心认定和雇主品牌']
  ]
 };
})();
