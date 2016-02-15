<?php
// S'il y des données de postées
if ($_SERVER['REQUEST_METHOD']=='POST') {
 
  // (1) Code PHP pour traiter l'envoi de l'email
 
  // Récupération des variables et sécurisation des données
  $nom     = htmlentities($_POST['nom']); // htmlentities() convertit des caractères "spéciaux" en équivalent HTML
  $email   = htmlentities($_POST['mail']);
  $objet = htmlentities($_POST['objet']);
  $message = htmlentities($_POST['message']);
 
  // Variables concernant l'email
 
  $destinataire = 'larrieu.mathieu.v@gmail.com'; // Adresse email du webmaster (à personnaliser)
  $sujet = $objet; // Titre de l'email
  $contenu = '<html><head><title>Titre du message</title></head><body>';
  $contenu .= '<p>Bonjour, vous avez reçu un message à partir de votre site web.</p>';
  $contenu .= '<p><strong>Nom</strong>: '.$nom.'</p>';
  $contenu .= '<p><strong>Email</strong>: '.$email.'</p>';
  $contenu .= '<p><strong>Message</strong>: '.$message.'</p>';
  $contenu .= '</body></html>'; // Contenu du message de l'email (en XHTML)
 
  // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
  $headers = 'MIME-Version: 1.0'."\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
 
  // Envoyer l'email
  mail($destinataire, $sujet, $contenu, $headers); // Fonction principale qui envoi l'email
 
  // (2) Fin du code pour traiter l'envoi de l'email
}
?>

<!doctype html>
<html>
	<head>
		<!--Meta-->
		<meta charset="UTF-8">
		<meta name="author" content="Mathieu LARRIEU">
		<meta name="description" content="Portefolio">
		<!--link-->
		<link rel="stylesheet" href="all.css">
		<link rel="stylesheet" href="contact.css">
		<script src="../style/gallery.js"></script>
		<link href='http://fonts.googleapis.com/css?family=Jura:400' rel='stylesheet' type='text/css'>
		<!--Titre-->
		<title>Mathieu Larrieu</title>
	</head>	
	
	<body onload="init();">
			<header>
				<div id="name">
					<div id="nameAlign">
						<h1>Mathieu Larrieu</h1>
						<h3>Infographiste</h3>
					</div>
				</div>
				
				<nav>
					<ul id=navVerti>
						<li class="navS"><a href="../page/programmation.html">Programmation</a></li>
						<li class="navS"><a href="../page/infographie.html">Infographie</a></li>
						<li class="navS"><a href="../page/modelisation.html">Modélisation</a></li>
						<li class="navS"><a href="../index.html">Home</a></li>
					</ul>
					
					<ul id="navHori">
						<li class="navP2"><a href="../pagecontact.html">Contact</a></li>
						<li class="navS2"><a href="../page/cv.html">CV</a></li>
					</ul>
				</nav> 
			</header>
			
			<main>
				<div id="mail">
					<h1 class="titre">Contactez-moi</h1>
					<p>larrieu.mathieu.v@gmail.com</p>
				</div>
				
				<?php  echo '<h2 id="mailgo">Message envoyé!</h2>';?>
				
				<form action="contact.php" method="post" enctype="application/x-www-form-urlencoded" name="formulaire">
					<p>Nom</p>
					<input class="text" type="text" name="nom" />
					<p>Email</p>
					<input class="text" type="text" name="mail" />
					<p>Objet</p>
					<input class="text" type="text" name="objet" />
					<p>Message</p>
					<textarea class="textar" name="message" rows=5 cols=30></textarea>
					<input class="valide" type="submit" value="Envoyer">
				</form>
			</main>
			
			<footer>
				<p>&copy; 2014 by Mathieu Larrieu</p>
			</footer>
		
			
	</body>
</html>