function insert(num){
    document.querySelector(".resultado").innerHTML += num;
}
function clean(){
    document.querySelector(".resultado").innerHTML = "";

}
function somar(){
    const tela = document.querySelector(".resultado").innerHTML;
    if(tela){
        document.querySelector(".resultado").innerHTML = eval(tela);
    }else{
        document.querySelector(".resultado").innerHTML = "Nenhum comando...";
    }
}



