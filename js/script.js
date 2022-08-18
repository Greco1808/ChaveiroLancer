
//variáveis de controle a serem inseridas dentro do HTML 

//índice é um número fixo a ser adicionado ao clicar para avançar um slide, ele vai armazenar o número da posição do array

var indice =0

//y é a variável a ser adicionada ao se clicar no botão de controle do carrossel, ou seja , se colocarmos 1 , toda vez que clicarmos no botão de avança ou retrocede
//iremos somar ou diminuir 1 ao valor do índice, posicionando o slide para frente ou para trás

var y;

//classe é a variável que defini a coleção de slides que deve ser movida, se eu tiver um container com 5 slides, cada slide deve ter um nome de classe igual para
//ser rolada

var classe;

//essa função deve ser colocada no HTML para que o script possa entender quantos slides devem ser movidos ao se clicar (y) 
//e qual a coleção de slides deve ser movida (classe)

function avancaSnap(y,classe){
 
//toda vez que clicamos, o script vai chamar a função controlaSnap que é o script real , que contém a lógica para rolar os slides. ele adicona uma posição ao array do índice
//armazenando essa posição na memória e recebe a classe a ser rolada 
 
 controlaSnap(indice += y,classe)
    
    console.log(classe)
    console.log(y)
  
  
  
}



//lógica para rolar para o próximo slide
function controlaSnap(y,classe){
    

//essa variável vai receber a classe a ser rolada, ou seja , ele vai pegar todas as div's que definimos anteriormente e vai gerar um array numérico com elas,
//através do método "document.getElementsByClassName"
 
  var slides = document.getElementsByClassName(classe)
  
  
  
  //essas variáveis de controle servem para controlar os erros na lógica, sem elas, a variável índice seria adicionada ou decrescida infinitamente , enquanto clicamos
  //botões para avançar ou retroceder um slide. Elas definem os limites da variável índice de acordo com o tamanho do array dos slides, ou seja, se tenho 5 slides, 
  //índice nunca poderá valer 6 ou -1
  
  if(indice >= slides.length){
    indice = 0;
  }
  
  if(indice < 0){
    indice = slides.length - 1;
  }
 
 //aqui é onde a mágica acontece, a variável count recebe o slide na posição da variável índice , ou seja , se índice vale 1 , eu vou ter o slide equivalente à posição
 //1 dentro do array de slides
 
 var count = slides[indice]
 console.log(slides)
   
 //agora a variável count recebe o método scrollIntoView, que nada mais é que um método de rolagem que faz com que a página role lateralmente para o próximo slide
 
 count.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  console.log(slides)
}
