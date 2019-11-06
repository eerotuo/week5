//import "./styles.css";
var kierros = 0;

var table = document.getElementById("table1");
if (table != null) {
  console.log("moi");
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function() {
        tableText(this);
        checkWinnerHorisontal(table);
        checkWinnerVertical(table);
        checkWinnerDiagonal(table);
      };
  }
}

function tableText(tableCell) {
  var vaaka = tableCell.parentElement.rowIndex;
  var pysty = tableCell.cellIndex;

  console.log(vaaka + "testi" + pysty);

  if (kierros % 2 === 0) {
    tableCell.innerHTML = "X";
    tableCell.style.backgroundColor = "rgb(124, 252, 0)";
    tableCell.style.fontSize = "30px";
    tableCell.style.fontFamily = "Helvetica";

    kierros++;
  } else {
    tableCell.innerHTML = "O";
    tableCell.style.backgroundColor = "rgb(250, 128, 114)";
    tableCell.style.fontSize = "30px";
    tableCell.style.fontFamily = "Helvetica";

    kierros++;
  }
  //alert(tableCell.innerHTML);
}

function checkWinnerHorisontal(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (table.rows[i].cells[j].innerHTML === "X") {
        lkmx++;
        if (lkmx === 5) {
          alert("Player 1 won!");
          break;
        }
      }
      if (table.rows[i].cells[j].innerHTML === "O") {
        lkmo++;
        if (lkmo === 5) {
          alert("Player 2 won!");
          break;
        }
      }
    }
    lkmx = 0;
    lkmo = 0;
  }
}

function checkWinnerVertical(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (table.rows[j].cells[i].innerHTML === "X") {
        lkmx++;
        if (lkmx === 5) {
          alert("Player 1 won!");
          break;
        }
      }
      if (table.rows[j].cells[i].innerHTML === "O") {
        lkmo++;
        if (lkmo === 5) {
          alert("Player 2 won!");
          break;
        }
      }
    }
    lkmx = 0;
    lkmo = 0;
  }
}

function checkWinnerDiagonal(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    if (table.rows[i].cells[i].innerHTML === "X") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 1 won!");
        break;
      }
    }

    if (table.rows[i].cells[i].innerHTML === "O") {
      lkmo++;
      if (lkmx === 5) {
        alert("Player 2 won!");
        break;
      }
    }
  }

  lkmx = 0;
  lkmo = 0;

  for (var i = 0; i < 5; i++) {
    if (table.rows[i].cells[4 - i].innerHTML === "X") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 1 won!");
        break;
      }
    }

    if (table.rows[i].cells[4 - i].innerHTML === "O") {
      lkmo++;
      if (lkmx === 5) {
        alert("Player 2 won!");
        break;
      }
    }
  }
}
