function degreesCalculation() {
  const inputElement = document.getElementById('js-input-rad');
  let value = Number(inputElement.value);
  const pi = Math.PI;

  let result = value * 180 / pi;
  document.getElementById('js-degree-result')
    .innerHTML = result;
}

function radiansCalculation() {
  const inputElement = document.getElementById('js-input-grad');
  let value = Number(inputElement.value);
  const pi = Math.PI;

  let result = value * pi / 180;
  document.getElementById('js-radian-result')
    .innerHTML = result;
}

function copiarTexto() {
  var texto = document.getElementById("js-degree-result").textContent;
  
  navigator.clipboard.writeText(texto)
    .then(function() {
      alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
      console.error("Error al copiar el texto: ", error);
    });
}

function copiarTexto2() {
  var texto = document.getElementById("js-radian-result").textContent;
  
  navigator.clipboard.writeText(texto)
    .then(function() {
      alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
      console.error("Error al copiar el texto: ", error);
    });
}

function handleKeyDown1(event) {
  if (event.key === 'Enter') {
    degreesCalculation();
  }
}

function handleKeyDown2(event) {
  if (event.key === 'Enter') {
    radiansCalculation();
  }
}