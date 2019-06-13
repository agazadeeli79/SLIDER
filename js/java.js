let slider=document.getElementById("slider")
let next=document.getElementById("nextBtn")
let prev=document.getElementById("prevBtn")
let pos=0;
next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)


function nextSlide(){
    pos++;
    let leftPos=-(1140*pos)+"px"
    if(slider.querySelectorAll ("#mainSlide li").length>pos){
        slider.querySelector("#mainSlide").style.left=leftPos;
    }
    else{
        pos=0;
        slider.querySelector("#mainSlide").style.left=0;
    
    }
    
    }
    function prevSlide(){
        pos--;
        if(pos==-1){
            pos=slider.querySelectorAll('#mainSlide li').length-1;

        }
        slider.querySelector("#mainSlide").style.left=-(1140*pos)+"px";
    }
