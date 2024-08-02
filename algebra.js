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

function updateAndSolveEquation(aId, bId, equationId) {
    var a = parseFloat(document.getElementById(aId).value);
    var b = parseFloat(document.getElementById(bId).value);
    if (isNaN(a) || isNaN(b)) {
        alert('Please enter numeric values for a and b.');
        return;
    }
    document.getElementById(equationId).innerText = a + 'x + ' + b + ' = 0';

    var result = -b / a;
    alert('Solution: x = ' + result);
}

function solveLinearEquation() {
    var a = parseFloat(document.getElementById('equation1_a').value);
    var b = parseFloat(document.getElementById('equation1_b').value);
    if (isNaN(a) || isNaN(b)) {
        alert('Please enter numeric values for a and b.');
        return;
    }

    var result = -b / a;
    document.getElementById('solved-equation').innerText = 'x = ' + result;
}

function expandSquareOfSum() {
    var a = document.getElementById('equation2_a').value;
    var b = document.getElementById('equation2_b').value;

    if (a === '' || b === '') {
        alert('Please enter numeric values for a and b.');
        return;
    }

    var expanded = '(' + a + ' + ' + b + ')² = ' + a + '² + 2(' + a + ' * ' + b + ') + ' + b + '²';
    document.getElementById('solved-equation2').innerText = 'Expanded formula: ' + expanded;
}

function expandCubeOfSum() {
    var a = document.getElementById('equation3_a').value;
    var b = document.getElementById('equation3_b').value;

    if (a === '' || b === '') {
        alert('Please enter numeric values for a and b.');
        return;
    }

    var expanded = '(' + a + ' + ' + b + ')³ = ' + a + '³ + 3(' + a + '²' + b + ') + 3(' + a + ' * ' + b + '²) + ' + b + '³';
    document.getElementById('solved-equation3').innerText = 'Expanded formula: ' + expanded;
}

function calculateArithmeticProgressionSum() {
    var n = parseFloat(document.getElementById('arithmetic_progression_n').value);
    var a = parseFloat(document.getElementById('arithmetic_progression_a').value);
    var d = parseFloat(document.getElementById('arithmetic_progression_d').value);
    if (isNaN(n) || isNaN(a) || isNaN(d)) {
        alert('Please enter numeric values for n, a, and d.');
        return;
    }
    var l = a + (n - 1) * d;
    var sum = (n / 2) * (a + l);

    document.getElementById('solved-arithmetic-progresssion').innerText = 'Sum of the arithmetic progression: ' + sum;
}

function calculateQuadraticEquationDiscriminant() {
    var a = parseFloat(document.getElementById('quadratic_equation_a').value);
    var b = parseFloat(document.getElementById('quadratic_equation_b').value);
    var c = parseFloat(document.getElementById('quadratic_equation_c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Please enter numeric values for a, b, and c.');
        return;
    }

    var discriminantFormula = 'Discriminant = b² - 4ac';
    var discriminantValue = '(' + b + ')² - 4 * (' + a + ') * (' + c + ')';

    document.getElementById('solved-quadratic-equation').innerHTML = discriminantFormula + ': ' + discriminantValue;
}
