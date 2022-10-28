/*const add = function(number1, number2) {
    const sum = number1 + number2;
    if (sum > 10) {
        return sum;
    }
    
        return 'Too low';
}
const result = add(4, 5);
console.log(result);*/
const check = function(number) {
    if (number > 100) {
        return;
        return OK
    }
    else 
     return false;
};
const result = check(500);
console.log(result);

function word() {
    console.log('Decleration');
}
word();

const word1 = function() {
    console.log('Experation');
};
word1();

const word2 = () => {
    console.log('Arrow');
};
word2();

function nomers(a, b) {
    const nomers1 = a * a;
    const nomers2 = b * b;
    const sum = nomers1 * nomers2;
    return sum
}
const resulty = nomers(5, 4);
console.log(resulty);

const exp = function(a, b) {
    const exp1 = a * a;
    const exp2 = b * b;
    const sumExp = exp1 * exp2;
    return sumExp;
};
const resultExp = exp(5, 4);
console.log(resultExp);

const arrow1 = (a, b) => {
    const arrow2 = a * a;
    const arrow3 = b * b;
    const sumArro = arrow2 * arrow3;
    return sumArro;
};
const resultArr = arrow1();
console.log(resultArr);

const scram = function() {
    console.log('Aaaaaa');
};
scram();
const scram2 = function() {
    console.log('Oooooo');
    scram();
};
scram2();

const add = function(numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which is outside of a function.
const eight = add(3, 5);
console.log(eight);

const doCalculation = function() {
    // The add function returns to this line, which is inside of a function.
    const six = add(2, 4);
    console.log(six);
};

doCalculation();

const kiddo = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};
const kiddo2 = function(age) {
    if(kiddo(age)) {
        return 'Goood'
    } else {
        return 'Not good'
    };
};
console.log(kiddo2(20));
console.log(kiddo2(15));

let age = 4;
while (age < 10) {
    console.log('The age less than 10');
    age++;
}
console.log('The age over than 10');

for (i = 100; i < 200; i++) {
    console.log("OK");
}

const assignGrade = function(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "F";
    }
};

for (let i = 60; i <= 100; i++) {
    console.log("For " + i + " points, you'll get a(n) " + assignGrade(i));
}

const color = ['Yellow', 'blue', 'red', 'orange'];
let i = 0;
while (i < color.length) {
    console.log(color[i]);
    i++;
}
for (i = 0; i < color; i++) {
    console.log(color[i]);
}
color.forEach(i => console.log(i));