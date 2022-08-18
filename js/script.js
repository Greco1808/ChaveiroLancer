//var index =0
/var n;


//console.log(slides)

//function avanca(n){
 
  //controlaSlide(index += n)
  
//}

//function avanca2(n){
 
  //controlaSlide2(index += n)
  
//}


//function controlaSlide(){
    


  //var slides = document.getElementsByClassName("item")
  
  
  
  
  //if(index >= slides.length){
    //index = 0;
  //}
  
  //if(index < 0){
    //index = slides.length - 1;
 //}
  
 //var count = slides[index]
   
 
 //count.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  
//}

//function controlaSlide2(){
    


  //var slides2 = document.getElementsByClassName("item2")
  
  
  
  
  //if(index >= slides2.length){
    //index = 0;
  //}
  
  //if(index < 0){
    //index = slides2.length - 1;
  //}
  
 //var count = slides2[index]
   
 
 //count.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  
//}

var indice =0
var y;
var classe;


function avancaSnap(y,classe){
 
  controlaSnap(indice += y,classe)
    //controlaSlide(classe)
    console.log(classe)
    console.log(y)
  
  
  
}




function controlaSnap(y,classe){
    


  var slides = document.getElementsByClassName(classe)
  
  
  
  
  if(indice >= slides.length){
    indice = 0;
  }
  
  if(indice < 0){
    indice = slides.length - 1;
  }
  
 var count = slides[indice]
 console.log(slides)
   
 
 count.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  console.log(slides)
}
