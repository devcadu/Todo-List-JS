let banco = window.localStorage;
var id;
let rest = []
window.onload = function () {
  var chaves = Object.keys(banco) //Objeto chave e valor
  for (var i = 0; i < chaves.length; i++) {
    var el = JSON.parse(banco.getItem(chaves[i]))
    rest.push(el)
    var titulo = rest[i].title
    var desc = rest[i].descricao
    var id = rest[i].id
    gerardiv(titulo, desc, id)
  }
  console.log(rest)
};
function gerarId() {
  console.log(Date.now())
  var idunico = Date.now()
  console.log(idunico)
  return idunico
}

function enviar() {
  let titulo = window.document.getElementById("text1").value;
  let desc = window.document.getElementById("text2").value;
  if (titulo == null || titulo == "") {
    alert("Você não digitou nada")
  }
  else if (desc == null || desc == "") {
    alert("Você não digitou nada")
  }
  else {
    let res = { title: titulo, descricao: desc }
    res.id = gerarId()
    rest.push(res);
    console.log(rest)
    banco.setItem(res.id, JSON.stringify(res));
    gerardiv(titulo, desc, res.id)
  }
}
function gerardiv(titulo, desc, id) {
  resultado.innerHTML += `<div  class="card mt-4">
    <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <button "type="button" class="btn btn-close" aria-label="Close"
            onclick="deletar(this.parentNode,${id})"></button>
        <p class="card-text">${desc}</p>
    </div>
</div>`
}
function deletar(a, id) {
  let resultado = window.document.getElementById("resultado");
  resultado.removeChild(a.parentNode);
  console.log(id)
  banco.removeItem(id)


}


