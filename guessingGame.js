/* Guessing Game
	Sources: 	https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
				https://stackoverflow.com/questions/8082846/form-submit-execute-javascript-best-practice
*/

var correctNumber = Math.floor((Math.random()*100)); // Picks a random number.
var triesCount = 0; // Counter to keep track of the number of guesses
var numberOfHashes = correctNumber.toString().length; // Length of number is number of ##s to use.
var hashes = '';
for (i = 0; i < numberOfHashes; i++) { 
    hashes += '#';
}
// Represent the random number using the correct number of ###s.
document.getElementById('numberToGuess').innerHTML = 'Correct Number: ' + hashes;

function evaluateGuess() {
	var guess = document.getElementById('guess').value; // Pull the value from the input field.
	triesCount++;

	if (guess < correctNumber) {
		document.getElementById('results').innerHTML += 'Your guess of ' + guess + ' is too low.<br/>';
	} else
	if (guess > correctNumber) {
		document.getElementById('results').innerHTML += 'Your guess of ' + guess + ' is too high.<br/>';
	} else
	if (guess == correctNumber) {
		// User has guessed the correct number!
		document.getElementById('results').innerHTML += 'CONGRATULATIONS!! You guessed ' + guess + ' in ' + triesCount + ' tries!<br/>';
		// Update the header to reflect the previously hidden number.
		document.getElementById('numberToGuess').innerHTML = 'Correct Number: ' + correctNumber;
	} else {
		// If this happens then there's an error.
		document.getElementById('results').innerHTML += 'Oops... That\'s not good!';
	}

	return false; // Part of preventing form submission from reloading page.
}