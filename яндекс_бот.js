// ==UserScript==
// @name         Yndex botinok
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
 let Input=document.getElementsByName('text')[0];
 let btn=document.getElementsByClassName('button_theme_websearch')[0];

 let sW = document.text = ['Гобой', 'Кларнет', 'Саксофон', 'Флейта','Валторна','Фагот'];
 let searchWord = sW[getRandom(0, sW.length)];
 let i=0;
 let links=document.links;

if (btn!=undefined){
  let timerId=setInterval(()=>{

     Input.value+=searchWord[i];
        i++;
        if(i==searchWord.length){

          clearInterval(timerId);
          btn.click();
        }
      },500);
  }
else if(location.hostname == "yandex.ru"){
    let flag = true;
    for (let i = 0; i<links.length; i++){
    if (links[i].href.indexOf('https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/')!=-1)
    {
        links[i].removeAttribute("target");
        flag=false;
        links[i].click();
        break;
    }
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

       let index=getRandom(0,links.length)
       console.log (links[index]);
       if (links[index].hostname != 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai'){
       location.href="https://yandex.ru";;
     }
       links[index].click();},1000);
   }

    function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
