<script>
import { useUserStore } from '../../stores/userStore';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';

export default {
    data() {
        return {
            storeUser: useUserStore(),
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    },
    methods: {
        updateInfo(e) {
            e.preventDefault()
            let dados = {
                id: this.storeUser.user[0].id,
                email: this.email,
                name: this.name,
                password: this.password
            }

            if (dados.email == '' || dados.password == '' || dados.name == '') {
                toast.error('Preencha todos os campos')
                return false
            }

            if (this.password !== this.confirmPassword) {
                toast.error("As senhas não corresponde")
                return false
            }

            axios.post(`http://localhost:4000/profile`, dados).then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.message)
                    this.name = dados.name
                    this.email = dados.email

                    this.storeUser.user[0].name = dados.name
                    this.storeUser.user[0].email = dados.email
                }
            }).catch((err) => {
                console.log(err)
                toast.error('Usuario nao encontrado')
            })

        }
    },
    mounted() {
        this.name = this.storeUser.user[0].name
        this.email = this.storeUser.user[0].email
    }
}



</script>

<template>
    <div class="profile-card">
        <form action="" class="profile-form">   
            <input type="text" placeholder="nome" name="name" v-model="name">
            <input type="text" placeholder="e-mail" name="email" v-model="email">
            <input type="password" placeholder="senha" name="password" v-model="password">
            <input type="password" placeholder="confirma senha" name="confirmPassword" v-model="confirmPassword">
            <button v-on:click="updateInfo" class="card-button">Editar Perfil</button>
        </form>
    </div>
</template>