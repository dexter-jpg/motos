function pesquisar(){
let section = document.getElementById("resultados-pesquisa")
let campoPesquisa = document.getElementById("campo-pesquisa").value
if(!campoPesquisa){
  section.innerHTML = "<p>nada foi encontrado</p>"
return 
}
campoPesquisa = campoPesquisa.toLowerCase()
let resultados = "";
let titulo = "";
let descricao = "";
for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

    resultados += `
    <div class="item-resultado">
              <h2><a href="#">${dado.titulo}</a></h2>
              <p class="descricao-meta">${dado.descricao}
              </p>
              <a href="${dado.lik}" target="_blank"
                >mais informacoes</a
              >
            </div>
    `;
  }}
  if (!resultados){
resultados = "<p>nada foi encontrado</p>"
  }
    section.innerHTML = resultados
}
