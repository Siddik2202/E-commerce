// Toggle icon navbar

let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('#navbar');
let closeIcon = document.querySelector('#close');


if(menuIcon){      
    menuIcon.addEventListener('click',()=>{
        navbar.classList.add('active')
    })
}
if(closeIcon){      
    closeIcon.addEventListener('click',()=>{
        navbar.classList.remove('active')
    })
}


var MainImages = document.getElementById("Main-img");
var smallImages = document.getElementsByClassName("small-img");

smallImages[0].onclick = function(){
    MainImages.src = smallImages[0].src;
}
smallImages[1].onclick = ()=>{
    MainImages.src = smallImages[1].src;
}
smallImages[2].onclick = ()=>{
    MainImages.src = smallImages[2].src;
}
smallImages[3].onclick = ()=>{
    MainImages.src = smallImages[3].src;
}

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('close');
//     navbar.classList.toggle('active');

// }

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset &&  top < offset + height){
            //active navelink bars
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
        
    });

}














