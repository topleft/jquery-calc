console.log("sanity");
var operators = {
  "+" : function(a,b){return a+b},
  "-" : function(a,b){return a-b},
  "x" : function(a,b){return a*b},
  "÷" : function(a,b){return a/b}
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


  $("#button-container span").on("click", function (){
    var item = $(this).html();

    if ($(this)[0].id === "cancel"){
      num = "";
      math = [];
      total = 0;
      return 0;
    }

    else if (Number.isInteger(parseInt(item))) {
      num += item;
                          console.log("Num: "+num);
    }

    else if ($(this)[0].id === "calc") {
      math.push(num);
      console.log("Math array: "+math);
      num = (calculate(math)[0]).toString();
      console.log("Want String: "+typeof num)
      console.log(num);
    }

    // = - * /
    else {
      console.log(item)
      if (num) math.push(num);
      math = calculate(math);
      math.push(item);
                          console.log(math[0]);
      num = "";
    }
  });
});