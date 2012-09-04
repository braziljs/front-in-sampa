/***
*	:: Valida��o Gen�rica ::
*
*	Valida��o gen�rica para formul�rios. Para adicionar uma valida��o em um campo, atribuir a classe
*	"validar" e no atributo "title", acrescentar as regras.
*
*	Regras:
*	-------
*		min:<inteiro>
*			Quantidade m�nima de caracteres.
*			{min:1}
*
*		max:<inteiro>
*			Quantidade m�xima de caracteres
*			{max:5}
*
*		igualA:<string>
*			Igual a valor de um outro campo ou a string
*			{igualA:'teste'} ou {igualA:'#texte'}
*		
*		diferenteDe:<string>
*			Diferente do valor de um outro campo ou a string
*			{diferenteDe:'teste'} ou {diferenteDe:'#texte'}
*		
*		tipo:<string>
*			Define o tipo obrigat�rio
*			"inteiro" / "int": Num�rico inteiro
*			"email" / "e-mail": E-mail
*			"data": Data tipo dd/mm/aaaa
*			"obrigat�rio": Preenchimento obrigat�rio
*	
*	Ex.:
*	----
*		<input id="teste" name="teste" type="text" class="validar" title="Teste{min:5,tipo:'email',max:50,diferenteDe:'exemplo@dominio.com.br'}" />
*	
*	M�todos:
*	--------
*		validar.init()
*			Inicializa a valida��o aplicando os eventos.
*		validar.form(<string opcional>)
*			Executa a valida��o em um determinado formul�rio.
*		validar.verificaCampos(<objetos>)
*			Executa a valida��o em um conjunto de objetos espec�ficos.
***/
function encode_utf8(s) {return unescape( encodeURIComponent( s ) );}

function decode_utf8(s) {return decodeURIComponent( escape( s ) );}

function trim(str){if (str) {return str.replace(/^\s+|\s+$/g,"");} else {return null;}}

function replace(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}

