const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; //declara um vetor global

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inPaciente.value;
  pacientes.push(nome);
  console.log(pacientes);
  let lista = "";

  for (let i=0; i < pacientes.length; i++){
    lista += `${i + 1}- ${pacientes[i]}\n`
  }
  
  respLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
})

frm.btnUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido com urgencia!")
        frm.inPaciente.focus();
        return;
    }
    
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);
    console.log(pacientes);
    let lista = "";

    pacientes.forEach((paciente, i) => {
        return(lista += `${i + 1}- ${pacientes[1]}\n`)

    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
  })
})

frm.btnAtender.addEventListener("click", () => {
    if (paciente.length == 0){
        alert("Nao ha pacientes para atender")
        frm.inPaciente.focus();
        return
    }

    const atender = paciente.shift();
    respLista.innerText = atender;
    let lista = ""
    paciente.forEach((paciente, i) => (lista += `${i + 1}- ${pacientes[i]}\n`))
    respLista.innerText = lista;


})