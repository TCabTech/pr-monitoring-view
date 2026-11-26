'use strict';

const briefingDetails = {
 'texas-eipp': [
  '美国交通部于 9 月 10 日宣布得州启动联邦 eVTOL 整合试点。Joby 在达拉斯–沃思堡地区安排约一周的飞行演示，覆盖区域机场及城市节点。',
  '演示检验电动垂直起降飞机如何与机场运行、空域管理和地面保障配合。演示覆盖机场和企业园区，涉及既有机场运行与非传统起降场景的协调。'
 ],
 'autoflight-order': [
  '峰飞航空、零界航空和皖江金租达成三方合作，采购协议涉及 30 架 V2000CG 凯瑞鸥货运 eVTOL，由皖江金租提供融资租赁服务。',
  '协议披露时，首批计划在年内交付 5 架，其中 2 架计划于 9 月交付。三方安排中，零界航空作为使用方，皖江金租提供融资租赁，峰飞负责飞机交付。公开材料列出的应用包括物流、应急救援和医疗转运。'
 ],
 'china-malaysia-mou': [
  '中国民航局副局长胡振江会见马来西亚交通部部长陆兆福。双方就航空运输联系、双边合作与低空经济交换意见，随后见签两国民航部门的民用航空安全合作备忘录。',
  '合作范围覆盖航空器适航、航空组织认证、人员执照、运行监管及合规结论和证书相互认可。备忘录为两国监管部门开展协调提供框架，具体机型在当地取得批准属于单独程序。'
 ],
 'malaysia-ioi': [
  'E20 在布城 IOI City Mall 首次面向马来西亚公众静态展示。活动由时的科技、SIDEC 和 IOI City Mall 联合举办，展期从 10 月 9 日至 11 月 9 日。',
  '开幕当天，时的科技与雪兰莪州资讯科技及数码经济机构 SIDEC 交换合作备忘录，并宣布计划在马来西亚设立东南亚业务中心。Bernama 从本地合作切入，AWANI Review 随后通过创始人访谈讨论公众信任和商业可行性。'
 ],
 'beta-faa': [
  'FAA 公布向 BETA 的 ALIA A250 颁发市场调研特别适航证，允许飞机在授权范围内开展市场调研飞行，包括与潜在客户和合作方共同飞行。',
  '据 BETA 披露，首架获授权飞机于 10 月 20 日完成许可后的首次飞行。该证书的权限对应特定用途的市场调研飞行，常规商业载客运营另有审批要求。'
 ]
};

