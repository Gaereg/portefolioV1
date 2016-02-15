(function() {
	alert("ok");
	var search = document.getElementById('txt');
	var resultat = document.getElementById('results');
	var txtHist;
	var pointeur = -1;//utile pour ce repérer dans les resultats plus tard
	resultat.style.visibility='hidden';
	search.addEventListener("keyup", result, false);

	function result(){//interoge le php quand zone de recherche remplis
		txt = document.getElementById('txt').value;

		if(txt != txtHist){//Si le texte de la zone de recherche est différent de la précedente recherche
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'autocompletion.php?txt='+encodeURIComponent(txt));//on ouvre le php et on lui transmet la valeur de la recherche (on encode pour pas avoir de soucis)
			xhr.send(null);//On envois

			xhr.addEventListener('readystatechange', function(){//Quand la requête change détat, lance un evenement 
				if (xhr.readyState === 4 && xhr.status === 200){//Si la requete c'est dérouler sans embuche
					affiche(xhr.responseText);//On lance la fonction Affiche et on lui donne en parametre les données fournis par le php
					txtHist = txt;//On enregistre la recherche pour pouvoir la comparé a la future recherche

					if(xhr.responseText){//Si le php renvois quelque chose on rend visible la liste de sugestion
						resultat.style.visibility='visible';
					} else {
						resultat.style.visibility='hidden';//Sinon on la cache
					}
				}
			}, false);
		}
	}

	function affiche(towns){//Affiche les sugestion
		var villes = towns.split('|');//On rentre dans un tableau les données envoyé par le php
		var villesNb = villes.length;
		pointeur = -1;//Pointeur qui nous sert a nous déplacé dans le tableau, -1=zone de recherche
		resultat.innerHTML="";//On vide les sugestion
		
		for(i=0; i<villesNb; i++) {//On créer une div pour chaque case du tableau villes
			var div = document.createElement('div');
			resultat.appendChild(div);//On place la div sous la div results
			div.innerHTML = villes[i];//Et on inscrit la valeur de la case Villes dans la div

			div.addEventListener('click', function(e){//Quand click sur suggestion zone de texte remplis avec la dites suggestion
				search.value = this.innerHTML;
				resultat.innerHTML="";
			})
		}
		
	}

	search.addEventListener('keyup', function(e){//Permet de ce deplacé dans les suggestion avec les touches flechés
		divs = resultat.getElementsByTagName('div');//On créer un tableau contenent toutes les div de suggestion
		divsNb = divs.length;
		
		//fleche bas
		if(e.keyCode == 40 && pointeur == -1){//si touche egale fleche bas et que le pointeur est sur la zone de texte
			divs[++pointeur].className = 'focus';//On donne la classe focus a la première div
		} else if(e.keyCode == 40 && pointeur > -1 && pointeur < divsNb-1){//Sinon on donne la class focus a la prochaine div et on enleve la classe a la div précédente
			divs[++pointeur].className = 'focus';
			divs[--pointeur].className = '';
			++pointeur;
		}
		//fleche haut
		if(e.keyCode == 38 && pointeur == 0){//Même logique que pour fleche bas
			divs[pointeur].className = '';
			--pointeur;
			console.log(pointeur);
		} else if(e.keyCode == 38 && pointeur > -1){
			divs[--pointeur].className = 'focus';
			divs[++pointeur].className = '';
			--pointeur;
		}
		//entrer
		if(e.keyCode == 13 && pointeur > -1){//Si touche entrer on prend la valeur de la div ou nous somme et la mettons dans zone texte
			search.value = divs[pointeur].innerHTML;
			resultat.innerHTML="";
		}
	},false);

})();