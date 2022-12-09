const Img=document.querySelector(".img-container").children;

const nextSlide=document.querySelector(".next");

const prevSlide=document.querySelector(".prev");
const totalSlides=Img.length;

let index=0;
nextSlide.onclick=function(){

       next("next");
}

prevSlide.onclick=function(){
       
       next("prev");
}

function next(direction)
{
       if(direction=="next")
       {
              index++;
              if(index==totalSlides)
              {
                     index=0;
              }
       }
       

       else{
              if(index==0)
              {
                     index=totalSlides-1;
              }
              else{
                     index--;
              }
       }
       for(let i=0;i<Img.length;i++)
       {
        Img[i].classList.remove("active") ;     
       }
       Img[index].classList.add("active");
       
}