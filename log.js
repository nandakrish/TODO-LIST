







var button = document.getElementById('mainButton');

var openForm = function() {
	button.className = 'active';
};





let input = document.getElementById("username");
let display1 = document.getElementById("error1");
let pass = document.getElementById("password");
let display2 = document.getElementById("error2");

var admin =["admin"];

function validate(callback){

if(input.value == "admin"){

  if(pass.value == 12345)
  {
        callback();
        display2.innerHTML ="password is valid";
        display2.style.color ="green";
        
  }   
  else
  {
    display2.innerHTML ="password is invalid";
    display2.style.color = "red";
    display1.innerHTML ="username is valid";
    display1.style.color = "green";
     return false;
  }
  
                          }
else{
  display1.innerHTML ="username is invalid";
    display1.style.color = "red";
  return false;
    }
                            }

                          
function redirect()
{
 $("#form").attr("action","logindex.html");

}





