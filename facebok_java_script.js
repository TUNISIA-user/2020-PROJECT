const btnLike = document.querySelector('#thumb_up')
const likeInner = document.querySelector("#btnLike1")
const textItem =document.getElementById('touchHere')
const changeCOLONE = document.getElementById('changeCOLONE')
 
s= 0
 
 
btnLike.addEventListener("click",()=>{
    let s = parseInt(localStorage.getItem("like")) || 0; 
    s = s + 1;
   
 
  const dat =   likeInner.innerHTML = s
 
  
  const dat2 =  changeCOLONE.innerHTML = "thumb_up"
  localStorage.setItem("like",JSON.stringify(dat,dat2))
 

 
})
 
    
window.addEventListener("load",()=>{
 
 const dat2 =  changeCOLONE.innerHTML = "thumb_up"  
 likeInner.innerHTML = localStorage.getItem("like")
 if(localStorage.getItem("like")>100){
    likeInner.innerHTML = `${ localStorage.getItem("like")} k`

 }

})
let s2 = 0
const favorite =document.getElementById('favorite')

favorite.addEventListener("mouseup",()=>{

    let s2 = parseInt(localStorage.getItem("nike")) || 0; 
    s2 = s2 + 1;
   
    
   
  const datF =   document.getElementById('selecTid').innerHTML = s2
  localStorage.setItem("nike",JSON.stringify(datF))
  document.getElementById('changeCOLONE').innerHTML ="favorite"
   
})

window.addEventListener("load",()=>{
 
    likeInner.innerHTML = localStorage.getItem("nike")
    document.getElementById('selecTid').innerHTML = localStorage.getItem("nike")
    if(localStorage.getItem("nike")>220){
       document.getElementById("selecTid").innerHTML = `${ localStorage.getItem("nike")} k`
   
    }
   
   }
   
   
   )

   function show(){
    alert('hello mzeeei')
   }
 
  // setTimeout(()=>{
  //   show()
  // },1000)

 let increamnt  = 0
 
 const div = document.getElementById('hello')
 
 div.addEventListener("click",()=>{
 increamnt +=1
const ducth =  document.getElementById('btnLike2').innerHTML = increamnt
 document.getElementById('innelike').innerHTML = "thumb_up"
 localStorage.setItem("hello",JSON.stringify(ducth))
 })

 const  item_favorite = document.getElementById('item_favorite')
 const coeur = document.getElementById('coeur')
 item_favorite.addEventListener("click",()=>{
  increamnt= increamnt+1
const data =   coeur.innerHTML = increamnt
document.getElementById('innelike').innerHTML = "thumb_up"
  localStorage.setItem("coeur",JSON.stringify(data))
 
 })


 const NotHome1 = document.getElementById('NotHome1')
 
s = 0
 setInterval(()=>{
   s+=1
   document.getElementById('NotHome1').innerHTML =s
 s
 },7000)


 ss = 0
 setInterval(()=>{
   ss+=1
  
   document.getElementById('NotHome2').innerHTML =ss
   
 },3000)


 sss = 0
 setInterval(()=>{
   sss+=1
 
   document.getElementById('NotHome3').innerHTML =sss
 },5000)
 ssss = 0
 setInterval(()=>{
  ssss+=1
 
   document.getElementById('NotHome4').innerHTML =ssss
 },6000)
 sssss = 0
 setInterval(()=>{
  sssss+=1
 
   document.getElementById('NotHome4').innerHTML =sssss
 },1000)

 ssssss = 0
 setInterval(()=>{
  ssssss+=1
 
   document.getElementById('NotHome5').innerHTML =ssssss
 },9000)

const user_ghiht = [];
 const dataCard_js = document.getElementById('card_item');
 const api = "data.json";
 






 
//  async function getApi() {
//    try {
//      const response = await fetch(api);
//      const data = await response.json();
//   const user_ghiht =  data.map((item)=>{
//     const root = dataCard_js.cloneNode(true)  ;
//     const headr = document.querySelector("[data-headr-img]")
//     const  p_headr= document.querySelector("[p-headr]")
//     console.log(root);

