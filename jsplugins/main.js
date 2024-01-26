
$(document).ready(function (){
    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-02')

    $('#cep').mask('00000-000');

                $('form').validate({
                    rules: {
                        nome: {
                            required: true
                        },
                        email: {
                            required: true, 
                            email: true
                        },
                        telefone: {
                            required: true
                        },
                        endereco: {
                            required: true,
                        },
                        cpfUsuario: {
                            required: true,
                        },
                        cepUsuario: {
                            required: true,
                        },
                    },
                    messages: {
                        nome: 'Por favor, insira o seu nome'
                    },
                    messages: {
                        email: 'Por favor, insira um e-mail válido'
                    }, 
                    messages: {
                        telefone: 'Por favor, insira um numero de telefone'
                    },
                    messages: {
                        endereco: 'Por favor, insira o seu nome'
                    },
                    messages: {
                        cpfUsuario: 'Por favor, insira o seu numero de cadastro de pessoa física'
                    },
                    messages: {
                        cepUsuario: 'Por favor, insira o CEP'
                    },
                    submitHandler: function(form){
                        console.log(form)
                    },
                    invalidHandler: function(evento, validador) {
                        let camposIncorretos = validador.numberOfInvalids();
                        console.log(camposIncorretos)
                        if (camposIncorretos) {
                            alert(`Existem ${camposIncorretos} campos incorretos!`)
                        }
                    }
                })
});

