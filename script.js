buffer = new Array();
andares = new Array();
andar_corrente=0;
andar_destino=0;
chegou=true;

document.body.onload = cria_predio;

function cria_predio() {
	
	const qtd_andares = parseInt(prompt("Quantidade de Andares: "));
	
	const tag_table = document.createElement("table");
	tag_table.setAttribute("border", 1);	

	for (i=qtd_andares; i>=1; i--) {
		
		const linha = document.createElement("tr");
		
		const coluna1 = document.createElement("td");
		coluna1.classList.add("andar");
		if(i==1)
			coluna1.style.backgroundColor = 'green';

		andares.unshift(coluna1);
		
		const coluna2 = document.createElement("td");
		
		const botao = document.createElement("button");
		
		botao.classList.add("botao");
		botao.addEventListener("click", (e) => {
			e.preventDefault();
			buffer.push(parseInt(botao.innerText));
		});
		
		botao.appendChild(document.createTextNode(i));
		
		coluna2.appendChild(botao);
		
		linha.appendChild(coluna1);
		linha.appendChild(coluna2);
		tag_table.appendChild(linha);
	}
	document.body.appendChild(tag_table);
}

setInterval(() => {
	
	if(buffer.length > 0 && chegou==true) {
		andar_destino = buffer.shift()-1;
		chegou=false;
		
		if(andar_corrente<andar_destino)
			buffer.sort();
		else
			buffer.reverse();
	}
	console.log(buffer);
	if(andar_destino != andar_corrente) {
		
		andares[andar_corrente].style.backgroundColor = 'white';
		
		andar_corrente > andar_destino ? andar_corrente-- : andar_corrente++;
		
		andares[andar_corrente].style.backgroundColor = 'orange';
	} 
	else {
		
		setTimeout(3000);
		
		andares[andar_corrente].style.backgroundColor = 'green';
		
		chegou=true;
	}
	
}, 2000);