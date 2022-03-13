var run = document.getElementById("run");


run.addEventListener("click", ()=> {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var op = document.getElementById("op").value;
    var output = document.getElementById("result");

    if(num1 != "" && num2 != ""){
        switch(op){
            case "add":
                var add = num1 + num2;
                output.innerHTML = "The result of " + num1 + "+" + num2 + " is " + add;
                break;
    
            case "sub":
                var sub = num1 - num2;
                output.innerHTML = "The result of " + num1 + "-" + num2 + " is " + sub;
                break;
    
            case "mul":
                var mul = num1 * num2;
                output.innerHTML = "The result of " + num1 + "*" + num2 + " is " + mul;
                break;
    
            case "div":
                var div = num1 / num2;
                output.innerHTML = "The result of " + num1 + "/" + num2 + " is " + div;
                break;
    
            default:
                output.innerHTML = "Invalide!!";
                break;
        }
    }else{
        output.innerHTML = "Input empty";
    }
})