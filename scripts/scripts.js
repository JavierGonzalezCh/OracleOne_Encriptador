const resultado = document.getElementById('resultado')
const regexp = new RegExp(/^[a-z ]+$/)
const alerta = "Recuerde: Solo puede utilizar letras minusculas y sin acento"

const Encriptar = (frase) =>{
	if (regexp.test(frase)){
		let codigo = frase.replaceAll("e","enter")
		codigo = codigo.replaceAll("i","imes")
		codigo = codigo.replaceAll("a","ai")
		codigo = codigo.replaceAll("u","ufat")
		codigo = codigo.replaceAll("o","ober")
		resultado.value = codigo
	}else{
		alert(alerta)
	}	
}

const Desencriptar = (frase) =>{
	if (regexp.test(frase)){
		let codigo = frase.replaceAll("ai","a")
		codigo = codigo.replaceAll("enter","e")
		codigo = codigo.replaceAll("imes","i")
		codigo = codigo.replaceAll("ober","o")
		codigo  = codigo.replaceAll("ufat","u")
		resultado.value = codigo
	}else{
		alert(alerta)
	}	
}

const Copiar = () =>{
	if (resultado.value != 0) {
		resultado.select();
		document.execCommand("copy");
		alert("Texto copiado")
	} else {
		alert("No hay nada para copiar")
	}	
}
