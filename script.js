
                 /*selecionador de prato principal*/
function selecionadoRefeicao(refeicaoPrincipal){
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
  prompt("selecionado fiote "+refeicaoPrincipal);
  return refeicaoPrincipal;
}

                      /*selecionador de bebida*/ 

 function selecionadobebida(bebidaPrincipal){

  const remove1 = document.querySelector(".cocaGelada");
  remove1.classList.remove("select");
  const remove2 = document.querySelector(".suco");
  remove2.classList.remove("select");
  const remove3 = document.querySelector(".cocaZero");
  remove3.classList.remove("select");


const bebida= document.querySelector("."+bebidaPrincipal);
bebida.classList.add("select");

}
                  /*selecionador de sobremesas*/

function selecionadoSobremesa(sobremesaPrincipal){

  const remove1 = document.querySelector(".brownie");
  remove1.classList.remove("select");
  const remove2 = document.querySelector(".cinnamon");
  remove2.classList.remove("select");
  const remove3 = document.querySelector(".cup-cake");
  remove3.classList.remove("select");


  const sobremesa= document.querySelector("."+sobremesaPrincipal);
  sobremesa.classList.toggle("select");
  }  
  