
$( function(){
	

	// PRELOADER DE IMAGENS
	var img = new Array();
	img[1] = 'style/images/balao.png';

	for (var i in img) {
		var loading = new Image;    
		loading.src = img[i];
	}

	
});