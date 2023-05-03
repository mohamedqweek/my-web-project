let searchbtn=document.querySelector('#search-btn');
let searchform=document.querySelector('.search-form');
searchbtn.onclick = ()=>{
   searchform.classList.toggle('active');
   loginform.classList.remove('active');
   cartform.classList.remove('active');
}
let loginbtn=document.querySelector('#user-btn');
let loginform=document.querySelector('.login-form');
let x=document.querySelector('.fa-x');
loginbtn.onclick =()=>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    cartform.classList.remove('active');

}
x.onclick= ()=>{
    loginform.classList.remove('active');
}
let cartbtn=document.querySelector('#cart-btn');
let cartform=document.querySelector('.cart-form');
let xm=document.querySelector('.fa-xmark')
cartbtn.onclick= ()=>{
    cartform.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
}
xm.onclick= ()=>{
    cartform.classList.remove('active');
}





let rbtn=document.querySelector('.btn55');
let txt=document.querySelector('.text');

rbtn.onclick =  ()=> {
txt.classList.toggle('show-more');

if(rbtn.innerHTML==='read more'){
    rbtn.innerHTML='read less';
}
else{
    rbtn.innerHTML='read more';
}
}






//payment translate
let pound=document.querySelector('.egp');
let dollar=document.querySelector('.usa');
let uruo=document.querySelector('.euro');
let srr=document.querySelector('.sr');
let adee=document.querySelector('.ade');
let poundd=document.querySelector('.egpp');
let pounddd=document.querySelector('.egppp');
let poundddd=document.querySelector('.egpppp');

//doller
dollar.onkeyup= ()=>{
    pound.value=dollar.value*24.65;
}
pound.onkeyup= ()=>{
    dollar.value=pound.value/24.65;
}
///urou
uruo.onkeyup= ()=>{
    poundd.value=uruo.value*26.11;
}
poundd.onkeyup= ()=>{
    uruo.value=poundd.value/26.11;
}
//drihm
adee.onkeyup=()=>{
    pounddd.value=adee.value*6.71;
}
pounddd.onkeyup=()=>{
    adee.value=pounddd.value/6.71;
}
//sr
srr.onkeyup=()=>{
    poundddd.value=srr.value*6.56;
}
poundddd.onkeyup=()=>{
    srr.value=poundddd.value/6.56;
}

//spans
let abtn=document.querySelector('.btn56');
//
let ybtn=document.querySelector('.btn53');
//
let sbtn=document.querySelector('.btn52');
//
let mbtn=document.querySelector('.btn51');
//
let nbtn=document.querySelector('.btn50');
/////////////////////////////////////////
let atext=document.querySelector('.text1');
//
let ytext=document.querySelector('.text2');
//
let stext=document.querySelector('.text3');
//
let mtext=document.querySelector('.text4');
//
let ntext=document.querySelector('.text5');


abtn.onclick=()=>{
atext.classList.toggle('show-more');
if(abtn.innerHTML==='read more'){
    abtn.innerHTML='read less';
}
else{
    abtn.innerHTML='read more';
}
}
/////
ybtn.onclick=()=>{
    ytext.classList.toggle('show-more');
    if(ybtn.innerHTML==='read more')
    {
        ybtn.innerHTML='read less';
    }
    else{
        ybtn.innerHTML='read more';
    }
}
/////
sbtn.onclick=()=>{
    stext.classList.toggle('show-more');
    if(sbtn.innerHTML==='read more'){
        sbtn.innerHTML='read less';
    }
    else{
        sbtn.innerHTML='read more';
    }
}
/////
mbtn.onclick=()=>{
    mtext.classList.toggle('show-more');
    if(mbtn.innerHTML==='read more'){
        mbtn.innerHTML='read less';
    }
    else{
        mbtn.innerHTML='read more';
    }
}
//////
nbtn.onclick=()=>{
    ntext.classList.toggle('show-more');
    if(nbtn.innerHTML==='read more'){
        nbtn.innerHTML='read less';
    }
    else{
        nbtn.innerHTML='read more';
    }
}


//scroll-btn
let aysbtn=document.querySelector('#ays-btn');

window.onscroll=()=>{
    if(scrollY>650){
        aysbtn.style.display='block';
    }
    else{
        aysbtn.style.display='none';
    }
}
aysbtn.onclick=()=>{
    scroll({
        behavior:'smooth',
        top:0,
        left:0
    })
}
