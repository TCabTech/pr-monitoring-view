'use strict';
const names={overview:'本月概览',industry:'行业动态',companies:'竞品动态',monitor:'传播监测',reports:'月报与历史'};
const data={
 '10': {
  metrics:[['国内品牌声量','2,082',''],['品牌声量占比','8.0%','','时的、沃飞、峰飞、沃兰特'],['媒体报道数量','401',''],['中性/敏感信息量','163','']],
  summaries:[
   ['行业','industry',[
    ['国内','中央政策继续明确<strong>以安全为前提推动低空经济有序发展</strong>，同时强调因地制宜。民航局就飞行服务人员管理及培训征求意见，监管开始细化到谁来提供飞行服务、人员如何培训。'],
    ['海外','美国试点继续验证具体用途。BETA在犹他州测试医疗急件运输，美国联邦航空局同步征求垂直起降设施设计意见，试飞和地面设施标准并行推进。']
   ]],
   ['竞品','competitorEvents',[
    ['海外','海外主机厂在推进<strong>适航和运营验证</strong>。BETA获得市场调研特别适航证，可与潜在运营商开展飞测。Joby公开演示跨坦帕湾航线，Archer继续推进Midnight在阿联酋的认证，并与意大利航空合作规划当地网络。'],
    ['国内','国内厂商的商业进展集中在<strong>采购合作和海外试点</strong>。沃兰特与川航低空签署50架采购协议，其中20架确认、30架为意向。峰飞与新加坡JC航空确认首批订购，亿航与马来西亚民航局推进监管沙盒。']
   ]],
   ['时的','tCab',[
    ['', '本月传播重心在马来西亚。<strong>E20在IOI City Mall面向公众静态展示</strong>，同时与雪兰莪州机构SIDEC交换合作备忘录，并宣布在马来西亚建设东南亚业务中心。活动既带来当地媒体曝光，也让拟议的区域业务布局有了明确落点。']
   ]]
  ],
  voiceSummary:'10月，时的科技国内全网品牌声量为2,082条，较9月环比下降18.1%。<strong>本月主要曝光集中在海外媒体，由于舆情通监测范围仅限国内，因此在数据上难以体现。</strong>',
  industry:[
   ['10.26','国内','监管政策','中国民航局就<strong>低空飞行服务专业人员管理及培训办法</strong>公开征求意见。'],
   ['10.09','国内','中央政策','中央发布《关于发展新质生产力的意见》，提出<strong>在确保安全的前提下发展低空经济</strong>。'],
   ['10.07','国际','监管试点','美国 eVTOL 整合试点（eIPP）在犹他州验证<strong>时效敏感的医疗货物运输</strong>。'],
   ['10.22','国际','监管标准','美国联邦航空局（FAA）发布<strong>垂直起降设施设计标准更新草案</strong>，覆盖直升机、动力升力航空器和其他 VTOL 飞行器的起降设施。']
  ],
  events:{
   '时的科技':[['10.09','海外进展','时的科技在马来西亚 IOI City Mall<strong>静态展示 E20</strong>，并与 SIDEC 交换合作备忘录。']],
   '沃兰特':[['10.15','适航与技术','沃兰特披露<strong>VE25-100 首架适航机 AC102 完成首飞及无人全转换飞行</strong>。'],['10.14','订单与合作','沃兰特与川航低空签署<strong>50 架 VE25-100 采购协议</strong>，含 20 架确认订单。']],
   '峰飞航空':[['10.15','订单与合作','峰飞与新加坡 JC 航空签署合作备忘录，首批确认订购<strong>2 架凯瑞鸥和 1 艘水上机场</strong>。']],
   '沃飞长空':[['10.14','品牌传播','沃飞长空在自贡展示 AE200，并发布<strong>《巴蜀低空文旅走廊落地实践报告》</strong>。']],
   '亿航智能':[['10.30','海外进展','亿航宣布<strong>在泰国设立海外区域枢纽</strong>，计划在当地首批部署 25 架 EH216-S。']],
   'BETA':[['10.21','适航与技术','BETA 的 ALIA A250 获 FAA <strong>市场调研特别适航证</strong>。'],['10.07','试飞进展','BETA 联合 Alpine Air Express 等合作方，在犹他州演示<strong>医疗急件空运</strong>。']],
   'Joby':[['10.30','试飞进展','Joby 完成<strong>跨坦帕湾公开演示飞行</strong>，航段连接圣彼得堡市中心与坦帕国际机场。']],
   'Archer':[['10.05','海外进展','阿联酋民航局到访 Archer 总部，讨论<strong>Midnight 在阿联酋的认证路径</strong>。']],
   'Vertical':[['10.21','适航与技术','Vertical 预计在圣诞节前完成<strong>飞机级关键设计评审</strong>。']],
   '小鹏汇天':[['10.20','海外进展','阿联酋拉斯海玛代表团到访小鹏汇天，接收<strong>监管示范用 X3-F 试验机</strong>。']]
  },
  stats:[['时的科技','2,082','1,009','−18.1%','8.0%','401','163'],['峰飞航空','10,580','3,096','+60.5%','40.8%','3,106','611'],['沃飞长空','8,010','3,000','+49.8%','30.9%','2,267','959'],['沃兰特','5,244','2,206','+139.9%','20.2%','1,524','551']]
 },
 '09':{
  metrics:[['国内品牌声量','2,542',''],['品牌声量占比','15.3%','','时的、沃飞、峰飞、沃兰特'],['媒体报道数量','532',''],['中性/敏感信息量','62','']],
  summaries:[
   ['行业','industry',[
    ['国内','本月多地空域管控趋严，地方奖补政策也出现调整。北京修订无人机管理规定，多城公布国庆临时限飞措施。杭州就拟废止「低空21条」征求意见，广州天河暂停相关奖补政策并准备修订。'],
    ['海外','美国eVTOL联合试点进入<strong>真实航线验证</strong>阶段。中马民航部门签署民用航空安全合作谅解备忘录，合作覆盖适航、执照、运行监管与证书相互认可，为后续市场准入和监管对接提供了具体议题。']
   ]],
   ['竞品','competitorEvents',[
    ['海外','海外主机厂一边验证飞行能力，一边准备量产。Joby在得州eIPP开展实飞演示，并用J208完成<strong>约3,199英里的全自主跨美飞行验证</strong>。Vertical启用英国Valo总装中心，将组装与试飞放在同一机场，便于后续审定构型飞机的制造和测试。'],
    ['国内','货运订单和海外准入是两条清晰主线。峰飞以<strong>30架货运eVTOL采购及融资租赁合作</strong>推进分批交付，亿航将Fast Track拓展到越南，由当地合作方推动监管沙盒申请。']
   ]],
   ['时的','tCab',[
    ['', '国内传播集中在制造进展。时的科技在芜湖低空经济发展大会<strong>展示E20总装产线沙盘</strong>、披露制造基地建设进度，并以结构强度文章补充产品技术解读。']
   ]]
  ],
  voiceSummary:'9月，时的科技全网品牌声量（国内）较上月环比增长<strong>10.6%</strong>。声量主要来自芜湖低空经济发展大会披露制造基地及总装产线，以及中马民航安全合作谅解备忘录的通稿传播。',
  industry:[
   ['09.02','国际','监管试点','美国 eVTOL 整合试点（eIPP）下，Elroy Air 完成<strong>获授权的无人自主试飞</strong>。'],
   ['09.28','国内','中央政策','七部门发布《新型电池产业发展“十五五”规划》，提出<strong>提升低空装备电池供给能力</strong>。'],
   ['09.24','国内','地方政策','广州天河<strong>暂停实施低空经济与航空航天产业扶持措施</strong>。'],
   ['09.08','国内','地方政策','杭州就<strong>拟废止低空经济扶持措施「低空 21 条」</strong>公开征求意见。'],
   ['09.21','国际','国际合作','中国与马来西亚民航部门签署<strong>民用航空安全合作备忘录</strong>。']
  ],
  events:{
   '时的科技':[['09.03–09.05','品牌传播','时的科技在芜湖低空经济发展大会<strong>展示 E20 总装产线沙盘</strong>。']],
   '峰飞航空':[['09.10','订单与合作','峰飞、零界航空与皖江金租达成<strong>30 架 V2000CG 凯瑞鸥采购及融资租赁合作</strong>。']],
   '亿航智能':[['09.29','海外进展','亿航宣布将 <strong>Global Fast Track 计划扩展至越南</strong>。']],
   'BETA':[['09.24','试飞进展','BETA 在得州以 ALIA CTOL 演示<strong>应急物资空中运输</strong>。'],['09.25–09.27','品牌传播','BETA 的 <strong>ALIA CX300 在美国 Miramar 航展开展飞行展示</strong>。']],
   'Joby':[['09.10','试飞进展','Joby 在得州参加联邦 eVTOL 整合试点，开展<strong>为期一周的演示飞行</strong>。']],
   'Archer':[['09.22','试飞进展','Archer 披露<strong>Midnight 在加州完成多次有人驾驶航段飞行</strong>，并宣布将参加萨利纳斯航展。']],
   'Vertical':[['09.25','海外进展','Vertical 在英国 Cotswold 机场<strong>启用 Valo 总装中心</strong>。']],
   '齐飞航空':[['09.01','适航与技术','齐飞航空 W280 <strong>型号合格证申请获民航华东管理局受理</strong>。']]
  },
  stats:[['时的科技','2,542','1,111','+10.6%','15.3%','532','62'],['峰飞航空','6,592','2,434','−7.1%','39.6%','2,118','318'],['沃飞长空','5,348','2,294','−22.7%','32.1%','1,365','277'],['沃兰特','2,186','949','−40.5%','13.1%','599','204']]
 }
};
data['11'] = november2026.report;
monthlyMedia['11'] = november2026.media;
monthlySocial['11'] = november2026.social;
Object.assign(eventSources, november2026.eventSources);
for (const [key, additional] of Object.entries(archiveAdditions)) {
 const report = data[key];
 report.industry.push(...additional.industry);

 for (const [brand, rows] of Object.entries(additional.events)) {
  (report.events[brand] ??= []).push(...rows);
 }
}
const companies={domestic:['时的科技','沃飞长空','峰飞航空','沃兰特','亿航智能'],overseas:['Joby','Archer','Vertical','BETA'],others:['齐飞航空','广汽高域','追梦空天','览翌航空','零重力','奇瑞','蓝霄航空','蓝色向量','御风未来','小鹏汇天','亿维特','华羽先翔']};
const overseasOtherBrands = d => Object.keys(d.events).filter(brand =>
 d.events[brand].length && !Object.values(companies).some(brands => brands.includes(brand))
);
const order=['适航与技术','试飞进展','订单与合作','海外进展','品牌传播','资本与经营'];
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const empty=t=>'<p class="empty">'+esc(t)+'</p>';
const requestedMonth = new URLSearchParams(location.search).get('month');
const initialMonth = /^\d{4}-(0[1-9]|1[0-2])$/.test(requestedMonth ?? '') ? requestedMonth.split('-') : ['2026',Object.keys(data).sort().at(-1)];
const monitorAnchors=['#voice','#press','#social'];
let year=Number(initialMonth[0]), month=initialMonth[1], page=monitorAnchors.includes(location.hash)?'monitor':'overview', region='all', group='overseas', company=companies.overseas[0], otherFilter='all', domesticTier='domestic', overseasTier='overseas';
const btn=(label,act,value,cls='link')=>'<button class="'+cls+'" data-action="'+act+'" data-value="'+esc(value)+'">'+esc(label)+'</button>';
function segmented(label, action, all, selected) {
 return '<div class="segments" role="group" aria-label="'+esc(label)+'">'+Object.entries(all).map(([key,value])=>'<button data-action="'+action+'" data-value="'+key+'" aria-pressed="'+(key===selected)+'">'+value+'</button>').join('')+'</div>';
}
function heading(title,note=''){return '<div class="page-heading"><h1>'+title+'</h1>'+(note?'<p>'+note+'</p>':'')+'</div>'}
const eventSourceIndex = new Map();
function sourceKey(scope, date, category) {
 const key = [monthKey(), scope, date, category].join('|');
 return eventKeyAliases[key] ?? key;
}
function eventDescription(html,source,detail) {
 if(detail)return '<button type="button" class="event-description" data-action="brief-event" data-value="'+esc(detail)+'">'+html+'</button>';
 return source?'<a class="event-description" href="'+esc(source.url)+'" target="_blank" rel="noopener noreferrer">'+html+'</a>':html;
}
function eventRow(date, html, category, scope, brand='', interactive=true){
 const key=sourceKey(scope,date,category);
 const source=readSource(key);
 eventSourceIndex.set(key,{scope,date,category,summary:html});
 const dateLabel=/^\d{2}\.\d{2}$/.test(date)?'<time datetime="'+year+'-'+date.replace('.','-')+'">'+esc(date)+'</time>':'<span class="event-date">'+esc(date)+'</span>';
 const detail=november2026.detailBySource[key]||key;
 const photo=interactive?renderEventPhoto(key,scope,detail):reportEventPhoto(key);
 return '<li'+(photo?' class="with-photo"':'')+'>'+photo+dateLabel+'<p>'+(brand?'<span class="event-brand">'+esc(brand)+'</span>':'')+
 eventDescription(html,source,interactive?detail:'')+'</p>'+
 (interactive?(source?btn('来源','source',key):''):'')+'</li>';
}
function eventGroup(title, rows) {
 return '<section class="event-group"><h3>'+esc(title)+'</h3><ul class="event-list">'+rows.map(row=>eventRow(...row)).join('')+'</ul></section>';
}

