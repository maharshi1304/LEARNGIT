// Arithmetic operation
 /*let a = 5;
 let b = 2;
 console.log("a=", a, "b=",b);
 console.log("a+b=", a+b);
 console.log("a-b=", a-b);
 console.log("a*b=", a*b);
 console.log("a/b=", a/b);
 console.log("a+b=", a+b);
 console.log("a%b=", a%b);
 console.log("a**b=", a**b);*/
 
 // Unary Operator--
 /*let a = 5;
 let b = 2;
 console.log("a=", a, "b=",b);
  //a--;
  console.log("++a", ++a);
  console.log("a=",a);*/

  // Assignment operator
 /* let a = 5;
 let b = 2;
 console.log("a=", a, "b=",b);
  a**=4;
 console.log("a=", a);*/

 // Comparision Operators--
 /*let a = 5;
 let b = "5";
 console.log("a=", a, "b=",b);

 console.log("a==b", a==b);
 console.log("a>b", a>b);
 console.log("b>a", b>a);
 // Strict version below also check data-type 7 make Comparision
 console.log("b===a", b===a);
 console.log("b!==a", b!==a);*/

 // Logical Operator--
 let a = 5;
 let b = 2;
 console.log("a=", a, "b=",b);
  
 cond1 = a>b, cond2 = a===6;
 console.log("cond1&&cond2=",cond1&&cond2 );


// Coditional Statements--
  let age = 18;
   if(age >= 18){
    console.log("you can vote");
   }else {
    console.log("u can not vote");

   }

   /*let mode = "blue";
   let color;
   if(mode==="dark"){
    color="black;"
   }else{
    color="white";
   }
    console.log(color);*/

    // Check even odd condition 
    let num = 10;
  
    if(num % 2 === 0){
        console.log(num, "is even");
    }else{
        console.log(num, "is odd");
    }

 // Else-if Statement
  let mode = "grey";
  let color;
  if(mode === "dark"){
    color="black";
  }  else if (mode === "blue"){
     color="blue";
  } else if(mode === "pink"){
    color="pink"
  } else{
    color="white";
  }
   console.log(color);

 // Ternary Operator
  let SellingPrice = 12.34;
     let result = SellingPrice > 114 ? "gain" : "lose";
     console.log((result));

// Significance of this Tutorial are....
  
  // Q1. Using Prompt check num is multiple of 5 or not
  /*let digit = prompt("enter the digit:");
   
   if(digit % 5 === 0){
    console.log(digit, "is a multiple of 5");
   } else{
     console.log(digit, "is not a multiple of 5 ");
   }

  /*Q2 Write code , give grade acco to their obtained score of student
   90-100, A
   70=89, B
   60-69, C
   50-59, D
   0-49, F */
   /*let score =prompt("enter your score:");
   let grade;
   if(score>=90&&score<=100){
    grade='A'
   } else if(score>=70&& score<=89){
    grade = 'B'
   } else if (score>=60&& score<=69){
     grade = 'C'
   } else if(score>=50 && score<=59){
     grade ='D'
   } else if (score>=0 && score<=49){

   }
    console.log("according to your obtained score grade is:", grade );*/

    //Loops
    for(let i =1; i<=5; i++){
      console.log("mahi");
    }
    // Calcukate sum  1 to 5
      let sum =0;
      for(let i =1; i<=5; i++){
        sum+=i // sum = sum+i;
      }
       console.log("sum is:", sum);

   // for-of loop
     let name = 'JavaScript';
     let size = 0;
     for(let i of name){
      console.log("i:", i);
      size++;
     }
      console.log("size:", size);

  // for in loop regulate Object data type & itterate keys value
   let student ={
    name: "maharshi",
    age : 23,
    cgpa: 8.09,
    ispass: true,
   };
    for(let i in student){
      console.log((i), "values=" , student[i]);
    }

 // Practice Q1
 //  print all even / odd number from 0 to 100  
   /*let number = 100;
   for(let i =0; i<=number; i++){
     if(i%2!==0){
      console.log(i);
     }
    }

 //Practice Q2
 let gameNum = 25;
 let userNum = prompt("guess the number:");   
 while(userNum!= gameNum){
  userNum = prompt("wrong guessing. guess again:");
 }
 console.log("congrats, you entered correct number");*/

 //Strings in js
  let str = 'maharhsi';
   // lenght
  console.log(str.length);
   // indices 
  console.log(str[0],str[4]);

  // template literals & String Interpolation
    let specialstr = `This is template literals ${1+2+3}`;
     console.log(specialstr);

     let  str1="this\tmaharshi";
     console.log(str1.length);
