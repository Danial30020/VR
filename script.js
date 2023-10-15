let product = document.querySelector(".product_btn");
let isOpen = false;
product.onclick = () => {
  let burger = document.querySelector(".burgermenu");
  let img=document.querySelector(".product_btn img")
  if (isOpen == true) {
    burger.style.height = "0px";
    img.style.transform="rotate(0deg)"
    isOpen = false;
  } else {
    burger.style.height = "150px";
    isOpen = true;
    img.style.transform="rotate(180deg)"
  }
};
