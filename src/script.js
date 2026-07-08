let count = 0;
const countEl = document.getElementById('count');

function render() {
  countEl.textContent = count;
}

document.getElementById('incrementBtn').addEventListener('click', () => {
  count = count + 1;
  render();
});

document.getElementById('decrementBtn').addEventListener('click', () => {
  count = count - 1;
  render();
});