const briefingFunding = {
 '09': [
  {
   id:'dream-funding', date:'09.03', region:'中国', title:'追梦空天完成数亿元 A+ 轮融资',
   summary:'杭实集团及下属杭州低空公司领投，资金将用于适航取证、工程研制和量产建设。',
   details:['本轮有萧山创投基金、财通资本等机构参与，航投基金和晓池资本继续跟投。','公开披露的资金投向包括 DF600 试点应用、适航取证和量产能力，以及 DF3000 载人机型研发。'],
   funding:[
    ['2026.09.03','A+ 轮','数亿元','杭实集团及下属杭州低空公司领投，萧山创投基金、财通资本等参与，航投基金、晓池资本继续跟投。','https://finance.eastmoney.com/a/202609033864347198.html'],
    ['2025.12.08','A 轮','近 2 亿元','航投基金领投，德清产投、钧山资本、海邦沣华跟投。','https://www3.xinhuanet.com/milpro/20251208/bade1b7f1025460e910f373bda032430/c.html'],
    ['2025.08.21','Pre-A++ 轮及战略轮','两轮合计超亿元','Pre-A++ 轮由朝希资本领投，钧山资本、莫干山基金、海邦沣华、晓池资本等跟投。战略轮由航投基金独家投资。','https://finance.sina.com.cn/tech/roll/2025-08-21/doc-infmtmrc9511705.shtml'],
    ['2025.02.20','Pre-A 轮及 Pre-A+ 轮','亿元级','报道列出的投资方包括悦达汽车科创基金、耀途资本、晓池资本、同为资本等。','https://companies.caixin.com/m/2025-02-20/102290351.html'],
    ['2024.12.03','天使轮','金额未披露','晓池资本、为溪创投、深圳摩山投资。','https://www.taibo.cn/company/2590'],
    ['2023.09.11','种子轮','数千万元','腾业创投、水木清华校友基金。','https://www.taibo.cn/company/2590']
   ],
   sources:[['科创板日报','媒体报道','https://finance.eastmoney.com/a/202609033864347198.html'],['航投基金','投资方披露','https://caif.com.cn/news-detail.html?id=98']],
  },
  {
   id:'lanyii-funding', date:'09.04', region:'中国', title:'览翌航空披露超亿元 Pre-A 第三笔融资',
   summary:'资金将支持 LE200 研发、适航取证和武汉东湖区产能建设。',
   details:['上海证券报从览翌航空获悉，公司完成超亿元 Pre-A 轮第三笔融资，由武汉光谷相关机构和长江资本参与。','投资数据库将这笔融资记为 Pre-A++。早期轮次的披露口径存在差异，时间表标明对应来源。'],
   funding:[
    ['2026.09.04','Pre-A 第三笔（亦称 Pre-A++ 轮）','超亿元','光谷交通建设、光谷产业投资、长江资本。','https://vc.pedaily.cn/company/703647.html'],
    ['2026.02.13','Pre-A+ 轮','数千万元','锡创投、无锡交通集团、国联投资。','https://vc.pedaily.cn/company/703647.html'],
    ['2025.08.12','Pre-A 轮','数千万元','合肥产投集团。','https://vc.pedaily.cn/company/703647.html'],
    ['2024.09.09','天使+轮','数千万元','力合科创、合肥创新投资、国耀资本。','https://vc.pedaily.cn/company/703647.html'],
    ['2024.05.31','天使轮','数千万元','滨湖金投集团、德宁资本、蓝海华腾。','https://vc.pedaily.cn/company/703647.html'],
    ['2023.09.06','种子轮','金额未披露','个人投资者，姓名未披露。','https://vc.pedaily.cn/company/703647.html']
   ],
   sources:[['上海证券报','媒体报道','https://finance.sina.com.cn/roll/2026-09-04/doc-iniqsenq4072777.shtml'],['投资界','公开融资记录','https://vc.pedaily.cn/company/703647.html']],
  },
  {
   id:'govy-funding', date:'09.24', region:'中国', topic:'融资披露',
   title:'广汽高域披露前三季度累计融资超 8 亿元',
   summary:'融资将用于飞行器研发、适航取证、量产工厂与运营体系建设。',
   details:['广汽高域于 9 月 24 日披露，2026 年前三季度累计完成超 8 亿元融资。公开披露为前三季度累计金额，未逐笔列出各轮次及完成日期。','公司披露的投资机构包括晨熹资本、复星锐正、盛宇投资、宁波交投低空基金等，广汽集团及旗下基金仍是第一大股东。'],
   funding:[
    ['2026.09.24','前三季度累计融资披露','超 8 亿元','公司列出的投资机构包括晨熹资本、复星锐正、盛宇投资、宁波交投低空基金等，未逐笔披露各轮次的投资方。','https://www.yicai.com/news/103378062.html'],
    ['2025 年 11 月','Pre-A 轮','2 亿元','国泰君安基金、四川弘威基金、普超资本、厚雪资本、广州开发区低空基金等联合投资。','https://www.govyair.com/NewsDetail/6183053.html','https://www.govyair.com/']
   ],
   sources:[
    ['第一财经','媒体报道','https://www.yicai.com/news/103378062.html'],
    ['中国证券报','媒体报道','https://www.cs.com.cn/ssgs/01/2026/09/25/detail_2026092510041799.html']
   ],

  }
 ],
 '10': [
  {
   id:'wefly-funding', date:'10.09', region:'中国', title:'齐飞航空完成近亿元战略轮融资',
   summary:'苏州创新投资集团领投，资金主要投向研发、试飞及适航取证。',
   details:['江苏省战新未来天使基金、相城投控集团共同参与，渶策资本、线性资本继续加码。','36氪于 10 月 9 日披露本轮融资。载人复合翼机型 W280 的型号合格证申请已获受理，后续进入相应审定流程。'],
   funding:[
    ['2026.10.09','战略轮','近亿元','苏州创新投资集团领投，江苏省战新未来天使基金、相城投控集团参与，渶策资本、线性资本继续跟投。','https://www.36kr.com/p/4018318436110215'],
    ['2022 年 5 月','天使轮','数千万美元（投资界记录）','渶策资本、线性资本。','https://vc.pedaily.cn/company/655136.html']
   ],
   sources:[['36氪','媒体首发','https://www.36kr.com/p/4018318436110215'],['投资界','公开融资记录','https://vc.pedaily.cn/company/655136.html']],
  }
 ]
};

