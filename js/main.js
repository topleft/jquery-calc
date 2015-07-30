
// var operators = {
//   "+" : function(a,b){return a+b},
//   "-" : function(a,b){return a-b},
//   "x" : function(a,b){return a*b},
//   "&divide;" : function(a,b){return a/b}
// }


// function calculate(arr){
//   var a = parseInt(arr[0]);
//   var b = parseInt(arr[2]);
//   var op = [arr[1]][0];
//   console.log("arr: "+ arr);
//   console.log("a,b :"+ a, b)
//   return operators[op](a,b);
// };

//   var num;
//   var total = 0;
//   var math = [];

// $(document).ready(function() {


//   while (math.length < 3){

//   $("#button-container span").on("click", function (){
//     var item = $(this).html()

//     if (item.id === "cancel"){
//       num = "";
//       total = 0;
//       math = [];
//       return;
//     }
//     // if number
//     else if (Number.isInteger(parseInt(item))) {
//         if(num) num += item;
//         else num = item;
//       }
//     // if =
//     else if (item.id === "calc"){
//         math.push(num);
//         total += calculate(math);
//         var result = total;
//         console.log(total);
//         num;
//         total = 0;
//         math = [];
//         return result;
//       }
//     // operator
//     else {
//         math.push(num);
//         num = item;
//       }
//     });
//   }

//   total += calculate(math);
//   console.log(total);
//   num = total;

// });




// // $(document).ready(function() {
// //   var num = "";
// //   var total = 0;
// //   var math = [];

// //   $("#button-container span").on("click", function (){

// //     if(this.id === "calc") {
// //       // console.log("total inside =: "+total)
// //       // math.push(num);
// //       // total += calculate(math);
// //       // num = "";
// //       console.log("total from =: "+total);
// //       return num;
// //     }
// //     // else if (math.length === 3){
// //     //   total += calculate(math);
// //     //   num += $(this).html();
// //     //   console.log(total);
// //     //   num = "";
// //     //   math = [total];
// //     // }
// //     // check for + - x /
// //     if (this.className === "operator" && (this.id === "")) {
// //       math.push(num);
// //       num = "";
// //       // console.log(math);
// //       math.push($(this).html());
// //     }
// //     // check for number
// //     else if (this.id==="") {
// //       num += $(this).html();
// //       console.log("num: "+num);
// //         if (math.length === 2){
// //           math.push(num);
// //           total += calculate(math);
// //           // num += $(this).html();
// //           console.log(total);
// //           num = total.toString();
// //           // num = total;
// //           math = [];
// //           total = 0;
// //     }
// //     }
// //     // check for C
// //     else if (this.id === "cancel") {
// //       num = "";
// //       math = [];
// //     }

// //   });

// // });