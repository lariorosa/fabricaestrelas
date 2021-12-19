function criarEstrelas() {
  var inLinhas = document.getElementById("inLinhas");
  var outResposta = document.getElementById("outResposta");

  var linhas = Number(inLinhas.value);

  if (linhas == 0 || isNaN(linhas)) {
    alert("Informe um número válido");
    inLinhas.focus();
    return;
  }

  var estrelas = "";

  for (var i = 1; i <= linhas; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + "*"
    }
    estrelas = estrelas + "\n";   
  }

  outResposta.textContent = estrelas;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);