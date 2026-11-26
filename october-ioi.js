'use strict';

const octoberIoi = {
 media:[
  ['马新社 BERNAMA','10.09','E20 首展与商业化合作','https://web26.bernama.com/en/business/news.php?id=2617572'],
  ['南洋商报','10.09','马来西亚市场专访'],
  ['星洲日报','10.09','时的科技与 SIDEC 合作','https://www.sinchew.com.my/news/20261009/nation/7929052'],
  ['东方日报','10.09','E20 首展与安全议题','https://www.orientaldaily.com.my/news/central/2026/10/09/854038'],
  ['当今大马','10.09','E20 首展与合作备忘录'],
  ['Digital News Asia','10.09','E20 首展与合作备忘录','https://www.digitalnewsasia.com/digital-economy/malaysians-get-first-look-five-seat-flying-taxi-sidec-and-tcab-tech-sign-mou'],
  ['The Star','10.10','雪兰莪布局电动航空','https://www.thestar.com.my/metro/metro-news/2026/10/10/sgor-eyes-electric-aviation'],
  ['eVTOL Insights','10.12','时的科技与 SIDEC 探索 E20 商业化','https://evtolinsights.com/tcab-tech-and-sidec-sign-mou-to-explore-e20-evtol-commercialisation-in-malaysia/'],
  ['Urban Air Mobility News','10.13','时的科技与 SIDEC 推进 AAM 项目','https://www.urbanairmobilitynews.com/uam-infrastructure/tcab-tech-and-sidec-partner-to-advanced-aam-projects-in-malaysia/'],
  ['VoltDigest','10.13','时的科技与 SIDEC 探索 E20 商业化','https://voltdigest.com/news/1188-tcab-tech-and-sidec-sign-mou-to-explore-e20-evtol-commercialisation-in-malaysia'],
  ['AeroTime','10.14','E20 商业化与区域合作'],
  ['The Edge','10.15','SIDEC 与 NCT 的机器人制造产业合作'],
  ['Astro Awani','10.25','AWANI Review 创始人专访','https://international.astroawani.com/video/awani-review-flying-taxis-malaysian-founders-push-bring-them-market'],
  ['时的科技官网','10.09','首展及与 SIDEC 合作备忘录','https://www.tcabtech.com/en/tcab-tech-sidec-mou-e20-evtol-commercialization-malaysia-southeast-asia/']
 ],
 creators:[
  {name:'Pandulaju / Abang Gan YL',total:'100.7 万',cpm:'RM 10.7',cpe:'RM 0.36',breakdown:'Instagram 38.1 万、Facebook 37 万、TikTok 25.6 万，超过承诺保底播放量的 5 倍。',
   comments:[
    ['Facebook / Instagram','31%','57%','29%','正面涉及购买意向、医疗交通和飞行职业。中性讨论包括价格、航程、执照、起降点、空中拥堵和执法。负面集中在碰撞、电量、强风、票价及实际运营。'],
    ['TikTok','21%','50%','29%','正面提到本地创新、技术认可及乘坐意向。讨论集中在价格、贷款、执照、空中拥堵、路税和执法，另有电池安全顾虑。'],
    ['YouTube','32%','40%','28%','正面提到医疗交通、槟城观光和本地创新。中性讨论关注航程、执照和收费。顾虑包括电池安全、起降点和空域。']
   ],
   posts:[
    ['10.10','Instagram','活动现场','https://www.instagram.com/p/DeQ37Nemivn/'],
    ['10.10','Facebook','活动现场','https://www.facebook.com/AbangGanYL/posts/tak-lama-lagi-malaysia-akan-ada-kereta-terbang-ehh-silap-teksi-udara-ini-ialah-t/1393083879548952/'],
    ['10.14','Instagram','投放短片','https://www.instagram.com/reel/DeebOHVzXgK/'],
    ['10.14','Facebook','投放短片','https://www.facebook.com/reel/1096123349821696'],
    ['10.14','TikTok','投放短片','https://www.tiktok.com/@pandulaju/video/7696504074308685074'],
    ['10.19','YouTube','E20 长视频','https://www.youtube.com/watch?v=xlvmipJ9jhc']
   ]},
  {name:'JR Song',total:'23.5 万',cpm:'RM 12.7',cpe:'RM 0.93',breakdown:'TikTok 4 万、YouTube 19.2 万、Instagram 3,500。累计播放和分平台数按原稿精度保留。',
   comments:[
    ['YouTube','约 55–65%','约 25%','约 15–20%','本地自豪感突出。好奇集中在实用性和落地条件，担忧涉及法律、安全、天气及基础设施。'],
    ['TikTok','—','—','—','讨论更碎片化，顾虑集中在噪声、价格和实际落地难度。']
   ],
   posts:[
    ['10.15','YouTube','E20 展示长视频','https://www.youtube.com/watch?v=Y_7PmoyxNsU'],
    ['10.15','TikTok','E20 展示短片','https://www.tiktok.com/@im_jrsong/video/7696773148099874066'],
    ['10.15','Facebook','E20 展示短片','https://www.facebook.com/share/r/1Dci4fSg6D/'],
    ['10.15','Instagram','E20 展示短片','https://www.instagram.com/p/DegVAe2S2XG/']
   ]}
 ],
 slides:[['覆盖总览','media'],['Pandulaju 投放与评论','pandulaju'],['JR Song 投放与评论','jr-song'],['KOL 原帖登记','posts']]
};

