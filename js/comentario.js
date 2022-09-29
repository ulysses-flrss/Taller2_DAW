let comentario = document.getElementById("comentario");
comentario.addEventListener("click", e=> e.preventDefault())
let inputComen = document.getElementById("inputComen");
inputComen.style.display = "none";
comentario.addEventListener("click", divLogin);

function divLogin(){ 
   inputComen.style.display = "block";   
}