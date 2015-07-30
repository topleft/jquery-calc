

// obj of operator functions
var operators = {
  "+" : function(a,b){return a+b},
  "-" : function(a,b){return a-b},
  "x" : function(a,b){return a*b},
  "\u00F7" : function(a,b){return a/b}
};

// take arr of 3 strings in this form: [num, operator, num]
function calculate(arr) {
  // if arr isn't complete return current arr
  if (arr.length < 3) return arr;
  // parse arr into numbers and funtion
  else {
    var a = parseInt(arr[0]);
    var b = parseInt(arr[2]);
    var op = [arr[1]][0];
    // return number
    return [operators[op](a,b)];
  }
}

// function operateCalc(num, math, total, readOut) {



// };



$(document).ready(function() {
  var num = ""; // holds user input
  var math = []; // holds info to be calculated
  var total = 0;
  var readOut = $("#screen");


  $("#button-container span").on("click", function (){
    var item = $(this);
    var html = item.html();
    var id = item[0].id;

    // Cancel ---> result:  clear vars, print 0 to readOut
    if (id === "cancel"){
      num = "";
      math = [];
      total = 0;
      readOut.html(0);
    }
    // number  result: update num, print num to readOut
    else if (Number.isInteger(parseInt(html))) {
      num += html;
      readOut.html(num);
    }
    // = ---> result: update math array, print total to readOut
    else if (id === "calc") {
      math.push(num);
      num = (calculate(math)[0]).toString();
      readOut.html(num);
    }

    // = - * / ---> update math, run calculation and put total in math array[0], clear num variable, print total to screen
    else {
      if (num) math.push(num);
      math = calculate(math);
      math.push(html);
      num = "";
      readOut.html(math[0]);
    }
  });
});