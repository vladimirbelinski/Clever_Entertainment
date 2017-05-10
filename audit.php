<!-- Arquivo: audit.php
	 Autor: Vladimir Belinski 
	 Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
	 			CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele, é desenvolvida a seção de audições, que
				consiste em um formulário para agendamento de audição.
-->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>:: Clever Entertainment ::</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <link rel="shortcut icon" type="image/x-icon" href="images/logo_icon.png" />
    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/materialize.min.css" type="text/css" rel="stylesheet" media="screen,projection,print"/>
    <link href="css/myStyles.css" type="text/css" rel="stylesheet" media="screen,projection,print"/>
</head>
    
<body>
	<!-- Cabeçalho da página -->
    <header>
		<!-- Inclusão do menu de navegação comum a todas as páginas. O código do menu de navegação pode ser encontrado em 'includes/nav.php' -->
		<?php include('includes/nav.php'); ?>
		<!-- Breadcrumbs -->
		<nav class="my_breadcrumbs" role="navigation">
			<div class="nav-wrapper">
				<div class="col s12 teal lighten-2">
					<a href="index.php" class="breadcrumb">Home</a>
					<a class="breadcrumb">Audições</a>
				</div>
			</div>
		</nav>
	</header>
    
    <main>		
        <div class="container">
			<div class="section">
				<section>
					<!-- Título informativo da página com ícone -->
					<div class="row">
						<div class="col s12">
							<h5 class="grey-text text-darken-4 center"><i class="material-icons hiddenprint" aria-hidden="true">language</i> CADASTRO PARA AUDIÇÃO GLOBAL</h5>
						</div>
					</div>
					<div class="row">
						<!-- Formulário de cadastro de audição. Aqui é feito uso de componentes sob o grupo 'forms' do Materialize. Alguns desse componentes não fazem uso de JS. Por sua vez, outros fazem (e.g.: selects). Ademais, cada campo do formulário também apresenta um ícone -->
						<form id="audit_register" name="audit_register" class="col s12">
							<div class="row">
								<!-- Campo de inserção de nome - tipo text. Esse campo é validado em 'js/myScript.js', sendo obrigatório e não aceitando, por exemplo, entradas com números. Uma descrição do campo pode ser encontrada em seu placeholder e sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m12 l6 xl6">
									<i class="material-icons hiddenprint prefix">account_circle</i>
									<input type="text" id="first_and_mid_name" name="first_and_mid_name" placeholder="Nome *" autofocus>
									<label for="first_and_mid_name" class="sr-only">Nome *</label>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error" id="first_and_mid_name_error"></div>
								</div>
								<!-- Campo de inserção de sobrenome - tipo text. Esse campo é validado em 'js/myScript.js', sendo obrigatório e não aceitando, por exemplo, entradas com números. Uma descrição do campo pode ser encontrada em seu placeholder e sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m12 l6 xl6">
									<i class="material-icons hiddenprint prefix">account_circle</i>
									<input type="text" id="last_name" name="last_name" placeholder="Sobrenome *">
									<label for="last_name" class="sr-only">Sobrenome *</label>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error" id="last_name_error"></div>
								</div>
							</div>
							<div class="row">
								<!-- Campo de inserção de data de nascimento - tipo date. Aqui é feito uso da classe datepicker, a qual apresenta um layout muito interessante para a escolha de uma data. Esse campo é validado em 'js/myScript.js', sendo obrigatório. Ademais, no mesmo arquivo é realizada configuração para que as informações do datepicker apareçam em português, para que a data de nascimento seja no máximo a data atual, etc. Uma descrição do campo pode ser encontrada em seu placeholder e sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m6 l6 xl6">
									<i class="material-icons hiddenprint prefix">today</i>
									<input type="date" id="birthday_date" name="birthday_date" placeholder="Data de nascimento *" class="datepicker picker__input" required>
									<label for="birthday_date" class="sr-only">Data de nascimento *</label>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error" id="birthday_date_error"></div>
								</div>
								<!-- Campo de inserção de sexo - tipo radio. Esse campo é validado em 'js/myScript.js', sendo obrigatório. Sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m6 l6 xl6">											
									<i class="material-icons hiddenprint prefix">perm_identity</i>
									<label for="cgender" class="sr-only">Sexo *</label>
									<div class="radio-box" id="radio-box">
										<input type="radio" id="gender_male" name="cgender" class="with-gap validate"/>
										<label name="cgender" for="gender_male">Masculino</label>
										<input type="radio" id="gender_female" name="cgender"  class="with-gap"/>
										<label name="cgender" for="gender_female">Feminino</label>
										<input type="radio" id="gender_other" name="cgender" class="with-gap"/>
										<label name="cgender" for="gender_other">Outro</label>
									</div>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error_radio" id="gender_error"></div>
								</div>
							</div>
							<div class="row">
								<!-- Campo de inserção de email - tipo email. Esse campo é validado em 'js/myScript.js', sendo obrigatório e aceitando somente entradas no formato info@info.info. Uma descrição do campo pode ser encontrada em seu placeholder e sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m12 l6 xl6">
									<i class="material-icons hiddenprint prefix">email</i>
									<input type="email" id="email" name="email" placeholder="Email * (e.g. nome@provedor.com)">
									<label for="email" class="sr-only">Email *</label>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error" id="email_error"></div>
								</div>
								<!-- Campo de inserção de telefone - tipo tel. Esse campo é validado em 'js/myScript.js', sendo obrigatório e aceitando somente entradas no formato +xx(xx)xxxxx-xxxx. Uma descrição do campo pode ser encontrada em seu placeholder e sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m12 l6 xl6">
									<i class="material-icons hiddenprint prefix">phone</i>
									<input type="tel" id="telephone" name="telephone" placeholder="Telefone: +xx(xx)xxxxx-xxxx">
									<label for="telephone" class="sr-only">Telefone</label>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error" id="telephone_error"></div>
								</div>
							</div>
							<div class="row">
								<!-- Campo de seleção de categoria(s) para audição - select múltiplo. Esse campo é validado em 'js/myScript.js', sendo obrigatório. Ademais, consiste em um select múltiplo e, por consistir em um select, também é incializado em 'js/myScript.js'. Uma descrição do campo pode ser encontrada em seu primeiro item, o qual está desabilitado. Sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m12 l6 xl6">
									<i class="material-icons hiddenprint prefix">list</i>
									<select name="audit_category" id="audit_category" multiple>
										<option value="" disabled selected>Escolha a(s) categoria(s) para audição *</option>
										<option value="1">Ator/Atriz</option>
										<option value="2">Cantor(a)</option>
										<option value="3">Dançarino(a)</option>
										<option value="4">Modelo</option>
									</select>
									<label class="sr-only">Escolha a(s) categoria(s) para audição *</label>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error" id="audit_category_error"></div>
								</div>
								<!-- Campo de seleção de país para audição - select de único item com imagens. Esse campo é validado em 'js/myScript.js', sendo obrigatório. Ademais, por consistir em um select, também é incializado em 'js/myScript.js'. Uma descrição do campo pode ser encontrada em seu primeiro item, o qual está desabilitado. Sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12 m12 l6 xl6">
									<i class="material-icons hiddenprint prefix">location_on</i>
									<select name="audit_country" id="audit_country" class="icons">
										<option value="" disabled selected="selected">Escolha o país da audição *</option>
										<option value="1" data-icon="images/select/Brazil.png" class="circle">Brasil</option>
										<option value="2" data-icon="images/select/Canada.png" class="circle">Canadá</option>
										<option value="3" data-icon="images/select/China.png" class="circle">China</option>
										<option value="4" data-icon="images/select/South-Korea.png" class="circle">Coreia do Sul</option>
										<option value="5" data-icon="images/select/United-States.png" class="circle">Estados Unidos</option>
										<option value="6" data-icon="images/select/Thailand.png" class="circle">Tailândia</option>
									</select>
									<label class="sr-only">Escolha o país da audição *</label>
									<!-- Nessa div são inseridas mensagens de erro acerca do campo, se existirem -->
									<div class="required_error" id="audit_country_error"></div>
								</div>
							</div>
							<div class="row">
								<!-- Campo de inserção de descrição opcional - tipo textarea. Esse campo é "validado" em 'js/myScript.js' somente para fins de manutenção de padrão de marcação dos elementos do formulário. Uma descrição do campo pode ser encontrada em seu placeholder e sua label está visível apenas para leitores de tela -->
								<div class="input-field col s12">
									<i class="material-icons hiddenprint prefix">description</i>
									<textarea type="text" id="complement" name="complement" class="materialize-textarea" placeholder="Aqui pode ser inserida uma descrição opcional"></textarea>
									<label for="complement" data-error="A descrição ultrapassou o limite de caracteres permitido" class="sr-only">Descrição opcional</label>
								</div>
							</div>						
							<div class="row">
								<!-- div contendo mensagens informativas -->
								<div class="col s11 offset-s1 xl7 offset-xl1">
								<p class="notes">* Campo obrigatório</p><p class="notes">Após o envio dos dados, esses serão analisados por nossa equipe, que entrará em contato via e-mail agendando a data e local de sua audição de acordo com os dados informados.</p>
								</div>
								<div class="input-field col s11 offset-s1 xl3 offset-xl1">
									<!-- Botão de submissão (componente button com tipo submit do Materialize) do formulário (associado ao formulário 'audit_register'). As funções de verificação do formulário não estão associadas ao botão, mas sim a eventos de submit desse formulário e de alteração de seus campos. Nesse botão também é usado 'waves', uma biblioteca externa incluída no Materialize que permite criar o efeito de tinta do Material Design -->
									<button class="btn waves-effect waves-light col s12 m5 xl12" type="submit" id="submit" name="action" form="audit_register" formaction="#" formmethod="post">Enviar<i class="material-icons hiddenprint right">send</i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</section>
            </div>
        </div>	
    </main>
      
	<!-- Rodapé da página: faz uso do componente footer do Materialize. As imagens do rodapé são carregadas de forma diferente de acordo com o tamanho da tela do dispositivo, o que faz, por exemplo, que para dispositivos móveis sejam carregadas imagens mais leves -->
    <footer class="page-footer grey darken-4">
        <!-- Inclusão do código do rodapé comum a todas as páginas. Tal código pode ser encontrado em 'includes/footer.php' -->
        <?php include('includes/footer.php'); ?>
    </footer>
    
    <!-- Scripts -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/materialize.js"></script>
	<script src="js/myScript.js"></script>
    
</body>
</html>
