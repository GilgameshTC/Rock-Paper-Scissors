var userInput = prompt('Please choose between rock, paper and scissors.');
var computerInput = Math.floor(Math.random() * 3);

//determining computerInput
  if (computerInput <=1){
    return 'rock';
  }
  else if (computerImput >1 && computerInput <=2){
    return 'paper';
  }
  else {
    return 'scissors';
  }

console.log( 'Computer: ' + computerInput);

//different outcomes
function compare(choice1, choice2){
  if (choice1 === choice 2){
    return 'It is a tie!';
  }
  else if (choice1 === 'rock'){
    if (choice2 === 'paper'){
      return 'You lose!';
    }
    else {
      return 'You win!';
    }
  }
  else if (choice1 === 'paper'){
    if (choice2 === 'rock'){
      return 'You win!';
    }
    else {
      return 'You lose!';
    }
  }
  else if (choice1 === 'scissors'){
    if (choice2 === 'paper'){
      return 'You win!';
    }
    else {
      return 'You lose!';
    }
  }
  else {
    return prompt('Invalid move! Please enter rock, paper or scissors.');
};

console.log(compare(userInput, computerInput);