function octoberIoiMonitor(){
 const cards=octoberIoi.creators.map(({name,total,cpm,cpe,breakdown,comments,posts})=>
  '<article class="ioi-creator"><h3>'+esc(name)+'</h3><dl class="ioi-metrics">'+
  [['累计播放',total],['千次播放成本',cpm],['单次互动成本',cpe]].map(([label,value])=>'<div><dt>'+esc(label)+'</dt><dd>'+esc(value)+'</dd></div>').join('')+
  '</dl><p>'+esc(breakdown)+'</p><h4>原帖与视频</h4><ul class="ioi-posts">'+posts.map(([date,platform,title,url])=>
   '<li><time datetime="2026-'+date.replace('.','-')+'">'+esc(date)+'</time> '+articleLink(platform+' ｜ '+title,url)+'</li>').join('')+
  '</ul><details><summary>查看评论情感与主要议题</summary><div class="ioi-comments">'+
   comments.map(([platform,positive,neutral,negative,topics])=>'<section><h4>'+esc(platform)+'</h4><p>'+
   (positive==='—'?'':esc('正面 '+positive+' · 中性 '+neutral+' · 负面 '+negative)+'<br>')+esc(topics)+'</p></section>').join('')+
   '</div></details></article>').join('');
 const coverage=octoberIoi.media.map(([outlet,date,title,url])=>'<li><time datetime="2026-'+date.replace('.','-')+'">'+esc(date)+'</time><strong>'+esc(outlet)+'</strong><span>'+(url?articleLink(title,url):esc(title))+'</span></li>').join('');
 const slides=octoberIoi.slides.map(([label,file])=>{
  const path='event-photos/ioi-2026-'+file+'.webp';
  return '<figure><a href="'+path+'" target="_blank" rel="noopener"><img src="'+path+'" alt="'+esc(label)+'原始截图" loading="lazy"><figcaption>'+esc(label)+'</figcaption></a></figure>';
 }).join('');
 return '<section class="card monitor-block ioi-monitor" id="ioi"><h2>IOI 活动专题监测</h2>'+
  '<p>马来西亚 IOI City Mall E20 展示 · 媒体统计截至 11 月 3 日，KOL 投放统计截至 10 月 26 日。</p>'+
  '<dl class="ioi-metrics">'+[['海外媒体','30+ 家'],['海外媒体报道','50+ 条'],['政企相关方','8 家'],['相关方报道及推文','20+ 条']].map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+value+'</dd></div>').join('')+
  '</dl><p>传播覆盖马来西亚主要中文、英文和马来文媒体。</p><h3>媒体报道与相关方传播</h3><ul class="ioi-media">'+coverage+'</ul>'+
  '<h3>KOL 投放与评论反馈</h3><div class="ioi-creators">'+cards+'</div>'+
  '<p class="footnote">评论情感比例沿用原稿。Pandulaju 的 Facebook／Instagram 三项比例合计为 117%，原稿未注明统计口径差异。</p>'+
  '<details class="ioi-archive"><summary>查看原始汇报页和链接登记截图</summary><div class="ioi-slides">'+slides+'</div></details></section>';
}
