<template>
    <div class="search-component">
        <input class="" v-model="termoPesquisa" placeholder="Digite para buscar" />
        <button class="btn-reset" @click="resetarBusca">Limpar</button>
        <button class="btn-add" @click="mostrarModal">Adicionar Cliente</button>
    </div>
    <Modal v-if="modalVisivel" @fechar="fecharModal" />
</template>

<script>
import Modal from "../helpers/Modal.vue";
import axios from 'axios'

export default {
    data() {
        return {
            termoPesquisa: "",
            modalVisivel: false
        };
    },
    components: {
        Modal,
    },
    props: {
        clients: {
            type: Array,
            required: true,
        },
    },
    emits: ['updateClientList'],
    watch: {
        termoPesquisa() {
            const termo = this.termoPesquisa.toLowerCase();

            const busca = this.clients.filter(item =>
                item.codigo.includes(termo) ||
                item.cidade.toLowerCase().includes(termo) ||
                item.name.toLowerCase().includes(termo)
            );

            if(this.termoPesquisa !== ""){
                setTimeout(() => {
                    this.$emit('updateClientList', busca);
                }, 500);
            }

            if(this.termoPesquisa === "") {
                setTimeout(() => {
                    this.resetarBusca()
                }, 500);
            }

        }
    },
    methods: {
        async resetarBusca() {
            this.termoPesquisa = "";
            const response = await axios.get("http://localhost:4000/clients")
            if (response.status === 200) {
                this.$emit('updateClientList', response.data.clients);
            }
        },
        mostrarModal() {
            this.modalVisivel = true;
        },
        fecharModal() {
            this.modalVisivel = false;
        }
    }
};
</script>

<style scoped>
.search-component {
    background-color: #27293D;
    border-radius: 15px;
    height: 5%;
    width: 95%;
    margin: 73px 30px -32px;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    /* Adicione padding conforme necessário */
}

input {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 5px;
    border: none;
    width: 80%;
    height: 22px;
    padding-left: 13px;
}

input:focus {
    border: none;
    outline: 0;
}

input::placeholder {
    color: white;
}

.btn-reset {
    height: 22px;
    width: 100px;
    margin: 0px 5px;
    border: none;
    border-radius: 5px;

    background-color: #F68831;
    cursor: pointer;
}

.btn-add {
    height: 22px;
    width: 120px;
    margin: 0px 5px;
    cursor: pointer;

    border: none;
    border-radius: 5px;
    background-color: #03a803;
}

/* Adicione estilos adicionais conforme necessário */
</style>