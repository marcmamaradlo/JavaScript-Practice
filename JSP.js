
//*************************************************************//
//                        JS Practice 1                        //
//*************************************************************//
const output = document.querySelector('#result')
const formAction = document.querySelector('#jsPractice');
const userInput = jsPractice.elements.userInput;
const letterToCheck = jsPractice.elements.letterToCheck;

userInput.addEventListener('click', function () {
    userInput.value = '';
    output.value = '';
})
letterToCheck.addEventListener('click', function () {
    letterToCheck.value = '';
})
formAction.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = jsPractice.elements.userInput;
    const letterToCheck = jsPractice.elements.letterToCheck;
    checker(userInput.value, letterToCheck.value);
    userInput.value = '';
    letterToCheck.value = '';
})
const checker = (userInput, letterToCheck) => {
    let answer = 0;
    for (let i = 0; i < userInput.length; i++) {
        if (userInput.charAt(i) == letterToCheck) {
            answer++;
            output.value = answer;
            //console.log(answer);
        }
        else if (answer == 0) {
            output.value = 'Non Found!'
            //console.log('Non Found!')
        }
    }
}
//*************************************************************//



//*************************************************************//
//                        JS Practice 2                        //
//*************************************************************//
const output2 = document.querySelector('#outputBox')
const formAction2 = document.querySelector('#jsPractice2')
formAction2.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstNumber = jsPractice2.elements.firstNumber;
    const secondNumber = jsPractice2.elements.secondNumber;
    square(firstNumber.value, secondNumber.value);
    firstNumber.value = '';
    secondNumber.value = '';

})
const square = (firstNumber, secondNumber) => {
    outputBox.innerHTML = '';
    const array1 = [];
    for (let i = 0; i < firstNumber; i++) {
        array1.push('#');
    }
    for (let j = 0; j < secondNumber; j++) {
        const p = document.createElement('p');
        p.innerHTML = array1.join(' ');
        output2.append(p);
        //console.log(p)
    }
}
//*************************************************************//


//*************************************************************//
//                        JS Practice 3                        //
//*************************************************************//
const sumOne = jsPractice3.elements.sumOne;
const sumTwo = jsPractice3.elements.sumTwo;
const sumThree = jsPractice3.elements.sumThree;
const sumFour = jsPractice3.elements.sumFour;
const sumFive = jsPractice3.elements.sumFive;
const sumSix = jsPractice3.elements.sumSix;
const formAction3 = document.querySelector('#jsPractice3')
const output3 = jsPractice3.elements.sumOutput;

sumOne.addEventListener('click', function () {
    sumOne.value = '';
})
sumTwo.addEventListener('click', function () {
    sumTwo.value = '';
})
sumThree.addEventListener('click', function () {
    sumThree.value = '';
})
sumFour.addEventListener('click', function () {
    sumFour.value = '';
})
sumFive.addEventListener('click', function () {
    sumFive.value = '';
})
sumSix.addEventListener('click', function () {
    sumSix.value = '';
})

formAction3.addEventListener('submit', function (e) {
    e.preventDefault();
    addFiveSum(parseInt(sumOne.value), parseInt(sumTwo.value), parseInt(sumThree.value), parseInt(sumFour.value), parseInt(sumFive.value), parseInt(sumSix.value));

})

const addFiveSum = (a, b, c, d, e, f) => {
    const answer3 = a + b + c + d + e + f;
    console.log(answer3);
    output3.value = answer3;
}
//*************************************************************//



//*************************************************************//
//                        JS Practice 4                        //
//*************************************************************//
const factorialLabel = document.querySelector('#factorialLabel');
const output4 = document.querySelector('#factorialSpan')
const checkFactorial = jsPractice4.elements.checkFactorial;
const formAction4 = document.querySelector('#jsPractice4');

checkFactorial.addEventListener('click', function () {
    checkFactorial.value = '';
    output4.value = '';
})

formAction4.addEventListener('submit', function (e) {
    e.preventDefault();
    factChecker(checkFactorial.value)
})
const factChecker = (checkFactorial) => {
    let result = 1;
    for (let i = 1; i <= checkFactorial; i++) {
        result *= i;
        console.log(result);
    }
    output4.value = result;
}
//*************************************************************//



//*************************************************************//
//                        JS Practice 5  - 6                   //
//*************************************************************//
const loginComplete = document.querySelector('#loginComplete');
const divComplete = document.querySelector('#regComplete');
const registerNow = jsPractice5.elements.registerNow;
const loginNow = jsPractice5.elements.loginNow;
const usernameRegInput = document.querySelector('#usernameRegInput');
const passwordRegInput = document.querySelector('#passwordRegInput');
const usernameLogInput = document.querySelector('#usernameLogInput');
const passwordLogInput = document.querySelector('#passwordLogInput');
const registrationForm = document.querySelector('#registrationForm');
const loginForm = document.querySelector('#loginForm');
const registerButton = document.querySelector('#registerButton');
const loginButton = document.querySelector('#loginButton');
const newP = document.createElement('p');
let loginUserDetails = [];
let loginPassDetails = [];

registrationForm.style.display = 'none';
loginForm.style.display = 'none';

