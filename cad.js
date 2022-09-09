let titulo = document.querySelector ('#titulo')
let data = document.querySelector('#data')
let comentario = document.querySelector('#comentario')
let listaNoticia=localStorage.getItem('listaNoticia')
function cadastrar(){
let linha= `<tr>`
linha += `<td>${titulo.value}</td>`
linha += `<td>${data.value}</td>`
linha += `<td>${comentario.value}</td>`
linha += `</tr>`
if(listaNoticia == null){
    listaNoticia = linha
}else{
    listaNoticia += linha
}
localStorage.setItem('listaNoticia',listaNoticia)
msgSucesso.innerHTML='<br><strong><font color="white">Cadastro realizado com sucesso</font></strong>'
setTimeout(()=> {
    document.location.reload(true)
}, 2000);

}