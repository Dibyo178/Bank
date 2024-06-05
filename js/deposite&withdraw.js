// deposite

// step:1 add btn click
 


document.getElementById('btn_deposite').addEventListener('click',function(){

    const depositeinputfield = document.getElementById('deposite');

    const depositevalue = depositeinputfield.value;

    const res1= parseFloat(depositevalue);

    const deposutefield = document.getElementById('deposite_value');

      

     const res2 = parseFloat(deposutefield.innerText);

     const output = res1+res2;

     deposutefield.innerText = output;

  


     // add balance with deposite

    const grand_total = document.getElementById('grand-total');

    const grand = parseFloat(grand_total.innerText);

    const result1 =  grand+res1;
    
    grand_total.innerText = result1;

      //  clear the deposite value

      depositeinputfield.value = '';

     

});



// withdraw balance 

document.getElementById('btn_withdraw').addEventListener('click',function(){





const withdraw = document.getElementById('withdraw');

const withdraw_innerText_value =  parseFloat(withdraw.innerText);

const btn_withdraw =  document.getElementById('Withdraw_input');

const btn_withdraw_value = parseFloat(btn_withdraw.value);



const output1 = btn_withdraw_value + withdraw_innerText_value ;

withdraw.innerText = output1;


// withdraw balance from balance 

const balance2 = document.getElementById('grand-total');

const grand2 = parseFloat(balance2.innerText);

const output2 = grand2 - btn_withdraw_value;


balance2.innerText = output2;

// clear the withdraw input value 
btn_withdraw.value = '';



});








