let titleCount=1;
let totalPrice=0;


const cards=document.querySelectorAll('.card');
for(let index=0;index<cards.length;index++){
const card=cards[index];
card.addEventListener('click',function(){
    //get the title
    const title= card.querySelector('h3').innerText;
    const price=parseFloat(card.querySelector('span').innerText.split(' ')[1]);
    const textContainer=document.getElementById('title-container')
    const p=document.createElement('p')
    p.innerText=titleCount+ " " + title;
    textContainer.appendChild(p);
    titleCount++;
    ///calculate price
    totalPrice+= price;
         document.getElementById('totalPrice').innerText=totalPrice;
    
  
})
}
const btn=document.getElementById('apply-btn')
btn.addEventListener('click',function(){
    //get the value form input

    cuponElemet=document.getElementById('input-field').value;
    const cuponCode =cuponElemet.split(' ').join('').toUpperCase();
    
    if(totalPrice>=200){
       if(cuponCode==="SELL200"){
        //discount calculation
        const discountElement=document.getElementById('discountPrice');
        const discountAmount=totalPrice* 0.2;
        discountElement.innerText=discountAmount.toFixed(2);

        //total calculation
        const totalCalculation=document.getElementById('total') ;
        totalCalculation.innerText=(totalPrice-discountAmount).toFixed(2);
        document.getElementById('input-field').value='';
        
        
       }
       else{
        alert("invalid cupun code")
        document.getElementById('input-field').value=' ';
       }
    }
    else{
        

        alert("this cuppon is vaild at leat 200+ sopping");
        document.getElementById('input-field').value=' ';
    }
    
})







