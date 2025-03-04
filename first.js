










// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve(" success");
//         },4000);
//     });
// };

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve(" success");
//         },4000);
//     });
// };


// console.log("fathing detail.....");
// let p1= asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fatching detail.....");
//     let p2=asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });


















// const getPromise=()=>{
//     return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject("network error");
// });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });











// function getData(dataId, getNextData){
//   setTimeout(()=>{
//     console.log("data",dataId);
//     if(getNextData){
//       getNextData();
//     }
//   },2000);
// }


// getData(1,()=>{
//   getData(2,()=>{
//     getData(3,()=>{
//       getData(4);
//     });
//   });
// });