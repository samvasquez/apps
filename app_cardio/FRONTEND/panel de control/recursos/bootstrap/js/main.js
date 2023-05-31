if   (sessionStorage.getItem('user') != null){
    var usuarioActual = JQuery.parseJSON (sessionStorage.getItem('user'));
    if (usuarioActual[0].rol > 1){
        $('contenido').load ('paginas/menuusuario.html');
    }else{
        $('contenido').load ('paginas/menu');
    }
}else {
    $('contenido').load ('paginas/login');

}

function recargar(url){
    location.href  = url;
}