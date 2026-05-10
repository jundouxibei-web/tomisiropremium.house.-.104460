// 正解パスワード（例：1234）
const correctCode = ["1", "0", "4", "4", "6"];

let inputCode = [];

function press(num) {
  if (inputCode.length >= 5) return;

  inputCode.push(String(num));
  updateDisplay();

  if (inputCode.length === 5) {
    checkCode();
  }
}

function updateDisplay() {
  let dots = "● ".repeat(inputCode.length);
  let blanks = "○ ".repeat(5 - inputCode.length);
  document.getElementById("display").textContent = dots + blanks;
}

function checkCode() {
  const status = document.getElementById("status");

  if (JSON.stringify(inputCode) === JSON.stringify(correctCode)) {
    status.textContent = "✅ ロック解除！";
     setTimeout(() => {
    location.href = 'house.html';
     document.body.classList.add("unlocked");},700)
  } else {
    status.textContent = "❌ パスコードが違います";
    reset();
  }
}

function reset() {
  setTimeout(() => {
    inputCode = [];
    updateDisplay();
    document.getElementById("status").textContent = "パスコードを入力";
  }, 1000);
}

function clearInput() {
  inputCode.pop();
  updateDisplay();
}

function goNext() {
    const btn1 = document.querySelector('.btn1');
btn1.classList.add('move-out');
  setTimeout(() => {
    location.href = 'intro.html';
  }, 100);
}

function modoru() {
    const btn2 = document.querySelector('.btn2');
btn2.classList.add('move-out');
  setTimeout(() => {
    location.href = 'house.html';
  }, 100);
}
