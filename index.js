const button = document.getElementById("click");
const crush = document.getElementById("crush");

button.addEventListener("click", function() {
    button.style.display = "none";
    let op = 0
    crush.style.opacity = op;
    crush.style.display = "block";
    let int = window.setInterval(function() {
        op += 1;
        crush.style.opacity = op.toString() + "%";
        console.log(op); 
        if(op >= 100) clearInterval(int);
    }, 20);
});