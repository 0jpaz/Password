//returns a string of random number characters glued together with the proper length.
function randomPinn(len){

  let pass = "";


  for(/*here*/){

    let randomNumber = Math.floor(10*Math.random())+48;
    pass += String.fromCharCode(randomNumber);
  }

  return pass;
}





//returns a string of random upper and lower case characters of the proper length
function randomWord(len){
  let pass = "";

  for(let i = 0; i < len; i++){
    let roll = Math.random();

    if(roll < 0.50){
        let randomNumber = Math.floor(25*Math.random())+65;
        pass += String.fromCharCode(randomNumber);
    }
    else randomNumber = Math.floor(25*Math.random())+97;
    pass += String.fromCharCode(randomNumber);
    
    return pass;
  }

}





//returns a string of random letters and numbers of the proper length
function randomPass(len){

let pass = "";

for (let i = 0; i < len.length; i++){

  let

  let randomNumber = Math.floor(10*Math.random())+40;
  pass += String.fromCharCode(randomNumber);
}
}








//returns a string of pretty much any ASCII characters, letters, numbers, and specials
function randomSpecialPass(len){
  
  let pass =""

  for(let i = 0; i < len; i++){

    let randomNumber = Math.floor(93*Math.random())+33;
    pass += String.fromCharCode(randomNumber)
  }

}






//same as the code above, just pass in a length of 20.
function randomSuperPass(){


}
