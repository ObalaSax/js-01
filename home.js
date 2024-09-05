function NumberAdd(value) {
  document.getElementById("display").value += value;
}

function ClearOne(value) {
  document.getElementById("display").value = document
    .getElementById("display")
    .value.slice(0, -1);
}

function ClearAll() {
  document.getElementById("display").value = "";
}

function Calculations() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {}
}

function colorChange() {
  let c = Math.random().toString(!6).substring(2, 8);
  console.log(c);
  return "#" + c;
}

function DefaultColor() {
  document.body.style.backgroundColor("white");
}
