const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let position=0;
function updateSlide(){
	document.querySelector(".banner-img").src="./assets/images/slideshow/"+slides[position]["image"];
	document.querySelector("#banner p").innerHTML=slides[position]["tagLine"];
	document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("dot_selected");
    });
	document.querySelector("[data-pos='"+position+"']").classList.add("dot_selected");
}
function slide(move){
	position=position+move;
	if(position>=slides.length){
		position=0;
	}
	if(position<=-1){
		position=slides.length-1;
	}
	updateSlide();
}
for(let i=0;i<slides.length;i++){
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dot.setAttribute("data-pos",i);
	if(i===0){
		dot.classList.add("dot_selected");
	}
	dot.addEventListener("click", (event)=>{
		position=event.target.getAttribute("data-pos");
		updateSlide();
	})
	document.querySelector(".dots").appendChild(dot);
}


