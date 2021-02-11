// 42
// 2.14
// true
// "Hello, Friend"
// const a = [1,2,3,4];
// console.log(a);
// const b = {name: "tarush"};
// console.log(b);
// console.log(!true);
// console.log(typeof null);
// console.log(typeof [1,2,3]);
// console.log(typeof {age:3});
// var name = "tarush";
// console.log(name);
// var student = ["tarush","kamal","uday"];
// while(student.length > 0){
//     let s = student.shift();
//     console.log(`Hello ${s}`);
// }
// function tR(timeElapsed, endTime){
//     return endTime - timeElapsed;
// }
// var left = tR(42,190);
// console.log(left);
// function addFavoriteBook(bookName){
//     if(!bookName.includes("Great")){
//         favoriteBooks.push(bookName);
//     }
// }

// function printFavoriteBooks(){
//     console.log(`Favorite Books: ${favoriteBooks.length}`);
//     for(let bookName of favoriteBooks){
//         console.log(bookName);
//     }
// }

// var favoriteBooks = [];

// addFavoriteBook("A Song of Ice and Fire");
// addFavoriteBook("The Great Gatsby");
// addFavoriteBook("Crime & Punishment");
// addFavoriteBook("Great Expectations");
// addFavoriteBook("You Don't Know JS");

// printFavoriteBooks();

// // v = function(){}
// // console.log(typeof(v));
// // v = [1,2,3]
// // console.log(typeof(v));

// // var v;
// // console.log(typeof(v));

// // console.log(typeof(v));

// var greet = "Hello, class";
// var some = greet / 2;
// console.log(some);

// Number.isNaN(greet);

// var yesterday = new Date("November 20, 2020");
// console.log(yesterday.toUTCString());

// // var cgpa = String(transcript.gpa);

// var d = "Tarush Kaistha ";
// var r = "has successfully cleared his 4th sem with total cgpa of ";
// var n = 7.94;
// console.log(d + "" + r + "" + n + "");

// var number = 26;
// console.log(`There are ${number + ""} students. `);

// function addStudent(students){
//     return students + 1;
// }
// w2Elem = "Tarush";
// var w1 = 12;
// var w2 = w2Elem.value;

// if(Number(w1) < Number(w2)){
//     //
// }
// if(w1 < w2){
//     //
// }

// var t = null;
// var s = undefined;
// if(t==s){
//     console.log("hey")
// }

// var click = function(){};// anonymous function expression/....
// var key = function k(){};// name function expression.....

// var teacher = "Abhay Sood";
// ( function teach(){
//     var teacher = "Tarush Kaistha";
//     console.log(teacher);
// }) ();// IIFE-> Immediately Invoked Function Expression..
// console.log(teacher);

// var te = "Tarush Kaistha";
// {// explicit let scoping
//     let te = "Abhay Sood";
//     console.log(te);
// }
// console.log(te);
// // closure
// function ask(question){
//     setTimeout(function wait(){
//         console.log(question);
//     },100);
// }
// console.log(ask("What is question"));

// function ass(question){
//     return function wait(){
//         console.log(question);
//     }
// }
// var abc = ass("What  question");
// console.log(abc());

// var workshop = {
//     teacher: "Tarush", ask(question) {
//         console.log(this.teacher,question)
//     }//implicit binding
// }
// console.log(workshop.ask("What is JS"));// using function in object.

// function any(question){
//     console.log(this.teacher,question)
// }
// function task(){
//     var myContext = {
//         teacher:"Tushar"
//     };
//     var g = any.call(myContext,"Why?");
//     console.log(g);// using object in the function.
// }// explicit binding.
// task();

// function Workshop(teacher){
//     this.teacher = teacher;// function is a constructor
// }

// Workshop.prototype.ask = function(question){
//     console.log(this.teacher,question);
// }
// var deep = new Workshop("Mudita");
// console.log(deep.ask("Are you there"));// Referring the object using a prototype of that function.

// class Work{
//     constructor(teacher){
//         this.teacher = teacher;
//     }
//     ask(question){
//         console.log(this.teacher,question);
//     }
// }
// var w = new Work("Jane");// here using a class for referring object of the constructor through this keyword.
// console.log(w.ask("Why are you here"));

class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  // addFavoriteBook(bookName){
  //     this.bookName = bookName;
  //     this.favoriteBooks = [];
  //     var bookName = [];
  //     for(let bookName of favoriteBooks){
  //         favoriteBooks.push(bookName);
  //     }
  //     printFavoriteBooks();
  // }
  // printFavoriteBooks(){
  //     console.log(this.bookName, this.favoriteBooks);
  // }
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

function loadBooks(theBookShelf) {
  // TODO: call fakeAjax( .. );
  fakeAjax(BOOK_API, function onBooks(bookNames){
    for(let bookName of bookNames){
        theBookShelf.addFavoriteBook(bookName);// add
    }
    theBookShelf.printFavoriteBooks();// print
  });
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
