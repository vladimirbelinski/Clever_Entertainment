<!-- Arquivo: nav.php
	 Autor: Vladimir Belinski 
	 Descrição: o presente arquivo faz parte da resolução do primeiro trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
	 			CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele é encontrado o código comum (referente ao
				menu de navegação superior) a todas as páginas.
-->

<!-- Menu de navegação: faz uso do componente Navbar e do componente JS SideNav -->
<nav class="white hiddenprint" role="navigation" aria-label="Menu principal">
	<div class="nav-wrapper container">
		<!-- Logo do menu: para telas de tamanho > a 600px é carregada uma imagem maior. Para telas de tamanho inferior é carregada uma imagem menor. Isso faz com que em dispositivos móveis, por exemplo, seja carregada uma imagem mais leve  -->
		<a id="logo-container" href="index.php" class="brand-logo">
			<picture class="hiddenprint">
				<source media="(min-width: 601px)" srcset="images/nav/logoB.jpg">
				<source media="(min-width: 200px)" srcset="images/nav/logoBSmall.jpg">
				<img src="images/nav/logo.jpg" alt="Logo da Clever Entertainment" style="width:auto">
			</picture>
		</a>
		<a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons hiddenprint">menu</i></a>
		<!-- Itens do menu normal -->
		<ul class="right hide-on-med-and-down">
			<li><a accesskey="1" href="#main" id="linkContent" class="sr-only">Ir para o conteúdo<span>1</span></a></li>
			<li><a accesskey="2" href="#footer" id="linkFooter" class="sr-only">Ir para o rodapé<span>2</span></a></li>
			<li><a href="index.php"><span lang="en">Home</span></a></li>
			<li><a href="about.php">Sobre <span lang="en">Clever</span></a></li>
			<li><a href="artists.php">Artistas</a></li>
			<li><a href="news.php">Notícias</a></li>
			<li><a href="audit.php">Audições</a></li>
		</ul>
		<!-- Itens do menu lateral -->
		<ul class="side-nav" id="nav-mobile" aria-expanded="true">
			<li><div class="userView">
      				<div class="background">
        				<img src="images/nav/logoBSmall.jpg" alt="Logo da Clever Entertainment">
      				</div>
				</div>
			</li>
			<li><a accesskey="1" href="#main" id="linkContent" class="sr-only">Ir para o conteúdo<span>1</span></a></li>
			<li><a accesskey="2" href="#footer" id="linkFooter" class="sr-only">Ir para o rodapé<span>2</span></a></li>
			<li><a href="index.php"><span lang="en">Home</span></a></li>
			<li><a href="about.php">Sobre <span lang="en">Clever</span></a></li>
			<li><a href="artists.php">Artistas</a></li>
			<li><a href="news.php">Notícias</a></li>
			<li><a href="audit.php">Audições</a></li>
		</ul>
	</div>
</nav>