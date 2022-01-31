//as divs pra retirada de valores, não habilitei as de preços ainda
let almocoFinal;
let bebidaFinal;
let sobremesaFinal;
let precoAlmocoFinal;
let precoBebidaFinal;
let precoSobremesaFinal;
                
                
                
                
                /*selecionador de prato principal*/
function selecionadoRefeicao(refeicaoPrincipal,preco){
  //forma bruta de resolver o problema
  const remove1 = document.querySelector(".frango");
  remove1.classList.remove("select");
  const remove2 = document.querySelector(".salmao");
  remove2.classList.remove("select");
  const remove3 = document.querySelector(".macarrao");
  remove3.classList.remove("select");

  // .................

  const prato= document.querySelector("."+refeicaoPrincipal);
  prato.classList.add("select");
   almocoFinal = refeicaoPrincipal;
   precoAlmocoFinal= preco;
  return refeicaoPrincipal;
  chamandoComanda();
}

                      /*selecionador de bebida*/ 

 function selecionadobebida(bebidaPrincipal,preco){

  const remove1 = document.querySelector(".cocaGelada");
  remove1.classList.remove("select");
  const remove2 = document.querySelector(".suco");
  remove2.classList.remove("select");
  const remove3 = document.querySelector(".cocaZero");
  remove3.classList.remove("select");


const bebida= document.querySelector("."+bebidaPrincipal);
bebida.classList.add("select");
bebidaFinal=bebidaPrincipal;
precoBebidaFinal=preco;
return  bebidaPrincipal;
chamandoComanda();

}
                  /*selecionador de sobremesas*/

function selecionadoSobremesa(sobremesaPrincipal,preco){

  const remove1 = document.querySelector(".brownie");
  remove1.classList.remove("select");
  const remove2 = document.querySelector(".cinnamon");
  remove2.classList.remove("select");
  const remove3 = document.querySelector(".cup-cake");
  remove3.classList.remove("select");


  const sobremesa= document.querySelector("."+sobremesaPrincipal);
  sobremesa.classList.add("select");
  sobremesaFinal= sobremesaPrincipal;
  precoSobremesaFinal=preco;
  return sobremesaPrincipal;
  chamandoComanda();
  }  
  
  function chamandoComanda(){
    
    if(almocoFinal!== null && bebidaFinal!==null && sobremesaFinal!==null){
    const mudancaBotao= document.querySelector("pedido-finalizado")
    mudancaBotao.classList.remove("esconder")
    const escondendo= document.querySelector(".finalizar-pedido");
    escondendo.classList.add("esconder");
   comandaPrato();
  }
  
}
function comandaPrato() {
  const fechamento= document.querySelector(".quadro-comanda")
  fechamento.classList.remove("esconder");
  document.getElementById("pratin") +=almocoFinal +precoAlmocoFinal;
  
  document.getElementById("bebidinha") +=bebidaFinal +bebidaFinal;
  
  document.getElementById("docin") +=sobremesaFinal +sobremesaFinal;
  }

//testes pra fazer a comandinha



