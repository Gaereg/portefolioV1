function init(){
	img = document.getElementById('gallery');
	img.style.background="url(../image/infographie/superscope/darkLMDP.jpg)";
	description = document.getElementById('tI');
	description.innerHTML = "Univers - LMDP";
	description = document.getElementById('descript');
	description.innerHTML = "planche tendance de l'univers du jeu 'Les Marques Du Passé' réalisé dans le cadre du projet tuteuré";
	fG = document.getElementById('fGM');
	fG.style.visibility="hidden"
	fD = document.getElementById('fDM');
	
	d = 0
}

function fonduD(){
	if(d==0){
		img.style.background="url(../image/infographie/superscope/tourLMDP.jpg)";
		description.innerHTML = "Planche Tendance - LMDP";
		description.innerHTML = "planche tendance du jeu 'Les Marques Du Passé' réalisé dans le cadre du projet tuteuré";
		fG.style.visibility="visible"
		fD.style.visibility="hidden"
		d++
	}
}

function fonduG(){
	if(d==1){
		img.style.background="url(../image/infographie/superscope/darkLMDP.jpg)";
		description.innerHTML = "Univers - LMDP";
		description.innerHTML = "planche tendance de l'univers du jeu 'Les Marques Du Passé' réalisé dans le cadre du projet tuteuré";
		fG.style.visibility="hidden"
		fD.style.visibility="visible"
		d--
	}
}