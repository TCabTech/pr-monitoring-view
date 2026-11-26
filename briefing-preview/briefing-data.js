'use strict';

const editions = {
  '09': {
    period: '2026 年 9 月 1–30 日',
    headline: '试飞进入真实空域，订单开始讲交付',
    summary: '美国得州试点把验证场景移到繁忙机场。国内吨级货运 eVTOL 订单开始把采购、融资租赁和交付节奏放在一起说明。',
    photo: 'event-39.webp',
    photoAlt: 'Joby 电动垂直起降飞机在得州开展演示',
    photoCredit: 'Joby Aviation',
    photoUrl: 'https://www.jobyaviation.com/news/joby-launches-eipp-flights-in-texas',
    voice: '2,542',
    change: '+10.6%',
    share: '15.3%',
    follow: [
      ['机场试点', '跟踪得州演示后续，重点看与机场协同和地面保障相关的公开成果。'],
      ['东南亚准入', '区分两国民航部门的监管合作与具体机型的市场准入进度。']
    ],
    events: [
      {
        id: 'texas-eipp', date: '09.10', topic: '试飞验证', region: '美国',
        title: '北得州启动联邦 eVTOL 试点飞行',
        summary: 'Joby 开展为期一周的演示，验证电动垂直起降飞机与现有机场和空域的协同。',
        note: '公开演示把机场、空域和地面保障带进了同一个运营场景。',
        timeline: [['9 月 10 日', '美国交通部宣布得州试点启动。Joby 披露将在达拉斯–沃思堡地区开展一周演示。']],
        sources: [
          ['美国交通部', '监管公告', 'https://www.transportation.gov/briefing-room/trumps-transportation-secretary-sean-p-duffy-celebrates-launch-federal-evtol-pilot'],
          ['Joby Aviation', '企业公告', 'https://www.jobyaviation.com/news/joby-launches-eipp-flights-in-texas'],
          ['Flying', '媒体报道', 'https://www.flyingmag.com/texas-joby-faa-backed-air-taxi-airport-demos/']
        ],
      },
      {
        id: 'autoflight-order', date: '09.10', topic: '订单与交付', region: '中国',
        title: '峰飞与零界航空达成 30 架凯瑞鸥采购',
        summary: '皖江金租参与融资租赁，采购协议同时给出分批交付安排。',
        note: '订单披露交代了买方如何采购，比单看签约数量更能说明商业化阶段。',
        photo: 'event-73.webp', photoAlt: '峰飞航空采购合作相关报道配图',
        timeline: [['9 月 10 日', '峰飞航空、零界航空与皖江金租达成三方合作。'], ['9 月 11 日', '多家财经媒体跟进采购数量和融资租赁安排。']],
        sources: [
          ['新华财经', '媒体报道', 'https://www.cnfin.com/gs-lb/detail/20260911/4468902_1.html'],
          ['澎湃新闻', '媒体报道', 'https://m.thepaper.cn/newsDetail_forward_34052543'],
          ['中国证券报', '媒体报道', 'https://www.cs.com.cn/ssgs/01/2026/09/11/detail_2026091110038606.html']
        ],
      },
      {
        id: 'china-malaysia-mou', date: '09.21', topic: '监管合作', region: '中国 · 马来西亚',
        title: '中马民航部门签署航空安全合作备忘录',
        summary: '两国民航部门签署合作备忘录，并就航空运输与低空经济交换意见。',
        note: '为观察两国后续监管协调提供了公开节点。',
        timeline: [['9 月 21 日', '中国民航局副局长胡振江会见马来西亚交通部部长陆兆福。会见后，双方见签民用航空安全领域合作谅解备忘录。']],
        sources: [['中国民航局', '监管公告', 'https://www.caac.gov.cn/XWZX/MHYW/202609/t20260921_231764.html']],
      }
    ]
  },
  '10': {
    period: '2026 年 10 月 1–31 日',
    headline: '从试飞进展看到运营场景',
    summary: '坦帕湾试飞用一条具体航线说明了机场接驳场景。马来西亚的公众展示与本地合作，也让市场拓展有了可见的进展。',
    photo: 'event-13.webp',
    photoAlt: 'Joby 电动垂直起降飞机在佛罗里达演示',
    photoCredit: 'Joby Aviation',
    photoUrl: 'https://www.jobyaviation.com/news/joby-brings-its-vertical-takeoff-and-landing-air-taxi-to-florida',
    voice: '2,082',
    change: '−18.1%',
    share: '8.0%',
    follow: [
      ['机场接驳', '跟踪坦帕湾演示后的运营伙伴、起降点和地面保障安排。'],
      ['马来西亚', '追踪 SIDEC 合作下一步可公开的进展，以及当地监管部门的明确安排。']
    ],
    events: [
      {
        id: 'tampa-eipp', date: '10.30', topic: '航线验证', region: '美国',
        title: 'Joby 与 BETA 启动坦帕湾试点演示',
        summary: 'Joby 以 eVTOL 验证机场接驳场景，BETA 以常规起降的 CX300 参加联合演示。',
        note: '明确的起点和终点，让大众媒体有了可直接报道的出行场景。',
        timeline: [['10 月 30 日', '佛罗里达州启动 eIPP 演示。Joby 与 BETA 在坦帕湾开展联合飞行。']],
        sources: [
          ['Joby Aviation', '企业公告', 'https://www.jobyaviation.com/news/joby-brings-its-vertical-takeoff-and-landing-air-taxi-to-florida'],
          ['Aviation International News', '行业报道', 'https://www.ainonline.com/aviation-news/futureflight/2026-10-30/joby-and-beta-kick-florida-eipp-flights'],
          ['FOX 13 Tampa Bay', '地方媒体', 'https://www.fox13news.com/news/electric-air-taxi-fly-from-st-pete-tampa-international-florida-test']
        ],
      },
      {
        id: 'malaysia-ioi', date: '10.09', topic: '海外市场', region: '马来西亚',
        title: '时的科技 E20 在马来西亚首次公开展示',
        summary: 'E20 进驻 IOI City Mall，并与 SIDEC 交换合作备忘录，探索当地商业化路径。',
        note: '公众体验和产业合作分别为大众媒体和财经媒体提供了报道切入点。',
        photo: 'event-00.webp', photoAlt: '时的科技 E20 马来西亚公众展示活动',
        timeline: [['10 月 9 日', 'E20 公众展开幕，时的科技与 SIDEC 交换合作备忘录。'], ['10 月 24 日', 'AWANI Review 发布创始人访谈，讨论公众信任和商业可行性。']],
        sources: [
          ['时的科技', '企业公告', 'https://www.tcabtech.com/e20-evtol-malaysia-debut-tcab-tech-southeast-asia-regional-business-center/'],
          ['Bernama', '媒体报道', 'https://web26.bernama.com/en/business/news.php?id=2617572'],
          ['AWANI Review', '媒体专访', 'https://international.astroawani.com/video/awani-review-flying-taxis-malaysian-founders-push-bring-them-market']
        ],
      },
      {
        id: 'beta-faa', date: '10.21', topic: '适航与监管', region: '美国',
        title: 'BETA A250 获 FAA 市场调研特别适航证',
        summary: 'FAA 发出市场调研特别适航证，A250 获准在规定范围内开展相关飞行活动。',
        note: '潜在客户可参与市场调研飞行。这项许可的适用范围值得单独说明。',
        photo: 'event-11.webp', photoAlt: 'BETA ALIA A250 飞机',
        timeline: [['10 月 20 日', 'BETA 披露 A250 完成获许可后的首次飞行。'], ['10 月 21 日', 'FAA 公布特别适航证及市场调研飞行用途。']],
        sources: [
          ['FAA', '监管公告', 'https://www.faa.gov/newsroom/trumps-transportation-secretary-sean-p-duffy-announces-first-ever-special-airworthiness'],
          ['Aviation International News', '行业报道', 'https://www.ainonline.com/aviation-news/futureflight/2026-10-21/faa-clears-betas-alia-evtol-passenger-demo-flights']
        ],
      }
    ]
  }
};
