const genBtn = document.querySelector(".genarateBtn");
const downlBtn = document.querySelector(".downloadBtn");
const mobileNum = document.querySelector("input[type='number']");
const fullName = document.querySelector("input[type='text']");
const email = document.querySelector("input[type='email']");
const selectOp = document.querySelector("select");
const qrArea = document.querySelector(".qr-area");

let size = selectOp.value;


genBtn.addEventListener("click", () => {

    if (fullName.value.length > 0 && email.value.length > 0 && mobileNum.value.length > 0 ) {
        genarateQRCode();
    }else {
        urlQRCode();
    }
    
});

function urlQRCode() {
 const inputURL = document.querySelector(".url-input input[type='url']").value;
 let size = selectOp.value;
 
 qrArea.innerHTML = "";
 new QRCode(qrArea, {
    //text: mobileNum,
    text: `${inputURL}`,
    width: size,
    height: size,
    colorDark: "rgba(0,0,155)",
    colorLight : "rgba(255,200,255)",
});
};

function genarateQRCode() {
qrArea.innerHTML = "";
const fullName = document.querySelector("input[type='text'").value;
const email = document.querySelector("input[type='email'").value;
const mobileNum = document.querySelector("input[type='number'").value;
let size = selectOp.value;
new QRCode(qrArea, {
    //text: mobileNum,
    text: `Name: ${fullName}\nEmail: ${email}\nMobile Number: ${mobileNum}`,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
    
});
};


downlBtn.addEventListener("click", () => {
let img = document.querySelector(".qr-area img");

if (img !== null) {
    let imgAtrr = img.getAttribute("src");
    downlBtn.setAttribute("href", imgAtrr);
} else {
    alert("Please fill-up");
}
});


selectOp.addEventListener("change", () => {
  if (fullName.value.length > 0 && email.value.length > 0 && mobileNum.value.length > 0 ) {
        genarateQRCode();
    }else {
        urlQRCode();
    }
}) 