//String method
 let str3 ="maharshi";
 str3 = str3.toUpperCase();
  console.log(str3);

  let str4 ="MAHARSHI";
 str4 = str4.toLowerCase();
  console.log(str4);

  let str5 =" apna";
  let str6 = "maharshi";
  //console.log(str5.concat(str6));
  console.log(str5 + str6);

  // Looping over Arrays
   let sub = ["Hindi", "English", "math","physics", "chemistry"];
     for(let i=0; i<sub.length; i++){
         console.log(sub[i]);
     }

     let cities = ["gurugaon", "delhi","mumbai","pune","ncr"];
        for(let city of cities){
          console.log(city.toUpperCase()); // using the string method
        }

  // Q1. Calculate the average marks of students using arrays 
  let marks =[85,97,44,37,76,60];
  let sum1= 0;     
  
  for(let val of marks){
    sum1+= val;
  }
    let avg = sum1/marks.length;
     console.log(avg);

  //Arrays method
   let veggi =["potato","govi","mutur","loki"];
     console.log(veggi);
     let newitems = veggi.push("carrot", "redish"); 
      console.log(veggi);  
      console.log(veggi.toString());

//Splice(startIndex , delCount, newEle1, Ele2...);
 let arr = [1,2,3,4,5,6,7]; 
   arr.splice(2 , 2, 101, 102); // 
   console.log(arr);  
  // add element
   arr.splice(2,0,101); 

 //Function
  function myfunction (msg,id){
    console.log(msg,id);
  }  
    myfunction("welcome", 101);

    // sum of 2 num using function 
      function sum9(a,b){
        console.log(a+b);
        //return a+b;
      }

       sum9(3,4);
    //Arrow Sum
     const arrowsum =(a,b)=>{
      console.log(a+b);
     }
       arrowsum(4,2);

       const HelloPrint =()=>{ 
        console.log("hello world!");
       };
         HelloPrint();

  // 
    function countVowel(str){
      let count=0;
      for(let char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
          count++;
        }
      }
      console.log(count);
    }       

  // forEach lopp in arrays
    let city = ["pune", "delhi", "mumbai"];
     city.forEach(function mufun(val,indx, city){
        console.log(val.toUpperCase(), indx, city);
     });
     // acc to arrowsome
     let city1= ["pune", "delhi", "mumbai"];
     city1.forEach((val,indx, city)=>{
        console.log(val.toUpperCase(), indx, city1);
     });
     
     // print squares of given numbers
      let nums = [2,3,4,5];
       nums.forEach(function nums(nums,indx,nums){
          console.log(nums*nums,indx,nums);
       })

       let num6 = [2,3,4,5];
       let newNum = num6.map((num6,)=>{
          return num6*num6;
       });
       console.log(newNum);

   // Filter in arrays all even element
   let arr2=[10,12,13,16,19,25,27,30];
   let newarr = arr2.filter((arr2)=>{
     return arr2%2 === 0;
   });
     console.log(newarr)  ; 

   //q1
   let markss =[56,90,97,99,87];
    let output = markss.filter((val)=>{
       return val>90? val:0;
    });
      console.log(output);

 //q2
  let p = prompt("enter  a num : ");
  let arr4=[];
   for(let i =1; i<=p; i++){
     arr[i-1]=i;
   }     
     console.log(arr4);