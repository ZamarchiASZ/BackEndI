function validaNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ\s\-']+$/;
    const isValid = nome.length > 2 && regexNome.test(nome);
    return isValid;
    }
    
    function validaTelefone(telefone) {
    const regexTelefone = /^[1-9]{2}9[0-9]{4}\-[0-9]{4}$/;
    const isValid = regexTelefone.test(telefone);
    return isValid;
    }
    
    function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regexEmail.test(email);
    return isValid
    }
    
    export function validaContato(nome, telefone, email) {
    const nomeValido = validaNome(nome);
    const telefoneValido = validaTelefone(telefone);
    const emailValido = validaEmail(email);
    
    const contatoValido = nomeValido && telefoneValido && emailValido;
    
    if (contatoValido) {
    return {status : true, mensagem: ''}
    } else {
    return{status: false, mensagem: 'Nome/Telefone/Email inválido(s)'}
    }
    }