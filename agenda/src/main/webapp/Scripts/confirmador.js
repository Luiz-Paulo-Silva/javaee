/** Confirmação de contatos
 *
 * @author Professor José de Assis
 * @parametro idcon
 */
 function confirmar(idcon){
 
 	let resposta = confirm("Confirma a exclusão do contato? "+ idcon)
 	if (resposta === true){
 		window.location.href="delete?idcon=" + idcon
 	}
 }