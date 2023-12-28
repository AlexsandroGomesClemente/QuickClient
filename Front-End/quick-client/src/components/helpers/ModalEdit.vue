<template>
    <div class="modal" @click="fecharModal">
        <div class="modal-conteudo" @click.stop>
            <div class="closed">
                <h2>
                    <img src="../../assets/img/logo.png" width="70px" height="40px" />
                    Editar Cliente
                    <img src="../../assets/img/icons/cruz.png" class="btn-reset" @click="fecharModal" />
                </h2>

            </div>
            <form>
                <!-- Campos do formulário -->
                <div class="campo">
                    <label for="name">Nome: </label>
                    <input type="text" v-model="formulario.name" id="name" required />
                </div>
                <div class="campo">
                    <label for="name">CPF/CNPJ:</label>
                    <input type="text" v-model="formulario.cpf_cnpj" id="cpf" required />
                </div>
                <div class="campo">
                    <label for="name">CEP:</label>
                    <input type="text" v-model="cep" id="cep" required />
                </div>
                <div class="campo">
                    <label for="name">Logradouro:</label>
                    <input type="text" v-model="formulario.logradouro" id="logradouro" required />
                </div>
                <div class="campo">
                    <label for="name">Endereço:</label>
                    <input type="text" v-model="formulario.endereco" id="endereco" required />
                </div>
                <div class="campo">
                    <label for="name">Numero:</label>
                    <input type="text" v-model="formulario.numero" id="numero" required />
                </div>
                <div class="campo">
                    <label for="name">Bairro:</label>
                    <input type="text" v-model="formulario.bairro" id="bairro" required />
                </div>
                <div class="campo">
                    <label for="name">Cidade:</label>
                    <input type="text" v-model="formulario.cidade" id="cidade" required />
                </div>
                <div class="campo">
                    <label for="name">UF:</label>
                    <input type="text" v-model="formulario.uf" id="uf" required />
                </div>
                <div class="campo">
                    <label for="name">Complemento:</label>
                    <input type="text" v-model="formulario.complemento" id="complemento" required />
                </div>
                <div class="campo">
                    <label for="name">Telefone:</label>
                    <input type="text" v-model="formulario.telefone" id="telefone" required />
                </div>
                <div class="campo">
                    <label for="name">Limite de Crédito:</label>
                    <input type="text" v-model="formulario.limite_credito" id="limite" required />
                </div>

                <!-- Repita o bloco acima para os demais campos -->

                <button v-on:click="submitForm" class="btn-add" type="submit">Editar</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    data() {
        return {
            cep: "",
            formulario: {
                id: "",
                name: "",
                cpf_cnpj: "",
                cep: "",
                logradouro: "",
                endereco: "",
                numero: "",
                bairro: "",
                cidade: "",
                uf: "",
                complemento: "",
                telefone: "",
                limite_credito: 0
            }
        };
    },

    methods: {
        fecharModal() {
            this.$emit("fechar");
        },
        async submitForm(e) {
            e.preventDefault()

            this.formulario.id = this.id;

            const response = await axios.put('http://localhost:4000/client/put', this.formulario)


            if (response.status === 200) {
                toast.success(response.data.message)
                this.formulario = {
                    name: "",
                    cpf_cnpj: "",
                    cep: "",
                    logradouro: "",
                    endereco: "",
                    numero: "",
                    bairro: "",
                    cidade: "",
                    uf: "",
                    complemento: "",
                    telefone: "",
                    limite_credito: 0
                };
                this.fecharModal();
            }


        }
    },
    watch: {
        async cep(newCep) {
            if (newCep.length === 8) {
                const response = await axios.get(`https://viacep.com.br/ws/${newCep}/json/`)

                this.formulario = {
                    cep: response.data.cep,
                    logradouro: response.data.logradouro,
                    endereco: response.data.logradouro,
                    bairro: response.data.bairro,
                    cidade: response.data.localidade,
                    uf: response.data.uf,
                };
            }
        }
    }
};
</script>
  
<style scoped>
/* Estilização do modal */

.closed {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-conteudo {
    background: #f3efef;
    color: black;
    padding: 20px;
    border-radius: 3px;

    width: 30%;
    height: 82%;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.closed h2 {
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
    margin-bottom: 30px;
    font-size: 18px;
    color: #949494;

}

form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-right: 20px;
}

.campo label {
    font-size: 12px;
    margin-bottom: 8px;
    font-weight: 600;
}

.campo input {
    background-color: #f3efef;
    border: 1px solid rgb(183, 182, 182);
    border-radius: 4px;
    width: 100%;

    padding-left: 5px;

    height: 23px;
    color: black;
}

.campo input:focus {

    outline: 0;
}

.campo label {
    margin-right: 5px;
}

button {
    margin-top: 10px;
}

.btn-reset {
    height: 20px;
    width: 20px;
    margin-left: 140px;
    border: none;
    border-radius: 5px;

    cursor: pointer;
}

.btn-add {
    height: 32px;
    width: 100%;
    cursor: pointer;
    margin-top: 15px;

    border: none;
    border-radius: 5px;
    background-color: #03a827;
}
</style>