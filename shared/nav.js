/* Small cross-page header nav. Call renderTriNav('run', '../') from a discipline
   page (one level down in /pages/), or renderTriNav('schedule', '') from index.html. */
function renderTriNav(activeId, prefix){
  prefix = prefix || '';
  const items = [
    {id:'schedule', label:'📅 Schedule', href: prefix + 'index.html'},
    {id:'run', label:'🏃 Run', href: prefix + 'pages/run.html'},
    {id:'bike', label:'🚴 Bike', href: prefix + 'pages/bike.html'},
    {id:'swim', label:'🏊 Swim', href: prefix + 'pages/swim.html'},
    {id:'strength', label:'🏋️ Strength', href: prefix + 'pages/strength.html'},
    {id:'yoga', label:'🧘 Yoga', href: prefix + 'pages/yoga.html'},
  ];
  const el = document.getElementById('triNav');
  if(!el) return;
  el.innerHTML = items.map(it=>
    `<a href="${it.href}"${it.id===activeId?' class="active"':''}>${it.label}</a>`
  ).join('');
}
