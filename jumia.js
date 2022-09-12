/* l'image sous forme de tableau */
var slide = new Array("image/img2.jpg","image/SN_W33_BOUTIKOU_712x384.jpg", "image/img5.jpg","image/img7.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;

    document.getElementById("slide").src = slide[numero];
}
/* affichage */
setInterval("ChangeSlide(1)", 2000)
/* selection des deux boutons */
const bouton1 = document.querySelector(".bouton1");
const bouton2 = document.querySelector(".bouton2");
bouton1.disabled= true;
const slidefooter=()=>{
    const img1 =document.querySelectorAll('.footer1');
    const img2 =document.querySelectorAll('.footer2');
    for (let i = 0; i < img1.length; i++)
     {
        const slider1 = img1[i];
        const slider2 = img2[i];
        if(slider1.style.display == 'block'){
            slider1.style.display = 'none'
            slider2.style.display = 'block'
            bouton2.disabled =true;
            bouton1.disabled =false;
        }
        else{
            slider1.style.display ='block';
            slider2.style.display = 'none'
        
            bouton1.disabled =true;
            bouton2.disabled =false;

        }
        
    }
} 

