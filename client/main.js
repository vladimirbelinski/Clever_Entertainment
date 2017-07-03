/* Arquivo: main.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do segundo trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele podem ser encontradas funções e
			  inicializações JS/jQuery necessárias para o funcionamento do trabalho.
*/

import {
	Template
} from 'meteor/templating';
import {
	ReactiveVar
} from 'meteor/reactive-var';
import './main.html';

// Configuração de accounts para aceitar username e email
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

// Inicializações dos componentes js
Template.header.onRendered(function () {
	// Inicialização do sideNav (para o menu reduzido)
	$('.button-collapse').sideNav();
	// $("#login-sign-in-link").replaceWith("<a class=\"login-link-text\" id=\"login-sign-in-link\">Entrar</a>");
});
