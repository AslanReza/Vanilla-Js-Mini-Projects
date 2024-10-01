const wrapperMain = document.querySelector(".main-wrapper");
qrInput = wrapperMain.querySelector(".qr-form input");
generateButton = wrapperMain.querySelector(".qr-form button");
qrImage = wrapperMain.querySelector(".qr-code img");

generateButton.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  generateButton.innerText = "Generating QR Code...";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    wrapperMain.classList.add("active");
    generateButton.innerText = "Generate QR Code";
  });
  qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
      wrapperMain.classList.remove("active");
    }
  });
});