registerButton.addEventListener('click', function (e) {
    usernameRegInput.value = '';
    passwordRegInput.value = '';
    if (registrationForm.style.display === 'block') {
        registrationForm.style.display = 'none';
    }
    else {
        registrationForm.style.display = 'block';
    }
});
loginButton.addEventListener('click', function (e) {
    usernameLogInput.value = '';
    passwordLogInput.value = '';
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
    }
    else {
        loginForm.style.display = 'block';
    }
});
registerNow.addEventListener('click', function (e) {
    e.preventDefault();
    // usernameRegInput.value = '';
    // passwordRegInput.value = '';
    newP.innerText = '';
    loginUserDetails.push(usernameRegInput.value);
    loginPassDetails.push(passwordRegInput.value);
    newP.innerText = 'Registration Complete!';
    newP.style.color = 'green';
    divComplete.append(newP);
});
loginNow.addEventListener('click', function (e) {
    e.preventDefault();
    // usernameLogInput.value = '';
    // passwordLogInput.value = '';
    newP.innerHTML = '';
    const passwordIndex = loginUserDetails.indexOf(usernameLogInput.value)
    if (passwordIndex >= 0 && loginPassDetails[passwordIndex] == passwordLogInput.value) {
        newP.innerHTML = `Welcome back, ${usernameLogInput.value}`;
        newP.style.color = 'green';
        console.log('login!')
        loginComplete.append(newP);
    } else {
        console.log('incorrect');
        newP.innerHTML = 'Invalid username or password.';
        newP.style.color = 'red';
        loginComplete.append(newP);
    }
});
//*************************************************************//
//                        JS Practice 7                        //
//*************************************************************//
const newP7 = document.createElement('p');
const output7 = document.querySelector('#output7');
const palindrome = jsPractice7.elements.palindrome;
const palindromeButton = document.querySelector('#palindromeButton');
const formAction7 = document.querySelector('#jsPractice7');

palindrome.addEventListener('click', function () {
    palindrome.value = '';
    output7.innerHTML = '';
});
formAction7.addEventListener('submit', function (e) {
    e.preventDefault();
    checkPalindrome(palindrome.value);
});
const checkPalindrome = (str) => {
    const reverse = str.split('').reverse().join('');
    if (reverse === palindrome.value) {
        newP7.innerHTML = 'Palindrome';
        newP7.style.color = 'green';
        output7.append(newP7);
    }
    else {
        newP7.innerHTML = 'Not a Palindrome';
        newP7.style.color = 'red';
        output7.append(newP7);
    }
};



//*************************************************************//
//                        JS Practice 8                        //
//*************************************************************//
const twoWords = document.querySelector('#twoWords');
const twoWordsButton = document.querySelector('#twoWordsButton');
const formAction8 = document.querySelector('#jsPractice8');
const output8 = document.querySelector('#output8');
const newP8 = document.createElement('p');

twoWords.addEventListener('click', function () {
    twoWords.value = '';
    newP8.innerHTML = '';
});

formAction8.addEventListener('submit', function (e) {
    e.preventDefault();
    const newWord = twoWords.value;
    const split = newWord.split(' '); //.split('//space//');
    const firstWord = split[0];
    const secondWord = split[1];
    const firstSlice = firstWord.charAt(0).toUpperCase().slice(0);
    const secondSlice = secondWord.charAt(0).toUpperCase().slice(0);
    console.log(firstSlice);
    console.log(secondSlice);
    newP8.innerHTML = `Output is ${firstSlice}.${secondSlice}`
    output8.append(newP8);
});



//*************************************************************//
//                        JS Practice 9                        //
//*************************************************************//
const formAction9 = document.querySelector('#jsPractice9');
const summationInput = document.querySelector('#summationInput');
const summationButton = document.querySelector('#summationButton');
const output9 = document.querySelector('#output9');
const newP9 = document.createElement('p');
const array9 = [];

summationInput.addEventListener('click', function () {
    summationInput.value = '';
    newP9.innerHTML = '';
})

formAction9.addEventListener('submit', function (e) {
    e.preventDefault();
    const number = parseInt(summationInput.value);
    for (let i = 1; i <= number; i++) {
        array9.push(i);
        console.log(array9);
    }
    let sum = 0;
    for (let j = 0; j < array9.length; j++) {
        sum += array9[j]
        console.log(sum);
    }
    array9.length = 0;
    newP9.innerHTML = sum;
    output9.append(newP9);
})
//*************************************************************//



//*************************************************************//
//                        JS Practice 10                       //
//*************************************************************//
const firstWord = document.querySelector('#firstWord');
const secondWord = document.querySelector('#secondWord');
const thirdWord = document.querySelector('#thirdWord');
const fourthWord = document.querySelector('#fourthWord');
const fifthWord = document.querySelector('#fifthWord');
const sixthWord = document.querySelector('#sixthWord');
const formAction10 = document.querySelector('#jsPractice10');
const smashOutput = document.querySelector('#smashOutput');
const smashButton = document.querySelector('#smashButton');
const smashArray = [];
const allInput = document.getElementsByName('smashTarget');

firstWord.addEventListener('click', function () {
    firstWord.value = '';
});
secondWord.addEventListener('click', function () {
    secondWord.value = '';
});
thirdWord.addEventListener('click', function () {
    thirdWord.value = '';
});
fourthWord.addEventListener('click', function () {
    fourthWord.value = '';
});
fifthWord.addEventListener('click', function () {
    fifthWord.value = '';
});
sixthWord.addEventListener('click', function () {
    sixthWord.value = '';
});

formAction10.addEventListener('submit', function (e) {
    e.preventDefault();
    wordSmash(firstWord.value, secondWord.value, thirdWord.value, fourthWord.value, fifthWord.value, sixthWord.value)

})

const wordSmash = (a, b, c, d, e, f) => {
    smashArray.push(a);
    smashArray.push(b);
    smashArray.push(c);
    smashArray.push(d);
    smashArray.push(e);
    smashArray.push(f);
    const newArray = smashArray.join(' ');
    smashOutput.value = `"${newArray}"`
}
//*************************************************************//
