const bodyTable = document.querySelector("#bodyTable");
const alert = document.querySelector("#alert");

const codMarca = "59";
const codModelo = "5940";
const codAno = "2014-3";

const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codMarca}/modelos/${5940}/anos/${codAno}`;

const fetchConteudo = async (url) => {
	try {
		const conteudos = await fetch(url);
		return conteudos.json();
	} catch (error) {
		console.log(error);
	}
};

const criaLinha = (conteudo, key) => {
	let line = `<tr>
	<th>${key}</th>
	<td>${conteudo}</td>
	</tr>`;
	return line;
};

const montaTabela = (conteudos) => {
	let linhas = "";
	for (let key in conteudos) {
		linhas += criaLinha(conteudos[key], key);
	}
	let bodyContent = linhas;
	bodyTable.innerHTML = bodyContent;
};

fetchConteudo(url)
	.then((conteudos) => {
		montaTabela(conteudos);
	})
	.catch((erro) => {
		console.log(erro);
		alert.textContent = "Nenhum carro encontrado";
	});
