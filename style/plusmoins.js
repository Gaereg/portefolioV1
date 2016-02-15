function nbAleatoire(min, max)
{
	//Retourne un nombre aléatoire entre min et max
	var nb = min+(max-min+1)*Math.random();
	return Math.floor(nb);
}

//Variable static
	var reponse = nbAleatoire(0,100); //Crée le nombre a trouver
	//Initialisation des compteur de coups
		var nbTentative = 0;	
		var nbTentativeIA = 0;
		var nbTentativeTotal = 0;
	//Initialisation des bornes
		var borneMax = 100;
		var borneMin = 0;

function verif()// compare le nombre entré par l'utilisateur au nombre a trouver
{
	var essai = parseInt(document.getElementById("reponse").value); //Récupère la valeur entré par le joueur, parseInt permet de récup un int et non un string
	nbTentative++;//Incrémente le nombre de tentative joueur
	nbTentativeTotal++;//incrémente tentative total

		//Vérification joueur
		if(isNaN(essai) || essai<0 || essai>100)//vérifie que c'est bien un NOMBRE en 0 et 100
		{
			document.getElementById("message").innerHTML = "Hey ! Faut rentrer un nombre entre 0 et 100"; //Ecrit dans la div message
			document.getElementById("historique").innerHTML += "<br/><span class='vous'>Vous </span> : faux";//Ecrit dans l'historique
		}
		if(essai<reponse)
		{
			document.getElementById("message").innerHTML = "C'est plus !";//Ecrit dans la div message
			document.getElementById("historique").innerHTML += "<br/><span class='vous'>Vous </span> : "+essai+" est trop petit";//Ecrit dans l'historique
			if(essai>borneMin)// Si essai est supérieur a la borne minimum mais quand même trop petit alors la borne minimum change
			{
				borneMin = essai;
				document.getElementById("aide").innerHTML = "Tape un nombre entre "+borneMin+" et "+borneMax;//Change l'affichage des bornes (la borne min est remplacé)
			}
		}
		if(essai>reponse)
		{
			document.getElementById("message").innerHTML = "C'est moins !";//Ecrit dans la div message
			document.getElementById("historique").innerHTML += "<br/><span class='vous'>Vous </span> : "+essai+" est trop grand";//Ecrit dans l'historique
			if(essai<borneMax)// Si essai est inférieur a la borne max mais quand même trop grand alors la borne maximum change
			{
				borneMax = essai;
				document.getElementById("aide").innerHTML = "Tape un nombre entre "+borneMin+" et "+borneMax;//Change l'affichage des bornes (la borne max est remplacé)
			}
		}
		if(essai==reponse)
		{
			alert("Yeah, tu as trouvé en "+nbTentative+" tentative. Tentative total : "+nbTentativeTotal);
			return;//Stop la function quand joueur gagne
		}
		setTimeout("verifIA()",500);//Fait une pause de 1/2seconde avant d'appeller la fonction qui fait joué l'IA
}		
function verifIA()
{
		if(borneMin!=0 && borneMax!=100)//Fait qu'un fois les bornes changé l'IA ne repondra plus max ou min alors que le jeux a indiqué que c'était des réponse fausse
		{
			var essaiIA = nbAleatoire(borneMin+1,borneMax-1);//Crée un nombre aléatoire avec un valeur comprise entre les dernières borne connu
		}
		else
		{
			var essaiIA = nbAleatoire(borneMin,borneMax);
		}
		nbTentativeIA++;//incrémente tentative de l'IA
		nbTentativeTotal++;//incrémente tentative total pour la 2eme fois (joueur+IA)
		//Vérification ordi
		if(essaiIA<reponse)
		{
			document.getElementById("message").innerHTML = "C'est plus !";//Ecrit dans la div message
			document.getElementById("historique").innerHTML += "<br/><span class='IA'>IA</span> : "+essaiIA+" est trop petit";//Ecrit dans l'historique
			document.getElementById("reponse").value = essaiIA;//Ecrit la réponse de l'IA dans l'input text
			if(essaiIA>borneMin)// Si essai est supérieur a la borne minimum mais quand même trop petit alors la borne minimum change
			{
				borneMin = essaiIA;
				document.getElementById("aide").innerHTML = "Tape un nombre entre "+borneMin+" et "+borneMax;//Change l'affichage des bornes (la borne min est remplacé)
			}
		}
		if(essaiIA>reponse)
		{
			document.getElementById("message").innerHTML = "C'est moins !";//Ecrit dans la div message
			document.getElementById("historique").innerHTML += "<br/><span class='IA'>IA</span> : "+essaiIA+" est trop grand";//Ecrit dans l'historique
			document.getElementById("reponse").value = essaiIA;//Ecrit la réponse de l'IA dans l'input text
			if(essaiIA<borneMax)// Si essai est inférieur a la borne max mais quand même trop grand alors la borne maximum change
			{
				borneMax = essaiIA;
				document.getElementById("aide").innerHTML = "Tape un nombre entre "+borneMin+" et "+borneMax;//Change l'affichage des bornes (la borne max est remplacé)
			}
		}
		
		if(essaiIA==reponse)
		{
			document.getElementById("reponse").value = essaiIA;//Ecrit la réponse de l'IA dans l'input text
			alert(essaiIA+" Héhé l'IA gagne en "+nbTentativeIA+" coups. Vos tentative : "+nbTentative+" Tentative total : "+nbTentativeTotal);
		}

}
