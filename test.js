
//checks to see if your code is correct.
function main(){
  let verybad = "asdf";
  let bad = "ASDFASDF";
  let stillbad = "adsfasdf";
  let okay = "AsDf1234";
  let good = "AsDf1234#<{"
  let great = "AsDf1234#<{QWERTYxcvmnbv";



}
function message(fn,i, name){
  let val = fn(i);
  if(val){
    console.log(`${i} passes the ${name} check`);
  }
  else{
    console.log(`${i} fails the ${name} check`);
  }
}
main();
