/**
 *  Validação de formulários
 * @Author José de Assis by Luiz Paulo da Silva
 * Verifica CPF(quantidade de digitos by Luiz Paulo)
 * Validação by Luiz Paulo da Silva
 */
function validar(){
	
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	let cpf = frmContato.cpf.value
	
	if (nome===""){
		alert('Campo Nome é obrigatório')
		frmContato.nome.focus()
		return false
	}else if(fone===""){
		alert('Campo Telefone é obrigatório')
		frmContato.fone.focus()
		return false
	}else if(cpf===""){
		alert('Campo CPF/CNPJ é obrigatório')
		frmContato.cpf.focus()
		return false
	}else if(removerPonto(cpf)){
		document.forms["frmContato"].submit()
	}else{
		alert(cpf+" é um CPF inválido")
	}
}
	
/*
-------------------------------------------------
Retira os pontos e verifica se contém 11 digitos
--------------------------------------------------
*/

function removerPonto(s){
	
s = s.replace(/[.]+/g, '');
s = s.replace(/[-]+/g, '');

	if (s.length!=11){
		alert(s.length)
		return false
		
	}else {

	var retorno=TestaCPF(s)
	return(retorno)
	
	}
}

/*
------------------------
Faz a validação do CPF
------------------------
*/

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "11111111111") return false;
  if (strCPF == "22222222222") return false;
  if (strCPF == "33333333333") return false;
  if (strCPF == "44444444444") return false;
  if (strCPF == "55555555555") return false;
  if (strCPF == "66666666666") return false;
  if (strCPF == "77777777777") return false;
  if (strCPF == "88888888888") return false;
  if (strCPF == "99999999999") return false;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
