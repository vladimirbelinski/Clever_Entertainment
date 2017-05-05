// Código Javascript para executar e exibir o template com os artistas
$(document).ready(function() {
	var artists = { input: [
		{caption: "BLACKPINK", imageSrc: "images/artists/blackpink.jpg", chip1: "Grupo feminino", chip2: "K-pop"},
		{caption: "BTS (Bangtan Boys)", imageSrc: "images/artists/bts.jpg", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "Choi Siwon", imageSrc: "images/artists/choi-siwon.jpg", chip1: "Ator", chip2: "Cantor"},
		{caption: "Go Ara", imageSrc: "images/artists/go-ara.png", chip1: "Atriz", chip2: "Modelo"},
		{caption: "Monsta X", imageSrc: "images/artists/monsta-x.jpg", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "NCT 127", imageSrc: "images/artists/nct.jpg", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "SHINee", imageSrc: "images/artists/shinee.jpg", chip1: "Grupo masculino", chip2: "K-pop"},
		{caption: "TWICE", imageSrc: "images/artists/twice.jpg", chip1: "Grupo feminino", chip2: "K-pop"},
		{caption: "VIXX", imageSrc: "images/artists/vixx.jpg", chip1: "Grupo masculino", chip2: "K-pop"}
		//{caption: "", imageSrc: "", chip1: "", chip2: ""}
	]
			   };
	var source = $("#artistsTemplate").html();
	var buildTemplate = Handlebars.compile(source);
	var output = buildTemplate(artists);
	$("#artistsContent").html(output);
	// Após os cards terem sido renderizados o footer é apresentado
	$('#artistsFooterDelayed').removeClass('hiddenfooter');
});