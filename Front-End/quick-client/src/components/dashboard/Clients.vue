<script >
import ListStyle from '../../components/helpers/ListStyle.vue';
import Search from '../helpers/Search.vue';

import axios from 'axios'

export default {
    components: {
        ListStyle,
        Search,

    },
    data() {
        return {
            clientList: [],
        };
    },
    methods: {
        async getAllClients() {
            const response = await axios.get("http://localhost:4000/clients")
            this.clientList = response.data.clients
        },
        updateClientList(newList) {
            console.log(newList, 'teste')
            this.clientList = newList;
        },

    },
    mounted() {
        this.getAllClients()
    }
}
</script>

<template>
    <Search :clients="clientList" @updateClientList="updateClientList" />
    <div class="clients-card">
        <ListStyle :clients="clientList" />
    </div>
</template>