function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
 
const widgetEl = document.querySelector('.widget');
const spanrEl = widgetEl.querySelector('.color');

widgetEl.addEventListener('click', () => {
  const bgdColor = getRandomHexColor ()
  document.body.style.backgroundColor = bgdColor;
spanrEl.textContent = bgdColor;
})