function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;

  if (distance >=1 && distance <=400) {
    return message = `This one is on me!`;
  }else if (distance >=401 && distance <=2000) {
    return message = `That will be twenty bucks.`;
  }else if (distance >2000 && distance <=2500) {
    return message = `I will gladly take your thirty bucks.`;
  }else {
    return message = `No can do.`;
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  const message = (city === `NYC`) ? "Ok, sounds good." : "No go.";
  return message;
  
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  switch (amount) {
    case `generous`:
      return `Thank you so much.`;
    case 'not as generous':
      return `Thank you.`;
    default:
      return `Bye.`;
  }
}