<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    },
    methods: {
        async submitRegister(e) {
            e.preventDefault()

            let dados = {
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

            axios.post(`http://localhost:4000/register`, dados).then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.data)
                    this.$router.push('/');
                }
            }).catch((err) => {
                console.log(err)
                toast.error('Usuario nao encontrado')
            })


        }
    }
}
</script>
<template>
    <div class="fundo overlay">
        <div class="card">
            <form class="card-form">
                <h1 class="card-title">Quick Client</h1>
                <input class="card-input" type="text" placeholder="nome" name="name" v-model="name">
                <input class="card-input" type="text" placeholder="e-mail" email="email" v-model="email">
                <input class="card-input" type="password" placeholder="senha" name="password" v-model="password">
                <input class="card-input" type="password" placeholder="confirme a senha" name="confirmPassword"
                    v-model="confirmPassword">
                <button v-on:click="submitRegister" type="submit" class="card-button">Criar conta</button>
                <RouterLink class="card-alert" to="/">
                    Já possui sua conta? Entre aqui!
                </RouterLink>

            </form>
        </div>
    </div>
</template>