const monthlyJudgments = {
 "09": {
  "headline": "空域管理收紧，国内融资与订单活跃",
  "regions": [
   [
    "海外",
    [
     [
      "试飞",
      "美国试点把飞行验证放到实际航线上，覆盖无人货运和载人机场接驳。"
     ]
    ]
   ],
   [
    "国内",
    [
     [
      "政策与订单",
      "多地收紧无人机飞行管理，部分地方奖补政策进入调整期。峰飞货运订单中的融资租赁，是本月交易方式上的亮点。"
     ]
    ]
   ]
  ]
 },
 "10": {
  "headline": "海外试点瞄准实际用途，国内展会带来跨圈曝光",
  "regions": [
   [
    "海外",
    [
     [
      "运营验证",
      "医疗急件运输和机场接驳是海外试点的两个重点，考验飞行与既有地面服务能否衔接。"
     ]
    ]
   ],
   [
    "国内",
    [
     [
      "传播",
      "展会仍是主机厂的主要传播窗口。张雪到访峰飞广交会展台，也让这场原本面向产业受众的展示走进了机车圈。"
     ]
    ]
   ]
  ]
 }
};

const additionalBriefEvents = {
 '09': [
  {
   id:'joby-cross-country', date:'09.18', topic:'试飞验证', region:'美国',
   title:'Joby 披露 J208 完成 3,199 英里跨美国自主飞行验证',
   summary:'搭载 Joby 自主飞行系统的改装固定翼飞机完成跨美国飞行，机上安全飞行员全程未输入操纵指令。',
   details:['Joby 于 9 月 18 日宣布，J208 从加州康科德出发，抵达北卡罗来纳州外滩群岛，累计飞行约 3,199 英里。','飞机采用改装的塞斯纳 Caravan 固定翼平台，在远程监督下自主完成滑行、起飞、航路飞行和着陆。'],
   sources:[['Joby Aviation','企业公告',eventSources['2026-09|Joby|09.18|试飞进展'].url]],
  },
  {
   id:'tcab-wuhu', date:'09.03–05', topic:'制造进展', region:'中国',
   title:'时的科技披露芜湖制造基地及 E20 总装产线进展',
   summary:'时的科技在芜湖低空经济发展大会展示 E20 总装产线沙盘。',
   details:['时的科技在芜湖低空经济发展大会展示 E20 总装产线沙盘，并披露首个 eVTOL 制造基地建设进度。','随后，公司发布 E20 结构强度科普文章，介绍材料选择、结构分析和分层试验。'],
   sources:[
    ['时的科技','企业公告','https://www.tcabtech.com/tcab-tech-e20-evtol-factory-layout/'],
    ['人民网','媒体报道',mediaArticles['时的科技']['人民网']],
    ['新华网','媒体报道',mediaArticles['时的科技']['新华网']]
   ],
  }
 ],
 '10': [
  {
   id:'volant-ac102', date:'10.15', topic:'适航与技术', region:'中国',
   title:'沃兰特披露首架适航验证机 AC102 完成首飞及无人全转换飞行',
   summary:'VE25-100 首架适航验证机 AC102 于 8 月下线，沃兰特 10 月披露其已完成两项飞行。',
   details:['沃兰特 10 月 15 日披露，8 月下线的 VE25-100 首架适航验证机 AC102 已完成首飞和无人全转换飞行。公告未列出两次飞行的具体日期。','研制批首架机 AC101 此前已完成有人驾驶全转换飞行。VE25-100 的型号取证工作仍在推进。'],
   sources:[
    ['沃兰特','企业公告','https://www.volantaerotech.com/news/inner/id/36.html'],
    ['新华财经','媒体报道',mediaArticles['沃兰特']['新华财经']],
    ['中国航空报','媒体报道',mediaArticles['沃兰特']['中国航空报']]
   ],
  },
  {
   id:'volant-sichuan-order', date:'10.14', topic:'订单与合作', region:'中国',
   title:'沃兰特与川航低空签署 50 架 VE25-100 采购协议',
   summary:'50 架中，20 架为确认订单，30 架为意向订单。',
   details:['双方在自贡低空经济产业发展大会期间签署采购协议，涉及 50 架 VE25-100「天行」载客 eVTOL，其中 20 架已确认、30 架为意向。','双方计划在机型取得型号合格证前联合开展研发测试与试点，探索川渝机场接驳、城市出行和应急等场景。'],
   sources:[
    ['沃兰特','企业公告','https://www.volantaerotech.com/news/inner/id/36.html'],
    ['新华财经','媒体报道',mediaArticles['沃兰特']['新华财经']],
    ['中国航空报','媒体报道',mediaArticles['沃兰特']['中国航空报']],
    ['香港财经时报','媒体报道',mediaArticles['沃兰特']['香港财经时报']],
    ['Aviation News Online','行业报道',mediaArticles['沃兰特']['Aviation News Online']],
    ['人民网','11.12 后续报道',mediaArticles['沃兰特']['人民网']]
   ],
  },
  {
   id:'autoflight-canton-fair', date:'10.14', topic:'品牌传播', region:'中国',
   title:'国务院总理李强在第 140 届广交会走访峰飞航空展台',
   summary:'李强在巡馆时了解峰飞航空的主力产品技术路线、产业化应用进展及海内外市场布局。',
   details:['10 月 14 日，第 140 届广交会在广州开幕。国务院总理李强在巡馆期间到访峰飞航空展台，听取企业对产品技术、产业化应用和市场布局的介绍。','峰飞航空在先进制造主题展区展示多款 eVTOL 产品及水上机场，介绍货运、客运和应急等应用场景。'],
   sources:[
    ['峰飞航空','低空经济网转载',eventSources['2026-10|峰飞航空|10.14|品牌传播'].url],
    ['商务部','转载新华社开幕式主旨演讲','https://www.mofcom.gov.cn/syxwfb/art/2026/art_923baea164874bb6ba8e0e53d995db62.html']
   ],
  },
  {
   id:'aridge-uae-handover', date:'10.20', topic:'海外进展', region:'中国 · 阿联酋',
   title:'阿联酋拉斯海玛酋长到访小鹏汇天，现场接收首架 X3-F 试验用机',
   summary:'酋长在广州工厂为飞行器下线揭幕。该机将用于阿联酋低空飞行监管示范区。',
   details:['10 月 20 日，拉斯海玛酋长谢赫·萨乌德·本·萨克尔·卡西米率团到访小鹏汇天广州量产工厂，为陆地航母飞行器 X3-F 下线揭幕并现场接收该架试验用机。','小鹏汇天与拉斯海玛酋长国在 9 月签署战略合作协议，共推先进空中交通监管沙盒。此次接收的试验机将用于阿联酋低空飞行监管示范区。'],
   sources:[
    ['新华网','媒体报道','https://www3.xinhuanet.com/auto/20261022/d9d43baca94847ceac2eeff9b83de03d/c.html'],
    ['广州市科学技术局','转载广州日报','https://kjj.gz.gov.cn/xwlb/yw/content/post_11064102.html'],
    ['小鹏汇天','监管沙盒合作公告','https://intl.aridge.com/news?id=289']
   ],

  }
 ]
};

