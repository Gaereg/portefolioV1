function globale()
{
	tableau = document.getElementById("tableau");
	ligne = tableau.insertRow(-1);
	colonneB = ligne.insertCell(0)
	colonneB.innerHTML = "_";
	colonneA = ligne.insertCell(1)
	colonneA.innerHTML = "_";
	colonneS = ligne.insertCell(2)
	colonneS.innerHTML = "_";
	colonneC = ligne.insertCell(3)
	colonneC.innerHTML = "_";
	colonneH = ligne.insertCell(4)
	colonneH.innerHTML = "_";
	colonneE = ligne.insertCell(5)
	colonneE.innerHTML = "_";
	colonneT = ligne.insertCell(6)
	colonneT.innerHTML = "_";
	
	tentative = 0;
	gg = 0;
	
	perdu = document.getElementById("perdu");
	gagne = document.getElementById("gagne");
	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
}	
	function verif2()
{
	var essai = document.getElementById("lettre").value;
	essai.toLowerCase();
	var i = 0;
	if(essai=="b" && colonneB.innerHTML=="_")
	{
		colonneB.innerHTML = "B";
		i++;
		gg++;
	}

	if(essai=="a" && colonneA.innerHTML=="_")
	{
		colonneA.innerHTML = "A";
		i++;
		gg++;
	}
	
	if(essai=="s" && colonneS.innerHTML=="_")
	{
		colonneS.innerHTML = "S";
		i++;
		gg++;
	}
	
	if(essai=="c" && colonneC.innerHTML=="_")
	{
		colonneC.innerHTML = "C";
		i++;
		gg++;
	}
	
	if(essai=="h" && colonneH.innerHTML=="_")
	{
		colonneH.innerHTML = "H";
		i++;
		gg++;
	}
	
	if(essai=="e" && colonneE.innerHTML=="_")
	{
		colonneE.innerHTML = "E";
		i++;
		gg++;
	}
	
	if(essai=="t" && colonneT.innerHTML=="_")
	{
		colonneT.innerHTML = "T";	
		i++;
		gg++;
	}

	
	
	if(i==0 && (essai=="z" || essai=="r" || essai=="t" || essai=="y" || essai=="u" || essai=="i" || essai=="p" || essai=="o" || essai=="q" || essai=="d" || essai=="f" || essai=="g" || essai=="j" || essai=="k" || essai=="l" || essai=="m" || essai=="w" || essai=="x" || essai=="c" || essai=="v" || essai=="b" || essai=="n" ))
	{
		tentative ++;
		document.getElementById("texte").innerHTML += essai+", ";
	}
	
	document.getElementById("lettre").value = "";
	
	if(tentative==1){
		canvasBase();
	}
	if(tentative==2){
		canvasPoteau();
	}
	if(tentative==3){
		canvasCorde();
	}
	if(tentative==4){
		canvasTete();
	}
	if(tentative==5){
		canvasCorps();
	}
	if(tentative==6){
		canvasBras();
		perdu.style.visibility = "visible";
	}
	
	if(gg==7 ){
		gagne.style.visibility = "visible";
	}
}