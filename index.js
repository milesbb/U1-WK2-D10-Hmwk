/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

console.log("\n==========Question A==========");

let test = "test";
console.log(test);

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

console.log("\n==========Question B==========");
let sum = 10+20;
console.log(sum.toString());

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

console.log("\n==========Question C==========");
let random = Math.floor(Math.random() * 21);
console.log(random.toString());

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

console.log("\n==========Question D==========");
let me = {
    name : "Miles",
    surname : "Bailey-Braendgaard",
    age : 22
}
console.log(me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

console.log("\n==========Question E==========");
delete me.age;
console.log(me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/
console.log("\n==========Question F==========");
me.skills = ["JavaScript", "Visual Basic", "some C#"];
console.log(me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

console.log("\n==========Question G==========");
me.skills.pop();
console.log(me);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

console.log("\n==========Question 1==========");
function dice () {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
}
console.log(dice().toString());

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

console.log("\n==========Question 2==========");
function whoIsBigger (num1, num2) {
    let result = Math.max(num1, num2);
    return result;
}
console.log(whoIsBigger(3, 20).toString());

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

console.log("\n==========Question 3==========");
function splitMe (string) {
    let result = string.split(" ");
    return result;
}
console.log(splitMe("I love coding"));

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

console.log("\n==========Question 4==========");
function deleteOne (string, boolean) {
    let result;
    if (boolean === true) {
        result = string.split("");
        result.shift();
        return result.join("");
    } else {
        result = string.split("");
        result.pop();
        return result.join("");
    }
}
console.log(deleteOne("hello", true));
console.log(deleteOne("hello", false));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

console.log("\n==========Question 5==========");
function onlyLetters (string) {
    let result = string.replace(/[0-9]/g, '');
    return result;
}
console.log(onlyLetters("I have 2 dogs, one called 31345doggy314341 and the other 123183158315dog"));

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

console.log("\n==========Question 6==========");
function isThisAnEmail (string) {
    let tester = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;  
    return tester.test(string);
}
console.log(isThisAnEmail("cat").toString());
console.log(isThisAnEmail("milesbb101@gmail.com").toString());

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

console.log("\n==========Question 7==========");
function whatDayIsIt() {
    let day = new Date();
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let result = week[day.getDay()];
    return result;
}
console.log(whatDayIsIt());

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

console.log("\n==========Question 8==========");
function rollTheDices (number) {
    let result = {
        sum : 0,
        values : Array()
    }
    let rand;
    for (let i = 0; i < number + 1; i++) {
        rand = dice();
        result.sum += rand;
        result.values[i] = rand;
    }
    return result;
}
console.log(rollTheDices(5));

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

console.log("\n==========Question 9==========");
function howManyDays (date) {
    let currentDate = new Date();
    let targetDate = new Date(date);
    let difference = Math.abs(currentDate.getTime() - targetDate.getTime());
    let daysDif = difference / (1000 * 60 * 60 * 24);
    return daysDif;
}
let testDate = "Sept 24, 20 13:20:18";
console.log(howManyDays(testDate).toString());

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/

console.log("\n==========Question 10==========");
function isTodayMyBirthday () {
    let currentDate = new Date();
    let day = currentDate.getDate;
    let month = currentDate.getMonth;
    if ((day === 22) && (month === 4)) {
        return true;
    } else {
        return false
    }
}
console.log(isTodayMyBirthday().toString());

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

console.log("\n==========Question 11==========");
function deleteProp (object, string) {
    delete object[string];
    return object;
}
let q11Test = {
    name : "John",
    catName : "tiddles"
}
console.log(deleteProp(q11Test, "catName"));


// MOVIES ARRAY FOR NEXT QUESTIONS:

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];

// END OF MOVIES ARRAY

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/

console.log("\n==========Question 12==========");
function oldestMovie () {
    let minYear = Math.min(...movies.map(d => d.Year));
    let minIndex = movies.find(obj => {
        return obj.Year === minYear.toString();
      })
    return minIndex;
}
console.log(oldestMovie());

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

console.log("\n==========Question 13==========");
function countMovies () {
    let movieCount = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Type === "movie") {
            movieCount++;
        }
    }
    return movieCount;
}
console.log(countMovies().toString());

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

console.log("\n==========Question 14==========");
function onlyTheTitles () {
    let movieTitles = new Array();
    for (let i = 0; i < movies.length; i++) {
        movieTitles[i] = movies[i].Title;
    }
    return movieTitles;
}
console.log(onlyTheTitles());

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

console.log("\n==========Question 15==========");
function onlyInThisMillennium () {
    let moviesInThisMillenium = new Array();
    let count = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Year.startsWith("20") === true) {
            moviesInThisMillenium[count] = movies[i]
            count++;
        }
    }
    return moviesInThisMillenium;
}
console.log(onlyInThisMillennium());

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

console.log("\n==========Question 16==========");
function getMovieById (id) {
    let targetMovie = movies.find(obj => {
        return obj.imdbID === id.toString();
      })
    return targetMovie;
}
console.log(getMovieById("tt4154756"))

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

console.log("\n==========Question 17==========");
function sumAllTheYears () {
    let sum = 0;
    for (let i = 0; i < movies.length; i++) {
        sum += parseInt(movies[i].Year);
    }
    return sum;
}
console.log(sumAllTheYears());

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

console.log("\n==========Question 18==========");
function searchByTitle (string) {
    let matchedMovies = new Array();
    let count = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Title.includes(string) === true) {
            matchedMovies[count] = movies[i] 
            count++;
        }
    }
    return matchedMovies;
}
console.log(searchByTitle("Avengers"));

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

console.log("\n==========Question 19==========");
function searchAndDivide (string) {
    let result = new Object();
    let matchedMovies = new Array();
    let notMatchedMovies = new Array();
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Title.includes(string) === true) {
            matchedMovies[count1] = movies[i] 
            count1++;
        } else {
            notMatchedMovies[count2] = movies[i] 
            count2++;
        }
    }
    result.match = matchedMovies;
    result.unmatch = notMatchedMovies;
    return result;
}
console.log(searchAndDivide("Avengers"));

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

console.log("\n==========Question 20==========");

function removeIndex (number) {
    movies.splice(number, 1);
    return movies;
}
console.log(removeIndex(0));

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

console.log("\n==========Question 21==========");
function halfTree (number) {
    let tree = new Array(number);
    let counter = 0;
    let branchLevel = "";
    for (let i = 0; i < tree.length; i++) {
        counter = i + 1;
        for (let v = 0; v < counter; v++) {
            branchLevel += "*";
        }
        console.log(branchLevel)
        branchLevel = "";
    }
}
halfTree(5);

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

console.log("\n==========Question 22==========");
function tree (number) {
    let newTree = new Array(number);
    let counter = 1;
    let branchLevel = "";
    let spaceCounter = number;
    for (let i = 0; i < newTree.length; i++) {
        for (let v = 0; v < counter; v++) {
            branchLevel += "*";
        }
        for (let v = 0; v < spaceCounter; v++) {
            branchLevel = " " + branchLevel;
        }
        console.log(branchLevel)
        branchLevel = "";
        counter += 2;
        spaceCounter -= 1
    }
}
tree(5);

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

console.log("\n==========Question 23==========");
function isItPrime (number) {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++)
        if(number % i === 0) {
            return false; 
        }
    return true;
}
console.log(isItPrime(11).toString());
console.log(isItPrime(4).toString());

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

