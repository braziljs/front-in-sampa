<!DOCTYPE html>
<html lang="pt-br" class="js">
<head>
	<meta charset="utf-8">
	<meta name="robots" content="all" />
	<meta name="description" content="FrontInSampa - Evento focado em Desenvolvimento Front-end em São Paulo, dia 03 novembro de 2012." />
	<meta name="keywords" content="Frontend, Front-end, Frontend em São Paulo, eventos de frontend em São Paulo" />
	<meta name="viewport" content="initial-scale = 1.0">
	<meta property="og:title" content="FrontInSampa 2012" />
	<meta property="og:type" content="website"/>
	<meta property="og:description" content="FrontInSampa - Evento focado em Desenvolvimento Front-end em São Paulo, dia 03 novembro de 2012." />
	<meta property="og:url" content="http://www.frontinsampa.com.br/"/>
	<meta property="og:image" content="http://www.frontinsampa.com.br/images/logo.jpg" />
	<meta property="og:site_name" content="FrontInSampa"/>
	<meta property="og:locale" content="pt_br" />
	<meta property="fb:admins" content="100000470381955" />
	<meta property="fb:app_id" content="245886085523128"/>
	<title>FrontInSampa | Dia 03 de novembro 2012</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
	<script type="text/javascript" src="http://modernizr.com/downloads/modernizr-latest.js"></script>
	
	<script>
		$(document).ready(function(){
			$("a[rel=external]").attr('target', '_blank'); 	
			$(".menu a").click(function(e) {
				e.preventDefault();
				var ancora = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(ancora).offset().top
				}, 700);
			});
			$('section h1').click(function(){
				$('html, body').animate({
					scrollTop: $('body').offset().top
				}, 700);
			})
		});
	</script>
	<link rel="stylesheet" href="estilos/global.css" />
	<link rel="shortcut icon" href="images/favicon.ico" type="image/ico" />

	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-32925160-1']);
	  _gaq.push(['_trackPageview']);
	  _gaq.push(['_trackPageLoadTime']);
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
	<script type="text/javascript">
		function recordOutboundLink(link, category, action) {
		try {
		var pageTracker=_gat._getTracker("UA-32925160-1");
		pageTracker._trackEvent(category, action);
		setTimeout('document.location = "' + link.href + '"', 100)
		}catch(err){}
		}
	</script>
