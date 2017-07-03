/* Arquivo: artists.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do segundo trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele podem ser encontradas funções e
			  inicializações JS/jQuery necessárias para o funcionamento do trabalho, definições de dados de templates e rotas,
			  especificamente as de /artists.
*/

import {
	Template
} from 'meteor/templating';
import {
	ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import './artists.html';

// Dados que prencherão o template artists
var artists_data = [
	{
		caption: "BLACKPINK",
		imageSrc: "images/artists/blackpink.jpg",
		alt: "Imagem do grupo Blackpink",
		chip1: "Grupo feminino",
		chip2: "K-pop"
	},
	{
		caption: "BTS (Bangtan Boys)",
		imageSrc: "images/artists/bts.jpg",
		alt: "Imagem do grupo Bangtan Boys (BTS)",
		chip1: "Grupo masculino",
		chip2: "K-pop"
	},
	{
		caption: "Choi Siwon",
		imageSrc: "images/artists/choi-siwon.jpg",
		alt: "Imagem do artista Choi Siwon",
		chip1: "Ator",
		chip2: "Cantor"
	},
	{
		caption: "Go Ara",
		imageSrc: "images/artists/go-ara.png",
		alt: "Imagem da artista Go Ara",
		chip1: "Atriz",
		chip2: "Modelo"
	},
	{
		caption: "Monsta X",
		imageSrc: "images/artists/monsta-x.jpg",
		alt: "Imagem do grupo Monsta X",
		chip1: "Grupo masculino",
		chip2: "K-pop"
	},
	{
		caption: "NCT 127",
		imageSrc: "images/artists/nct.jpg",
		alt: "Imagem do grupo NCT 127",
		chip1: "Grupo masculino",
		chip2: "K-pop"
	},
	{
		caption: "SHINee",
		imageSrc: "images/artists/shinee.jpg",
		alt: "Imagem do grupo Shinee",
		chip1: "Grupo masculino",
		chip2: "K-pop"
	},
	{
		caption: "TWICE",
		imageSrc: "images/artists/twice.jpg",
		alt: "Imagem do grupo Twice",
		chip1: "Grupo feminino",
		chip2: "K-pop"
	},
	{
		caption: "VIXX",
		imageSrc: "images/artists/vixx.jpg",
		alt: "Imagem do grupo VIXX",
		chip1: "Grupo masculino",
		chip2: "K-pop"
	},
	];
Template.artists.helpers({
	artists_array: artists_data
});

// Definição da rota para /artists
Router.route('/artists', function () {
	this.layout('common_layout');
	this.render('header', {
		to: "header"
	});
	this.render('breadcrumbs_artists', {
		to: "breadcrumbs"
	});
	this.render('artists', {
		to: "main"
	});
	this.render('footer', {
		to: "footer"
	});
});

// Inicializações dos componentes js
Template.artists.rendered = function () {
	// Inicialização do materialbox (para imagens serem aumentadas e reduzidas suavemente)
	$('.materialboxed').materialbox();
};
