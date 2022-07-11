INSERT INTO `traductions` (`reference`, `description`)
VALUES
	('mentions', "Mentions légales"),
	('sent-error', "Retour quand l'envoi d'un email a échoué"),
	('read-more', "Pour voir plus d'info sur un texte coupé"),
	('404', "Message de page non trouvée"),
	('subscribe', "S'abonner à la newsletter");


INSERT INTO `traductions_content` (`traduction_id`, `body`, `lang`)
VALUES
	(1, "Legal Terms", "en"),
	(1, "Mentions légales", "fr"),
	(2, "Erreur lors de l'envoi du message", "fr"),
	(2, "An error occurred while sending the message", "en"),
	(3, "Lire la suite", "fr"),
	(3, "Read more", "en"),
	(4, "Sorry, the page you are looking for could not be found.", "en"),
	(4, "Désolé, cette page est introuvable", "fr"),
	(5, "Inscrivez-vous à notre newsletter", "fr"),
	(5, "Subscribe to our newsletter", "en");
