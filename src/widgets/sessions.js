export function SessionWidget() {
  const el = document.createElement('div');
  el.className = 'widget-box';
  el.innerHTML = '<h3>Sessions</h3><p>London: 08:00 - 17:00<br>NY: 14:00 - 23:00</p>';
  return el;
}
