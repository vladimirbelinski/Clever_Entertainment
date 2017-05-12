<!-- Arquivo: about.php
	 Autor: Vladimir Belinski 
	 Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
	 			CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele, é desenvolvida a seção de informações acerca
				da empresa (e.g.: descrição da empresa, localização, parceiros, contato, etc.).
-->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Clever Entertainment</title>
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
					<a class="breadcrumb">Sobre Clever</a>
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
							<h5 class="grey-text text-darken-4"><i class="material-icons hiddenprint" aria-hidden="true">info_outline</i> SOBRE CLEVER</h5>
						</div>
					</div>
					<div class="row">
						<!-- Nessa div é feito uso do componente JS Collapsible, utilizado para os grupos de informações gerais da empresa. Como está sendo utilizado o tipo 'accordion' somente um grupo de informações pode ficar aberto por vez. Se 'accordion' for substituído pelo tipo 'expandable' vários grupos podem ficar abertos ao mesmo tempo -->
						<div class="col s12 xl6">
							<h5><i class="material-icons hiddenprint" aria-hidden="true">info</i> Informações Gerais</h5>
							<ul class="collapsible popout" data-collapsible="accordion" id="info_collapsible">
								<li>
									<!-- Cabeçalho de um item da lista -->
									<div class="collapsible-header"><i class="material-icons hiddenprint" aria-hidden="true">person_pin</i>Onde estamos</div>
									<!-- Conteúdo de um item da lista. -->
									<div class="collapsible-body"><p>A Clever Entertainment está presente em seis países: Brasil (sede), Canadá, China, Coreia do Sul, Estados Unidos e Tailândia.</p></div>
								</li>
								<li>
									<div class="collapsible-header active"><i class="material-icons hiddenprint" aria-hidden="true">perm_identity</i>Quem somos</div>
									<div class="collapsible-body"><p>A Clever Entertainment é uma empresa de entretenimento criada em 2012 e atualmente sediada no Brasil, possuindo também filiais no Canadá, China, Coreia do Sul, Estados Unidos e Tailândia. A Clever Entertainment opera como uma gravadora, agência de talentos, empresa de produção musical, gestão de eventos, empresa de produção de shows e editora de música.</p></div>
								</li>
								<li>
									<div class="collapsible-header"><i class="material-icons hiddenprint" aria-hidden="true">star</i>Artistas</div>
									<!-- No conteúdo desse item da lista também é feito uso do componente 'badge' -->
									<div class="collapsible-body"><p>A Clever Entertainment trabalha com artistas nas seguintes categorias: ator/atriz, cantor(a), dançarino(a) e modelo. Ademais, também é responsável pela formação de grupos. Os artistas da Clever Entertainment são denominados coletivamente como Clever Cosmos.<a role="button" href="artists.php"><span class="new badge" data-badge-caption="Ver artistas"></span></a></p></div>
								</li>
								<li>
									<div class="collapsible-header"><i class="material-icons hiddenprint" aria-hidden="true">work</i>Processo de audições</div>
									<!-- No conteúdo desse item da lista também é feito uso do componente 'badge' -->
									<div class="collapsible-body"><p>A Clever Entertainment realiza constantemente audições nos seguintes países: Brasil, Canadá, China, Coreia do Sul, Estados Unidos e Tailândia. Se você sempre sonhou em ser um Clever Artist, agende já sua audição!<a role="button" href="audit.php"><span class="new badge" data-badge-caption="Agendar audição"></span></a></p></div>
								</li>
								<li>
									<div class="collapsible-header"><i class="material-icons hiddenprint" aria-hidden="true">chat_bubble_outline</i>Contate-nos</div>
									<div class="collapsible-body"><p>Possui alguma dúvida, sugestão ou comentário? Contate-nos através de +55(49)3333-3333 ou contact@clever.com.</p></div>
								</li>
							</ul>
						</div>
						<!-- div onde se encontra embutido um mapa do Google Maps (localização da empresa fictícia) -->
						<div class="col s12 m5 offset-m1 hiddenprint">
							<h5><i class="material-icons hiddenprint" aria-hidden="true">person_pin</i> Clever Entertainment no Brasil</h5>
							<figure>
								<div class="containerMap">
									<iframe width="425" height="350" frameborder= 0 scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3229983696533!2d-52.70958048518949!3d-27.114634683041082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb4b2bbbd96a4b%3A0x5871f4d6809cb67e!2sUniversidade+Federal+da+Fronteira+Sul%2C+Campus+Chapec%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1492001227348"></iframe>
								</div>
								<figcaption class="sr-only">Clever Entertainment no Brasil</figcaption>
							</figure>
						</div>
						<!-- div onde são encontradas as logos de parceiros da empresa -->
						<div class="col s12 m5 offset-m1 hiddenprint">
							<h5><i class="material-icons hiddenprint" aria-hidden="true">business</i> Parceiros</h5>
							<!-- Aqui é feito uso do componente JS Carousel, um componente que apresenta um comportamento diferenciado de um slider de imagens -->
							<div class="carousel">
								<a class="carousel-item" href="http://www.genie.co.kr/!"><img src="images/about/genie.png" alt="Logo do Genie"></a>
								<a class="carousel-item" href="http://mwave.interest.me/en/index.m"><img src="images/about/mnet.png" alt="Logo da Mnet"></a>
								<a class="carousel-item" href="http://tvn.tving.com/tvn"><img src="images/about/tvn.png" alt="Logo da tvN"></a>
								<a class="carousel-item" href="http://www.melon.com/"><img src="images/about/melon.png" alt="Logo do Melon"></a>
								<a class="carousel-item" href="https://www.youtube.com/user/LOENENT"><img src="images/about/1thek.png" alt="Logo do 1theK"></a>
							 </div>
							<!-- Aqui é feito uso do painel de um card, um componente do Materialize -->
							<div class="card-panel teal lighten-2 white-text center">Deslize as logos e descubra quem são os parceiros da Clever Entertainment!</div>
						</div>
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