validar = {
	versao: "2.15.8.2008",
	
	// Vari�veis
	obj: null,
	nome: null,
	valor: null,
	valido: true,
	msg: null,
	campos: new Object(),
	timeout: null,
	
	// Inicializa��o
	init: function(){
		$(".validar").each(function(){
			
			var regras = $(this).attr("title");
			var obj = $(this);
			
			if(typeof(regras) != "undefined"){
				if(regras.indexOf("{") > 0){

					// Gera as regras
					var opcoes = new Object();
					regras2 = regras.substring(regras.indexOf("{"),regras.length).replace("{","").replace("}","");
					regras = regras.substring(regras.indexOf("{"),regras.length).replace("{","").replace("}","").split(",");
					
					
					$.each(regras,function(i,val){
						var nome = val.split(":")[0];

						if (nome != 'formato') {
							var valor = eval(val.split(":")[1].replace(/\(doispontos\)/g,":"));
						} else {
							var valor = val.split(":")[1];
						}
						opcoes[nome] = valor;
					});
					
					// Cria uma biblioteca com os campos e as regras
					validar.campos[$(this).attr("id")] = opcoes;

					// Eventos
					var validacaoBlur = function(){
						validar.obj = $(this);
						validar.valor = $(this).val();
						validar.valido = true;
						validar.verifica();
					}
					$(this).not(".calendario").unbind('blur',validacaoBlur).blur(validacaoBlur);
					
					// M�scaras
					if($(this).attr("title").indexOf("mascara") != -1){
						switch(opcoes.mascara){
							case "R$": $(this).maskMoney({symbol:"R$",decimal:",",thousands:"."}); break;
							case "peso3": $(this).maskMoney({symbol:"",decimal:",",thousands:".",precision:3}); break;
							case "peso2": $(this).maskMoney({symbol:"",decimal:",",thousands:".",precision:2}); break;
							case "peso1": $(this).maskMoney({symbol:"",decimal:",",thousands:".",precision:1}); break;
							case "decimal": $(this).maskMoney({decimal:",",thousands:"",showSymbol:false}); break;
							default: $(this).mask(opcoes.mascara); break;
						}
					}
					
					if($(this).attr("title").indexOf("inteiro") != -1){
						
						$(this).keypress(function(e){
							
							if ($.browser.msie){
								var char = e.keyCode;
								if (char < 48 || char > 57 && char != 8 && char != 9) return false;
							}else{
								var char = e.which
								if (char && char != 8 && (char < 48 || char > 57)) { e.preventDefault(); }
							}
			
						})
		
					}		
				}
			}
			
			var titulo = $(this).attr("title");
			$(this).attr("title",titulo.split("{")[0]);

		});
		
		if($(".validar:enabled").length > 0){
			$("form").unbind('submit',validar.form).submit(validar.form);
		}
	},
	
	form: function(form){
		var valido = true;
		obj = typeof(form) == "string" ? $(form) : typeof(form) == "object" ? form : this;
		$(".validar:enabled",obj).each(function(){
			if(valido){
				validar.obj = $(this);
				validar.valor = $(this).val();
				validar.valido = true;
				validar.verifica();
				valido = validar.valido;
				if(!validar.valido) $(validar.obj).focus();
			}
		});
		/*$("li:visible .validar:enabled",obj).each(function(){
			if(valido){
				validar.obj = $(this);
				validar.valor = $(this).val();
				validar.valido = true;
				validar.verifica();
				valido = validar.valido;
				if(!validar.valido) $(this).focus();
			}
		});*/
		
		return valido;
	},
	
	// Fun��o que faz as verifica��es
	verifica: function(){
		if($(validar.obj).hasClass("validar") && $(validar.obj).is(':enabled')) {
			var id = $(validar.obj).attr("id");
			$.each(validar.campos[id],function(funcao,val){
				if(validar.valido && funcao != "mascara") validar[funcao](val);
			});
			if(!validar.valido){
				$(validar.obj).removeClass("form_ok").addClass("form_erro");
				validar.nome = $(validar.obj).attr("title");
				validar.exibeMsg();
			}else{
				$(validar.obj).removeClass("form_erro").addClass("form_ok");
				$(".boxMsg").remove();
			}
		}
	},
	
	// Exibir mensagem
	exibeMsg: function(){

		var msg = "O campo <strong>\""+validar.nome+"\"</strong> "+validar.msg // Mensagem

		// Gera Box da mensagem
		var posicaoBox = function(){
			$(".boxMsg").css($(validar.obj).offset());
			$(".boxMsg").fadeIn().css({
				//opacity: "1",
				top: parseInt($(".boxMsg").css("top")) + parseInt($(validar.obj).outerHeight()-45),
				left: parseInt($(".boxMsg").css("left")) + parseInt($(validar.obj).width()) - 28
			});
			/*setTimeout(function(){
				if($(".boxMsg").is("div")) posicaoBox();
			},100);*/
		}
		$(".boxMsg").remove();
		$("body").prepend("<div class=\"boxMsg\" style=\"display:none;\"><div class='setinha'>&nbsp;</div><div>"+msg+"</div></div>");
		$(".boxMsg").css($(validar.obj).offset());
			$(".boxMsg")
				.stop()
				.fadeIn()
				.css({
					//opacity: "1",
					top: parseInt($(".boxMsg").css("top")) + parseInt($(validar.obj).outerHeight()-45),
				left: parseInt($(".boxMsg").css("left")) + parseInt($(validar.obj).width()) - 28 
				})
				.fadeIn("fast", function(){
					clearTimeout(validar.timeout);
					validar.timeout = setTimeout(function(){ validar.escondeMsg(); },3500);
					posicaoBox();
				})
				.click(validar.escondeMsg);
	},
	
	escondeMsg: function(){
		clearTimeout(validar.timeout);
		if($(".boxMsg").length > 0) $(".boxMsg").fadeOut("fast",function(){ $(".boxMsg").remove(); });
	},
	
	verificaCampos: function(objs){
		validar.valido = true;
		$(objs).filter(".validar:enabled").each(function(){
			if(validar.valido){
				validar.obj = $(this);
				validar.valor = $(this).val();
				validar.valido = true;
				validar.verifica();
				if(!validar.valido) $(validar.obj).focus();
			}
		});
		return validar.valido;
	},
	
	// Quantidade m�nima de caracteres
	min: function(regra){
		if(validar.valor.length < regra){
			validar.valido = false;
			validar.msg = "deve ser preenchido com no m&iacute;nimo <strong>"+regra+"</strong> caracteres.";
		}
	},
	
	// Quantidade m�xima de caracteres
	max: function(regra){
		if(validar.valor.length > regra){
			validar.valido = false;
			validar.msg = "deve ser preenchido com no m&aacute;ximo <strong>"+regra+"</strong> caracteres.";
		}
	},
	
	// Maior que inteiro ou data
	maiorQue: function(regra){
		if(validar.valor != ""){
			if(typeof(regra) == "number"){
				if(validar.valor < regra){
					validar.valido = false;
					validar.msg = "deve ser maior que <strong>"+regra+"</strong>.";
				}
			}else{
				if(regra == "hoje"){
					var hoje = new Date();
					hoje = hoje.getDate() + "/" + (hoje.getMonth() + 1) + "/" + hoje.getFullYear();
					if(dmDate.dateDiff(hoje,validar.valor) < 0){
						validar.valido = false;
						validar.msg = "deve ser maior que <strong>"+hoje+"</strong>.";
					}
				}
			}
		}
	},
	
	// Igual a campo ou string
	igualA: function(regra){
		var valor = regra.indexOf("#") == -1 ? regra : $(regra).val();
		if(validar.valor != valor){
			validar.valido = false;
			validar.msg = ' e <strong>"'+$(regra).attr('title')+'"</strong> n&atilde;o conferem.';
		}
	},
	
	// Diferente de campo ou string
	diferenteDe: function(regra){
		var valor = regra.indexOf("#") == -1 ? regra : $(regra).val();
		if(validar.valor == valor){
			validar.valido = false;
			validar.msg = "n&atilde;o foi preenchido corretamente.";
		}
	},
	
	// Defini��es de tipos
	tipo: function(regra){
		switch(regra){
			
			// Num�rico inteiro
			case "inteiro": case "int":
				if(validar.valor != ""){
					var expressao = /^\d+$/;
					if(!expressao.test(validar.valor)){
						validar.valido = false;
						validar.msg = "deve ser preenchido com um <strong>n&uacute;mero inteiro</strong>!";
					}
				}
			break;
			
			// E-mail
			case "email": case "e-mail":
				if(validar.valor != ""){
					var expressao = /^[a-zA-Z0-9]{1}([\._a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+){1,3}$/;
					if(!expressao.test(validar.valor)){
						validar.valido = false;
						validar.msg = "n&atilde;o &eacute; um <strong>e-mail v&aacute;lido</strong>!";
					}
				}
			break;
			
			// E-mail
			case "email2": case "e-mail2":
				if(validar.valor != ""){
					var expressao = /^[a-zA-Z0-9]{1}([\._a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+){1,3}$/;
					if(!expressao.test(validar.valor)){
						validar.valido = false;
						validar.msg = "n&atilde;o &eacute; um <strong>e-mail v&aacute;lido</strong>!";
					} else {
						var id = $('#id').val();
						$.ajax({
							url:"asp/funcoes.asp?acao=verificaCliente&tipo=email&dado=" + validar.valor + '&id=' + id, type:'POST', async:false,
							success:function(r){
								switch(r) {
									case '1':
										validar.msg = " n&atilde;o p&ocirc;de ser verificado.<br />Tente novamente mais tarde.";
										validar.valido = false; break;
									case '2':
										validar.msg = " j&aacute; est&aacute; cadastrado.<br />Por favor, digite outro.";
										validar.valido = false; break;
									default:
										validar.valido = true; break;
								}
							},
							error:function(){
								validar.msg = " n&atilde;o p&ocirc;de ser verificado. Tente novamente.";
							}
						});
					}
				}
			break;
			
			// Data tipo dd/mm/aaaa
			case "data":
				if(validar.valor != ""){
					var expressao = /^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20)\d{2}$/;
					if(!expressao.test(validar.valor)){
						validar.valido = false;
						validar.msg = "n&atilde;o &eacute; uma data v&aacute;lida!";
					}
				}
			break;
			
			// Obrigatorio
			case "obrigatório": case "obrigatorio":
				if(validar.valor.replace(/[\s\.,()_-]/g,"").length == 0){
					validar.valido = false;
					validar.msg = "deve ser preenchido!";
				}
			break;
			
			// Select
			case "select":
				if( validar.valor == 0 || validar.valor == "" || validar.valor == null){
					validar.valido = false;
					validar.msg = "deve ser selecionado!";
				}
			break;
		}
	},
	
	/* #######################  FORMATOS DE ARQUIVOS  #########################
	
	Funcionamento: 			No title dos inputs do tipo file basta por a valida��o formato separando os formatos de upload permitidos por ; (ponto e v�rgula).
	Exemplo: 				<input id="ft_imagem" type="file" title="Imagem{formato:'jpg;mpp;docx'}" class="validar" />
	*/
	formato: function(regras2){
		if(validar.valor != "") {
			var arquivo = validar.valor;
			var extensoesOk = replace(regras2, "'", "") + ';';
			var extensao = arquivo.split('.').pop().toLowerCase() + ';';
			if (extensoesOk.indexOf(extensao) == -1) {
				validar.valido = false;
				validar.msg = " s&oacute; aceita arquivos no(s) formato(s) <strong>" + replace(regras2, ";", ", ") + "</strong>.";
			}
		}
	},
	// Valida��o de tipos
	validacao: function(regra){
		switch(regra){
			
			// CPF
			case "cpf": case "CPF":
				cpf = validar.valor.replace(/[^0-9]/g,"");
				erro = new String;
				if(cpf.length >= 11){
					if(cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
						erro += " &eacute; um n&uacute;mero de CPF invalido!";
					}else{
						var a = [];
						var b = new Number;
						var c = 11;
						for(i=0; i<11; i++){
							a[i] = cpf.charAt(i);
							if(i < 9) b += (a[i] * --c);
						}
						if((x = b % 11) < 2){ a[9] = 0; }else{ a[9] = 11-x; }
						b = 0;
						c = 11;
						for(y=0; y<10; y++) b += (a[y] * c--);
						if((x = b % 11) < 2) { a[10] = 0; }else{ a[10] = 11-x; }
						if((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])) erro += " &eacute; um n&uacute;mero de CPF invalido!";
					}
					if (erro.length > 0){
						validar.msg = erro;
						validar.valido = false;
					}else{
						validar.valido = true;
					}
				}
			break;
			
			// CPF
			case "cpf2": case "CPF2":
				cpf = validar.valor.replace(/[^0-9]/g,"");
				erro = new String;
				if(cpf.length >= 11){
					if(cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
						erro += " &eacute; um n&uacute;mero de CPF invalido!";
					}else{
						var a = [];
						var b = new Number;
						var c = 11;
						for(i=0; i<11; i++){
							a[i] = cpf.charAt(i);
							if(i < 9) b += (a[i] * --c);
						}
						if((x = b % 11) < 2){ a[9] = 0; }else{ a[9] = 11-x; }
						b = 0;
						c = 11;
						for(y=0; y<10; y++) b += (a[y] * c--);
						if((x = b % 11) < 2) { a[10] = 0; }else{ a[10] = 11-x; }
						if((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])) erro += " &eacute; um n&uacute;mero de CPF invalido!";
					}
					if (erro.length > 0){
						validar.msg = erro;
						validar.valido = false;
					}else{
						var id = $('#id').val();
						$.ajax({
							url:"asp/funcoes.asp?acao=verificaCliente&tipo=cpf_cnpj&dado=" + validar.valor + '&id=' + id, type:'POST', async:false,
							success:function(r){
								switch(r) {
									case '1':
										validar.msg = " n&atilde;o p&ocirc;de ser verificado.<br />Tente novamente mais tarde.";
										validar.valido = false; break;
									case '2':
										validar.msg = " j&aacute; est&aacute; cadastrado. Digite um valor diferente.";
										validar.valido = false; break;
									default:
										validar.valido = true; break;
								}
							},
							error:function(){
								validar.msg = " n&atilde;o p&ocirc;de ser verificado. Tente novamente.";
							}
						});
					}
				}
			break;
			
			//CNPJ
			case "cnpj":
			
			cnpj = validar.valor.replace(/[^0-9]/g,"");
			erro = new String;
			
			function valida_cnpj(cnpj)
				{
				var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
				digitos_iguais = 1;
				if (cnpj.length < 14 && cnpj.length > 15)
					return false;
				for (i = 0; i < cnpj.length - 1; i++)
					if (cnpj.charAt(i) != cnpj.charAt(i + 1))
						  {
						  digitos_iguais = 0;
						  break;
						  }
				if (!digitos_iguais)
					{
					tamanho = cnpj.length - 2
					numeros = cnpj.substring(0,tamanho);
					digitos = cnpj.substring(tamanho);
					soma = 0;
					pos = tamanho - 7;
					for (i = tamanho; i >= 1; i--)
						  {
						  soma += numeros.charAt(tamanho - i) * pos--;
						  if (pos < 2)


								pos = 9;
						  }
					resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
					if (resultado != digitos.charAt(0))
						  return false;
					tamanho = tamanho + 1;
					numeros = cnpj.substring(0,tamanho);
					soma = 0;
					pos = tamanho - 7;
					for (i = tamanho; i >= 1; i--)
						  {
						  soma += numeros.charAt(tamanho - i) * pos--;
						  if (pos < 2)
								pos = 9;
						  }
					resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
					if (resultado != digitos.charAt(1))
						  return false;
					return true;
					}
				else
					return false;
				} 
				
				if(cnpj.length >= 14) validar.valido = valida_cnpj(cnpj)
				validar.msg = " &eacute; um n&uacute;mero de CNPJ inv&aacute;lido!";
			break;
			
			//Hora
			case "hora":
				var hora = validar.valor.split(':')[0];
				var minuto = validar.valor.split(':')[1];
				
				if (hora > 23 || minuto > 59){
					validar.msg = " &eacute; um hor&aacute;rio inv&aacute;lido";
					validar.valido = false;
				}else{
					validar.valido = true;
				}
				
			break;
			
			//Data
			case "data":
				var bissexto = 0;
				var data = validar.valor;
				var tam = data.length;
				var dia = data.substr(0,2);
				var mes = data.substr(3,2);
				var ano = data.substr(6,4);
				
				validar.valido = false;
				validar.msg = " &eacute; uma data inv&aacute;lida";
				if ((ano > 1900)||(ano < 2100))
				{
						switch (mes) 
						{
								case '01': case '03': case '05': case '07': case '08': case '10': case '12':
									if  (dia <= 31) validar.valido = true;
								break;
								
								case '04': case '06': case '09': case '11':
									if  (dia <= 30) validar.valido = true;
								break;
								
								case '02':
									/* Validando ano Bissexto / fevereiro / dia */ 
									if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) bissexto = 1; 
									if ((bissexto == 1) && (dia <= 29)) validar.valido = true;                             
									if ((bissexto != 1) && (dia <= 28)) validar.valido = true; 
								break;
						}
				} else {validar.valido = false}
				
			break;
			
			//Data - n�o permite passar se a data for inferior a 18 anos
			case "18anos":
				var bissexto = 0;
				var data = validar.valor;
				var tam = data.length;
				var dia = data.substr(0,2);
				var mes = data.substr(3,2);
				var ano = data.substr(6,4);
				
				var data18 = $("[id$='hdnData']")[0].value;
				if (data18 != null && data18 != '') {
					var ano18 = eval(data18.substr(6,4)-18);
					var mes18 = data18.substr(3,2);
					var dia18 = data18.substr(0,2);
				} else {
					var ano18 = eval((new Date().toLocaleString().split(" ")[5])-18);
					var mes18 = new Date().getMonth()+1;
					var dia18 = new Date().toLocaleString().split(" ")[1];
				}
				validar.valido = false;
				if ((ano > 1900) && (ano <= ano18))
				{
						switch (mes) 
						{
								case '01': case '03': case '05': case '07': case '08': case '10': case '12':
									if  (dia <= 31) {
										if (ano == ano18 && mes >= mes18) {
											if ((mes == mes18 && dia > dia18) || (mes > mes18)) {
												validar.msg =  "possui uma data inv&aacute;lida (menor de 18 anos)";
											} else {validar.valido = true;}
										} else {
											validar.valido = true;
										}
									}
								break;
								
								case '04': case '06': case '09': case '11':
									if  (dia <= 30) {
										if (ano == ano18 && mes >= mes18) {
											if ((mes == mes18 && dia > dia18) || (mes > mes18)) {
												validar.msg =  "possui uma data inv&aacute;lida (menor de 18 anos)";
											} else {validar.valido = true;}
										} else {
											validar.valido = true;
										}
									}
								break;
								
								case '02':
									if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) bissexto = 1; 
									if ((bissexto == 1) && (dia <= 29)) {
										if (ano == ano18 && mes >= mes18) {
											if ((mes == mes18 && dia > dia18) || (mes > mes18)) {
												validar.msg =  "possui uma data inv&aacute;lida (menor de 18 anos)";
											} else {validar.valido = true;}
										} else {
											validar.valido = true;
										}
									} else {
										validar.msg = " &eacute; uma data inv&aacute;lida";
									}
									if ((bissexto != 1) && (dia <= 28)) {
										if (ano == ano18 && mes >= mes18) {
											if ((mes == mes18 && dia > dia18) || (mes > mes18)) {
												validar.msg =  "possui uma data inv&aacute;lida (menor de 18 anos)";
											} else {validar.valido = true;}
										} else {
											validar.valido = true;
										}
									} else {
										validar.msg = " &eacute; uma data inv&aacute;lida";
									}
								break;
								
								default:
									validar.msg = " &eacute; uma data inv&aacute;lida";
								break;
						}
				} else {validar.msg = "possui uma data inv&aacute;lida (menor de 18 anos)"; validar.valido = false}
			break;			
			//verifica se j� existe no banco
			case "naoRepete":
				var form = $(validar.obj).parents("form:eq(0)");
				var arquivo = $('input:hidden[name="pagina"]', form).val().split("_");
				arquivo.pop();
				
				function mensagem(texto){
					validar.msg = texto
					if(texto == '') 
						validar.valido = true
					else
						validar.valido = false
				}
				
				$.ajax({
					url:"biblioteca/ajax/" + arquivo + ".asp?acao=verifica",
					data:"campo=" + $(validar.obj).attr("name") + "&valor=" + validar.valor,
					type:'POST',
					async:false,
					success:function(r){
						
						if(r == "existe")
							mensagem(" j&aacute; est&aacute; cadastrado. Digite um valor diferente.");
						else
							mensagem("");
						
					},
					error:function(){
						mensagem(" n&atilde;o p&ocirc;de ser verificado. Tente novamente.");
					}
				});
									
			break;
		}
	}
}

