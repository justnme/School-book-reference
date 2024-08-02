document.getElementById('subjectSelect').addEventListener('change', function() {
  window.location.href = this.value + '.html';
});


document.getElementById('searchInput').addEventListener('input', function () {
  var input = this.value.toLowerCase();
  var equationContainers = document.querySelectorAll('.equation-container');

  equationContainers.forEach(function (equationContainer) {
      var equationHeader = equationContainer.querySelector('.equation-header').textContent.toLowerCase();

      if (equationHeader.includes(input)) {
          equationContainer.style.display = 'block';
      } else {
          equationContainer.style.display = 'none';
      }
  });
});


function calculateSinSum() {
  var a = parseFloat(document.getElementById('angle_sin_sum_a').value);
  var b = parseFloat(document.getElementById('angle_sin_sum_b').value);

  if (isNaN(a) || isNaN(b)) {
      alert('Please enter numeric values for angles a and b.');
      return;
  }

  var result = Math.sin(a) * Math.cos(b) + Math.cos(a) * Math.sin(b);
  var expandedFormula = 'sin(a + b) = sin(a) * cos(b) + cos(a) * sin(b)';

  document.getElementById('result-sin-sum').innerHTML = expandedFormula + '<br>Result: sin(a + b) = ' + result;
}


function calculateCosSum() {
  var a = parseFloat(document.getElementById('angle_cos_sum_a').value);
  var b = parseFloat(document.getElementById('angle_cos_sum_b').value);

  if (isNaN(a) || isNaN(b)) {
      alert('Please enter numeric values for angles a and b.');
      return;
  }

  var result = Math.cos(a) * Math.cos(b) - Math.sin(a) * Math.sin(b);
  var expandedFormula = 'cos(a + b) = cos(a) * cos(b) - sin(a) * sin(b)';

  document.getElementById('result-cos-sum').innerHTML = expandedFormula + '<br>Result: cos(a + b) = ' + result;
}


function calculateSinDoubleAngle() {
  var a = parseFloat(document.getElementById('angle_double_sin_a').value);

  if (isNaN(a)) {
      alert('Please enter a numeric value for angle a.');
      return;
  }

  var result = Math.sin(2 * a);
  var expandedFormula = 'sin(2a) = 2 * sin(a) * cos(a)';

  document.getElementById('result-sin-double-angle').innerHTML = expandedFormula + '<br>Result: sin(2a) = ' + result;
}


function calculateCosDoubleAngle() {
  var a = parseFloat(document.getElementById('angle_double_cos_a').value);

  if (isNaN(a)) {
      alert('Please enter a numeric value for angle a.');
      return;
  }

  var result = Math.cos(2 * a);
  var expandedFormula = 'cos(2a) = cos²(a) - sin²(a)';

  document.getElementById('result-cos-double-angle').innerHTML = expandedFormula + '<br>Result: cos(2a) = ' + result;
}


function calculateCosViaSin() {
  var a = parseFloat(document.getElementById('angle_cos_via_sin_a').value);

  if (isNaN(a)) {
      alert('Please enter a numeric value for angle a.');
      return;
  }

  var result = 1 - 2 * Math.sin(a) * Math.sin(a);
  var expandedFormula = 'cos(2a) = 1 - 2 * sin²(a)';

  document.getElementById('result-cos-via-sin').innerHTML = expandedFormula + '<br>Result: cos(2a) = ' + result;
}
