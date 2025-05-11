const grid = document.querySelector('.container-grid');
const reset = document.querySelector(".btnReset");

const number_linha = parseInt(prompt("Digite o número de linhas:"));
const number_coluna = parseInt(prompt("Digite o número de colunas:"));


// Define o número de colunas no CSS dinamicamente
grid.style.gridTemplateColumns = `repeat(${number_coluna}, 40px)`;//

// Cria a matriz com os dados fornecidos
for (let i = 0; i < number_linha; i++) {
    for (let j = 0; j < number_coluna; j++) {
        const square = document.createElement('div');
        square.classList.add('cell-square');
        grid.appendChild(square);
        square.addEventListener("click", function() {//
            square.style.backgroundColor = "red";
        });
    }
}
//Atribui ao clique, a função de retornar a cor original de todas cédulas(cell-square)
reset.addEventListener("click", function() {//
    const squares = document.querySelectorAll('.cell-square');
    for(let i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = "lightgray";
    }
});
