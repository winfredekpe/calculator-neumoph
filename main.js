result = document.querySelector(".sol");
solvebar = document.querySelector(".txt");
equal = document.querySelector(".equal");

//  addind event listeners

equal.addEventListener("click", solve);

function getvalue(x) {
  solvebar.innerHTML += x;
}

function solve() {
  try {
    if (eval(solvebar.innerHTML)) {
      result.innerHTML = eval(solvebar.innerHTML);
      solvebar.innerHTML = "";
    }
  } catch (error) {
    alert("invalid operation please check and try again");
  }
}

function clean() {
  solvebar.innerHTML = "";
}

function removeback() {
  solvebar.innerHTML = solvebar.innerHTML.substring(
    0,
    solvebar.innerHTML.length - 1
  );
}
