let a = 2;
document
  .querySelector("#addIngredient-btn")
  .addEventListener("click", function () {
    const label = document.createElement("label");
    const span = document.createElement("span");
    const input = document.createElement("input");
    span.innerHTML = `Ingredient${a}:`;
    input.setAttribute("type", "text");
    input.setAttribute("name", "ingredients");
    label.appendChild(span);
    label.appendChild(input);
    a += 1;
    document.querySelector("#ingredients-container").appendChild(label);
  });

let b = 2;
document.querySelector("#addStep-btn").addEventListener("click", function () {
  const label0 = document.createElement("label");
  const span0 = document.createElement("span");
  span0.innerHTML = `Headeline of step${b}:`;
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "method");
  label0.appendChild(span0);
  label0.appendChild(input);

  const label = document.createElement("label");
  const span = document.createElement("span");
  span.innerHTML = `Step${b}:`;
  const textArea = document.createElement("textarea");
  textArea.setAttribute("rows", "6");
  textArea.setAttribute("cols", "40");
  textArea.setAttribute("name", "method");
  label.appendChild(span);
  label.appendChild(textArea);

  let container = document.querySelector("#method-container");
  container.appendChild(label0);
  container.appendChild(label);
  b += 1;
});
