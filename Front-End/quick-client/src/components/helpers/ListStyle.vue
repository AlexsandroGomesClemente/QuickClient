<!-- ClientTable.vue -->
<template>
  <div class="client-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Codigo</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>CEP</th>
          <th>Endereço</th>
          <th>Número</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>UF</th>
          <th>Complemento</th>
          <th>Telefone</th>
          <th>Limete Crédito</th>
          <th>Validate</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{ client.id }}</td>
          <td>{{ client.codigo }}</td>
          <td>{{ client.name }}</td>
          <td>{{ client.cpf_cnpj }}</td>
          <td>{{ client.cep }}</td>
          <td>{{ client.endereco }}</td>
          <td>{{ client.numero }}</td>
          <td>{{ client.bairro }}</td>
          <td>{{ client.cidade }}</td>
          <td>{{ client.uf }}</td>
          <td>{{ client.complemento }}</td>
          <td>{{ client.telefone }}</td>
          <td>{{ client.limite_credito }}</td>
          <td>{{ client.validate }}</td>
          <td class="action">
            <div class="btn-editar" @click="mostrarModal(client.id)">
              Editar
            </div>
            <div class="btn-deletar" v-on:click="deleteClient(client.id)">
              Excluir
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Modal v-if="modalVisivel" @fechar="fecharModal" :id="idEdit" />
</template>

<script>
import axios from 'axios'
import Modal from "../helpers/ModalEdit.vue";

export default {
  name: 'ClientTable',
  data() {
    return {
      idEdit: 0,
      modalVisivel: false
    }
  },
  props: {
    clients: {
      type: Array,
      required: true,
    },
  },
  components: {
    Modal
  },
  methods: {
    async deleteClient(id) {
      const response = await axios.delete(`http://localhost:4000/client/delete${id}`)
      window.location.reload()

    },
    mostrarModal(id) {
      this.idEdit = id
      this.modalVisivel = true;
    },
    fecharModal() {
      this.modalVisivel = false;
    }
  }
};
</script>

<style scoped>
.action {
  cursor: pointer;
}

.action div {
  margin-right: 5px;
}

.client-table {
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  border-radius: 5px;
  overflow-y: scroll;
}

table {
  width: 98%;
  border-collapse: collapse;
  margin: 10px;
}

th,
td {
  border-bottom: 1px solid #585454;
  padding: 10px;
  text-align: left;
  font-size: 12px;
}

.btn-editar {
  width: 50px;
  height: 20px;
  cursor: pointer;
  margin-top: 15px;

  text-align: center;

  border: none;
  border-radius: 5px;
  background-color: #17A2B8;
}

.btn-deletar {
  width: 50px;
  height: 20px;
  cursor: pointer;
  margin-top: 15px;

  text-align: center;

  border: none;
  border-radius: 5px;
  background-color: #e70000;
}
</style>