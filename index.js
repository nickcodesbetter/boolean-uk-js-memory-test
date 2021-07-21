// Instructions
// - Show the user 4 random numbers between 1 and 100 using an alert
// - Ask them to enter the numbers in the right order using a prompt
//     - Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result


// - Show the user 4 random numbers between 1 and 100 using an alert

// setTimeout(function randomNumberGenerator () {
//     console.log()
//    }, 15000)


function randomNumberGenerator() {
    let randomNumbers = [];

    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      console.log("Random Numbers: ", randomNumber);
      randomNumbers.push(randomNumber)
    }    
    console.log("Random Number: ", randomNumbers);
    return randomNumbers
}

const anyNumber = randomNumberGenerator()

alert()

// String creator loop


