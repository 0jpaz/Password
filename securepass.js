//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true
  }
  else{
    return false;
  }

}






//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){

  for(let i = 0; i < password.length; i++){
if(password.CharCodeAt(i) >= String.fromCharCode(65) && (password.CharCodeAt(i) <= String.fromCharCode(90))){
  return true;
}
  else if(password.CharCodeAt(i) < String.fromCharCode(65) || (password.CharCodeAt(i) > String.fromCharCode(90){
    return false;
  }


}






//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){
for(let i = 0; i < password.length; i++){
  if(password.CharCodeAt(i) >= String.fromCharCode(97) && (password.CharCode(i) <= String.fromCharCodeAt(122))){
  }
    else if(password.CharCodeAt(i) < String.fromCharCode(97) || (password.CharCode(i) > String.CharCodeAt(122))){
      
    }
  }
}

}








//returns true or false if there is a numerical character
function numberCheck(password){


}







//returns true or false if there is a special character in the password
function specialCheck(check){

  if(password.CharCode(i) >= 33 && (password.CharCod(i) <= 47 )){
    return true;

    if(password.CharCode(i)

}










function passedAllChecks(){
return lengthCheck(password) && upperCaseCheck(password) && lowerCaseCheck(password)
}









//returns a string which represents the grade for your password
function grade(password){
if(password.length < 8){
  return "very bad";
}
if(lowerCaseCheck(password) && upperCaseCheck(password)){
  "return bad"; 
}
if (specialCheck(password)){
  return "good"
}
if passedAllChecks(password)){
  return "great";
}
if(passedAllChecks(password) && password.length >= 20){
  return "super!";
}