</head>
<body>		
	<div id="documento">
		<header role="banner">
			<div class="bl-conteudo">
				<div class="bl-logo">
					<h1><a href="/" title="Atualizar página"><img src="images/logo.png" alt="FrontInSampa" /></a></h1>
				</div>
				<nav class="menu" role="navigation">
					<ul>
						<li><a href="#evento" title="O que é FrontInSampa">O Evento</a></li>
						<li><a onclick="recordOutboundLink(this, 'Inscricoes', 'MenuHeader'); return false;" href="http://eventick.com.br/frontinsampa" title="Faça sua Inscrição para o FrontInSampa" rel="external">Inscrições</a></li>
						<li><a href="#programacao" title="Confira a Programação do FrontInSampa">Programação</a></li>
						<li><a href="#palestrantes" title="Veja os Palestrantes do FrontInSampa">Palestrantes</a></li>
						<li><a href="#patrocinadores" title="Patrocinadores do FrontInSampa">Patrocinadores</a></li>
						<li><a href="#apoiadores" title="Empresas e sites que apoiam o FrontInSampa">Apoiadores</a></li>
						<li><a href="#contato" title="Entre em contato com a equipe do FrontInSampa">Contato</a></li>
						<li><a href="#comentarios" title="Deixe seu comentário">Comentários</a></li>
					</ul>
				</nav>
			</div>
		</header>
		<div id="conteudo">
			<div class="bl-informacoes">
				<div class="bl-conteudo">
					<div class="detalhes">
						<p><strong class="data-evento">3 de Novembro de 2012</strong> <br />
						<a class="bt-inscrever" onclick="recordOutboundLink(this, 'Inscricoes', 'Header'); return false;" href="http://eventick.com.br/frontinsampa" rel="external">Inscreva-sejá e ganhe uma camiseta</a></p>
					</div>
				</div>
			</div>
			<section id="evento">
				<div class="bl-conteudo">
					<h2>O Evento</h2>
					<p class="detalhes">O FrontInSampa é uma oportunidade da comunidade de desenvolvimento Front-end Paulista se conhecer e se aprimorar. Compartilhando <br />
					experiências para o bem comum.</p>
					<h3 class="tt-endereco">Localização:</h3>
					<p>O evento irá ocorrer no Hotel Intercontinental, Alameda Santos, 1123 - Jardim Paulista - São Paulo</p>
					<div class="bl-mapa">						
						<h4>Veja no mapa:</h4>
						<figure>	
							<iframe width="910" height="230" src="https://maps.google.com.br/maps?f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Hotel+Intercontinental+Alameda+Santos,+1123&amp;aq=&amp;sll=-22.546052,-48.635514&amp;sspn=5.214009,10.371094&amp;ie=UTF8&amp;hq=Hotel+Intercontinental+Alameda+Santos,+1123&amp;hnear=&amp;radius=15000&amp;t=m&amp;ll=-23.565679,-46.653571&amp;spn=0.009047,0.03901&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
						</figure>
					</div>
				</div>
			</section>
			<hr />
			<section id="programacao">
				<div class="bl-conteudo">
					<h2 class="titPr">Programação</h2>
					<ul class="pogtop">
						<li>
							<h3>Credenciamento</h3>
							<p>8h - 9h</p>
						</li>
					</ul>
					<ul class="pogtop">
						<li>
							<h3>Grade para ser definida</h3>
							<p>9h - 16h45</p>
						</li>
					</ul>

					<ul class="pogtop">
						<li>
							<h3>Horácio Soares e Clécio Bachini</h3>
							<p>Horário a definir</p>
						</li>
						<li>
							<h3>Palestra</h3>
							<p>Aguardando tema</p>
						</li>
					</ul>

					<ul class="pogtop">
						<li>
							<h3>Fábio Ricotta</h3>
							<p>Horário a definir</p>
						</li>
						<li>
							<h3>Palestra</h3>
							<p>SEO para Front-End</p>
						</li>						
					</ul>
					<ul class="pogtop">
						<li>
							<h3>Zeno Rocha e Bernard de Luna</h3>
							<p>16h45 - 18h</p>
						</li>
						<li>
							<h3>Palestra</h3>
							<p>Aguardando tema</p>
						</li>
					</ul>
					
					<ul class="pogtop">						
						<li>
							<h3>Encerramento</h3>
							<p>18h</p>
						</li>
					</ul>
				</div>
			</section>
			<hr />
			<section id="palestrantes" class="secundario">
				<div class="bl-conteudo">
					<h2 class="titPl">Palestrantes</h2>
					<ul>
						<li class="palestrante">
							<h3>Zeno Rocha</h3>
							<img class="foto" src="images/zeno-rocha.png" alt="Foto do Palestrante Zeno Rocha" />
							<h4><a href="http://twitter.com/zenorocha" rel="external"><span class="twitter">@zenorocha</span></a></h4>
							<p class="sobre">Zeno Rocha é Front-end Engineer na <a href="http://www.liferay.com/" rel="external">Liferay</a>. Com apenas 21 anos, já foi desenvolvedor de software na <a href="http://www.petrobras.com.br/" rel="external">Petrobras</a> e Desenvolvedor Front-end no <a href="http://www.Globoesporte.com" rel="external">Globoesporte.com</a>. É um dos criadores do projeto <a href="http://www.jqueryboilerplate.com" rel="external">jQuery Boilerplate</a>, do experimento <a href="http://www.html5-pro.com/wormz" rel="external">Wormz</a> que foi destaque no <a href="http://www.www.chromeexperiments.com/detail/wormz/" rel="external">Chrome Experiments</a>, lider da tradução para português do livro <a href="http://www.diveintohtml5.com.br/" rel="external">Dive into HTML5</a> e também é estudante de Sistemas de Informação na <abbr title="Universidade Federal do Estado do Rio de Janeiro">UNIRIO</abbr>.</p>
						</li>
						<li class="palestrante">
							<h3>Bernard de Luna</h3>
							<img class="foto" src="images/bernard-de-luna.png" alt="Foto do Palestrante Bernard" />
							<h4><a href="http://twitter.com/bernarddeluna" rel="external"><span class="twitter">@bernarddeluna</span></a></h4>
							<p class="sobre">Atua em Design de interfaces e Desenvolvimento Front-end há 14 anos, já tendo trabalhado em diversos projetos no Brasil, EUA, Inglaterra e Austrália. Nos últimos 2 anos liderou o Front-end da <a href="http://www.petrobras.com.br/" rel="external">Petrobras</a> no RJ e atualmente é <abbr title="User Experience">UX</abbr> Designer e Diretor Criativo da <a href="http://www.meltdsp.com" rel="external">Melt DSP</a> em São Paulo.</p>
						</li>
						<li class="palestrante">
							<h3>Fábio Ricotta</h3>
							<img class="foto" src="images/fabio-ricotta.png" alt="Foto do Palestrante Fábio Ricotta" />
							<h4><a href="http://twitter.com/fabioricotta" rel="external"><span class="twitter">@fabioricotta</span></a></h4>
							<p class="sobre">Fábio Ricotta é o co-fundador do site e empresa <a href="http://www.mestreseo.com.br/" title="Mestre SEO" rel="external">Mestre SEO</a>, nascido em 18/04/1985, é Bacharel em Ciência da Computação pela Universidade Federal de Itajubá. Hoje, a <a href="http://www.mestreseo.com.br/" title="Mestre SEO" rel="external"> MestreSEO</a> é uma referência nacional no assunto.</p>
						</li>
						<li class="palestrante">
							<h3>Horácio Soares</h3>
							<img class="foto" src="images/horacio.png" alt="Foto do Palestrante Horácio Soares" />
							<h4><a href="http://twitter.com/horaciosoares" rel="external"><span class="twitter">@horaciosoares</span></a></h4>
							<p class="sobre">
								Fundador da <a href="http://acessodigital.net" title="Visitar Acesso Digital" rel="external">Acesso Digital</a> e consultor na <a href="http://internativa.com.br" title="Visitar Interativa" rel="external">Internativa</a>, é especialista em acessibilidade, experiência do usuário e usabilidade. Editor de artigos, faz parte do Conselho Consultivo do Instituto Intranet Portal e do GT de Acessibilidade na Web do W3C Brasil.
							
							</p>
						</li>
						<li class="palestrante">
							<h3>Clécio Bachini</h3>
							<img class="foto" src="images/clecio.png" alt="Foto do Palestrante Clécio Bachini" />
							<h4><a href="http://twitter.com/cbachini" rel="external"><span class="twitter">@cbachini</span></a></h4>
							<p class="sobre">
								Fundador da <a href="http://www.soyuz.com.br/" title="Visitar Soyuz Sistemas" rel="external">Soyuz Sistemas</a> e consultor na <a href="http://internativa.com.br" title="Visitar Interativa" rel="external">Internativa</a>.Desenvolvedor web desde 1997, palestrante e professor. Militante e divulgador do HTML5 e Open Web Platform.
