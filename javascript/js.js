function criptografar() {
  const texto = document.getElementById("texto").value;
  const textoCriptografado = texto
      .replace(/e/gi, "enter")
      .replace(/o/gi, "ober")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/u/gi, "ufat");
  document.getElementById("textoCriptografado").textContent = textoCriptografado;
  document.querySelector('.retangulo img').style.display = 'none';
  document.querySelector('.retangulo h2').style.display = 'none';
  document.querySelector('.retangulo p').style.display = '';
  document.querySelector('.retangulo .bot.Copy').style.display = '';
}
function descriptografar() {
  const texto = document.getElementById("texto").value;
  const textoDescriptografado = texto
      .replace(/enter/gi, "e")
      .replace(/ober/gi, "o")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ufat/gi, "u");    
  document.getElementById("textoCriptografado").textContent = textoDescriptografado;
  document.querySelector('.retangulo img').style.display = 'none';
  document.querySelector('.retangulo h2').style.display = 'none';
  document.querySelector('.retangulo p').style.display = 'block';
  document.querySelector('.retangulo .bot.Copy').style.display = '';
}
function copiarTexto() {
  const textoParaCopiar = document.getElementById("textoCriptografado").textContent;
  navigator.clipboard.writeText(textoParaCopiar).then(() => {
      console.log("Texto copiado para a área de transferência!");
  }).catch(err => {
      console.error("Erro ao copiar texto: ", err);
  });
}
