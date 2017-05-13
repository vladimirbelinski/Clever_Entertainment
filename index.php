<!-- Arquivo: index.php
	 Autor: Vladimir Belinski 
	 Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
				CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben.
				No trabalho é criado o front-end de uma página web responsiva de uma empresa fictícia de entretenimento.
				Em index.php é encontrada a página inicial do site, que contém notícias, informações sobre concertos, links
				para conteúdos presentes nas demais páginas do site, etc.
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
	</header>
    
    <main role="main" id="main">
		<section>
			<!-- Aqui é feito uso do componente JS 'Parallax', que consiste em um efeito onde o conteúdo do fundo (neste caso, uma imagem) é movido a uma velocidade diferente do que o conteúdo do primeiro plano durante a rolagem -->
			<div class="parallax-container valign-wrapper hiddenprint">
				<div class="section no-pad-bot">
					<!-- Conteúdo que ficará sobre a imagem -->
					<div class="container">
						<div class="row center">
							<h5 class="card-panel col s12 teal lighten-1"><span lang="en">Clever Entertainment</span>, a agência de seus <span lang="en">K-idols</span></h5>
						</div>
						<div class="row center">
							<!-- Aqui é feito uso do componente 'Button' do Materialize, no modo raised. Nesse botão tembém é usado 'waves', uma biblioteca externa incluída no Materialize que permite criar o efeito de tinta do Material Design	-->
							<a role="button" href="about.php" id="contest-button" class="btn-large waves-effect waves-light teal lighten-1">Conheça a <span lang="en">Clever</span></a>
						</div>
					</div>
				</div>
				<!-- Imagem sob efeito do parallax. Para tamanhos de tela > a 600px é carregada uma imagem completa. Para telas de tamanho inferior é carregada uma imagem menor (cantos cortados). Isso faz com que em dispositivos móveis, por exemplo, seja carregada uma imagem mais leve -->
				<picture class="parallax hiddenprint">
					<source media="(min-width: 601px)" srcset="images/index/vixx.jpg">
					<source media="(min-width: 200px)" srcset="images/index/vixxSmall.jpg">
					<img src="images/index/vixx.jpg" alt="Imagem dos integrantes do grupo VIXX" style="width:auto">
				</picture>
			</div>
		</section>
        
        <div class="container">
            <div class="section">
                <div class="row">
					<section>
						<!-- div de título/texto com ícone -->
						<div class="col s12 m6 xl4">
							<div class="icon-block">
								<h2 class="center grey-text text-darken-4"><i class="material-icons hiddenprint" aria-hidden="true">redeem</i></h2>
								<h5 class="center">Fique ligado!</h5>
								<p class="light">Dentro de algumas semanas a <span lang="en">Clever Entertainment</span> estará realizando um <span lang="en">Survival Show</span> com seus <span lang="en">trainees</span> para a formação de um novo grupo misto.</p><p class="light">A atração será televisionada todas as quintas-feiras às 23h00min pela <span lang="en">tvN</span>.</p> <p class="light">Em breve mais informações serão disponibilizadas. Não perca!</p>
							</div>
						</div>
					</section>
                    <section>
						<!-- div de título/texto com ícone -->
						<div class="col s12 m6 xl4">
							<div class="icon-block">
								<h2 class="center grey-text text-darken-4"><i class="material-icons hiddenprint" aria-hidden="true">group</i></h2>
								<h5 class="center" lang="en">Meet&ampGreet</h5>
								<p class="light">No dia 19/06/2017 será promovido o 3º <span lang="en">Meet&ampGreet</span> com artistas da <span lang="en">Clever Entertainment</span>, no qual se farão presentes os grupos <span lang="en">BTS</span>, <span lang="en">TWICE</span> e <span lang="en">VIXX</span>.</p>
								<p>Data: 19/06/2017</p>
								<p>Local: Centro de Cultura e Eventos Plínio Arlindo de Nes, Chapecó - SC, Brasil</p>
								<p>Horários:<br><span lang="en">BTS</span>: 13h00min às 15h00min <br><span lang="en">TWICE</span>: 15h30min às 17h30min<br><span lang="en">VIXX</span>: 18h00min às 20h00min</p>
							</div>
						</div>
					</section>
					<section>
						<!-- div com ícone e onde são embutidos vídeos do Youtube -->
						<div class="col s12 m12 xl4">
							<div class="icon-block">
								<h2 class="center grey-text text-darken-4"><i class="material-icons hiddenprint" aria-hidden="true">video_library</i></h2>
								<h5 class="center">Vídeos em Destaque</h5>
								<figure class="col s12 m6 xl12">
									<div class="video-container hiddenprint">
										<iframe lang="en, ko"width="320" height="180" src="https://www.youtube.com/embed/4dL9RWFcJmI?ecver=2" frameborder="10" allowfullscreen></iframe>
									</div><br>
									<figcaption lang="en">Produce 101 - Position Evaluation (Dance)</figcaption>
								</figure>
								<figure class="col s12 m6 xl12">
									<div class="video-container hiddenprint">
										<iframe lang="ko" width="320" height="180" src="https://www.youtube.com/embed/hmE9f-TEutc" frameborder="10" allowfullscreen></iframe>
									</div><br>
									<figcaption lang="en">BTS - Blood Sweat & Tears</figcaption>
								</figure>
							</div>
						</div>
					</section>
                </div>
            </div>
        </div>
        
		<section>
			<!-- Aqui é feito uso do componente JS 'Parallax', que consiste em um efeito onde o conteúdo do fundo (neste caso, uma imagem) é movido a uma velocidade diferente do que o conteúdo do primeiro plano durante a rolagem -->
			<div class="parallax-container valign-wrapper hiddenprint">
				<div class="section no-pad-bot">
					<!-- Conteúdo que ficará sobre a imagem -->
					<div class="container">
						<div class="row center">
							<h5 class="card-panel col s12 yellow darken-4">Sempre sonhou em ser um <span lang="en">Clever Artist</span>? Agende já sua audição!</h5>
						</div>
						<div class="row center">
							<!-- Aqui é feito uso do componente 'Button' do Materialize, no modo raised. Nesse botão tembém é usado 'waves', uma biblioteca externa incluída no Materialize que permite criar o efeito de tinta do Material Design	-->
							<a role="button" href="audit.php" id="audit-button" class="btn-large waves-effect waves-light yellow darken-4">Agendar Audição</a>
						</div>
					</div>
				</div>
				<!-- Imagem sob efeito do parallax. Para tamanhos de tela > a 600px é carregada uma imagem completa. Para telas de tamanho inferior é carregada uma imagem menor (cantos cortados). Isso faz com que em dispositivos móveis, por exemplo, seja carregada uma imagem mais leve -->
				<picture class="parallax hiddenprint">
					<source media="(min-width: 601px)" srcset="images/index/twice.jpg">
					<source media="(min-width: 200px)" srcset="images/index/twiceSmall.jpg">
					<img src="images/index/twice.jpg" alt="Imagem das integrantes do grupo Twice batendo em portas, como foto de divulgação de sua faixa Knock Knock" style="width:auto">
				</picture>
			</div>
		</section>
		
        <div class="container">
            <div class="row">
                <section>
					<!-- Aqui são encontrados os cards com versões básicas das notícias. Os comentários do primeiro card se aplicam aos demais, pois são análogos -->
                    <div class="col s12 m12 l8">
						<!-- título com ícone -->
                        <h5 class="grey-text text-darken-4"><i class="material-icons hiddenprint" aria-hidden="true">description</i> NOTÍCIAS</h5>
                        <div class="col s12 m6">
							<!-- Aqui é feito uso de um card, um componente do Materialize que apresenta uma maneira conveniente de exibir conteúdos compostos por diferentes tipos de objetos -->
                            <div class="card">
								<!-- div da imagem do card e botão de mais detalhes-->
                                <div class="card-image hiddenprint">
                                    <img src="images/news/produce101.jpg" alt="Imagem dos contestantes e da apresentadora de Produce 101 no palco principal do programa">
									<!-- Aqui é feito uso do componente 'Button' do Materialize, com classe floating. Nesse botão também é usado 'waves', uma biblioteca externa incluída no Materialize que permite criar o efeito de tinta do Material Design	-->
                                    <a role="button" class="btn-floating halfway-fab waves-effect waves-light blue darken-4" href="news.php"><i class="material-icons hiddenprint" aria-hidden="true">add</i></a>
                                </div>
								<!-- div de conteúdo do card -->
                                <div class="card-content"><p class="light">[05/04/2017]</p>
									<p><strong><span lang="en">Clever Entertainment</span> terá <span lang="en">trainee</span> participando do <span lang="en">Produce 101</span></strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="card">
                                <div class="card-image hiddenprint">
                                    <img src="images/news/monstax-beautiful.jpg" alt="Imagem dos integrantes do grupo Monsta X sentados">
                                    <a role="button" class="btn-floating halfway-fab waves-effect waves-light blue darken-4" href="news.php"><i class="material-icons hiddenprint" aria-hidden="true">add</i></a>
                                </div>
                                <div class="card-content">
                                    <p class="light">[21/03/2017]</p>
									<p><strong><span lang="en">Monsta X</span> lança seu novo álbum: <span lang="en">THE CLAN pt.2.5 [BEAUTIFUL]</span></strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="col s12 l4">
						<!-- título com ícone -->
                        <h5 class="grey-text text-darken-4"><i class="material-icons hiddenprint" aria-hidden="true">schedule</i> CONCERTOS</h5>
						<!-- Aqui também é feito uso do componente card, mas em conjunto com o componente JS 'Tabs', que consiste em uma lista não ordenada de guias que possuem hashes correspondentes a ids de divs. Ao se clicar em uma guia, somente o container com o identificador de tab correspondente fica visível -->
                        <div class="card">
                            <div class="card-content grey-text text-darken-4 center">
                                <p>PRÓXIMOS CONCERTOS</p>
                            </div>
                            <div role="tab" class="card-tabs">
                                <ul class="tabs tabs-fixed-width">
									<li class="tab"><a href="#blackpink"><span lang="en">BLACKPINK</span></a></li>
									<li class="tab"><a class="active" href="#bts"><span lang="en">BTS</span></a></li>
									<li class="tab"><a href="#monstax"><span lang="en">Monsta X</span></a></li>
									<li class="tab"><a href="#nct"><span lang="en">NCT 127</span></a></li>
									<li class="tab"><a href="#shinee"><span lang="en">SHINee</span></a></li>
									<li class="tab"><a href="#twice"><span lang="en">TWICE</span></a></li>
									<li class="tab"><a href="#vixx"><span lang="en">VIXX</span></a></li>
                                </ul>
                            </div>
                            <div class="card-content grey lighten-2 grey-text text-darken-4">
								<div id="blackpink">
                                    <p>Data: Sem previsões. <br>Local: Sem previsões.</p>
                                </div>
                                <div id="bts">
									<p>Data: 25/05/2017<br>Local:  <span lang="en">Citibank Hall</span> SP – Av. das Nações Unidas, 17955 – Santo Amaro, São Paulo/SP</p>
                                </div>
                                <div id="monstax">
                                    <p>Data: Sem previsões. <br>Local: Sem previsões.</p>
                                </div>
								<div id="nct">
                                    <p>Data: Sem previsões. <br>Local: Sem previsões.</p>
                                </div>
                                <div id="shinee">
                                    <p>Data: Sem previsões. <br>Local: Sem previsões.</p>
                                </div>
                                <div id="twice">
                                    <p>Data: Sem previsões. <br>Local: Sem previsões.</p>
                                </div>
                                <div id="vixx">
                                    <p>Data: Sem previsões. <br>Local: Sem previsões.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
	
	<!-- Rodapé da página: faz uso do componente footer do Materialize. As imagens do rodapé são carregadas de forma diferente de acordo com o tamanho da tela do dispositivo, o que faz, por exemplo, que para dispositivos móveis sejam carregadas imagens mais leves -->
    <footer role="contentinfo" class="page-footer grey darken-4" id="footer">
		<!-- Inclusão do código do rodapé comum a todas as páginas. Tal código pode ser encontrado em 'includes/footer.php' -->
        <?php include('includes/footer.php'); ?>
    </footer>
    
    <!-- Scripts -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/materialize.js"></script>
	<script src="js/myScript.js"></script>
    
</body>
</html>
