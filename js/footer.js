/* Arquivo: footer.js
	 Autor: Vladimir Belinski 
	 Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
	 			CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele é encontrado o código comum (referente ao
				footer) a todas as páginas.
*/

$("#commonFooter").html(
	"<div class=\"container\">\
	<div class=\"row\">\
		<!-- Logo da empresa -->\
		<div class=\"col s12 m5 center hiddenprint\">\
			<picture>\
				<source media=\"(min-width: 993px)\" srcset=\"images/footer/logo.jpg\">\
				<source media=\"(min-width: 200px)\" srcset=\"images/footer/logoSmall.jpg\">\
				<img src=\"images/footer/logo.jpg\" alt=\"Logo da Clever Entertainment\" style=\"width:auto\">\
			</picture>\
		</div>\
		<!-- Contato da empresa -->\
		<div class=\"col s5 offset-s1 m3 offset-m1\">\
			<h5 class=\"white-text\">Contato</h5>\
			<p class=\"white-text\">+55(49)3333-3333 contact@clever.com</p>\
		</div>\
		<!-- Links para outras mídias da empresa -->\
		<div class=\"col s5 offset-s1 m3 hiddenprint\">\
			<h5 class=\"white-text\">Nos siga</h5>\
			<a href=\"https://open.spotify.com/user/vladimirbelinski\">\
				<picture class=\"hiddenprint\">\
					<source media=\"(min-width: 993px)\" srcset=\"images/footer/spotify.png\">\
					<source media=\"(min-width: 200px)\" srcset=\"images/footer/spotifySmall.png\">\
					<img src=\"images/footer/spotify.png\" alt=\"Logo do Spotify\" style=\"width:auto\">\
				</picture>\
			</a>\
			<a href=\"https://www.facebook.com/vlbelinski\">\
				<picture class=\"hiddenprint\">\
					<source media=\"(min-width: 993px)\" srcset=\"images/footer/facebook.png\">\
					<source media=\"(min-width: 200px)\" srcset=\"images/footer/facebookSmall.png\">\
					<img src=\"images/footer/facebook.png\" alt=\"Logo do Facebook\" style=\"width:auto\">\
				</picture>\
			</a>\
			<a href=\"https://github.com/vladimirbelinski/Projeto_1__WEB\">\
				<picture class=\"hiddenprint\">\
					<source media=\"(min-width: 993px)\" srcset=\"images/footer/github.png\">\
					<source media=\"(min-width: 200px)\" srcset=\"images/footer/githubSmall.png\">\
					<img src=\"images/footer/github.png\" alt=\"Logo do GitHub\" style=\"width:auto\">\
				</picture>\
			</a>\
		</div>\
	</div>\
</div>\
<!-- Div de direitos autorais-->\
<div class=\"footer-copyright grey darken-4\">\
	<div class=\"container\">\
		<span lang=\"en\">Copyright</span> © 2017 <span lang=\"en\">CLEVER ENTERTAINMENT</span>, TODOS OS DIREITOS RESERVADOS.\
	</div>\
</div>");