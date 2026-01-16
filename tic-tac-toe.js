let btn = document.querySelectorAll(".btn");

let rebtn = document.querySelector("#reset-btn");

let turnX = true;

let pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// console.log(pattern)

let boxValue = [];

let i = 0;

// console.log(btn);

//making reset function
const resetFun = () => {
  for (let elmt of btn) {
    // console.log(elmt);
    elmt.innerText = "";
    elmt.disabled = false;
  }
};

//click event for reset
rebtn.addEventListener("click", resetFun);

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX == true) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    checkWiser();
  });
});

i = 0;
const checkWiser = () => {
  for (let ptn of pattern) {
    let x = "X";
    let o = "O";
    // console.log(btn[ptn[0]], btn[ptn[1]], btn[ptn[2]]);
    if (
      btn[ptn[0]].innerText == x &&
      btn[ptn[1]].innerText == x &&
      btn[ptn[2]].innerText == x
    ) {
      console.log("X won.");

      //to reset after win
      resetFun();
    } else if (
      btn[ptn[0]].innerText == o &&
      btn[ptn[1]].innerText == o &&
      btn[ptn[2]].innerText == o
    ) {
      console.log("O won.");

      //to reset after win
      resetFun();
    }
  }
};

btn.forEach((box) => {
  boxValue[i] = box.innerText;
  i++;
  // console.log(box.innerText);
});
