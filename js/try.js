console.log("sanity");
var operators = {
  "+" : function(a,b){return a+b},
  "-" : function(a,b){return a-b},
  "x" : function(a,b){return a*b},
  "\u00F7" : function(a,b){return a/b}
}

function calculate(arr) {
  if (arr.length < 3) return arr;

  else {
    var a = parseInt(arr[0]);
    var b = parseInt(arr[2]);
    var op = [arr[1]][0];
    return [operators[op](a,b)];
  }
}

$(document).ready(function() {
  var num = "";
  var math = [];
  var total = 0;
  var screen = $("#screen");


  $("#button-container span").on("click", function (){
    var item = $(this).html();

    // C
    if ($(this)[0].id === "cancel"){
      num = "";
      math = [];
      total = 0;
      screen.html(0);
    }
    // number
    else if (Number.isInteger(parseInt(item))) {
      num += item;
      screen.html(num);
    }
    // =
    else if ($(this)[0].id === "calc") {
      math.push(num);
      num = (calculate(math)[0]).toString();
      screen.html(num);
    }

    // = - * /
    else {
      if (num) math.push(num);
      math = calculate(math);
      math.push(item);
      num = "";
      screen.html(math[0]);
    }
  });
});