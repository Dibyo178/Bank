// srep:1 add event clcik 

document.getElementById('btn_submit').addEventListener('click',function(){

    //  step:2 get the email address and password value

     const get_email = document.getElementById('email');

     const email = get_email.value;

     const get_pass = document.getElementById('pass');

     const pass = get_pass.value;

     if(email === 'admin@gmail.com' && pass === '12345'){

          alert('valid user');

          window.location.href="../mainpage.html";
        
     }

     else{

         alert('not valid user');
     }
    




});



