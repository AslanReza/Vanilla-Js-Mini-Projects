const passwordArea = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{][></-=";
const allChars = upperCase + lowerCase + number + symbol;

function renderPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordArea.value = password;
}
function copyToClipboard() {
  passwordArea.select();
  document.execCommand("copy");
  let copyClass = document.getElementById("iconCopy");
  copyClass.classList.toggle("fa-solid");
  copyClass.classList.add("fa-light");
}
