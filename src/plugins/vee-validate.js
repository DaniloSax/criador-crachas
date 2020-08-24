import { extend } from 'vee-validate'
import { required, email, image } from 'vee-validate/dist/rules'
import { cpf } from 'cpf-cnpj-validator'

extend("required", {
    ...required,
    message: "Campo Obrigatório"
});
extend("email", {
    ...email,
    message: "Ex: nome@domínio.com"
});
extend("image", {
    ...image,
    message: "Deve ser uma imagem."
});

extend('cpf', value => {
    if (value) {
        const inputCPF = value.replace(/\D/gim, "");
        if (!cpf.isValid(inputCPF)) {
            return 'CPF Inválido!'
        } else return true
    }
})