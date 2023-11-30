const button = document.getElementById("click");
const crush = document.getElementById("crush");
const sec = document.getElementById("secret");

button.addEventListener("click", function() {
    button.style.display = "none";
    let op = 0
    let op2 = 0
    crush.style.opacity = op;
    crush.style.display = "block";
    sec.style.display = "inline";
    let int1 = window.setInterval(function() {
        op += 1;
        crush.style.opacity = op.toString() + "%";
        sec.style.opacity = op2.toString() + "%";
        console.log("op = " + op); 
        console.log("op2 = " + op2);
        if(op >= 100) op2 += 5;
        if(op2 >= 100) clearInterval(int1);
    }, 20);
});