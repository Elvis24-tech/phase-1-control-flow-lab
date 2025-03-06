function scuberGreetingForFeet(distance) {
  switch (true) {
    case (distance <= 400):
      return "This one is on me!";
    case (distance <= 2000):
      return "That will be twenty bucks.";
    case (distance <= 2500):
      return "I will gladly take your thirty bucks.";
    default:
      return "No can do.";
  }
}

function ternaryCheckCity(city) {
  switch (city) {
    case "NYC":
      return "Ok, sounds good.";
    default:
      return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
