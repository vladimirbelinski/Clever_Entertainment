/* Arquivo: newsContent.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
   			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele pode ser encontrado o código utilizado para
			  executar e exibir o template da página de notícias, bem como os dados que serão inseridos em cada card de notícia.
*/

$(document).ready(function() {
	var news = { input: [
		{imageSrc: "images/news/produce101.jpg", altDescr: "Imagem dos contestantes e da apresentadora de Produce 101 no palco principal do programa", cardTitle: "PRODUCE 101", newsDate: "[05/04/2017]", newsTitle: "Clever Entertainment terá trainee participando do Produce 101", newsContent: "Em breve iniciará a segunda temporada de Produce 101, este ano com 101 trainess meninos disputando 11 vagas em um novo grupo. Na disputa estará também o trainee Ong Seong Woo da Clever Entertainment. O primeiro episódio será televisionado dia 07 de abril pela Mnet. Mostre apoio a nosso trainee!"},
		{imageSrc: "images/news/monstax-beautiful.jpg", altDescr: "Imagem dos integrantes do grupo Monsta X sentados", cardTitle: "Monsta X", newsDate: "[21/03/2017]", newsTitle: "Monsta X lança seu novo álbum: THE CLAN pt.2.5 [BEAUTIFUL]", newsContent: "Contendo 8 faixas, THE CLAN pt.2.5 [BEAUTIFUL] é o sexto álbum do grupo."},
		{imageSrc: "images/news/bts.jpg", altDescr: "Imagem dos integrantes do grupo BTS sentados no chão de um quarto", cardTitle: "BTS", newsDate: "[23/02/2017]", newsTitle: "BTS participa do primeiro episódio do New Yang Nam Show", newsContent: "Os integrantes do grupo foram os primeiros convidados desta temporada do show. No episódio, conversaram e participaram de brincadeiras juntamente com os hosts Yang Se-hyeong e Eric Nam."},
		{imageSrc: "images/news/mark.jpg", altDescr: "Imagem de Mark Lee sendo entrevistado em episódio do High School Rapper", cardTitle: "NCT", newsDate: "[08/02/2017]", newsTitle: "Mark, do NCT, participará da segunda temporada do High School Rapper", newsContent: "O integrante do grupo NCT, Mark Lee, estará participando da segunda temporada do High School Rapper, que iniciará a ser televisionada no dia 10 de fevereiro pela Mnet. Estamos na torcida por ele!"},
		{imageSrc: "images/news/blackpink.jpg", altDescr: "Imagem das integrantes do grupo Blackpink recebendo o prêmio de Best New Artist no Seoul Music Awards 2017", cardTitle: "BLACKPINK", newsDate: "[20/01/2017]", newsTitle: "BLACKPINK ganha prêmio no Seoul Music Awards 2017", newsContent: "O grupo BLACKPINK ganhou o prêmio de Best New Artist no Seoul Music Awards 2017. O evento ocorreu em 19/01/2017 na Jamsil Arena, em Songpa District, Coreia do Sul, e reuniu os principais artistas atuais da indústria musical sul coreana."},
		{imageSrc: "images/news/twice-gda.jpg", altDescr: "Imagem das integrantes do grupo Twice recebendo um prêmio no Golden Disk Awards 2017", cardTitle: "TWICE", newsDate: "[14/01/2017]", newsTitle: "TWICE ganha prêmios no Golden Disk Awards 2017", newsContent: "O grupo TWICE ganhou os prêmios de Digital Daesang e Digital Bonsang por sua faixa \"Cheer Up\" no Golden Disk Awards 2017. O evento ocorreu em 13/01/2017 no KINTEX, em Goyang, Coreia do Sul."}
		//{imageSrc: "", altDescr: "", cardTitle: "", newsDate: "", newsTitle: "", newsContent: ""}
	]
			   };
	var source = $("#newsTemplate").html();
	var buildTemplate = Handlebars.compile(source);
	var output = buildTemplate(news);
	$("#newsContent").html(output);
	// Após os cards terem sido renderizados o footer é apresentado (para não aparecer o footer rapidamente no meio da página)
	$('#footer').removeClass('hiddenfooter');
});