//     p_headr.innerHTML =item.text
//     headr.src =item.link_img
 
//    })
    












//    } catch (error) {
//      console.error(error);
//    }
//  }
 
//  getApi();
 
 
 
 
   
 
const elmenADd = document.getElementById('all_item')
const  ghiht = elmenADd.querySelector('#containeridfikle')
 
const apI ="data.json"

async function getApi() {
const response  = await fetch(apI)
const data = await response.json()
 
 
let sc =0

for( i  =0;i<data.length;i++){
  const elemnt = `


  <div class="card" id="card_item">
          
          
  <img src=${  data[i].link_img }
  
  alt="" id="inner" data-headr-img>
  <br>
  <p id="put_this1" p-headr>${data[i].text}</p>
  
  
  
  </div>
  
  `
  
document.getElementById('containeridfikle').innerHTML += elemnt

}
 

}
getApi()

let sc = 0;

// opacity: 0;transition: opacity 0.5s;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const imgElements = document.querySelectorAll('#put_this1');

    setInterval(() => {
      sc = sc + 1;

      imgElements.forEach((img, index) => {
        img.classList.remove('loaded');
        setTimeout(() => {
          img.innerHTML = data[(sc + index) % data.length].text;
          img.onload = () => img.classList.add('loaded');
        }, index * 800);
      });
    }, 3000);
  })
  .catch(error => console.error(error));

  

 




fetch('data.json')
  .then(response => response.json())
  .then(data => {
 
    const imgElements = document.querySelectorAll('#card_item img');

    setInterval(() => {
      sc = sc + 1;

      imgElements.forEach((img, index) => {
        img.classList.remove('loaded');
        setTimeout(() => {
          img.src = data[(sc + index) % data.length].link_img;
          img.onload = () => img.classList.add('loaded');
        }, index * 800);
      });
    }, 3000);
  })
  .catch(error => console.error(error));

 

  let test = false;
  
  const menu = document.getElementById('menu');
  const menCu = document.getElementById('menCu')
  const data = document.getElementById('containerfacebook')
 
  
  const containerfacbokk = document.getElementById('containerfacebook')
  menu.addEventListener("click",()=>{
    data.style.display="block"

    

  })
  menCu.addEventListener("click",()=>{
    data.style.display="none"

  })

 
 


 


 

 




 

  
// window.addEventListener("load",()=>{
//   searchfi.style.display = "none"; // do this now ================================================== block  => NONE
// })
// do offline function 


const inputdata = document.getElementById('inputdata');
const inner = document.getElementById('itemineer');

inputdata.addEventListener("input", (e) => {
 if(e.target.value==""){
  document.getElementById('comntainer').style.display="none"
 
 }else{
  document.getElementById('comntainer').style.display="block"
 
 }

  const file = e.target.value;
  let formattedText = '';
  
  if (file.length >30) {
    let chunks = file.match(/.{1,29}/g);
    formattedText = chunks.join("<br>");
  } else {
    formattedText = file;
  }
  
  inner.innerHTML = formattedText;
 

});


// if (text.length > 33) {
//   var regex = new RegExp(`(.{1,33})(?:\\s|$)`, 'g');
//   text = text.replace(regex, '$1<br>');
// }
// return text;
// }


// ADD 3 point for here from type coment justify content center justifer 
// ditretion colmun item center
const  imgINdoom = document.getElementById('dommadd')
const container = document.getElementById('imgFIle')

const fileApi = "data.json"
async function get(){
  const response  = await fetch(fileApi)
  const dat1 = await response.json()
 
  myFunction(dat1)

}
get()
let array = [];
function myFunction(e){
  for(i  =0;i<e.length;i++){
   array[i] = e[i].link_img
  }
 
   let s = 0
  setInterval(()=>{
    s= s+1
    imgINdoom.src = array[s]
    if(s>array.length-2){
      s = 1
    }
  },2000)
}
 

 