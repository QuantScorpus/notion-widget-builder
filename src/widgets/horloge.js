export function HorlogeWidget() {
  const el = document.createElement('div');
  el.className = 'widget-box';
  el.innerHTML = '<h3>Horloge</h3><div id="clock">--:--:--</div>';

  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    el.querySelector('#clock').textContent = now;
  }, 1000);

  return el;
}
