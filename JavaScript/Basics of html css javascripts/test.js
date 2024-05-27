// JavaScript First Program.... Dynamically typed language
console.log("Welcome to Maharshi");
console.log("Welcome to JavaScript!");
// Vairiable
fullName = " Maharshi Mishra";
console.log(fullName);

age=34;
console.log(age);
price= 99.99;
console.log(price);
X = null;
Y =undefined;
console.log(X);
console.log(Y);
// Boolean Variables
isFollow =true;//false;
console.log(isFollow);
// ES6.. Variable
{let a;
   a = 45;
console.log(a);
}
{
    let a = 23;
    console.log(a);
}
// Data Types--
let x = BigInt("1234");
let y = Symbol("hello");
// * Object Data type-
 const student = {
    fullName : " Maharshi",
     age : 23,
     cgpa : 8.14,
     is_pass : true,
     //console.log(student);
 };
   console.log(student);
   student.age = student.age+1;
   console.log(student['age']);
   console.log(student['cgpa']);
   console.log(student.is_pass);

   student["Name"] = 'Maharshi Mishra';
   console.log(student["Name"]);

// *** Q1
 const Product={
    fullName: " Parker Ball pen",
    colour : "Black",
    Rating : 4.5,
    Price  : 270,
    Offer  :  5,
 };
  console.log(Product);   
// *** Q2  
   const Profile={
    full_Name : "Maharshi Mishra",
    user_name : "@mahi",
    followers : 475,
    following : 72,
    Bio       : " Final Year CSE student | Enthusiast | Extrovert",
   };
    console.log(Profile);