function overview(d){
 return '<div class="report-heading"><h1>'+Number(month)+'月舆情概览</h1><small>'+year+' 年 '+Number(month)+' 月'+(d.cutoff?' · '+esc(d.cutoff):'')+'</small></div>'+
 '<section class="overview-metrics" aria-labelledby="performance-heading"><h2 id="performance-heading">时的科技数据表现</h2><div class="metrics">'+d.metrics.map(([name,val,foot,detail])=>'<article class="metric"><span>'+esc(name)+(detail?'<span class="metric-detail">（'+esc(detail)+'）</span>':'')+'</span><b>'+val+'</b><small>'+esc(foot)+'</small></article>').join('')+'</div></section>'+overviewSummaries(d)+(d.stats.length?'<p class="footnote">数据来源：新浪舆情通</p>':'');
}
function overviewSummaries(d){
 return '<div class="summary-grid">'+(d.summaries.length?d.summaries.map(([label,destination,paragraphs])=>
  '<section class="card month-summary"><div class="card-head"><h2>'+label+'</h2>'+btn('查看'+(destination==='tCab'?'品牌动态':label+'动态'),'nav',destination)+'</div>'+
  paragraphs.slice().sort(([a],[b])=>Number(a==='国内')-Number(b==='国内')).map(([area,copy])=>'<p>'+(area?'<strong class="summary-region">'+area+'</strong>':'')+copy+'</p>').join('')+'</section>'
 ).join(''):empty('所选月份暂无月度概览。'))+'</div>';
}
function industry(d,selectedRegion=region,showControls=true){
 const regions=[['国际','海外'],['国内','国内']];
 const groups=regions.filter(([key])=>selectedRegion==='all'||key===selectedRegion).map(([key,label])=>{
  const categories=Object.entries(Object.groupBy(d.industry.filter(row=>row[1]===key),row=>row[2]));
  return categories.length?'<section class="industry-region"><h2>'+label+'</h2>'+
   categories.map(([type,records])=>eventGroup(type,sortDate(records).map(([date,r,category,copy])=>[date,copy,category,r,'',showControls]))).join('')+'</section>':'';
 }).join('');
 return heading('行业动态')+
 (showControls?'<div class="controls">'+segmented('地区','region',{all:'全部',国际:'海外',国内:'国内'},selectedRegion)+'</div>':'')+
 '<section class="card">'+(groups||empty('本月暂无此地区的行业事件。'))+'</section>';
}
function table(columns, rows){
 return '<div class="table-wrap" tabindex="0" role="region" aria-label="声量数据明细"><table><thead><tr>'+columns.map(label=>'<th scope="col">'+esc(label)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(cell=>'<td>'+esc(cell)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
}
const brandLogos={'时的科技':'tcab','亿航智能':'ehang','峰飞航空':'autoflight','沃飞长空':'aerofugia','沃兰特':'volant',Joby:'joby',Archer:'archer',Vertical:'vertical',BETA:'beta'};
const numeric = value => Number(value.replaceAll(',','').replace('%','').replace('−','-'));
function comparison(d){
 if (!d.stats.length) return '<section class="card monitor-block" id="voice"><div class="card-head"><h2>声量对比</h2><span class="muted">—</span></div></section>';
 const rows=d.stats.filter(([brand])=>monitoredBrands.has(brand)).sort((a,b)=>numeric(b[4])-numeric(a[4]));
 const largestChange=Math.max(...Object.values(data).flatMap(report=>report.stats.map(row=>Math.abs(numeric(row[3])))));
 const limit=Math.ceil(largestChange/25)*25 || 25;
 const axis=(labels)=>'<div class="chart-axis" aria-hidden="true"><div>'+labels.map(label=>'<span>'+label+'</span>').join('')+'</div></div>';
 const shareRows=rows.map(row=>'<div class="bar-row'+(row[0]==='时的科技'?' own':'')+'"><span>'+esc(row[0])+'</span><div class="bar-track" aria-hidden="true"><i style="width:'+numeric(row[4])+'%"></i></div><strong>'+esc(row[4])+'</strong></div>').join('');
 const growthRows=rows.map(row=>{
  const value=numeric(row[3]);
  const width=Math.abs(value)/limit*50;
  return '<div class="bar-row"><span>'+esc(row[0])+'</span><div class="growth-track" aria-hidden="true"><i class="'+(value<0?'negative':'positive')+'" style="width:'+width+'%"></i></div><strong class="'+(value<0?'negative-text':'positive-text')+'">'+esc(row[3])+'</strong></div>';
 }).join('');
 return '<section class="card monitor-block" id="voice"><div class="card-head"><h2>声量对比</h2><span class="muted">国内四品牌</span></div>'+
 '<p class="voice-summary">'+d.voiceSummary+'</p>'+
 '<div class="voice-charts"><figure><figcaption>声量份额</figcaption>'+shareRows+axis(['0%','50%','100%'])+'</figure><figure><figcaption>内容量环比</figcaption>'+growthRows+axis(['−'+limit+'%','0%','+'+limit+'%'])+'</figure></div>'+
 '<details class="coverage"><summary>查看数据明细</summary>'+table(['品牌','监测内容量','相似文章合并后','环比','四家声量份额','媒体内容量','中性／敏感信息量'],rows)+'</details>'+
 '<p class="footnote">数据来源：新浪舆情通</p></section>';
}
function articleLink(label,url,css=''){
 return '<a'+(css?' class="'+css+'"':'')+' href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+'</a>';
}
const monitoredBrands = new Set(['时的科技','沃飞长空','峰飞航空','沃兰特']);
function mediaLabel(name){
 return name.split(' · ')[0].split('（')[0];
}
function coverage(reportMonth){
 const cards=monthlyMedia[reportMonth].filter(([brand])=>monitoredBrands.has(brand)).map(([brand,names,copy])=>{
  const chips=list=>list.map(item=>{
   const [name,url]=Array.isArray(item)?item:[item,mediaArticles[brand]?.[item]];
   const label=mediaLabel(name);
   return url?articleLink(label,url):'<span>'+esc(label)+'</span>';
  }).join('');
  return '<article class="coverage-card"><h3>'+esc(brand)+'</h3><p>'+esc(copy)+'</p><div class="media-chips">'+chips(names.slice(0,5))+'</div>'+
   (names.length>5?'<details><summary>更多媒体</summary><div class="media-chips">'+chips(names.slice(5))+'</div></details>':'')+'</article>';
 }).join('');
 return '<section class="card monitor-block" id="press"><div class="card-head"><h2>媒体报道</h2><span class="muted">2026 年 '+Number(reportMonth)+' 月</span></div><div class="coverage-grid">'+cards+'</div></section>';
}
const monthlySocialSamples = {
 '09': [['沃飞长空','《如何养飞机更省心》','aerofugia-september',eventSources['2026-09|沃飞长空|09.15|品牌传播'].url]],
 '10': [
  ['峰飞航空','广交会参展帖','autoflight'],
  ['沃飞长空','赛博财经联动','aerofugia'],
  ['沃兰特','AC102试飞视频','volant'],
  ['时的科技','E20马来西亚首展海报','tcab']
 ],
 '11': [
  ['峰飞航空','11.06 · 斯坦福校友参访与五机编队','november-2026/autoflight-formation'],
  ['峰飞航空','11.25 · 亚太 eVTOL 出行展望','november-2026/autoflight-apec'],
  ['时的科技','11.09 · UniKL MIAT 航空职业交流','november-2026/tcab-talent'],
  ['时的科技','11.23 · E20 马来西亚区域出行场景','november-2026/tcab-routes']
 ]
};
function socialSamples(reportMonth){
 const samples=monthlySocialSamples[reportMonth];
 if(!samples)return '';
 return '<details class="social-samples"><summary>查看当月发文截图</summary><div class="social-sample-grid">'+samples.filter(([brand])=>monitoredBrands.has(brand)).map(([brand,topic,file,url])=>{
  const src='social-samples/'+file+'.webp';
  const label=brand+' · '+topic;
  return '<figure><a href="'+src+'" target="_blank" rel="noopener" aria-label="'+esc('查看截图 · '+label)+'"><img src="'+src+'" alt="'+esc(label)+'" decoding="async"></a><figcaption>'+(url?articleLink(label,url):esc(label))+'</figcaption></figure>';
 }).join('')+'</div></details>';
}
const autoflightLinkedInScreenshots = {
 '09': [
  ['09.18','适航取证的重要性', '09-18', true],
  ['09.25','峰飞 eVTOL 亮相宁德时代挪威服务中心', '09-25', true]
 ],
 '10': [
  ['10.21','峰飞与 Sunway 探索马来西亚电动航空合作', '10-21', true],
  ['10.27','国际熊猫日：低空运输鲜竹', '10-27', false]
 ]
};

function autoflightLinkedInGallery(reportMonth){
 const posts=autoflightLinkedInScreenshots[reportMonth];
 if(!posts)return '';
 return '<details class="social-samples linkedin-samples"><summary>峰飞航空 LinkedIn 发帖截图（'+posts.length+' 条已存档）</summary>'+
  '<p class="footnote">按原帖发布日期归档。点击图片可查看原尺寸。</p>'+
  '<div class="social-sample-grid">'+posts.map(([date,title,file,excerpt])=>{
   const src='social-samples/autoflight-linkedin/'+file+'.png';
   const label=date+' · '+title;
   return '<figure><a href="'+src+'" target="_blank" rel="noopener" aria-label="'+esc('查看截图 · '+label)+'"><img src="'+src+'" alt="'+esc(label)+'" loading="lazy"></a><figcaption>'+
    esc(label)+(excerpt?'<small>原截图正文未展开</small>':'')+'</figcaption></figure>';
  }).join('')+'</div></details>';
}
function socialCoverage(reportMonth){
 const social=monthlySocial[reportMonth].filter(([brand])=>monitoredBrands.has(brand));
 const columns=['品牌','公众号','视频号','领英','抖音','小红书','主要内容'];
 const max=Math.max(1,...social.flatMap(row=>row.slice(1,6).map(x=>Number(x)||0)));
 const rows=social.map(([brand,...fields])=>{
  const theme=fields.pop();
  return '<tr><th scope="row">'+esc(brand)+'</th>'+fields.map(value=>'<td class="heat-cell">'+(!value?'<span class="muted" aria-label="无发文或暂无统计">—</span>':'<strong style="--heat:'+(0.07+Number(value)/max*0.23).toFixed(3)+'">'+esc(value)+'</strong>')+'</td>').join('')+'<td>'+esc(theme)+'</td></tr>';
 }).join('');
 return '<section class="card monitor-block" id="social"><div class="card-head"><h2>社媒发文</h2><span class="muted">2026 年 '+Number(reportMonth)+' 月</span></div>'+
  '<div class="table-wrap" tabindex="0" role="region" aria-label="社媒发文数据"><table class="social-table"><thead><tr>'+columns.map(label=>'<th scope="col">'+esc(label)+'</th>').join('')+'</tr></thead><tbody>'+rows+'</tbody></table></div>'+(reportMonth==='11'?'':'<p class="footnote">— 表示无发文或暂无统计。主要内容根据当月品牌动态归纳。</p>')+socialSamples(reportMonth)+autoflightLinkedInGallery(reportMonth)+'</section>';
}
function propagation(d){
 return d===blankMonth ? '<section class="card">'+empty('所选月份暂无传播数据。')+'</section>' : comparison(d)+coverage(month)+socialCoverage(month);
}
function monitorPage(d){
 const sections=[['voice','声量对比'],['press','媒体报道'],['social','社媒发文']];
 const shortcuts='<div class="monitor-sections" role="group" aria-label="传播监测栏目">'+sections.map(([id,label])=>
  '<a href="#'+id+'">'+label+'</a>'
 ).join('')+'</div>';
 return heading('传播监测')+(d===blankMonth?'':shortcuts)+propagation(d);
}
function sortDate(rows){
 return [...rows].sort((a,b)=>{
  const day = date => Number(date.match(/^\d{2}\.(\d{2})/)?.[1] ?? 32);
  return day(a[0])-day(b[0]);
 });
}
const otherDimensions={tech:'适航与技术',flight:'试飞进展',business:'订单、合作与融资',international:'海外进展',brand:'品牌传播'};
function otherDimension(category){
 if(category==='适航与技术')return 'tech';
 if(category==='试飞进展')return 'flight';
 if(category==='品牌传播')return 'brand';
 if(category==='海外进展')return 'international';
 return 'business';
}
function otherCompanyPage(d,filter=otherFilter,showFilter=true){
 const rows=sortDate(companies.others.flatMap(brand=>(d.events[brand]??[]).map(([date,category,copy])=>[date,copy,category,brand,brand,showFilter])));
 const active=otherDimensions[filter];
 const selected=active ? rows.filter(row=>otherDimension(row[2])===filter) : rows;
 const filters=Object.entries({all:'全部分类',...otherDimensions}).map(([key,label])=>
  '<option value="'+key+'"'+(key===filter?' selected':'')+'>'+esc(label)+'</option>'
 ).join('');
 return '<section class="card"><div class="card-head"><h2>其他竞品</h2>'+
  (showFilter?'<select class="theme-filter" id="other-theme" aria-label="动态分类">'+filters+'</select>':'')+'</div>'+
  (selected.length?(active?'<ul class="event-list">'+selected.map(row=>eventRow(...row)).join('')+'</ul>':
    Object.entries(otherDimensions).map(([key,label])=>[label,selected.filter(row=>otherDimension(row[2])===key)]).filter(([,entries])=>entries.length).map(([label,entries])=>eventGroup(label,entries)).join('')):empty('本月暂无相关动态。'))+'</section>';
}
function brandCards(brands){
 return '<div class="logo-grid'+(brands.length===5?' five-brands':'')+'" role="group" aria-label="选择品牌">'+brands.map(brand=>
  '<button class="logo-card" aria-pressed="'+(company===brand)+'" data-action="select-brand" data-value="'+esc(brand)+'">'+
  (brandLogos[brand]?'<img src="logos/'+brandLogos[brand]+'.png" alt="">':'')+'<span>'+esc(brand)+'</span></button>').join('')+'</div>';
}
function brandProgress(d,brand,interactive=false){
 const rows=sortDate(d.events[brand]??[]);
 const grouped=order.map(type=>[type,rows.filter(row=>row[1]===type).map(([date,kind,copy])=>[date,copy,kind,brand,'',interactive])]).filter(([,list])=>list.length);
 return '<section class="card"'+(interactive?' id="brand-progress"':'')+'>'+
  '<div class="brand-profile">'+(brandLogos[brand]?'<img src="logos/'+brandLogos[brand]+'.png" alt="">':'')+'<h2'+(interactive?' id="brand-focus" tabindex="-1"':'')+'>'+esc(brand)+'</h2></div>'+
  (grouped.map(([title,list])=>eventGroup(title,list)).join('')||empty('本月暂无该品牌的动态。'))+'</section>';
}
function companyPage(d){
 const isOverseas=group==='overseas'||group==='overseas-other';
 const activeSection=isOverseas?'overseas':'domestic';
 const overseasOthers=overseasOtherBrands(d);
 if(isOverseas&&!overseasOthers.length){group='overseas';overseasTier='overseas'}
 const sections='<div class="company-tabs" role="group" aria-label="竞品动态视图">'+
  Object.entries({overseas:'海外动态',domestic:'国内动态'}).map(([key,label])=>
   '<button type="button" data-action="company-section" data-value="'+key+'" aria-pressed="'+(activeSection===key)+'">'+label+'</button>'
  ).join('')+'</div>';
 const tiers=isOverseas?
  {overseas:'主要竞品',...(overseasOthers.length?{'overseas-other':'其他竞品'}:{})}:
  {domestic:'主要竞品',others:'其他竞品'};
 const header=heading('竞品动态')+sections+'<div class="company-scope">'+
  segmented(isOverseas?'海外竞品范围':'国内竞品范围','company-tier',tiers,group)+'</div>';
 if(group==='others')return header+otherCompanyPage(d);
 const brands=group==='overseas-other'?overseasOthers:companies[group];
 if(!brands.includes(company))company=brands[0];
 return header+brandCards(brands)+brandProgress(d,company,true);
}
const monitoringReports = {
 '2026-09': [['时的科技','tcab'],['沃飞长空','aerofugia'],['峰飞航空','autoflight'],['沃兰特','volant']]
};

function reportPdfLink(label, path, className, filename){
 return '<a class="'+className+'" href="reports/'+path+'" download="'+esc(filename)+'" data-pdf>'+esc(label)+'</a>';
}

function reports(){
 return heading('月报与历史')+'<section class="card history"><div class="card-head"><h2>历史月报</h2></div>'+
  Object.keys(data).sort().reverse().map(m=>{
   const key='2026-'+m;
   const label='2026 年 '+Number(m)+' 月';
   const attachments=monitoringReports[key]||[];
   return '<section class="history-row"><div class="history-month"><h3>'+label+'</h3>'+
    '<div class="report-actions">'+btn('查看月报','report-month',m,'button report-view')+
    reportPdfLink('下载月报 PDF',key+'.pdf?v=competitor-cards','button upload-button report-download',key+'-舆情月报.pdf')+'</div></div>'+
    '<details class="monitoring-archive"><summary>新浪舆情通原始报告</summary>'+
    (attachments.length?'<ul>'+attachments.map(([brand,slug])=>{
     const path='yqt/'+key+'/'+slug+'.pdf';
     return '<li><span>'+esc(brand)+'</span><div>'+
      reportPdfLink('下载 PDF',path,'report-preview',key+'-'+brand+'-舆情通简报.pdf')+'</div></li>';
    }).join('')+'</ul>':'<p class="muted">暂无原始报告</p>')+'</details></section>';
  }).join('')+'</section>';
}
const views={overview,industry,companies:companyPage,monitor:monitorPage,reports};
const blankMonth={
 metrics:[['国内品牌声量','—','暂无数据'],['品牌声量占比','—','暂无数据','时的、沃飞、峰飞、沃兰特'],['媒体报道数量','—','暂无数据'],['中性/敏感信息量','—','暂无数据']],
 summaries:[], industry:[], events:{}, stats:[]
};
const reportData=()=>year===2026&&data[month]?data[month]:blankMonth;
const monthKey=()=>String(year)+'-'+month;
function setMonth(nextYear,nextMonth){
 year=nextYear;
 month=nextMonth;
 const url=new URL(location.href);
 url.searchParams.set('month',monthKey());
 history.replaceState(null,'',url);
}
const monthName=()=>year+' 年 '+Number(month)+' 月';
function render(){
 $('monthLabel').textContent=monthName();
 $('crumb').textContent=names[page];
 for(const el of document.querySelectorAll('nav button')){if(el.dataset.page===page)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')}
 eventSourceIndex.clear();
 const integrated=page==='overview'&&typeof overviewBriefing==='function';
 $('view').innerHTML=integrated?overviewBriefing(reportData()):views[page](reportData());
}
function navigate(next){
 if(next==='tCab'){next='companies';group='domestic';domesticTier='domestic';company='时的科技'}
 if(next==='competitorEvents'){next='companies';group='overseas';overseasTier='overseas';company=companies.overseas[0]}
 if(location.hash){
  const url=new URL(location.href);
  url.hash='';
  history.replaceState(null,'',url);
 }
 page=next;render();scrollTo(0,0);
}

function monthlyReport(d){
 const overseasOthers=overseasOtherBrands(d);
 const section=(title,copy)=>'<section class="report-chapter">'+heading(title)+copy+'</section>';
 return reportOverview(d)+
  '<section class="report-chapter">'+industry(d,'all',false)+'</section>'+
  section('竞品动态','<h2>海外主要竞品</h2>'+companies.overseas.map(brand=>brandProgress(d,brand)).join('')+
   (overseasOthers.length?'<h2>海外其他竞品</h2>'+overseasOthers.map(brand=>brandProgress(d,brand)).join(''):'')+
   '<h2>国内主要竞品</h2>'+companies.domestic.map(brand=>brandProgress(d,brand)).join('')+otherCompanyPage(d,'all',false))+
  section('传播监测',propagation(d));
}

function renderEventPhoto(key,brand,detail){
 const visual=eventPhotoMarkup(key,brand);
 if(detail)return '<button type="button" class="event-photo" data-action="brief-event" data-value="'+esc(detail)+'" aria-label="'+esc(brand)+' · 查看事件详情">'+visual+'</button>';
 const isImage=visual.startsWith('<img');
 const imageUrl=isImage?eventPhotos[key]?.file:null;
 return imageUrl?'<a class="event-photo detail-media" href="'+esc(imageUrl)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(brand)+' · 查看原图">'+visual+'</a>':
  '<div class="event-photo detail-media">'+visual+'</div>';
}
function eventPhotoMarkup(key,alt=''){
 const photo=eventPhotos[key];
 if(photo?.file&&!photo.alt?.endsWith('资料卡')&&!photo.alt?.endsWith('标识')){
  const description=photo.alt||alt;
  const caption=description.endsWith('资料图')?'<small class="event-photo-caption">资料图</small>':'';
  return '<img src="'+esc(photo.file)+'" data-photo-key="'+esc(key)+'" width="320" height="180" alt="'+esc(description)+'" loading="lazy" decoding="async">'+caption;
 }
 return eventCoverCard(key);
}
function eventCoverCard(key){
 const [period,scope,date,category]=key.split('|');
 const record=eventSourceIndex.get(key);
 const summary=record?.summary ?? '';
 const topic=record?.category ?? category;
 const subject=scope==='国际'?'海外行业':scope==='国内'?'国内行业':scope;
 const title=eventDetailTitles[key] || summary.match(/<strong>([^<]+)<\/strong>/)?.[1] || summary.replace(/<[^>]+>/g,'').replace(/。$/,'') || topic;
 const [coverYear,coverMonth]=period.split('-');
 return '<span class="event-cover-card"><span class="event-cover-sheet">'+
  '<small>资料卡 / '+esc(record?.date ?? date)+'</small><small>'+esc(subject)+' · '+esc(topic)+'</small>'+
  '<b>'+esc(title)+'</b><small>'+esc(coverYear+' 年 '+Number(coverMonth)+' 月 / 舆情工作台')+'</small></span></span>';
}
function reportEventPhoto(key){
 return '<div class="report-thumb">'+eventPhotoMarkup(key)+'</div>';
}
document.addEventListener('error',({target})=>{
 if(!target.dataset?.photoKey)return;
 const caption=target.nextElementSibling;
 if(caption?.classList.contains('event-photo-caption'))caption.remove();
 const fallback=eventCoverCard(target.dataset.photoKey);
 const media=target.closest('a.detail-media');
 if(media)media.outerHTML='<div class="event-photo detail-media">'+fallback+'</div>';
 else target.outerHTML=fallback;
},true);
let currentSourceKey='';
function readSource(key){
 return eventSources[key]??null;
}
function showSourceLink(){
 const source=readSource(currentSourceKey);
 const target=$('sourceInfo');
 target.textContent='';
 if(!source){target.textContent='暂无原文链接';return}
 const link=document.createElement('a');
 link.href=source.url;link.target='_blank';link.rel='noopener noreferrer';link.className='link';
 link.textContent=source.label+' · 查看原文';
 target.append(link);
}
function openSource(key){
 const record=eventSourceIndex.get(key);
 if(!record)return;
 currentSourceKey=key;
 $('sourceText').textContent=[record.date,record.scope,record.category].join(' · ');
 showSourceLink();
 $('source').showModal();
}
$('close').addEventListener('click',()=>$('source').close());
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.page){navigate(b.dataset.page);return}
 const {action,value}=b.dataset;
 if(action==='nav'){navigate(value);return}
 if(action==='brief-event'){showBriefEvent(value);return}
 if(action==='source'){openSource(value);return}
 if(action==='report-month'){setMonth(2026,value);navigate('overview');return}
 if(action==='region')region=value;
 else if(action==='select-brand'){company=value;render();$('brand-focus').focus();return}
 else if(action==='company-section'){
  const nextGroup=value==='overseas'?overseasTier:domesticTier;
  if(nextGroup!==group){group=nextGroup;company=companies[group]?.[0]}
 }
 else if(action==='company-tier'){
  group=value;
  if(value==='overseas'||value==='overseas-other')overseasTier=value;
  else domesticTier=value;
  company=companies[group]?.[0];
  otherFilter='all';
 }
 else return;
 render();document.querySelector('[data-action="'+action+'"][data-value="'+CSS.escape(value)+'"]')?.focus();
});
$('view').addEventListener('click',e=>{
 const link=e.target.closest('a[data-pdf]');
 if(!link||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 $('pdfFileName').textContent=link.download;
 $('openPdfInBrowser').href=link.href;
 // Let the browser handle the native download before showing the alternate route.
 setTimeout(()=>$('pdfDialog').showModal(),0);
});
$('view').addEventListener('change',e=>{
 if(e.target.id!=='other-theme')return;
 otherFilter=e.target.value;
 render();
 $('other-theme').focus();
});
const stylePicker=$('workbench-style');
if(stylePicker){
 const initialLayout=new URLSearchParams(location.search).get('layout');
 stylePicker.value=initialLayout==='editorial'?'editorial':'soft';
 stylePicker.addEventListener('change',()=>{
  const url=new URL(location.href);
  if(stylePicker.value==='soft')url.searchParams.delete('layout');
  else url.searchParams.set('layout',stylePicker.value);
  history.replaceState(null,'',url);
  document.documentElement.dataset.theme=stylePicker.value==='editorial'?'editorial':'soft';
  if(page==='overview')render();
 });
}
render();

let pickerYear=year;
function drawPicker(){
 $('pickerYear').textContent=pickerYear+' 年';
 $('monthGrid').innerHTML=Array.from({length:12},(_,i)=>{
  const m=String(i+1).padStart(2,'0');
  return '<button type="button" data-pick="'+m+'" aria-pressed="'+(year===pickerYear&&month===m)+'">'+(i+1)+'月</button>';
 }).join('');
}
function closePicker(focus=false){
 $('monthPicker').hidden=true;
 $('month').setAttribute('aria-expanded','false');
 if(focus)$('month').focus();
}
$('month').addEventListener('click',()=>{
 if(!$('monthPicker').hidden){closePicker();return}
 pickerYear=year;drawPicker();$('monthPicker').hidden=false;
 $('month').setAttribute('aria-expanded','true');
 $('monthGrid').querySelector('[aria-pressed="true"]')?.focus();
});
$('prevYear').addEventListener('click',()=>{if(pickerYear>1900){pickerYear--;drawPicker()}});
$('nextYear').addEventListener('click',()=>{if(pickerYear<2100){pickerYear++;drawPicker()}});
$('monthGrid').addEventListener('click',e=>{
 const item=e.target.closest('[data-pick]');if(!item)return;
 setMonth(pickerYear,item.dataset.pick);render();closePicker(true);
});
document.addEventListener('click',e=>{if(!$('monthPicker').hidden&&!e.target.closest('.month-wrap'))closePicker()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('monthPicker').hidden){e.preventDefault();closePicker(true)}});

