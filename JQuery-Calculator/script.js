$(document).ready(function(){
   function calculator(){
      var firstnumber="";
      var secondnumber="";
      var operation="";
      var isfirstNumber=true;
      $(".number-button").on('click', function() {
        var num = $(this).attr("data-number");
        if(isfirstNumber){
            firstnumber+=num;
        }
        else{
            secondnumber+=num;
        }
        if(isfirstNumber){
        $(".DisplayDiv").first().html(firstnumber);
        }else{
        $(".DisplayDiv").first().html(secondnumber);
        }
       });
      $(".operation").on('click', function(e) {
       e.preventDefault();
       isfirstNumber=false;
       var ops = $(this).attr('data-operation');
       operation= ops;
        $(".DisplayDiv").first().html(ops);
         
     });
      $(".equals").first().on('click', function() {
        let result=0;
        const firstNum = parseFloat(firstnumber);
        const secondNum = parseFloat(secondnumber);
        switch (operation) {
            case "+":
              result = firstNum + secondNum;
              break;
            case "-":
              result = firstNum - secondNum;
               break;
            case "*":
              result = firstNum * secondNum;
              break;
            case "÷":
              result = firstNum / secondNum;
               break;
            default:
              result="";
          }
          $(".DisplayDiv").first().html(result);
      }
    );
      $(".clear").first().on('click', function() {
          $(".DisplayDiv").first().html(0);
           calculator();
     });
     };
      calculator();
     });