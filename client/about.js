/* Arquivo: about.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do segundo trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele podem ser encontradas funções e
			  inicializações JS/jQuery necessárias para o funcionamento do trabalho, definições de dados de templates e rotas,
			  especificamente as de /about.
*/

import {
	Template
} from 'meteor/templating';
import {
	ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import './about.html';

// Definição da rota para /about
Router.route('/about', function () {
	this.layout('common_layout');
	this.render('header', {
		to: "header"
	});
	this.render('breadcrumbs_about', {
		to: "breadcrumbs"
	});
	this.render('about', {
		to: "main"
	});
	this.render('footer', {
		to: "footer"
	});
});

// Inicializações dos componentes js
Template.about.onRendered(function () {
	// Inicialização do collapsible
	$('.collapsible').collapsible();

	// Inicialização do carousel (utilizado em '/about' para as logos de parceiros)
	$('.carousel').carousel();
});
