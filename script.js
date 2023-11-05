let product = document.querySelector(".product_btn");
let isOpen = false;
product.onclick = () => {
  let burger = document.querySelector(".burgermenu");
  let img = document.querySelector(".product_btn img");
  if (isOpen == true) {
    burger.style.height = "0px";
    img.style.transform = "rotate(0deg)";
    isOpen = false;
  } else {
    burger.style.height = "150px";
    isOpen = true;
    img.style.transform = "rotate(180deg)";
  }
};
function change_item(key) {
  let img = document.querySelector(".opport_img");
  img.style.backgroundImage = `url("./assets/opport${key}.png")`;
  text1 =
    "Используйте шлем для своих тренировок. Миллионы разных сценариев, для комплексоной поддержки и развития тела";
  text2 =
    "Сотни игр и развлечений для любых возрастов. Встроенный магазин с доступом напрямую из шлема";
  text3 =
    "Создай рабочее пространство мечты. Работай на орбите марса или на вершине Альп. Виртуальные офисы, боты и  множество других программ для организации работы в VR";
  text4 =
    "Обучайся и изучай с VR. Возможность строить изучать механизмы и проводить опыты без вреда для жизни и с виртуальными помощниками";
let opport_img_text=document.querySelector(".opport_img_text")
if (key==1){
  opport_img_text.innerHTML=text1
}
else if(key==2){
  opport_img_text.innerHTML=text2
}
else if(key==3){
  opport_img_text.innerHTML=text3
}
else if(key==4){
  opport_img_text.innerHTML=text4
}
  }
