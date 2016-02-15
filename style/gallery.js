function init(){
	img = document.getElementById('gallery')
	img.style.background="url(../image/3d/superscope/CasqueAKG.jpg)";
	description = document.getElementById('tM');
	description.innerHTML = "Casque AKG";
	fG = document.getElementById('fGM');
	fG.style.visibility="hidden"
	fD = document.getElementById('fDM');
	
	d = 0
}

function fonduD(){
	if(d==0){
		img.style.background="url(../image/3d/superscope/LampePixar.jpg)";
		description.innerHTML = "Lampe Pixar";
		fG.style.visibility="visible"
		fD.style.visibility="hidden"
		d++
	}
}

function fonduG(){
	if(d==1){
		img.style.background="url(../image/3d/superscope/CasqueAKG.jpg)";
		description.innerHTML = "Casque AKG";
		fG.style.visibility="hidden"
		fD.style.visibility="visible"
		d--
	}
}