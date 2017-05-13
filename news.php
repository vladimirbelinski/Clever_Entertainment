<!-- Arquivo: news.php
	 Autor: Vladimir Belinski 
	 Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
	 			CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele, é desenvolvida a seção de notícias da empresa.
-->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title lang="en">Clever Entertainment</title>
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
		<nav class="my_breadcrumbs" role="navigation" aria-label="Breadcrumbs">
			<div class="nav-wrapper">
				<div class="col s12 teal lighten-2">
					<a href="index.php" class="breadcrumb"><span lang="en">Home</span></a>
					<a class="breadcrumb">Notícias</a>
				</div>
			</div>
		</nav>
	</header>
	
	<main role="main" id="main">
		<div class="container">
			<div class="section">
				<section>
					<!-- Título informativo da página com ícone. Aqui também é linkada a função de abertura do componente JS 'Tap Target' (Feature Discovery) a outro componente, um 'badge', que, por sua vez, usa 'waves', uma biblioteca externa incluída no Materialize que permite criar o efeito de tinta do Material Design  -->
					<div class="row">
						<div class="col s12">
							<h5 class="grey-text text-darken-4"><i class="material-icons hiddenprint" aria-hidden="true">description</i> NOTÍCIAS <span role="button" class="new badge waves-effect waves-light hoverable hiddenprint" data-badge-caption="novo" onclick="$('.tap-target').tapTarget('open')">DESCUBRA</span></h5>
						</div>
					</div>
					<!-- Aqui pode ser encontrado o botão e as div associadas ao componente JS 'Tap Target' (Feature Discovery)	-->
					<div class="row hiddenprint">
						<div class="fixed-action-btn">
							<a role="button" id="menu" class="btn btn-floating btn-large teal"><i class="material-icons hiddenprint" aria-hidden="true">menu</i></a>
						</div>
						<div class="tap-target-wrapper">
							<div class="tap-target teal" data-activates="menu">
								<div class="tap-target-content white-text">
									<h5 class="tap-target-data">Novidades</h5>
									<p class="white-text tap-target-data">Em breve estaremos modificando a página de notícias para aprimorar sua experiência. Aguarde... ;)</p>
								</div>
							</div>
							<div class="tap-target-wave">
								<a role="button" class="btn btn-floating btn-large teal tap-target-origin"><i class="material-icons hiddenprint" aria-hidden="true">menu</i></a>
							</div>
						</div>
					</div>
					<!-- Aqui são encontrados os cards com notícias. É feito uso de um template e da biblioteca handlebars de forma que não seja necessário replicar o código html comum a cada card. O conteúdo dos cards pode ser encontrado em 'js/newsContent.js' -->
					<div class="row">
						<!-- Incício do template -->
						<script id="newsTemplate" type="text/x-handlebars-template">
							{{#each input}}
							<div class="col s12 m6 xl4">
								<!-- Aqui é feito uso de um card, um componente do Materialize que apresenta uma maneira conveniente de exibir conteúdos compostos por diferentes tipos de objetos. Ademais, também é utilizada a classe hoverable, que faz com que o card receba um sombreamento ao ser passado o mouse sobre ele -->
								<div class="card hoverable">
									<!-- div correspondente à imagem do card. Ao clicar na imagem é feito uso de 'waves', uma biblioteca externa incluída no Materialize que permite criar o efeito de tinta do Material Design -->
									<div class="card-image waves-effect waves-block waves-light hiddenprint">
										<img class="activator" src="{{imageSrc}}" alt="{{altDescr}}">
									</div>
									<!-- div correspondente ao conteúdo externo do card -->
									<div class="card-content news">
										<span role="button" class="card-title activator grey-text text-darken-4">{{cardTitle}}<i class="material-icons hiddenprint right" aria-hidden="true">more_vert</i></span>
										<p class="light">{{newsDate}}</p>
										<p><strong>{{newsTitle}}</strong></p>
									</div>
									<!-- div correspondente ao conteúdo interno do card. Ao ser clicado na imagem ou ativador da notícia é apresentada essa div contendo uma versão mais completa da notícia -->
									<div class="card-reveal">
										<span role="button" class="card-title grey-text text-darken-4">{{cardTitle}}<i class="material-icons hiddenprint right" aria-hidden="true">close</i></span>
										<p class="light">{{newsDate}}</p>
										<p><strong>{{newsTitle}}</strong></p>
										<p>{{newsContent}}</p>
									</div>
								</div>
							</div>
							{{/each}}
						</script>
						<!-- Final do template -->
						<!-- div onde serão colocados os cards e seu conteúdo -->
						<div id="newsContent"></div>
					</div>
				</section>
			</div>
		</div>
	</main>
	
	<!-- Rodapé da página: faz uso do componente footer do Materialize. As imagens do rodapé são carregadas de forma diferente de acordo com o tamanho da tela do dispositivo, o que faz, por exemplo, que para dispositivos móveis sejam carregadas imagens mais leves -->
    <footer role="contentinfo" class="page-footer grey darken-4 hiddenfooter" id="footer">
        <!-- Inclusão do código do rodapé comum a todas as páginas. Tal código pode ser encontrado em 'includes/footer.php' -->
        <?php include('includes/footer.php'); ?>
	</footer>
	
	<!-- Scripts -->
    <script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/handlebars-v4.0.5.js"></script>
    <script src="js/materialize.js"></script>
	<script src="js/newsContent.js"></script>
	<script src="js/myScript.js"></script>

</body>
</html>
