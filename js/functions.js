
$( function(){
	
	$('td:last-child, p:last-child, label:last, li:last-child, ul:last, div:last-child, article:last-child, section:last-child, dl:last-child, dt:last-child, dd:last-child, ol:last-child, strong:last-child').addClass('lastc');
	$('td:first-child, p:first-child, label:first-child, li:first-child, ul:first-child, div:first-child, article:first-child, section:first-child, dl:first-child, dt:first, dd:first, ol:first-child, strong:first-child').addClass('firstc');

	// PRELOADER DE IMAGENS
	var img = new Array();
	img[1] = 'style/images/balao.png';

	for (var i in img) {
		var loading = new Image;    
		loading.src = img[i];
	}

	//placeholder crossbrowser
	$('.ipt[placeholder]').each(function(){
		var ph = $(this).attr('placeholder')
		$(this).val(ph).focus(function(){
				if($(this).val() == ph) $(this).val('')
		}).blur(function(){
				if(!$(this).val()) $(this).val(ph)
		})
	})
	
							
	//validar.init();
	
	/** Validar Form **/

	//$('form').submit(function(){
	//	return validar.form($(this))
	//});


	/** Adiciona a classe "ativo" para o link que tiver o destino (href) identico à pagina aberta **/
	dmPaginaAtivo = window.location+"";
	dmPaginaAtivo = dmPaginaAtivo.split("/").pop();
	dmPaginaAtivo = dmPaginaAtivo =="" ? "default.asp" : dmPaginaAtivo;
	if(dmPaginaAtivo != ""){
		$('a[href$="'+dmPaginaAtivo+'"]').addClass('ativo');
//		//$('a[href="'+dmPaginaAtivo+'"]').siblings('ul').removeClass('hide');
//		//$('a[href="'+dmPaginaAtivo+'"]').parents('ul').removeClass('hide').siblings('a').addClass('ativo');;
	}


	
});