import { extend } from 'vee-validate'
import { required, email, image } from 'vee-validate/dist/rules'

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