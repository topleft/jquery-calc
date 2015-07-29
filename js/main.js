
var operators = {
  "+" : function(a,b){return a+b},
  "-" : function(a,b){return a-b},
  "x" : function(a,b){return a*b},
  "&divide;" : function(a,b){return a/b}
}


function calculate(arr){
  var a = parseInt(arr[0]);
  var b = parseInt(arr[2]);
  var op = [arr[1]][0];
  console.log(operators[op](a,b), b);
  return operators[op](a,b);
};



$(document).ready(function() {
  var num = "";
  var total = 0;
  var math = [];

  $("#button-container span").on("click", function (){
    if (math.length > 3){
      total += calculate(math);
      num = "";
      math = [];
    }

    // check for + - x /
    if (this.className === "operator" && (this.id === "")) {
      math.push(num);
      num = "";
      console.log(math);
      math.push($(this).html());
    }
    // check for number
    else if (this.id==="") {
      num += $(this).html();
      console.log(num);
    }
    // check for C
    else if (this.id === "cancel") {
      num = "";
      math = [];
    }
    // check for =
    else {
     math.push(num);
     console.log(math);
     total += calculate(math);
     console.log("Total: "+total);
     // return total;
    }

  });

});