function verifica_forca_senha(tipo, valor){
	if (tipo && tipo != '' && valor && valor != '') {
		senha = valor;
		forca = 0;
		var resposta = '';
		if((senha.length >= 4) && (senha.length <= 7)){forca += 10;}else if(senha.length>7){forca += 25;}
		if(senha.match(/[a-z]+/)){forca += 10;}
		if(senha.match(/[A-Z]+/)){forca += 20;}
		if(senha.match(/\d+/)){forca += 20;}
		if(senha.match(/\W+/)){forca += 25;}
		if(forca < 30){
			resposta = 'fraca';
		}else if((forca >= 30) && (forca < 60)){
			resposta = 'boa';
		}else if((forca >= 60) && (forca < 85)){
			resposta = 'forte';
		}else{
			resposta = 'excelente';
		}
		switch (eval(tipo)) {
			case 1:
				resposta = 'A senha digitada &eacute; <strong>' + resposta.toUpperCase() + '</strong>.';
				break;
			case 2:
				switch(resposta.toUpperCase()) {
					case 'FRACA': 		cor = '#f9031a'; break;
					case 'BOA': 		cor = '#f98203'; break;
					case 'FORTE': 		cor = '#e8e123'; break;
					case 'EXCELENTE': 	cor = '#1ab40f'; break;
				}
				resposta = '<strong style="color: ' + cor + ';">' + resposta.toUpperCase() + '</strong>';
				break;
		}
		return resposta;
	}
}

