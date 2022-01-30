
                 /*selecionador de prato principal*/
function selecionadoAlmoco(pratoPrincipal){
const prato= document.querySelector("."+pratoPrincipal);
prato.classList.toggle("select");

}

                      /*selecionador de bebida*/ 
function selecionadoBebida(bebidaPrincipal){
const bebida= document.querySelector("."+bebidaPrincipal);
bebida.classList.toggle("select");

}
                  /*selecionador de sobremesas*/
function selecionadoSobremesa(sobremesaPrincipal){
    const sobremesa= document.querySelector("."+sobremesaPrincipal);
  sobremesa.classList.toggle("select");
    
    }