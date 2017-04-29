// Inicialização do button-collapse e do parallax
(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    });
})(jQuery);   

// Inicialização dos selects
$(document).ready(function() {
		$('select').material_select();
});

// Alterando as informações do datepicker para português
$('.datepicker').pickadate({
		selectMonths: true, // Dropdown para controlar o mês
		selectYears: 50, // Dropdown de <param> anos para controlar o ano
		max: new Date('today'), // Seto a data máxima a ser escolhida para a data atual (today, pois não faz sentido uma entrada com data de nascimento futura)
		labelMonthNext: 'Próximo Mês',
		labelMonthPrev: 'Último Mês',
		labelMonthSelect: 'Selecione o mês',
		labelYearSelect: 'Selecione o ano',
		monthsFull: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
		monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
		weekdaysFull: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
		weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
		weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
		today: 'Hoje',
		clear: 'Limpar',
		close: 'Fechar',
		format: 'dd/mm/yyyy' // Formato da data a ser apresentada no elemento input
});

// Validações dos campos do formulário

// Validação do nome
function checkName() {
  var pattLName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
  var state = true;
	
  if (($('#first_and_mid_name').val() != "") && !(pattLName.test(($('#first_and_mid_name').val())))) {
	  $('#first_and_mid_name').addClass('invalid');
	  document.getElementById("first_and_mid_name_error").innerHTML = "Nome em formato inválido";
	  state= false;
  }
  else if ($('#first_and_mid_name').val() == "") {
	  $('#first_and_mid_name').addClass('invalid');
	  document.getElementById("first_and_mid_name_error").innerHTML = "Preenchimento obrigatório";
	  state = false;
  }
  else {
	  $('#first_and_mid_name').removeClass('invalid');
	  $('#first_and_mid_name').addClass('valid') ;
	  document.getElementById("first_and_mid_name_error").innerHTML = "";
	  state = true;
  }
  return state;
}

// Validação do sobrenome
function checkLastName() {
  var pattLName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
	var state = true;
	
  if (($('#last_name').val() != "") && !(pattLName.test(($('#last_name').val())))) {
	  $('#last_name').addClass('invalid');
	  document.getElementById("last_name_error").innerHTML = "Sobrenome em formato inválido";
	  state= false;
  }
  else if ($('#last_name').val() == "") {
	  $('#last_name').addClass('invalid');
	  document.getElementById("last_name_error").innerHTML = "Preenchimento obrigatório";
	  state= false;
  }
  else {
	  $('#last_name').removeClass('invalid');
	  $('#last_name').addClass('valid') ;
	  document.getElementById("last_name_error").innerHTML = "";
	  state= true;
  }
  return state;
}

// Validação da data de nascimento
function checkDate() {
  var state = true;
	
  if ($('#birthday_date').val() == "") {
	  $('#birthday_date').addClass('invalid');
	  document.getElementById("birthday_date_error").innerHTML = "Preenchimento obrigatório";
	  state= false;
  }
  else {
	  $('#birthday_date').removeClass('invalid');
	  $('#birthday_date').addClass('valid') ;
	  document.getElementById("birthday_date_error").innerHTML = "";
	  state= true;
  }
  return state;
}

//Validação do sexo
//function checkGender() {
//  var state = true;
//  $("input:radio.validate").each(function(){
//    if($(this).attr('disabled') != 'disabled'){
//      var my_parent = $(this).closest('.input-field');
//      if(!$('[name='+$(this).attr('name')+']').is(':checked')){
//        if($(my_parent).children('.warning').length < 1){
//          $(this).parent().css("border","solid red 2px");
//          $(this).parent().css("padding-top","1px");
//          $('label[name='+$(this).attr('name')+']').css('top', '0.1rem');
//          $(my_parent).append('<div class="col m12 s12 warning"><div style="color: #F44336; margin-top: 15px; margin-left:-10px; font-size: 0.8rem;">Preenchimento obrigatório</div></div>');
//        }
//		state = false
//	  }
//	else{
//        if($(my_parent).find('.warning').length > 1){
//          $(this).parent().removeAttr("style");
//          $('label[name='+$(this).attr('name')+']').removeAttr('style');
//          $(my_parent).find('.warning').remove()
//		  state = true;
//        }
//      }
//    }
//  });
//	return state;
////  if(!bol_continue){
////    e.preventDefault();
////    return false;
////  };
//}

function checkGender() {
  var state = true;
  $("input:radio.validate").each(function(){
    if($(this).attr('disabled') != 'disabled'){
      var my_parent = $(this).closest('.input-field');
      if(!$('[name='+$(this).attr('name')+']').is(':checked')){
        document.getElementById("gender_error").innerHTML = "Preenchimento obrigatório";
		state = false
	  }
	else{
		document.getElementById("gender_error").innerHTML = "";
		state = true;
    }
    }
  });
	return state;
}


// Validação do email
function checkEmail() {
  var pattEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  var state= true;
	
  if (($('#email').val() != "") && !(pattEmail.test(($('#email').val())))) {
	  $('#email').addClass('invalid');
	  document.getElementById("email_error").innerHTML = "Email em formato inválido";
	  state= false;
  }
  else if ($('#email').val() == "") {
	  $('#email').addClass('invalid');
	  document.getElementById("email_error").innerHTML = "Preenchimento obrigatório";
	  state= false;
  }
  else {
	  $('#email').removeClass('invalid');
	  $('#email').addClass('valid') ;
	  document.getElementById("email_error").innerHTML = "";
	  state= true;
  }
  return state;
}

