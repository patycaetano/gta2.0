function listar(){
    listaNoticia = localStorage.getItem('listaNoticia')
    if(listaNoticia == null){
        msgError.innerHTML='<font color="white">Nenhuma Noticia Cadastrada</font>'
        return
    }
    const listardados = localStorage.getItem('listaNoticia')
    msgLista.innerHTML = listardados
    }