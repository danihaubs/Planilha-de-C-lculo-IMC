    var botaoAdicionar = document.querySelector ("#adicionar-paciente");
    botaoAdicionar.addEventListener ("click", function(event){
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");

        // extrai informações do paciente do form
        var paciente = obtemPacienteDoFormulario(form);

        var pacienteTr = montaTr(paciente);

        //adiciona o paciente na tabela
        var tabela = document.querySelector("#tabela-pacientes");  //variavel, pegar doc, e inserir no ident. tal
       
        tabela.appendChild(pacienteTr);

        form.reset();
    });
        titulo.addEventListener("click", function () {
        console.log("fui clicado");
});

    function obtemPacienteDoFormulario(form){

        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }

    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        var nomeTd = document.createElement("td");  //vou trazer os "tds" e "trs""
        nomeTd.classList.add("info-nome");
        nomeTd.textContent=paciente.nome;

        pacienteTr.appendChild (montaTd(paciente.nome, "info-nome")); //append... é como colocar o elemento "filho"
        pacienteTr.appendChild (montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild (montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild (montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild (montaTd(paciente.imc, "info-imc"));

        return pacienteTr;
    }

    function montaTd(dado,classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        
        return td; 

    }

function validaPaciente(paciente){
    if (){
        return true;
    }
}