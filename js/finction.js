// function create for  input Value

function getValue(inputdepositevalue){

     const deposite = document.getElementById(inputdepositevalue);

     const res1 = parseFloat(deposite.innerText);
      

     return res1;
}

// function create for input field

function getInput(inputdeposite){

    const deposite1 = document.getElementById(inputdeposite);

    const r1 = parseFloat(deposite1.value);

    deposite1.value = '';

    return r1;
}


// function crete for balance innerText

function getbalanceInnerText(innertextBalance){


    const balance = document.getElementById(innertextBalance);

    const balance2 = parseFloat(balance.innerText);

    return balance2;

}

// function carete check innerText

function getTextElemntId(elementId,newValue){

     const tetxElement = document.getElementById(elementId);

     return tetxElement.innerText = newValue;
}


// btn create for deposite

document.getElementById('btn_deposite').addEventListener('click',function(){

     
     const deposite_input = getInput('deposite');

     const deposite_value = getValue('deposite_value');

     const result1 = deposite_value + deposite_input;

     getTextElemntId('deposite_value',result1);

     const balancecheker = getbalanceInnerText('grand-total');

     const result2 = balancecheker + deposite_input;

     getTextElemntId('grand-total',result2);

});


// btn create for withdraw

document.getElementById('btn_withdraw').addEventListener('click',function(){

     
    const withdraw_input = getInput('Withdraw_input');

    const withdraw_value = getValue('withdraw');

    const result3 = withdraw_input + withdraw_value;

    getTextElemntId('withdraw',result3);

    const balancecheker = getbalanceInnerText('grand-total');

    const result4 = balancecheker - withdraw_input;

    getTextElemntId('grand-total',result4);

});