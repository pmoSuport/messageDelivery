let input=document.getElementById('txt');
const button=document.getElementById('btn');
let msg=document.getElementById('msg');
msg.style.color='white';
var a,i=0,j=0;
var b;
const messagePass=()=>{
    if(input.value===''){
        msg.innerHTML=`Enter the Text`;
        msg.style.backgroundColor="red";
        msg.style.color='white';
        if(i==1){
            clearTimeout(a);
        } else{
            clearTimeout(b);
        }
        j=1;
        b=setTimeout(()=>{
            msg.innerHTML="Last Message was not delievered"
        },2000);   
    }
    else{
        msg.style.backgroundColor="#243b55";
        msg.style.color='white';
        msg.innerHTML=input.value;
        input.value="";
        if(j==1){
            clearTimeout(b);
        } else if(i==1){
            clearTimeout(a);
            console.log("time was cleared");
        }
        i=1;
        a=setTimeout(()=>{
            msg.style.backgroundColor="#243b55";
            msg.style.color='white';
            msg.innerHTML="Last Message delievered"
            console.log("time was given initially");
        },2000);
    }
}

button.addEventListener('click',messagePass);