const briefEventRecords = {
 'texas-eipp':['Joby','试飞进展'],
 'autoflight-order':['峰飞航空','订单与合作'],
 'china-malaysia-mou':['国际','国际合作'],
 'tcab-wuhu':['时的科技','品牌传播'],
 'joby-cross-country':['Joby','试飞进展'],
 'malaysia-ioi':['时的科技','海外进展'],
 'beta-faa':['BETA','适航与技术'],
 'volant-ac102':['沃兰特','适航与技术'],
 'volant-sichuan-order':['沃兰特','订单与合作'],
 'dream-funding':['追梦空天','资本与经营'],
 'lanyii-funding':['览翌航空','资本与经营'],
 'wefly-funding':['齐飞航空','资本与经营'],
 'govy-funding':['广汽高域','经营披露'],
 'autoflight-canton-fair':['峰飞航空','品牌传播'],
 'aridge-uae-handover':['小鹏汇天','海外进展']
};

const briefMediaSources = {
 'autoflight-order':['峰飞航空','证券时报','21财经','中国经营报','新浪财经','北京商报'],
 'malaysia-ioi':['时的科技','南洋商报','星洲日报','东方日报','The Star','Digital News Asia','eVTOL Insights','AAMI','Urban Air Mobility News','VoltDigest'],
 'volant-sichuan-order':['沃兰特','界面新闻','证券时报','上海证券报','美通社','FlyingCars.report','Yahoo Finance']
};

