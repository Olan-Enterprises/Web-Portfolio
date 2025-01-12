const btn1 = document.getElementById("contact1");
const btn2 = document.getElementById("contact2");
const btn3 = document.getElementById("contact3");
const messageBox = document.getElementById("textarea");

btn1.addEventListener("click", () => {
    messageBox.value = "Hi! Let's talk about web development.";
});

btn2.addEventListener("click", () => {
    messageBox.value = "Hi! Let's talk about icon / logo design.";
});

btn3.addEventListener("click", () => {
    messageBox.value = "Hi! Let's talk about digital marketing and SEO.";
});