var index =0
var n;


console.log(slides)

function avanca(n){
 
  controlaSlide(index += n)
  
}

function avanca2(n){
 
  controlaSlide2(index += n)
  
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
   
 
 count.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  
}

function controlaSlide2(){
    


  var slides2 = document.getElementsByClassName("item2")
  
  
  
  
  if(index >= slides2.length){
    index = 0;
  }
  
  if(index < 0){
    index = slides2.length - 1;
  }
  
 var count = slides2[index]
   
 
 count.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  
}
