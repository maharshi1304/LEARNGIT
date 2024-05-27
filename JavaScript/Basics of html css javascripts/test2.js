 /*let button = document.getElementById("myId");
    console.dir(button);
 console.dir(document.body);
 let headings = document.getElementsByClassName("heading");
  console.dir(headings);
  console.log(headings);

  let paras =document.getElementsByTagName("p");
   console.dir(paras);*/
  /* let element = document.querySelector(".my-class");
   console.dir(element);

   let elements = document.querySelectorAll(".my-class");
   console.dir(elements);

   let innerText = document.querySelector("div");
   console.dir(innerText);*/

   /*let h2 = document.querySelector("h2");
   console.dir(h2.innerText);
   h2.innerText=h2.innerText+"apna college";

   let divs = document.querySelectorAll("div");
   
   let idx =0;
   for(let div of divs){
     div.innerText=`unique v ${idx}`;
     idx++;
   }*/
    /*console.log(divs);
   divs[0].innerText="unique value 1";
   divs[1].innerText="unique value 2";
   divs[2].innerText="unique value 3";*/
    
   /*(let div = document.querySelector("div");
    console.dir(div);
    console.log(div.getAttribute("id"));
    
    console.log (div.getAttribute("name"));
    div.style.backgroundColor= "purple";
    div.innerText="hello";*/

    // insert & delete elements
    /*let newBtn = document.createElement("button");
    newBtn.innerText="click here";
    console.log(newBtn);

    newBtn.style.textColor="white";
    newBtn.style.backgroundColor="red";
     
    document.querySelector("div").prepend(newBtn);*/
  
    
    /*let para = document.querySelector("p");
     para.classList.add("newClass");
     console.log(para);*/
  /*let btn1 = document.querySelector("btn");
  btn1.onclick=()=>{
    console.log('btn was clicked');
    let a= 23;
    a++;
    console.dir(a);
  };*/

  /*let btn1 = document.querySelector("#btn1");

  btn1.addEventListener("click",(evt)=>{
    console.log('btn1 cliked--handeler1');
  });
  
  btn1.addEventListener("click",(evt)=>{
    console.log('btn1 cliked--handeler2');
  });

   const handler3 =() =>{
    console.log('btn1 cliked--handeler3');
   }
   
   btn1.addEventListener("click", handler3); 
   btn1.removeEventListener("click", handler3);
  
  btn1.addEventListener("click",(evt)=>{
    console.log('btn1 cliked--handeler4');
  });

  btn1.removeEventListener("click",(evt)=>{
    console.log('btn1 cliked--handeler4');
  });*/

  //Q2 TOGGLE BUTTON

  /*let btn2 = document.querySelector("#btn2");
  let body = document.querySelector("body");
  let currmode = "light";
  

  btn2.addEventListener("click", () =>{
    
      //condition
      if (currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
      } else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
       console.log(currmode);
      }
  });*/


  // Prototypes in JavaScript Working---
    /*const employee={
    calcTax(){
      console.log("Tax rate is 20%");
    }
  };
   const KaranArjun ={

      salary: 40000,
      tax : 5,
   };
     
   console.log(KaranArjun);
    KaranArjun.__proto__ = employee; 
    */

   // Classes & Constructor
    /*class ToyotaCar{
      constructor(brand, milage){
        console.log(" obj is created");
        this.BrandName = brand;
        this.milage = milage;
      }
       start(){
        console.log("start");
       }
        
       stop(){
        console.log("stop");
       }
    }
// create a new objects basis on myClass ToyotaCar
  let fortuner = new ToyotaCar("fortuner", 12);
  console.log(fortuner);
  let lexus = new ToyotaCar("lexus", 14);
  console.log(lexus);


// Inheritance in JavaScript--
  class person{
     constructor(){
       this.species = " homo sapience";
     }

    eat(){
      console.log(" person eat..!");
    }

    sleep(){
      console.log("person sleep..!");
    }
  }
    
  class Engineer extends person{
    constructor(branch){
    super(); // invoke the constructor of parent class
    this.branch = branch;
    }
    work(){
      console.log("problem solver..!");
    }
  }
   
  class Doctor extends person{
    eat(){
      console.log(" doctor eat a mango in summer..!");
    }
  }
  let maharshiObj = new Engineer();
     
   //console.log(maharshiObj.work());

   let e1 = new Engineer(" Mechanical Enginner");
    console.log(e1);
  let abcObj = new Doctor();
   //console.log(abcObj.eat());

   

   // Synchronous & Asynchronous ---
      /*console.log(1);
   console.log(2);
   console.log(3);
    setTimeout(()=>{
      console.log("hello");
    } , 4000);
    console.log(4);
    console.log(5);*/


// let promise = new Promise((resolve , reject) =>{
//   console.log(" promise");
//   resolve("success");
//   reject("error occur");
  
// });


// const getpromise = ()=>{
//   return new Promise((resolve, reject)=>{
//    console.log("promises");
//    //resolve("success");
//    reject("get error");
//   });
// };

//   let promise = getpromise();
//    promise.then((res) =>{
//     console.log("promises completed");
//    });
  
//     promise.catch((err) =>{
//       console.log("rejected");
//     })


// function getData(dataId, getNextData){
//    return new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//       console.log("data", dataId);
//       resolve("success");
//       //reject("get error");
//       if(getNextData){
//         getNextData();
//       }
//   }, 5000); // 5second

// });  
// };  

//   // callback hell (bad programming way)
//   console.log("getting data1....");
//   getData(1, ()=>{
//     console.log("getting data2....");
//     getData(2, ()=>{
//       console.log("getting data3....");
//       getData(3,()=>{
//         console.log("getting data4....");
//         getData(4);
//       });
//     });
  
//   });


   



function getData(dataId){
     return new Promise((resolve, reject)=>{
      setTimeout(()=> {
        console.log("data", dataId);
        resolve("success");
    }, 2000); // 5second
  });  
  };  
      // // Async- Await
      //  async function getalldata(){
      //   console.log("getting data1...");
      //   await getData(1);
      //   console.log("getting data2...");
      //   await getData(2);
      //   console.log("getting data3...");
      //   await getData(3);
      //   console.log("getting data4...");
      //   await getData(4);
      //  }

       // Async- Await with IIEF function 
       (async function (){
        console.log("getting data1...");
        await getData(1);
        console.log("getting data2...");
        await getData(2);
        console.log("getting data3...");
        await getData(3);
        console.log("getting data4...");
        await getData(4);
       }) ();
  
  //   // Alter By Promise Chain 
  //   getData(1)
  //   .then((res)=>{
      
  //     return getData(2);
  //     })
  //     .then((res)=>{
  //       return getData(3);
  //     })
  //     .then((res)=>{
  //       console.log(res);
  //     });


  //  // callback hell (bad programming way)
  // console.log("getting data1....");
  // getData(1, ()=>{
  //   console.log("getting data2....");
  //   getData(2, ()=>{
  //     console.log("getting data3....");
  //     getData(3,()=>{
  //       console.log("getting data4....");
  //       getData(4);
  //     });
  //   });
  
  // });


// function asynFun1(){
//   return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//       console.log("data1");
//       resolve("success");
//     },4000);
//   });
// }

// function asynFun2(){
//   return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1...!");
// asynFun1().then((res)=>{

// console.log("fetching data2....!");
//  asynFun2().then((res)=>{});
// });