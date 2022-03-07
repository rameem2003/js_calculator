function calcu(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var a = parseInt(num1);
    var b = parseInt(num2);



    var output = document.getElementById("output");


    var op = document.getElementById("op").value;


    switch(op){
        case "add":
            var add = a + b;
            alert("The result is: " + add);
            break;

        case "sub":
            var sub = a - b;
            alert("The result is: " + sub);
            break;

        case "mul":
            var mul = a * b;
            alert("The result is: " + mul);
            break;

        case "div":
            var div = a / b;
            alert("The result is: " + div);
            break;
    }
}


// run.addEventListener("click", () => {
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;

//     var a = parseInt(num1);
//     var b = parseInt(num2);



//     var output = document.getElementById("output");


//     var op = document.getElementById("op").value;


//     switch(op){
//         case "add":
//             var add = a + b;
//             // output.innerHTML = "The result is" + add;

//             alert("The result is" + add);
//             break;

//         case "add":
//             var add = a + b;
//                 // output.innerHTML = "The result is" + add;
    
//             alert("The result is" + add);
//             break;
//     }


// });