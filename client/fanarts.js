/* Arquivo: fanarts.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do segundo trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele podem ser encontradas funções e
			  inicializações JS/jQuery necessárias para o funcionamento do trabalho, definições de dados de templates e rotas,
			  especificamente as de /fanarts.
*/

import {
	Template
} from 'meteor/templating';
import {
	ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import './fanarts.html';

// Session para a quantidade de fanarts carregados cada vez que se atinge o final da página
Session.set("fanarts_limit", 6);
lastScrollTop = 0; // Última posição do scroll registrada

// Adição na página de mais 3 fanarts do banco cada vez que se atinge o final da página
$(window).scroll(function (event) {
	// Verificação de se está perto da parte inferior da janela
	if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		// Captura a posição atual do scroll na página:
		var scrollTop = $(this).scrollTop();
		// Verificação se a página está sendo scrolada para baixo
		if (scrollTop > lastScrollTop) {
			Session.set("fanarts_limit", Session.get("fanarts_limit") + 3);
		}
		// Atualização a última posição registrada
		lastScrollTop = scrollTop;
	}
});

// Definição da rota para /fanarts
Router.route('/fanarts', function () {
	this.layout('fanart_layout');
	this.render('header', {
		to: "header"
	});
	this.render('breadcrumbs_fanarts', {
		to: "breadcrumbs"
	});
	this.render('welcome', {
		to: "welcome"
	});
	this.render('add_fanart', {
		to: "add_fanart"
	});
	this.render('fanarts', {
		to: "fanarts"
	});
	this.render('footer', {
		to: "footer"
	});
});

// Inicializações dos componentes js
Template.fanarts.onRendered(function () {
	// Inicialização do componente modal
	$('.modal').modal();
});

// Helpers do template welcome
Template.welcome.helpers({
	usuario: function () {
		if (Meteor.user()) {
			if (Meteor.user().username) {
				return ", " + Meteor.user().username;
			} else if (Meteor.user().profile.name) {
				return ", " + Meteor.user().profile.name;
			}
		}
	},
});

// Delay para aguardar o retorno do BD
Template.header.onRendered(function () {
	$('#footer').addClass('hiddenfooter');
	setTimeout(function(){$('#footer').removeClass('hiddenfooter'); }, 2500);
});

// Helpers do template fanarts
Template.fanarts.helpers({
	images: Images.find({}, {
		sort: {
			created: -1
		}
	}),
	getUser: function (user_id) {
		var user = Meteor.users.findOne({
			_id: user_id
		});
		if (user) {
			if (user.username) {
				return user.username;
			} else if (user.profile.name) {
				return user.profile.name;
			}
		} else {
			return "Desconhecido";
		}
	},
	images: function () {
		if (Session.get("user_filter")) {
			return Images.find({
				createdBy: Session.get("user_filter")
			}, {
				sort: {
					created: -1,
					rating: -1
				},
				limit: Session.get("fanarts_limit")
			});
		} else {
			return Images.find({}, {
				sort: {
					created: -1,
					rating: -1
				},
				limit: Session.get("fanarts_limit")
			});
		}
	},
	active_filter: function () {
		if (Session.get("user_filter"))
			return true;
		else
			return false;
	},
	get_user_filter: function (userId, doc) {
		var user = Meteor.users.findOne({
			_id: Session.get("user_filter")
		});
		if (user) {
			if (user.username) {
				return user.username;
			} else if (user.profile.name) {
				return user.profile.name;
			}
		}
	},
	// Verificação para apresentação do botão de deletar
	verify_user: function (user_id) {
		var user = Meteor.users.findOne({
			_id: user_id
		});
		var userM = Meteor.user();
		if (user && userM) {
			if (userM.username != "undefined" && user.username != "undefined") {
				if (userM.username == user.username) return true;
			}
			else if (userM.profile.name != "undefined" && user.prfile.name != "undefined") {
				if (userM.profile.name == user.profile.name) return true;
			}
		}
		return false;
	},
});

// Eventos do template fanarts
Template.fanarts.events({
	'click #remove_image': function (events) {
		var image_id = this._id;
		$("#" + image_id).hide('slow', function () {
			Images.remove({
				"_id": image_id
			});
		});
	},
	'click .rate_image': function (event) {
		var stars_number = $(event.currentTarget).data("userrating");
		// This, nesse caso, se refere ao templaet que foi incluído
		var image_id = this.image_id;
		Images.update({
			_id: image_id
		}, {
			$set: {
				stars: stars_number
			}
		});
	},
	'click .filter': function (event) {
		Session.set("user_filter", this.createdBy);
	},
	'click .remove_filter': function (event) {
		Session.set("user_filter", undefined);
	},
	'load .materialboxed': function (event) {
		$('.materialboxed').materialbox();
	},
});

// Eventos do template add_fanart
Template.add_fanart.events({
	'click #cancel_fanart': function (events) {
		$('#src, #title, #author').val("");
		$('#src, #title, #author').removeClass('invalid valid');
		$('#url_error, #title_error, #author_error').text("");
	},
	'change #src': function (events) {
		if ($('#src').val() == "") {
			$('#src').addClass('invalid');
			$('#url_error').text("Preenchimento obrigatório");
		} else {
			$('#src').removeClass('invalid');
			$('#src').addClass('valid');
			$('#url_error').text("");
		}
	},
	'change #title': function (events) {
		if ($('#title').val() == "") {
			$('#title').addClass('invalid');
			$('#title_error').text("Preenchimento obrigatório");
		} else {
			$('#title').removeClass('invalid');
			$('#title').addClass('valid');
			$('#title_error').text("");
		}
	},
	'change #author': function (events) {
		if ($('#author').val() == "") {
			$('#author').addClass('invalid');
			$('#author_error').text("Preenchimento obrigatório");
		} else {
			$('#author').removeClass('invalid');
			$('#author').addClass('valid');
			$('#author_error').text("");
		}
	},
	'submit #form_fanart': function (events) {
		function checkSrc() {
			var state = true;
			if ($('#src').val() == "") {
				$('#src').addClass('invalid');
				$('#url_error').text("Preenchimento obrigatório");
				state = false;
			} else {
				$('#src').removeClass('invalid');
				$('#src').addClass('valid');
				$('#url_error').text("");
				state = true;
			}
			return state;
		}

		function checkTitle() {
			var state = true;

			if ($('#title').val() == "") {
				$('#title').addClass('invalid');
				$('#title_error').text("Preenchimento obrigatório");
				state = false;
			} else {
				$('#title').removeClass('invalid');
				$('#title').addClass('valid');
				$('#title_error').text("");
				state = true;
			}
			return state;
		}

		function checkAuthor() {
			var state = true;
			if ($('#author').val() == "") {
				$('#author').addClass('invalid');
				$('#author_error').text("Preenchimento obrigatório");
				state = false;
			} else {
				$('#author').removeClass('invalid');
				$('#author').addClass('valid');
				$('#author_error').text("");
				state = true;
			}
			return state;
		}
		var src = checkSrc();
		var title = checkTitle();
		var author = checkAuthor();

		// É verdadeiro somente se nenhuma verificação foi falha
		if (src && title && author) {
			var src_value = $("#src").val();
			var title_value = $("#title").val();
			var author_value = $("#author").val();
			Images.insert({
				src: src_value,
				title: title_value,
				author: author_value,
				created: new Date(),
				createdBy: Meteor.user()._id
			});
			// Para fechar o modal após enviar
			$('#form_fanart').modal('close');
			// Para não recarregar a página após uma inserção
			return false;
		} else {
			return false;
		}
	},
});
