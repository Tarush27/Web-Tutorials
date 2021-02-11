// const rent = 500;
// const yrRent = rent * 12;
// console.log(yrRent);

// const name = `Tarush Kaistha`;
// console.log(name);

// const firstName = `Tushar`;
// const lastName = `Kaistha`;

// const result = `Hello ${firstName} ${lastName} ! How are you !`;    
// console.log(result);

// const isOn = true;
// console.log(isOn);

// const isBlue = true;
// if(isBlue){
//     console.log("sky blue");
// }
// else{
//     console.log("sky not blue");
// }

// const temp = 86;
// if(temp == 86){
//     console.log("damn hot");
// }
// else if (temp == 60){
//     console.log("little fine");
// }
// else{
//     console.log("cool");
// }

// if(2 + 2 == 4){
//     console.log("proved")
// }
// else{
//     console.log("not answered")
// }

// let fap = 6;
// while(fap < 10){
//     fap++;
// }
// console.log(fap)

// let fa=1;
// for(let i=0;i<10;i++){
//     fa = fa + 1;
// }
// console.log(fa);

// let a='';
// const character = "b";
// const repeat = 40;
// for(let i=0;i<repeat;i++){
//     a += character;
// } 
// console.log(a.length);

// function addTwo(number) {
//     return number + 2;
// }
// console.log(addTwo(5));

// function greet(firstName,lastName){
//     return `${firstName} ${lastName}! How are you...!`
// }
// console.log(greet("Tarush","Kaistha",20));

// // local scope 
// function difference(n){
//     var a = "Tarush Kaistha";
//     console.log(a);
//     if(true){
//         console.log(a);
//         var thing = 10;
//         console.log(thing);
//     }
//     return n + 2;
// }
// console.log(difference(5));

// // global scope
// let str = "Tarush Kaistha";
// function hello(number){
//    str = "Tarush";
//     return number;
// }
// console.log(str);
// console.log(str);
// console.log(hello(10));
// console.log(str);


// const A = "A";
// let F;

// function doStuff(B) {
//   console.log(B);
//   const C = "C";
//   let H = "H";
//   if (1 + 1 === 2) {
//     const D = "D";
//     H = "something else";
//   }
//   console.log(D);
//   console.log(H);
//   F = "F";
// }

// let E = 0;
// while (E < 3) {
//   E++;
//   console.log(A); scope exercise
//   const G = "G";
// }
// console.log(E);
// console.log(G);

// doStuff("B");
// console.log(B);
// console.log(C);
// console.log(F);

// const sentence = "hello iam tarush kaistha";
// console.log(sentence.toUpperCase());
// console.log(sentence.substr(3,6));

// console.log(Math.round(5.1));

// const info = {name : "Tarush", rollNo : 2068, Stream: "CSE", Role : "Programmer & developer", address: {
//   place : "kangra",city : "dharamshala",cit : "dharamshala"}};
// console.log(info);
// console.log(info["rollNo"]);
// console.log(info.Stream);
// console.log(info["name"]);// creation of an object having keys and values.
// console.log(info.address);
// console.log(info.address.place);
// console.log(info.address["city"]);
// console.log(info.address["cit"]);


// const p1 = {
//   name : "Tushar", age : "25" 
// };
// const p2 = {
//   class : "bcom", goal : "CA"
// };

// function magic(p){
//   if(p.age < "25"){
//     console.log("eligible for giving cat");
//   }
//   else if(p.class == "bcom"){
//     console.log("wishing to become a ca");
//   }
//   else{
//     console.log("not a way to achieve success");
//   }
// }
//functions using objects

//function_name : function()
// const tree = {
//   prop : "height",
//   branch(){
//     console.log("tree has branches");
//   }
// }
// tree.branch();

// const me = {
//   name: {
//     first: "tarush",
//     last: "kaistha"
//   },
//   location: {
//     streetNumber: 500,
//     street: "Fakestreet",
//     city: "Seattle",
//     state: "WA",
//     zipCode: 55555,
//     country: "USA",
//     getDetails(){
//       return `${this.city} ${this.state}`;
//     }
//   },
//   getAddress() {
//     return `${this.name.first} ${this.name.last}
// ${this.location.streetNumber} ${this.location.street}
// ${this.location.city}, ${this.location.state} ${this.location.zipCode}
// ${this.location.country}`;
//   }
// };

// console.log(me.getAddress());
// console.log(me.location.getDetails());
// global context -> console.log(this === window);

// const myBook = ["Shimla Hills", "Ghost Stories","Platoform"];
// console.log(myBook);
// console.log(myBook[1]);
// console.log(myBook.length);
// console.log(myBook.join(" || "));

// const myBook = [
//   {name : "java programming", author : "james"},

//   {name : "Ds algo", author : "karumanchi" },

//   {name : "c++", author : "dennis ritchie" }
// ];
// myBook.push({name : "Motivation" , Author : "Sandeep"});
// console.log(myBook);

// const courses = [
//   { teacher: "Kyle Simpson", course: "JS Function Lite" },
//   { teacher: "Sarah Drasner", course: "Intro to Vue" },
//   { teacher: "Brian Holt", course: "Complete Intro to React v3" },
//   { teacher: "Steve Kinney", course: "State Management" }
// ];
// console.log(courses);
// courses.push({teacher : "Tarush" , course : "DS Algo"});
// console.log(courses);
// courses[0] = ({teacher: "Kyle", course: "JS"});
// console.log(courses);
// const b = courses[2];
// b.course = "Complete Intro to React v4.";
// console.log(courses);
// for(let i =0; i < courses.length; i++){
//   console.log(courses[i]);
// }

// let ran = 0;
// courses.forEach(function(c,i) {
//   ran++;
//   console.log(i,c);
// });
// console.log(ran);
// const elementsToChange = document.querySelectorAll('.js-target');
// for (let i = 0; i < elementsToChange.length; i++) {
//   const currentElement = elementsToChange[i];
//   currentElement.innerText = "Modified";
// }

// const button = document.querySelector('.event-button');
// button.addEventListener('click',function () {
//   alert('Hey');
// });

// const input = document.querySelector('.copy-to');
// const p = document.querySelector('.to-copy');
// input.addEventListener("keydown",function(){
//   p.innerText = input.value;
// });

// document.querySelector('.button-container').addEventListener('click',function(event){
//   if(event.target.tagName === 'BUTTON'){
//     alert(`You clicked on the button ${event.target.innerText}`);
//   }
//   event.stopPropagation();
// });

// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(DOG_URL);

// promise
//   .then(function(response) {
//     const processingPromise = response.json();
//     return processingPromise;
//   })
//   .then(function(processedResponse) {
//     console.log(processedResponse);
//   });

// console.log("this will log first");

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);
const doggos = document.querySelector(".doggos");

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });
  document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);