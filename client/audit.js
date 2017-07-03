/* Arquivo: audit.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do segundo trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele podem ser encontradas funções e
			  inicializações JS/jQuery necessárias para o funcionamento do trabalho, definições de dados de templates e rotas,
			  especificamente as de /audit.
*/

import {
	Template
} from 'meteor/templating';
import {
	ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import './audit.html';

// Definição da rota para /audit
Router.route('/audit', function () {
	this.layout('common_layout');
	this.render('header', {
		to: "header"
	});
	this.render('breadcrumbs_audit', {
		to: "breadcrumbs"
	});
	this.render('audit', {
		to: "main"
	});
	this.render('footer', {
		to: "footer"
	});
});

// Inicializações dos componentes js
Template.audit.onRendered(function () {
	// Inicialização do material_select (para os selects)
	$('select').material_select();

	// Alterando as informações do datepicker para português
	$('.datepicker').pickadate({
		selectMonths: true, // Dropdown para controlar o mês
		selectYears: 50, // Dropdown de <param> anos para controlar o ano
		max: new Date('today'), // Seto a data máxima a ser escolhida para a data atual (today, pois não faz sentido uma entrada com data de nascimento futura)
		labelMonthNext: 'Próximo Mês',
		labelMonthPrev: 'Último Mês',
		labelMonthSelect: 'Selecione o mês',
		labelYearSelect: 'Selecione o ano',
		monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
		weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
		weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
		weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
		today: 'Hoje',
		clear: 'Limpar',
		close: 'Fechar',
		format: 'dd/mm/yyyy' // Formato da data a ser apresentada no elemento input
	});

	// Validações dos campos do formulário

	// Validação do nome
	function checkName() {
		// Essa Regex é utilizada para não permitir que sejam inseridos, por exemplo, números em um nome
		var pattLName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
		var state = true;

		if (($('#first_and_mid_name').val() != "") && !(pattLName.test($('#first_and_mid_name').val()))) {
			$('#first_and_mid_name').addClass('invalid');
			$('#first_and_mid_name_error').text("Nome em formato inválido. Favor não incluir números");
			state = false;
		} else if ($('#first_and_mid_name').val() == "") {
			$('#first_and_mid_name').addClass('invalid');
			$('#first_and_mid_name_error').text("Preenchimento obrigatório");
			state = false;
		} else {
			$('#first_and_mid_name').removeClass('invalid');
			$('#first_and_mid_name').addClass('valid');
			$('#first_and_mid_name_error').text("");
			state = true;
		}
		return state;
	}

	// Validação do sobrenome
	function checkLastName() {
		// Essa Regex é utilizada para não permitir que sejam inseridos, por exemplo, números em um sobrenome
		var pattLName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
		var state = true;

		if (($('#last_name').val() != "") && !(pattLName.test($('#last_name').val()))) {
			$('#last_name').addClass('invalid');
			$('#last_name_error').text("Sobrenome em formato inválido. Favor não incluir números");
			state = false;
		} else if ($('#last_name').val() == "") {
			$('#last_name').addClass('invalid');
			$('#last_name_error').text("Preenchimento obrigatório");
			state = false;
		} else {
			$('#last_name').removeClass('invalid');
			$('#last_name').addClass('valid');
			$('#last_name_error').text("");
			state = true;
		}
		return state;
	}

	// Validação da data de nascimento
	function checkDate() {
		var state = true;

		if ($('#birthday_date').val() == "") {
			$('#birthday_date').addClass('invalid');
			$('#birthday_date_error').text("Preenchimento obrigatório");
			state = false;
		} else {
			$('#birthday_date').removeClass('invalid');
			$('#birthday_date').addClass('valid');
			$('#birthday_date_error').text("");
			state = true;
		}
		return state;
	}

	//Validação do sexo
	function checkGender() {
		var state = true;
		$("input:radio.validate").each(function () {
			if ($(this).attr('disabled') != 'disabled') {
				var my_parent = $(this).closest('.input-field');
				if (!$('[name=' + $(this).attr('name') + ']').is(':checked')) {
					$('#gender_error').text("Preenchimento obrigatório");
					state = false
				} else {
					$('#gender_error').text("");
					state = true;
				}
			}
		});
		return state;
	}

	// Validação do email
	function checkEmail() {
		var pattEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
		var state = true;

		if (($('#email').val() != "") && !(pattEmail.test($('#email').val()))) {
			$('#email').addClass('invalid');
			$('#email_error').text("Email em formato inválido");
			state = false;
		} else if ($('#email').val() == "") {
			$('#email').addClass('invalid');
			$('#email_error').text("Preenchimento obrigatório");
			state = false;
		} else {
			$('#email').removeClass('invalid');
			$('#email').addClass('valid');
			$('#email_error').text("");
			state = true;
		}
		return state;
	}

	// Validação do telefone
	function checkPhone() {
		var pattPhone = new RegExp("[\+][0-9]{2}[\(][0-9]{2}[\)][0-9]{5}[\-][0-9]{4}");
		var state = true;

		if (($('#telephone').val() != "") && !(pattPhone.test($('#telephone').val()))) {
			$('#telephone').addClass('invalid');
			$('#telephone_error').text("Telefone em formato inválido");
			state = false;
		} else {
			$('#telephone').removeClass('invalid');
			$('#telephone').addClass('valid');
			$('#telephone_error').text("");
			state = true;
		}
		return state;
	}

	// Validação do select do país da audição
	function checkCountry() {
		var state = true;
		var e = document.getElementById("audit_country");
		var strUser = e.options[e.selectedIndex].text;

		if (strUser == "Escolha o país da audição (obrigatório)") {
			$('#audit_country_error').text("Preenchimento obrigatório");
			state = false;
		} else {
			$('#audit_country_error').text("");
			state = true;
		}
		return state;
	}

	// Validação do select da categoria da audição
	function checkCategory() {
		var state = true;

		if ($('#audit_category').val() == '') {
			$('#audit_category_error').text("Preenchimento obrigatório");
			state = false;
		} else {
			$('#audit_category_error').text("");
			state = true;
		}
		return state;
	}

	// Validação da descrição complementar
	function checkComplement() {
		$('#complement').addClass('valid');
		return true;
	}

	// Quando o formulário com id == audit_register é enviado, são realizadas as verificações
	$('#audit_register').submit(function () {
		var name = checkName();
		var lastname = checkLastName();
		var date = checkDate();
		var gender = checkGender();
		var email = checkEmail();
		var phone = checkPhone();
		var country = checkCountry();
		var category = checkCategory();
		var complement = checkComplement();
		// alert(name && lastname && date && gender && email && phone && country && category && complement);
		// É verdadeiro somente se nenhuma verificação foi falha
		if (name && lastname && date && gender && email && phone && country && category && complement){
			var name_value = $("#first_and_mid_name").val();
			var lastname_value = $("#last_name").val();
			var date_value =  $("#birthday_date").val();
			var gender_value =  $('input[name=cgender]:checked', '#audit_register').val();
			var email_value =  $("#email").val();
			var phone_value =  $("#telephone").val();
			var country_value =  $("#audit_country").val();
			var category_value =  $("#audit_category").val();
			var complement_value =  $("#complement").val();
			Auditions.insert({
				name: name_value,
				lastname: lastname_value,
				date: date_value,
				gender: gender_value,
				email: email_value,
				phone: phone_value,
				country: country_value,
				category: category_value,
				complement: complement_value
			});
			// Confirmação de envio
			swal({
				  title: "Submissão enviada com sucesso!",
				  type: "success",
				  confirmButtonColor: "#00897b",
				  confirmButtonText: "Fechar",
				  closeOnConfirm: true
				},
				function(){
				  // Limpando os campos após o envio
				  $("#first_and_mid_name, #last_name, #birthday_date, #email, #telephone, #complement").val("");
				  // Limpando a entrada do tipo radio
				  $('input[name=cgender]').attr('checked',false);
				  $("select#audit_country").val("");
				  // É necessário reinicializar o material_select após a mudança de valor do select
				  $('#audit_country').material_select();
				  $("select#audit_category").val("");
				  // É necessário reinicializar o material_select após a mudança de valor  do select
				  $('#audit_category').material_select();
				  // Removendo a classe valid
				  $("#first_and_mid_name, #last_name, #birthday_date, #email, #telephone, #complement, #audit_category, #audit_country, #audit_register").removeClass("valid");
			});
			return false;
		} else {
			return false;
		}
	});

	// A verificação de um campo também é feita quando sua entrada é alterada (além de no envio do formulário)
	$('#first_and_mid_name').change(function () {
		checkName();
	});

	$('#last_name').change(function () {
		checkLastName();
	});

	$('#birthday_date').change(function () {
		checkDate();
	});

	$('#radio-box').change(function () {
		checkGender();
	});

	$('#email').change(function () {
		checkEmail();
	});

	$('#telephone').change(function () {
		checkPhone();
	});

	$('#audit_country').change(function () {
		checkCountry();
	});

	$('#audit_category').change(function () {
		checkCategory();
	});

	$('#complement').change(function () {
		checkComplement();
	});
});
