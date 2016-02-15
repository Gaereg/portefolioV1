function init(){
	var number = document.getElementById("number").value;
	var txt = document.getElementById("txt");
	var tabUnit = ["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","","onze","douze","treize","quatorze","quinze","seize"];
	var tabDiz = ["","dix","vingt","trente","quarante","cinquante","soixante","soixante-dix","quatre-vingt","quatre-vingt-dix"];
	window.reponseDiv = document.getElementById("convers");

	if(number == 0){
		reponseDiv.innerHTML = "zéro";
	} else if(!isNaN(number) && number > 0 && number < 999 && number == parseInt(number)){
		var centaine = parseInt(number/100); 
		var dizaine = parseInt((number-centaine*100)/10);
		var unite = parseInt(number-centaine*100-dizaine*10);

		affiche(centaine, dizaine, unite, tabUnit, tabDiz);
		txt.style.color = "black";
	} else {
		txt.style.color = "red";
	}
}

function convertion(centaine, dizaine, unite, tabUnit, tabDiz){
	var lettreCent, lettreDiz, lettreUnit;
//Convertion Centaine
	if(centaine == 1){ //Cas ou l'on affiche "Cent" et non "un cent"
		lettreCent = "Cent";
	} else if (centaine > 0) { //Cas par défaut
		lettreCent = tabUnit[centaine] + "-cent";
	}

	if(centaine > 0 && dizaine ==0 && unite == 0){ // accorde Cent quand rien après
		lettreCent += "s";
	}
//Convertion Dizaine
	if(dizaine == 1 && unite>0 && unite<7){ // Permet d'afficher les cas spéciaux onze, douze ...
		lettreDiz = tabUnit[10+unite]; 
	} else if (dizaine == 9 && unite>0 && unite<7){
		lettreDiz = tabDiz[dizaine-1] + "-" + tabUnit[10+unite];
	} else if (dizaine > 0){ //Cas par défaut
		lettreDiz = tabDiz[dizaine];
	} 

	if((dizaine == 2 || dizaine == 8) && unite == 0){ //Accorde vingt si rien après
		lettreDiz += "s";
	}
//Convertion Unité
	if((dizaine == 1 || dizaine == 9) && (unite>0 && unite<7)){ //Exclu les cas onze, Douze ... déjà traité dans dizaine
		lettreUnit = "";
	} else if(unite == 1 && dizaine > 0){ // traite les cas "et un" et "et onze"
		if(dizaine>1 || dizaine<7 || dizaine == 8){
			lettreUnit = "et-un";
		} else if (dizaine == 7 || dizaine == 9){
			lettreUnit = "et-onze";
		}
	} else if(unite>0){
		lettreUnit = tabUnit[unite];
	}
	return {convCent: lettreCent, convDiz: lettreDiz, convUnit: lettreUnit}
}

function affiche(centaine, dizaine, unite, tabUnit, tabDiz){
	var lettreCent = convertion(centaine, dizaine, unite, tabUnit, tabDiz).convCent;
	var lettreDiz = convertion(centaine, dizaine, unite, tabUnit, tabDiz).convDiz;
	var lettreUnit = convertion(centaine, dizaine, unite, tabUnit, tabDiz).convUnit;
	

	var resultat = ((lettreCent != undefined ? lettreCent : "") +
					(lettreCent && lettreDiz ? "-" : "") +
					(lettreDiz != undefined ? lettreDiz : "") +
					(lettreDiz && lettreUnit ? "-" : "") +
					(!lettreDiz && lettreUnit && lettreCent ? "-" : "") +
					(lettreUnit != undefined ? lettreUnit : ""));

	reponseDiv.innerHTML = resultat.charAt(0).toUpperCase() + resultat.substring(1);
}