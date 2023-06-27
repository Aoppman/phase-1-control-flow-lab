/*let distance = 199


function scuberGreetingForFeet(distance){
  if (distance > 2500) {
    return 'No can do.'
  }
  else if (distance <= 400) {
    return 'This one is on me!'
  }
  else if (distance > 400 && distance < 2000) {
    return 'That will be twenty bucks.'
  }
  else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
  return result
}

let city = "NYC"


function ternaryCheckCity(city) {
  if (city === "NYC") {
    return 'Ok, sounds good.'
  } 
  else if (city !== "Mass"){
    return 'No go.'
  }

  
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return ("Thank you so much.");
    case "not as generous":
      return ("Thank you.");
    default: "if anything else";
    return ("Bye.");
  }
}*/


//let distance = 199

function scuberGreetingForFeet(distance){
  if (distance > 2500) {
    return 'No can do.';
  }
  else if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance > 400 && distance < 2000) {
    return 'That will be twenty bucks.'
  }
  else {
    return 'I will gladly take your thirty bucks.'
  }
  return result
};

function ternaryCheckCity(city) {
 return (city === 'NYC' ? ('Ok, sounds good.') : ('No go.'));
};


const switchOnCharmFromTip = (generosity) => {
  switch (generosity) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default: 
      return 'Bye.';
  };
};