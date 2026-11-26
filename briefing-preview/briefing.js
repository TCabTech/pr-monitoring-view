'use strict';

const esc = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);
const monthParam = new URLSearchParams(location.search).get('month');
const month = monthParam === '09' ? '09' : '10';
const edition = editions[month];
const byId = id => document.getElementById(id);
const detail = byId('event-detail');

for (const link of document.querySelectorAll('[data-month]')) {
  if (link.dataset.month === month) link.setAttribute('aria-current', 'page');
}
document.title = `2026 年 ${Number(month)} 月管理简报 · 时的科技`;
byId('issue-heading').innerHTML = '管理简报 <span>' + esc(edition.period) + '</span>';
byId('lead').innerHTML = `
  <div class="lead-copy">
    <p class="section-label">本月判断</p>
    <h2 id="lead-title">${esc(edition.headline)}</h2>
    <p class="lead-summary">${esc(edition.summary)}</p>
  </div>
  <figure class="lead-photo">
    <img src="../event-photos/${esc(edition.photo)}" alt="${esc(edition.photoAlt)}" width="640" height="360">
    <figcaption><a href="${esc(edition.photoUrl)}" target="_blank" rel="noopener noreferrer">图源 · ${esc(edition.photoCredit)}</a></figcaption>
  </figure>`;
byId('follow-items').innerHTML = edition.follow.map(([title, copy]) =>
  `<li><strong>${esc(title)}</strong><p>${esc(copy)}</p></li>`).join('');
byId('metrics').innerHTML = `
  <div class="score"><strong>${esc(edition.voice)}</strong><span>品牌声量</span><b class="change">${esc(edition.change)} 环比</b></div>
  <div class="score"><strong>${esc(edition.share)}</strong><span>四家品牌声量份额</span></div>`;
byId('events').innerHTML = edition.events.map((event, i) => `
  <li class="event">
    <span class="rank" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
    <article class="event-body">
      <p class="meta"><time datetime="2026-${event.date.replace('.', '-')}">${esc(event.date)}</time><span>${esc(event.region)}</span><span class="tag">${esc(event.topic)}</span></p>
      <h3><a href="#${esc(event.id)}">${esc(event.title)}</a></h3>
      <p class="description">${esc(event.summary)}</p>
      <p class="why"><strong>值得关注</strong> ${esc(event.note)}</p>
      <a class="evidence" href="#${esc(event.id)}" aria-label="查看依据：${esc(event.title)}">查看依据 · ${event.sources.length} 个来源</a>
    </article>
    <a class="event-arrow" href="#${esc(event.id)}" tabindex="-1" aria-hidden="true">↗</a>
  </li>`).join('');

function renderDetail() {
  const event = edition.events.find(item => '#' + item.id === location.hash);
  if (!event) {
    if (detail.open) detail.close();
    return;
  }
  byId('detail-content').innerHTML = `
    <p class="meta"><span>${esc(event.date)}</span><span>${esc(event.region)}</span><span class="tag">${esc(event.topic)}</span></p>
    <h2 id="detail-title">${esc(event.title)}</h2>
    <p class="detail-summary">${esc(event.summary)}</p>
    ${event.photo ? `<img class="detail-photo" src="../event-photos/${esc(event.photo)}" alt="${esc(event.photoAlt)}" width="640" height="360">` : ''}
    <section class="detail-section">
      <h3>事件进展</h3>
      <ol class="timeline">${event.timeline.map(([date, copy]) => `<li><strong>${esc(date)}</strong><p>${esc(copy)}</p></li>`).join('')}</ol>
    </section>
    <section class="detail-section">
      <h3>原始来源</h3>
      <ul class="sources">${event.sources.map(([name, type, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a><span>${esc(type)}</span></li>`).join('')}</ul>
    </section>`;
  if (!detail.open) detail.showModal();
  detail.scrollTop = 0;
}
window.addEventListener('hashchange', renderDetail);
detail.addEventListener('close', () => {
  if (edition.events.some(item => '#' + item.id === location.hash)) {
    history.replaceState(null, '', location.pathname + location.search);
  }
});
renderDetail();