// Validação do telefone
function checkPhone() {
  var pattPhone = new RegExp("[\+][0-9]{2}[\(][0-9]{2}[\)][0-9]{5}[\-][0-9]{4}");
  var state = true;
  
  if (($('#telephone').val() != "") && !(pattPhone.test(($('#telephone').val())))) {
	  $('#telephone').addClass('invalid');
	  document.getElementById("telephone_error").innerHTML = "Telefone em formato inválido"; 
	  state= false;
  }
  else {
	  $('#telephone').removeClass('invalid');
	  $('#telephone').addClass('valid') ;
	  document.getElementById("telephone_error").innerHTML = "";
	  state= true;
  }
	return state;
}

// Validação do select do país da audição
function checkCountry() {
  var state = true;
	var e = document.getElementById("audit_country");
	var strUser = e.options[e.selectedIndex].text;

  if (strUser == "Escolha o país da audição *") {
	  document.getElementById("audit_country_error").innerHTML = "Preenchimento obrigatório";
	  state= false;
  }
  else {
	  document.getElementById("audit_country_error").innerHTML = "";
	  state= true;
  }
  return state;
}

// Validação do select da categoria da audição
function checkCategory() {
  var state = true;
	
  if ($('#audit_category').val() == '') {
	  document.getElementById("audit_category_error").innerHTML = "Preenchimento obrigatório";
	  state= false;
  }
  else {
	  document.getElementById("audit_category_error").innerHTML = "";
	  state= true;
  }
  return state;
}

// Validação da descrição complementar
function checkComplement() {
	$('#complement').addClass('valid') ;
	return true;
}

// Quando o formulário com id == audit_register é enviado são realizadas as verificações
$('#audit_register').submit(function() {
  var name = checkName();
  var lastname = checkLastName();
  var date = checkDate();
  var gender = checkGender();
  var email = checkEmail();
  var phone = checkPhone();
  var country = checkCountry();
  var category = checkCategory();
  var complement = checkComplement();
  // window.alert(name && lastname && date && gender && email && phone && country && category && complement);
  // É retornado verdadeiro somente se nenhuma verificação foi falha
  return (name && lastname && date && gender && email && phone && country && category && complement);
});

// A verificação de um campo também é feita quando sua entrada é alterada (além de no envio do formulário)
$('#first_and_mid_name').change(function() {
  checkName();
});

$('#last_name').change(function() {
  checkLastName();
});

$('#birthday_date').change(function() {
  checkDate();
});

$('#radio-box').change(function() {
  checkGender();
});

$('#email').change(function() {
  checkEmail();
});

$('#telephone').change(function() {
  checkPhone();
});

$('#audit_country').change(function() {
  checkCountry();
});

$('#audit_category').change(function() {
  checkCategory();
});

$('#complement').change(function() {
  checkComplement();
})

//function validateForm() {
//	
//	var first_and_mid_name = document.forms["audit_register"]["first_and_mid_name"].value;
//    var last_name = document.forms["audit_register"]["last_name"].value;
//	var email = document.forms["audit_register"]["email"].value;
//	var telephone = document.forms["audit_register"]["telephone"].value;
//	var audit_country = document.forms["audit_register"]["audit_country"].value;
//	
//	var pattLName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$");
//	var pattPhone = new RegExp("[\+]\d{2}[\(]\d{2}[\)]\d{5}[\-]\d{4}");
//	var pattEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
//	
//	// Validação do nome
//	if ((first_and_mid_name != "") && !(pattLName.test(first_and_mid_name))) {
//		document.getElementById("first_and_mid_name_error").innerHTML = "Nome em formato inválido"; 
//	}
//	else if (first_and_mid_name == "") {
//        document.getElementById("first_and_mid_name_error").innerHTML = "Preenchimento obrigatório";
//    }
//	else {
//        document.getElementById("first_and_mid_name_error").innerHTML = "";
//    }
//	
//	// Validação do sobrenome
//	if ((last_name != "") && !(pattLName.test(last_name))) {
//		document.getElementById("last_name_error").innerHTML = "Sobrenome em formato inválido"; 
//	}
//	else if (last_name == "") {
//		document.getElementById("last_name_error").innerHTML = "Preenchimento obrigatório";
//    }
//	else {
//        document.getElementById("last_name_error").innerHTML = "";
//    }
//	
//	// Validação do email
//	if ((email != "") && !(pattEmail.test(email))) {
//		document.getElementById("email_error").innerHTML = "Email em formato inválido"; 
//	}
//	else if (email == "") {
//        document.getElementById("email_error").innerHTML = "Preenchimento obrigatório";
//    }
//	else {
//        document.getElementById("email_error").innerHTML = "";
//    }
//	
//	// Validação do telefone
//	if ((telephone != "") && !(pattPhone.test(telephone))) {
//		document.getElementById("telephone_error").innerHTML = "Telefone em formato inválido"; 
//	}
//	else {
//        document.getElementById("telephone_error").innerHTML = "";
//    }
//	
//	// Validação do select de país
//	if (audit_country == "") {
//        document.getElementById("audit_country_error").innerHTML = "Preenchimento obrigatório";
//    }
//	else {
//        document.getElementById("audit_country_error").innerHTML = "";
//    }
//}