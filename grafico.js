// gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: [''],
        dataset: [{
            label: 'O que é mais ouvido?',
            data: [],
