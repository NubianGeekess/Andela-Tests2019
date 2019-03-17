// An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.



//Jquery disable field if input is less than 3 digit, else enable.

$(document).ready(function (){
    validate();
    $('#input').change(validate);
});

function validate(){
    if ($('#input').val().length >= 3 )
     {
        $("#button").prop("disabled", false);
    }
    else {
        $("#button").prop("disabled", true);
    }
}


function armstrong(){
    var arm=0,a,b,c,d,num;
    num=Number(document.getElementById("input").value);
    temp=num;
    while(temp>0){
    a=temp%10;
    temp=parseInt(temp/10); // convert float into Integer
    arm+=a*a*a;
    }
  
    if(arm==num){
     document.getElementById("answer").innerHTML += "Armstrong number <br/>"; 
    }
    else
    {
     document.getElementById("answer").innerHTML += "Not an Armstrong number<br/>"; 
    }
    }  


