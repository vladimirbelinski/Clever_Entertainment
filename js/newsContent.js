// Código Javascript para executar e exibir o template com as notícias
$(document).ready(function() {
	var news = { input: [
		{imageSrc: "images/news/produce101.jpg", altDescr: "Produce 101", cardTitle: "PRODUCE 101", newsDate: "[05/04/2017]", newsTitle: "Clever Entertainment terá trainee participando do Produce 101", newsContent: "Em breve iniciará a segunda temporada de Produce 101, este ano com 101 trainess meninos disputando 11 vagas em um novo grupo. Na disputa estará também o trainee Ong Seong Woo da Clever Entertainment. O primeiro episódio será televisionado dia 07 de abril pela Mnet. Mostre apoio a nosso trainee!"},
		{imageSrc: "images/news/monstax-beautiful.jpg", altDescr: "Monsta X", cardTitle: "Monsta X", newsDate: "[21/03/2017]", newsTitle: "Monsta X lança seu novo álbum: THE CLAN pt.2.5 [BEAUTIFUL]", newsContent: "Contendo 8 faixas, THE CLAN pt.2.5 [BEAUTIFUL] é o sexto álbum do grupo."},
		{imageSrc: "images/news/bts.jpg", altDescr: "BTS", cardTitle: "BTS", newsDate: "[23/02/2017]", newsTitle: "BTS participa do primeiro episódio do New Yang Nam Show", newsContent: "Os integrantes do grupo foram os primeiros convidados desta temporada do show. No episódio, conversaram e participaram de brincadeiras juntamente com os hosts Yang Se-hyeong e Eric Nam."},
		{imageSrc: "images/news/mark.jpg", altDescr: "NCT Mark", cardTitle: "NCT", newsDate: "[08/02/2017]", newsTitle: "Mark, do NCT, participará da segunda temporada do High School Rapper", newsContent: "O integrante do grupo NCT, Mark Lee, estará participando da segunda temporada do High School Rapper, que iniciará a ser televisionada no dia 10 de fevereiro pela Mnet. Estamos na torcida por ele!"},
		{imageSrc: "images/news/blackpink.jpg", altDescr: "BLACKPINK", cardTitle: "BLACKPINK", newsDate: "[20/01/2017]", newsTitle: "BLACKPINK ganha prêmio no Seoul Music Awards 2017", newsContent: "O grupo BLACKPINK ganhou o prêmio de Best New Artist no Seoul Music Awards 2017. O evento ocorreu em 19/01/2017 na Jamsil Arena, em Songpa District, Coreia do Sul, e reuniu os principais artistas atuais da indústria musical sul coreana."},
		{imageSrc: "images/news/twice-gda.jpg", altDescr: "TWICE", cardTitle: "TWICE", newsDate: "[14/01/2017]", newsTitle: "TWICE ganha prêmios no Golden Disk Awards 2017", newsContent: "O grupo TWICE ganhou os prêmios de Digital Daesang e Digital Bonsang por sua faixa \"Cheer Up\" no Golden Disk Awards 2017. O evento ocorreu em 13/01/2017 no KINTEX, em Goyang, Coreia do Sul."}
		//{imageSrc: "", altDescr: "", cardTitle: "", newsDate: "", newsTitle: "", newsContent: ""}
	]
			   };
	var source = $("#newsTemplate").html();
	var buildTemplate = Handlebars.compile(source);
	var output = buildTemplate(news);
	$("#newsContent").html(output);
	// Após os cards terem sido renderizados o footer é apresentado
	$('#newsFooterDelayed').removeClass('hiddenfooter');
});