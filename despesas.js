const despesas = []

const lista = document.getElementById('listaDespesas')

class Despesa {
    titulo;
    valorPessoa
    valor;
    pessoas;

    constructor (titulo, valor, pessoas) {
        this.titulo = titulo;
        this.valor = valor;
        this.pessoas = pessoas;
        this.valorPessoa = (valor / pessoas).toFixed(2);
    }
}

const titulo = document.getElementById('titulo-input');
const valor = document.getElementById('valor-input');
const pessoas = document.getElementById('pessoas-input');

function addDespesa () {
    despesas.push(new Despesa(titulo.value, valor.value, pessoas.value))
    addRow()
}

function addRow () {
    let i = despesas.length - 1
    lista.insertAdjacentHTML(
        "beforeend",
        `
        <div class="row">
            <div>${despesas[i].titulo}</div>
            <div>R$ ${despesas[i].valorPessoa}</div>
            <div>R$ ${despesas[i].valor}</div>
        </div>
        `
        );
    window.alert('A despesa do grupo foi adicionada')
}
