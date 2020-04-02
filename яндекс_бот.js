// ==UserScript==
// @name         Бот яндекс 02
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
let YInput=document.getElementsByName('text')[0];
let btn=document.getElementsByClassName('button_theme_websearch')[0];
let sW = document.text = ['Гобой', 'Кларнет', 'Саксофон', 'Флейта','Валторна','Фагот'];
let i=getRandom(0, sW.length);
let links=document.links;

if (btn!=undefined){
  let timerId=setInterval(()=>{

     YInput.value=sW[i];
        i++;
        //if(i==sW.length){

          clearInterval(timerId);
          btn.click();
        //}
      },500);
  }
else if(location.hostname == "yandex.ru"){
    let flag = true;
    for (let i = 0; i<links.length; i++){
    if (links[i].href.indexOf('https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/')!=-1)
    {
        //links[i].removeAttribute("target");
        flag=false;
        links[i].click();
        break;
    }//
  }
    if(flag){
       setTimeout(()=>{
        if (document.querySelector('span[aria-label="Текущая Страница 11"]').innerText<11){
        document.querySelector('a[aria-label="Следующая страница"]').click();
        }
        else{
            location.href = "https://yandex.ru/";
        }
    },2000);
  }
}
else
{
   setInterval(()=>
   {
       if (getRandom(0,100)<30) location.href="https://yandex.ru/";
       let index=getRandom(0,links.length)
       links[index].click();},1000);
   }

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

