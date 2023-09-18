const form = document.getElementById('form-agenda');
const names = [];
const phones = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('contact-name');
    const inputTelefoneContato = document.getElementById('contact-phone');

    if(names.includes(inputNomeContato.value)) {
        alert(`Este nome ${inputNomeContato.value}, foi anteriomente cadastrado`);
    } else if(phones.includes(inputTelefoneContato.value)){
        alert(`Esse número ${inputTelefoneContato.value}, foi cadastrado em outra pessoa`);
    }else {
        names.push(inputNomeContato.value);
        phones.push(inputTelefoneContato.value);

        let linha ='<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td>`;
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizarTabela() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = linhas;
}

$(document).ready(function(){
    $("#contact-phone").mask("(00) 00000-0000", { 
        placeholder: "(**) *****-****",
    });
});