// 海外动态、国内行业、竞品与品牌动态依次排列。
const briefEventOrder = {
 '09': ['texas-eipp','joby-cross-country','china-malaysia-mou','autoflight-order',
  'dream-funding','lanyii-funding','govy-funding','tcab-wuhu'],
 '10': ['beta-faa','volant-ac102','volant-sichuan-order','autoflight-canton-fair',
  'aridge-uae-handover','wefly-funding','malaysia-ioi']
};

editions['11'] = november2026.edition;
monthlyJudgments['11'] = november2026.judgment;
for (const event of november2026.detailedEvents) {
 briefEventRecords[event.id] = [event.scope,event.category];
}
Object.assign(eventPhotos, {
 '2026-11|国际|11.18|基础设施':{file:'event-photos/november-dubai.webp',article:november2026.edition.photoUrl},
 '2026-11|Ascendance|11.19|适航与技术':{file:'event-photos/november-ascendance.webp',article:'https://www.ainonline.com/aviation-news/futureflight/2026-11-20/ascendance-rolls-out-atea-hybrid-electric-vtol-aircraft'},
 '2026-11|峰飞航空|11.01|试飞进展':{file:'event-photos/november-formation.webp',article:'https://www.ainonline.com/aviation-news/futureflight/2026-11-05/five-evtol-formation-flight-autoflight'},
 '2026-11|亿航智能|11.04|适航与技术':{file:'event-photos/november-ehang.webp',article:'https://www.ehang.com/cn/news/1413.html'}
});

function getBriefEvents(edition) {
 const ordered = briefEventOrder[month];
 if (!ordered) return edition.events;
 const events = new Map([...edition.events,...additionalBriefEvents[month],...briefingFunding[month]].map(event=>[event.id,event]));
 return ordered.map(id=>events.get(id));
}

function findBriefEvent(id) {
 const edition = year === 2026 ? editions[month] : undefined;
 if (!edition) return;
 const events = edition === november2026.edition ? november2026.detailedEvents : getBriefEvents(edition);
 return events.find(event=>{
  if(event.id===id)return true;
  const [scope,category,date=event.date]=briefEventRecords[event.id];
  return sourceKey(scope,date,category)===id;
 });
}

function resolveBriefEvent(id, original=findBriefEvent(id)) {
 const record = eventSourceIndex.get(id);
 const note = eventDetailNotes[id];
 const headline=record?.summary?.replace(/<[^>]+>/g,'').replaceAll('&amp;','&').replace(/。$/,'');
 return original ?? (record && {
  id, date:record.date, region:record.scope==='国际'?'海外':record.scope, topic:record.category,
  title:eventDetailTitles[id] || headline || `${record.scope==='国际'?'海外':record.scope} · ${record.category}`,
  summary:'', details:typeof note==='string'?[note]:note||[], sources:[]
 });
}

function briefEventDetails(event) {
 return event.details || briefingDetails[event.id] || [];
}

function briefEventPhoto(event) {
 const [scope,category,date=event.date] = briefEventRecords[event.id];
 const key = sourceKey(scope,date,category);
 return renderEventPhoto(key,event.title,event.id);
}

function overviewBriefing(d) {
 const edition = year === 2026 ? editions[month] : undefined;
 if (!edition) return overview(d);
 const judgment = monthlyJudgments[month];
 const items = getBriefEvents(edition).map(event =>
  '<li class="brief-event" data-event-id="'+esc(event.id)+'">'+briefEventPhoto(event)+'<article><p class="brief-meta">'+esc(event.date)+' · '+esc(event.region)+' <span>'+esc(event.topic || '融资')+'</span></p>'+
  '<h3>'+btn(event.title,'brief-event',event.id,'brief-title')+'</h3>'+
  '<p class="brief-note"><strong>值得关注</strong> '+esc(event.summary)+'</p></article></li>').join('');
 return '<div class="briefing-overview"><div class="brief-heading"><h1>'+Number(month)+'月舆情概览</h1>'+(d.cutoff?'<small class="muted">'+esc(d.cutoff)+'</small>':'')+'</div>'+
  '<section class="brief-lead" aria-labelledby="brief-lead-title"><div class="brief-lead-copy"><p class="brief-lead-label">本月判断</p><h2 id="brief-lead-title">'+esc(judgment.headline)+'</h2>'+
  '<div class="brief-judgment">'+judgment.regions.map(([region,points])=>
   '<section><h3>'+esc(region)+'</h3><ul>'+points.map(([label,copy])=>
    '<li><strong>'+esc(label)+'</strong>'+esc(copy)+'</li>').join('')+'</ul></section>').join('')+'</div></div>'+
  '<figure><img src="event-photos/'+esc(edition.photo)+'" alt="'+esc(edition.photoAlt)+'" width="640" height="360"><figcaption>'+articleLink('图源 · '+edition.photoCredit,edition.photoUrl)+'</figcaption></figure></section>'+
  '<div class="brief-columns"><section class="brief-events"><h2>本月重点事件</h2><ul>'+items+'</ul></section>'+
  '<section class="brief-metrics"><h2>时的科技数据表现</h2><dl>'+d.metrics.map(([name,value,_,label])=>'<div><dt>'+esc(name)+(label?'<small>（'+esc(label)+'）</small>':'')+'</dt><dd>'+esc(value)+'</dd></div>').join('')+'</dl>'+(d.stats.length?'<p>数据来源：新浪舆情通</p>':'')+'</section></div></div>';
}