$(document).ready(function() {
	$('input:password').live('keyup', function() {
		//EXIBE NO BOXMSG A MENSAGEM
		if ($(this).hasClass('validasenha')) {
			var msg = verifica_forca_senha(1, $(this).val());
			if (msg != null) {
				// Gera Box da mensagem
				var posicaoBox = function(){
					$(".boxMsg").css($(this).offset());
					$(".boxMsg").css({
						//opacity: "1",
					top: parseInt($(".boxMsg").css("top")) + parseInt($(validar.obj).outerHeight()-35),
					left: parseInt($(".boxMsg").css("left")) + parseInt($(validar.obj).width()) + 28
					});
				}
				$(".boxMsg").remove();
				$("body").prepend("<div class=\"boxMsg\" style=\"display:none;\"><span class='setinha'></span>"+msg+"</div>");
				$(".boxMsg").css($(this).offset());
				$(".boxMsg").stop().css({
					//opacity: "1",
					top: parseInt($(".boxMsg").css("top")) + parseInt($(validar.obj).outerHeight()-35),
					left: parseInt($(".boxMsg").css("left")) + parseInt($(validar.obj).width()) + 28
				}).fadeIn("fast", function(){
					posicaoBox();
				}).click(validar.escondeMsg);
			} 
		}
		
		//EXIBE NA TELA O STATUS
		if ($(this).hasClass('validasenha2')) {
			var msg = verifica_forca_senha(2, $(this).val());
			if (msg != null) {
				$('.seguranca .exibe').html('<small>A senha digitada &eacute;:</small>');
				$('.seguranca .status').html(msg);
				}
			else{
				$('.seguranca .status strong').remove();
				$('.seguranca .exibe small').remove();
			}
		}
	});
	
	/*MAXLENGTH para textsarea*/
//	$('textarea').css({marginBottom: '10px'});
	$('.textarea2').each(function() {
		var maxlength = $(this).attr('accesskey');
		$(this).removeAttr('accesskey');
		$(this).attr({accesskey: maxlength});
		
		var restantes = eval(maxlength-$(this).val().length);
		if (eval(maxlength) > 0) {
			$(this).after('<span id="contador-' + $(this).attr('id') + '" class="textarea-cont" style="top: ' + parseInt($(this).position().bottom) + 'px; left: ' + parseInt($(this).position().left+3) + 'px;"> caracteres restantes: <span>' + restantes + '</span></span>');
			//$(this).removeAttr('maxlength');
		}
	}).keyup(function() {
		var maxlength = $(this).attr('accesskey');
		var restantes = eval(maxlength-$(this).val().length);
		if (eval(maxlength) > 0 && restantes >= 0) {
			$('#contador-' + $(this).attr('id') + ' span').html(restantes);
		}
	}).keydown(function(event) {
		var maxlength = $(this).attr('accesskey');
		var restantes = eval(maxlength-$(this).val().length-1);
		if (eval(maxlength) > 0 && restantes >= 0) {
			if (event.keyCode == 1786) {
				return false;
			} else {
				return true;
			}
		} else {if (event.keyCode != 8 && event.keyCode != 9) {return false;}}
	});
});