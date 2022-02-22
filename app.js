// incries updateBalance
function updateIncrieNumber( prodact,price,incriesnum){
    const inputFild=document.getElementById(prodact+'-input');
     let inputTaxt=inputFild.value;
    if(incriesnum == true){
        inputTaxt=parseInt(inputTaxt)+1
    }
    else if(incriesnum == false&&inputTaxt>0){
        inputTaxt=parseInt(inputTaxt)-1
    }
    inputFild.value=inputTaxt;
   
    let upbalance=document.getElementById(prodact+'-date');
    upbalance.innerText=inputTaxt*price;
    // update col subtotale
    calcaltut();
    
    
};
function getinput(product){
    const phonetotale=document.getElementById(product+'-input');
    const phoneText=parseInt(phonetotale.value);
    return phoneText;
};

function calcaltut(){
    
    const phoneAmount=getinput('pluse')*1219;
    const phoneRice=getinput('phone')*59;
    const subtatole=phoneAmount+phoneRice;
    const tex=subtatole/10;
    const totalePrice=subtatole+tex;
//    update on the html
document.getElementById('sub-total').innerText=subtatole;
document.getElementById('tax-price').innerText=tex;
document.getElementById('total-amount').innerText=totalePrice;

}

document.getElementById('csse-plus').addEventListener('click',function(){
    
    updateIncrieNumber('pluse',1219, true);
        // update balance
});

document.getElementById('casse-minus').addEventListener('click',function(){
    
    updateIncrieNumber('pluse',1219,false);
          // update balance
});

// phone section2
document.getElementById('phone-puls').addEventListener('click',function(){
    updateIncrieNumber('phone',59,true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateIncrieNumber('phone',59,false);
})