function reportOverview(d) {
 const edition=editions[month];
 if(!edition)return overview(d);
 const judgment=monthlyJudgments[month];
 const metrics=d.metrics.map(([label,value,,note])=>'<tr><th>'+esc(label)+(note?'<small>'+esc(note)+'</small>':'')+'</th><td>'+esc(value)+'</td></tr>').join('');
 const highlights=getBriefEvents(edition).map(event=>{
  const [scope,category,date=event.date]=briefEventRecords[event.id];
  const key=sourceKey(scope,date,category);
  const source=event.sources?.[0]?.[2]||eventSources[key]?.url;
  return '<div class="report-highlight"><p class="report-event-meta">'+esc(event.date)+' · '+esc(event.region)+' · '+esc(event.topic||'融资')+'</p><h3>'+
   (source?articleLink(event.title,source):esc(event.title))+'</h3><p>'+esc(event.summary)+'</p>'+
   reportEventPhoto(key)+
   reportEventDetails(event,key)+'</div>';
 }).join('');
 return '<h1>'+Number(month)+'月舆情概览</h1><p class="report-period">'+esc(edition.period)+'</p>'+
  '<div class="report-lead"><h2>'+esc(judgment.headline)+'</h2>'+judgment.regions.map(([region,points])=>'<h3>'+esc(region)+'</h3>'+points.map(([name,copy])=>'<p><strong>'+esc(name)+'</strong>　'+esc(copy)+'</p>').join('')).join('')+'</div>'+
  '<div class="report-cover"><img src="event-photos/'+esc(edition.photo)+'" width="450" alt="'+esc(edition.photoAlt)+'"><p>'+articleLink('图源 · '+edition.photoCredit,edition.photoUrl)+'</p></div>'+
  '<section><h2>时的科技数据表现</h2><table class="report-metrics" width="100%"><tbody>'+metrics+'</tbody></table></section>'+
  '<section class="report-highlights"><h2>本月重点事件</h2>'+highlights+'</section>';
}

const briefAdditionalSources = {
 "2026-10|国际|10.22|监管标准": [
  ["FAA 草案 AC 150/5390-4","标准草案","https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.information/documentID/1045778"]
 ],
 "2026-11|Archer|11.12|品牌传播": [
  ["Formula 1","合作公告","https://corp.formula1.com/archer-partners-with-formula-1-as-official-supporter/"]
 ],
 "2026-10|峰飞航空|10月中旬|品牌传播": [
  ["IT之家","媒体报道","https://www.ithome.com/1/014/694.htm"]
 ],
 "2026-10|Joby|10月|品牌传播": [
  [
   "TIME 年度最佳发明",
   "榜单原文",
   "https://time.com/collection/best-inventions/2026/joby-aviation-aircraft/"
  ],
  [
   "加州大学",
   "同届入选项目",
   "https://www.universityofcalifornia.edu/news/uc-innovations-among-times-best-inventions-2026"
  ]
 ],
 "2026-09|峰飞航空|09.10|订单与合作": [
  [
   "上海证券报",
   "媒体报道",
   "https://m.cnstock.com/commonDetail/789040"
  ],
  [
   "中国证券报·中证网",
   "媒体报道",
   "https://www.cs.com.cn/ssgs/01/2026/09/11/detail_2026091110038606.html"
  ],
  [
   "界面新闻",
   "媒体报道",
   "https://m.jiemian.com/article/15087402.html"
  ]
 ]
};

