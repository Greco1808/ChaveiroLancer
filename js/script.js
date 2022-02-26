var index =0
var n;


console.log(slides)

function avanca(n){
 
  controlaSlide(index += n)
  
}


function controlaSlide(){
    


  var slides = document.getElementsByClassName("item")
  
  
  
  
  if(index >= slides.length){
    index = 0;
  }
  
  if(index < 0){
    index = slides.length - 1;
  }
  
 var count = slides[index]
   
 
 count.scrollIntoView()
  
}