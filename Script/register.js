window.addEventListener('load', () => {
    document.querySelector('.login-card').classList.add('show');
});

const senhainput = document.getElementById("senha");
const checkbox = document.getElementById("exibirsenha");

checkbox.addEventListener("change", () => {
    if(checkbox.checked){
        senhainput.type = "text";
    }else{
        senhainput.type = "password";
    }
});