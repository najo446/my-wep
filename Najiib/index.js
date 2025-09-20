//console.log("Hello");
//Window.alert('this is an alert');
//document.getElementById("myH1").textContent= 'Hello';
//document.getElementById("MyP").textContent=  'soo dhawoe';


let x;
x= 123;
console.log(x);


let price = 10.99;
let gpa =2.1;


//console.log(age);

//console.log(price);
//console.log(gpa);
//console.log('you are $ {age} years old');
//console.log('the price is $${price}');
//console.log('your gpa is: ${gpa}');

let firstName = "Najii"
let favoritefood= 'baasto';
let email = "najiib@gmail.com";

// console.log(typeof firstName);
// console.log('magacaagu waa[FirstName ]');
// console.log('you like$ (favoritefood)');
// console.log('your email is {email}');

//let online = false;
//console.log('najiib waa online:${online}');

//let fullName = "najiib";
//let age = 25;
//let student =false;

// document.getElementById("p1").textContent = 'magacaagu waa ${fulName}';
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;

//document.getElementById("Hello").textContent=";

//let student= 30;
//student = student + 1;



//console.log(student);

// const p1 = 3.14159;
// let radius;
// let circumference


// document.getElementById("mysubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 1 * p1 * radius;
//     document.getElementById("myh3").textContent = circumference + "cm";
// }


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn= document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;

    countlabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent =count;
}
resetBtn.onclick = function(){
    count=0;
    countlabel.textContent =count;
}