function briefSources(event,key) {
 const sources = new Map();
 for (const [name,type,url] of [...event.sources,...(briefAdditionalSources[key]||[])]) {
  if (!sources.has(url)) sources.set(url,[type==='媒体报道'?mediaLabel(name):name,type]);
 }
 const defaultSource = eventSources[key];
 if (defaultSource && !sources.has(defaultSource.url)) sources.set(defaultSource.url,[defaultSource.label,'事件来源']);
 const photoSource = eventPhotos[key]?.article;
 if (photoSource && !sources.has(photoSource)) sources.set(photoSource,['配图出处','']);
 const media = briefMediaSources[event.id];
 if (media) {
  const [brand,...names] = media;
  for (const name of names) {
   const url = mediaArticles[brand][name];
   if (url && !sources.has(url)) sources.set(url,[mediaLabel(name),'媒体报道']);
  }
 }
 return [...sources];
}

function briefSourceList(event,key) {
 return briefSources(event,key).map(([url,[name,type]])=>'<li>'+articleLink(name,url)+(type?'<span>'+esc(type)+'</span>':'')+'</li>').join('');
}

function reportEventDetails(event,key) {
 if(!event)return '';
 const details = briefEventDetails(event).map(copy=>'<p>'+esc(copy)+'</p>').join('');
 const funding = event.funding ? '<h4>公开融资历程</h4>'+event.funding.map(([date,round,amount,investors,link,extra])=>
  '<p><strong>'+esc([date,round,amount].join(' · '))+'</strong>　投资方 '+esc(investors)+'　'+
  articleLink('查看来源',link)+(extra?'　'+articleLink('投资方来源',extra):'')+'</p>').join('') : '';
 const sources = briefSources(event,key).filter(([url])=>/^https?:\/\//i.test(url));
 return '<div class="report-event-details">'+details+funding+
  (sources.length?'<p class="report-event-sources"><strong>参考资料　</strong>'+sources.map(([url,[name]])=>articleLink(name,url)).join('　·　')+'</p>':'')+'</div>';
}

function fundingTimeline(entries) {
 return '<section><h3>公开融资历程</h3><p class="brief-note">按公开披露或投融资数据库记录的时间排列。</p><ol class="brief-history">'+
  entries.map(([date,round,amount,investors,link,extra])=>'<li><p class="funding-date">'+esc(date)+'</p>'+
   '<h4>'+esc(round)+'<span>'+esc(amount)+'</span></h4><p class="funding-investors">投资方　'+esc(investors)+'</p>'+
   articleLink('查看来源',link)+(extra?articleLink('投资方来源',extra):'')+'</li>').join('')+'</ol></section>';
}

let activeBriefEvent='';
function showBriefEvent(id) {
 const original = findBriefEvent(id);
 const record = eventSourceIndex.get(id);
 const event = resolveBriefEvent(id,original);
 if (!event) return;
 const dialog = $('brief-detail');
 const scrollTop = dialog.open ? dialog.scrollTop : 0;
 activeBriefEvent=event.id;
 const [scope,category,date=event.date] = original?briefEventRecords[original.id]:[record.scope,record.category,record.date];
 const key = original?sourceKey(scope,date,category):id;
 eventSourceIndex.set(key,{...eventSourceIndex.get(key),scope,date,category});
 $('brief-detail-heading').textContent = event.title;
 const funding = event.funding ? fundingTimeline(event.funding) : '';
 const visual = renderEventPhoto(key,scope);
 const details = briefEventDetails(event);
 const sources = briefSourceList(event,key);
 $('brief-detail-content').innerHTML = '<p class="brief-meta">'+esc(event.date)+' · '+esc(event.region)+' <span>'+esc(event.topic || '融资')+'</span></p>'+
  (event.summary?'<p class="brief-detail-summary">'+esc(event.summary)+'</p>':'')+(visual?'<div class="brief-detail-photo">'+visual+'</div>':'')+
  (details.length?'<section><h3>事件要点</h3>'+details.map(copy=>'<p>'+esc(copy)+'</p>').join('')+'</section>':'')+funding+
  '<section><h3>参考资料</h3>'+(sources?'<ul class="brief-sources">'+sources+'</ul>':'')+'</section>';
 if (!dialog.open) dialog.showModal();
 dialog.scrollTop=scrollTop;
}
