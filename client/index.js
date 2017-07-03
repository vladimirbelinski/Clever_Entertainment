/* Arquivo: index.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do segundo trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele podem ser encontradas funções e
			  inicializações JS/jQuery necessárias para o funcionamento do trabalho, definições de dados de templates e rotas,
			  especificamente as de /index.
*/

import {
	Template
} from 'meteor/templating';
import {
	ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import './index.html';

// Definição das rotas para /index

Router.route('/', function () {
	this.layout('index_layout');
	this.render('header', {
		to: "header"
	});
	this.render('index', {
		to: "main"
	});
	this.render('footer', {
		to: "footer"
	});
});

Router.route('/index', function () {
	this.layout('index_layout');
	this.render('header', {
		to: "header"
	});
	this.render('index', {
		to: "main"
	});
	this.render('footer', {
		to: "footer"
	});
});

// Inicializações dos componentes js
Template.index.onRendered(function () {
	// Inicialização do parallax (para o conteúdo do segundo plano se mover em velocidade diferente do conteúdo do primeiro plano)
	$('.parallax').parallax();

	// Inicialização dos tabs
	$('ul.tabs').tabs();
});
