/* Arquivo: artistsContent.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
   			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele pode ser encontrado o código utilizado para
			  executar e exibir o template da página de artistas, bem como os dados que serão inseridos em cada card de artista.
*/

$(document).ready(function() {
	var artists = { input: [
		{caption: "BLACKPINK", imageSrc: "images/artists/blackpink.jpg", alt: "Imagem do grupo Blackpink", chip1: "Grupo feminino", chip2: "K-pop"},
		{caption: "BTS (Bangtan Boys)", imageSrc: "images/artists/bts.jpg", alt: "Imagem do grupo Bangtan Boys (BTS)", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "Choi Siwon", imageSrc: "images/artists/choi-siwon.jpg", alt: "Imagem do artista Choi Siwon", chip1: "Ator", chip2: "Cantor"},
		{caption: "Go Ara", imageSrc: "images/artists/go-ara.png", alt: "Imagem da artista Go Ara", chip1: "Atriz", chip2: "Modelo"},
		{caption: "Monsta X", imageSrc: "images/artists/monsta-x.jpg", alt: "Imagem do grupo Monsta X", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "NCT 127", imageSrc: "images/artists/nct.jpg", alt: "Imagem do grupo NCT 127", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "SHINee", imageSrc: "images/artists/shinee.jpg", alt: "Imagem do grupo Shinee", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "TWICE", imageSrc: "images/artists/twice.jpg", alt: "Imagem do grupo Twice", chip1: "Grupo feminino", chip2: "K-pop"},
		{caption: "VIXX", imageSrc: "images/artists/vixx.jpg", alt: "Imagem do grupo VIXX", chip1: "Grupo masculino", chip2: "K-pop"}
		//{caption: "", imageSrc: "", chip1: "", chip2: ""}
	]
			   };
	var source = $("#artistsTemplate").html();
	var buildTemplate = Handlebars.compile(source);
	var output = buildTemplate(artists);
	$("#artistsContent").html(output);
	// Após os cards terem sido renderizados o footer é apresentado (para não aparecer o footer rapidamente no meio da página)
	$('#footer').removeClass('hiddenfooter');
});