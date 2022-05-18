var input = document.querySelector("#texto-ingresado");
input.focus();
var textoResultado = document.querySelector("#texto-resultado");
var muñecoYtexto = document.querySelector("#muñeco-texto");
var error = document.querySelector("#error");
var pegar = document.querySelector("#pegar");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");
var keys = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

//boton para encriptar
btnEncriptar.addEventListener("click", function(){

    //validacion
    if(/[A-Z]/.test(input.value) || /[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/.test(input.value)){
        error.classList.remove("invisible");
        return
    }else{
        error.classList.add("invisible");
    };

    //encriptado
    for(i = 0; i < keys.length; i++){
        if(input.value.includes(keys[i][0])){
            input.value = input.value.replaceAll(keys[i][0], keys[i][1])
        };
    };

    //,uestra texto encriptado
    if(input.value.length > 0){
        muñecoYtexto.classList.add("invisible");
        textoResultado.classList.remove("invisible");
        btnCopiar.classList.remove("invisible");
        textoResultado.textContent = input.value;
        input.value = "";
    };

     pegar.classList.add("invisible");
    
});

//boton para desencriptar
btnDesencriptar.addEventListener("click", function(){

    //validacion
    if(/[A-Z]/.test(input.value) || /[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/.test(input.value)){
        error.classList.remove("invisible");
        return
    }else{
        error.classList.add("invisible");
    };

    //desencriptacion
    for(i = 0; i < keys.length; i++){
        if(input.value.includes(keys[i][1])){
            input.value = input.value.replaceAll(keys[i][1], keys[i][0]);
        };
    };

    //muestra el texto desencriptado
    if(input.value.length > 0){
        muñecoYtexto.classList.add("invisible");
        textoResultado.classList.remove("invisible");
        btnCopiar.classList.remove("invisible");
        textoResultado.textContent = input.value;
        input.value = "";
    };

    pegar.classList.add("invisible");
    
});

// copiar
btnCopiar.addEventListener("click", function(){
    pegar.classList.remove("invisible");
    textoResultado.select();
    document.execCommand("copy");
    input.focus();
});