Membro do GT de Acessibilidade do W3C Escritório Brasil.
							</p>
						</li>
						<li class="palestrante">
							<h3>Compartilhe seu conhecimento no FrontinSampa</h3>
							<a onclick="recordOutboundLink(this, 'Call4papers', 'Site'); return false;" href="http://minim.in/2fY" rel="external"><img class="foto" src="images/call-4-papers.png" alt="Call for Papers" /></a>
							<p class="sobre">Quer compartilhar seu conhecimento dando uma palestra no FrontinSampa? <a href="http://minim.in/2fY" rel="external">Envie o tema</a> que gostaria de falar e quem sabe voce pode se tornar um dos palestrantes.</p>
						</li>
					</ul>
				</div>
			</section>
			<hr />
			<section id="patrocinadores">
				<div class="bl-conteudo">
					<h2>Patrocinadores</h2>
					<div class="bl-patrocinador bl-patrocinador-diamante">
						<h3>Diamante</h3>
						<p class="patrocinador patrocinador-diamante"></p>
					</div>
					<div class="bl-patrocinador bl-patrocinador-ouro">
						<h3>Ouro</h3>
						<ul>
							<li class="patrocinador patrocinador-ouro"></li>
							<li class="patrocinador patrocinador-ouro"></li>
							<li class="patrocinador patrocinador-ouro"></li>
						</ul>
					</div>
					<div class="bl-patrocinador bl-patrocinador-prata">
						<h3>Prata</h3>
						<ul>
							<li class="patrocinador patrocinador-prata"><a title="Ir para o site da Codeminer 42" href="http://www.codeminer42.com/" target="_blank"><img src="images/selo-codeminer.jpg" alt="Selo Codeminer" /></a></li>
							<li class="patrocinador patrocinador-prata"></li>
							<li class="patrocinador patrocinador-prata"></li>
							<li class="patrocinador patrocinador-prata"></li>
							<li class="patrocinador patrocinador-prata"></li>
						</ul>
					</div>
					<div class="bl-patrocinador bl-patrocinador-bronze">
						<h3>Bronze</h3>
						<ul>
							<li class="patrocinador patrocinador-bronze"><a title="Ir para o site da AO5" href="http://www.ao5.com.br" target="_blank"><img src="images/selo-ao5.png" alt="Selo AO5" /></a></li>
							<li class="patrocinador patrocinador-bronze"><a title="Ir para o site da Caelum" href="http://www.caelum.com.br" target="_blank"><img src="images/selo-caelum.png" alt="Selo Caelum" /></a></li>
							<li class="patrocinador patrocinador-bronze"><a title="Ir para o site da Mestre SEO" href="http://www.mestreseo.com.br" target="_blank"><img src="images/selo-mestreseo.jpg" alt="Selo MestreSEO" /></a></li>
							<li class="patrocinador patrocinador-bronze"></li>
							<li class="patrocinador patrocinador-bronze"></li>
						</ul>
					</div>
				</div>
			</section>
			<hr />
			<section id="apoiadores">
				<div class="bl-conteudo">
					<h2>Apoiadores</h2>
					<ul>
						<li class="apoiador-1"><a title="Ir para o site do BrazilJS Foundation" href="http://braziljs.org/" rel="external"><img src="images/selo-braziljs.png" alt="BrazilJS Foundation" /></a></li>
						<li class="apoiador-2"><a title="Ir para o site da Eventick" href="http://www.eventick.com.br" rel="external"><img src="images/selo-eventick.png" alt="Eventick" /></a></li>
						<li class="apoiador-3"><a title="Ir para o site do Imasters" href="http://www.imasters.com.br" rel="external"><img src="images/selo-imasters.jpg" alt="Imasters" /></a></li>
						<li class="apoiador-4"><a title="Ir para o site do Tableless" href="http://www.tableless.com.br" rel="external"><img src="images/selo-tableless.jpg" alt="Tableless" /></a></li>
						<li class="apoiador-5"></li>
						<li class="apoiador-6"></li>
						<li class="apoiador-7"></li>
						<li class="apoiador-8"></li>
						<li class="apoiador-9"></li>
						<li class="apoiador-10"></li>
						<li class="apoiador-11"></li>
					</ul>
				</div>
			</section>
			<hr />
			<section id="contato">
				<div class="bl-conteudo">					
					<h2>Contatos</h2>
					<h3>Por e-mail:</h3>
					<p><a href="mailto:frontinsampa@gmail.com">frontinsampa@gmail.com</a></p>
					<h3>Por telefones:</h3>
					<p>Sergio Nascimento - Elvis Detona: 11 99491-9272<br />
					Deivid Marques: 11 96454-2580</p>
					<h3>Pelo Facebook:</h3>
					<p><a href="http://facebook.com/frontinsampa" rel="external">facebook.com/frontinsampa</a></p>						
					<div class="bl-informacoes">
						<div class="bl-conteudo">
							<div class="detalhes">
								<p><strong class="data-evento">3 de Novembro de 2012</strong> <br />
								<a onclick="recordOutboundLink(this, 'Inscricoes', 'Footer'); return false;" class="bt-inscrever" href="http://eventick.com.br/frontinsampa" rel="external">Inscreva-sejá e ganhe uma camiseta</a></p>
							</div>
						</div>
					</div>		
				</div>
			</section>
			<section id="comentarios">
				<div class="bl-conteudo">
					<div class="box-comments">
						<h2>Comentários</h2>
						<div id="fb-root"></div>
						<script>
						(function(d, s, id) {
							var js, fjs = d.getElementsByTagName(s)[0];
							if (d.getElementById(id)) return;
							js = d.createElement(s); js.id = id;
							js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1";
							fjs.parentNode.insertBefore(js, fjs);
						}(document, 'script', 'facebook-jssdk'));
						</script>
						<div class="fb-comments" data-href="http://www.frontinsampa.com.br/" data-num-posts="10" data-width="900"></div>
					</div>
				</div>
			</section>
		</div>
		<footer role="contentinfo">
			<div class="bl-conteudo">				
				<nav class="navegacao-auxiliar menu" role="navigation">
					<ul>
						<li><a href="#evento" title="O que é FrontInSampa">O Evento</a></li>
						<li><a onclick="recordOutboundLink(this, 'Inscricoes', 'MenuFooter'); return false;" href="http://eventick.com.br/frontinsampa" rel="external" title="Faça sua Inscrição para o FrontInSampa">Inscrições</a></li>
						<li><a href="#programacao" title="Confira a Programação do FrontInSampa">Programação</a></li>
						<li><a href="#palestrantes" title="Veja os Palestrantes do FrontInSampa">Palestrantes</a></li>
						<li><a href="#patrocinadores" title="Patrocinadores do FrontInSampa">Patrocinadores</a></li>
						<li><a href="#apoiadores" title="Empresas e sites que apoiam o FrontInSampa">Apoiadores</a></li>
						<li><a href="#contato" title="Entre em contato com a equipe do FrontInSampa">Contato</a></li>
					</ul>
				</nav>
				<address>
					<p class="creditos">
						<small>Design por:</small> <br />
						<a href="http://www.bananagroove.net/" rel="external"><img src="images/assinatura-banana-groove.png" alt="Banana Groove Studios" /></a>
					</p>
					<p class="creditos">
						<small>Apoio Desenvolvimento por:</small> <br /> 
						<a href="http://www.thiagodini.com" rel="external"><img src="images/assinatura-thiago-dini.png" alt="Thiago Dini - Desenvolvedor Web" /></a>
					</p>
				</address>
				<p><small>Todos os direitos reservados <?=date('Y');?></small></p>
			</div>
		</footer>
	</div>
</body>
</html>