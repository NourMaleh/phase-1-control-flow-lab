function scuberGreetingForFeet(a){
  // Write your code here!
  if (a <= 400) {
    return 'This one is on me!';
  } 
  else if (a > 400 && a <= 2000 ) {
    return 'That will be twenty bucks.';
  }

  else if (a > 2000 && a <= 2500 ) {
    return 'I will gladly take your thirty bucks.';
  } 
  else if (a > 2500 ) {
    return 'No can do.';
  } 

}
scuberGreetingForFeet(199);


function ternaryCheckCity(city) {

if (city === "NYC") {
return "Ok, sounds good.";
}
else {
return "No go.";
}
}

  // Write your code here!

function switchOnCharmFromTip(tip){

  if ( tip === 'generous') {
    return 'Thank you so much.';
  } 
  else if (tip === 'not as generous') {
    return 'Thank you.';
  }

 else {
  return "Bye.";
}
}
  // Write your code here!
