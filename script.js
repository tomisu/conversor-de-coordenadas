function getCoords(r, a) {
  const radians = 2 * Math.PI * (a + 90) / 360;
  const x = -1 * r * Math.cos(radians);
  const y = r * Math.sin(radians);
  return { x: Math.round(x), y: Math.round(y) };
}

const form = document.getElementById("converter-form");
const rInput = document.getElementById("r");
const aInput = document.getElementById("a");
const xValue = document.getElementById("x-value");
const yValue = document.getElementById("y-value");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const r = Number(rInput.value);
  const a = Number(aInput.value);

  if (Number.isNaN(r) || Number.isNaN(a)) {
    xValue.textContent = "-";
    yValue.textContent = "-";
    return;
  }

  const { x, y } = getCoords(r, a);
  xValue.textContent = String(x);
  yValue.textContent = String(y);
});
