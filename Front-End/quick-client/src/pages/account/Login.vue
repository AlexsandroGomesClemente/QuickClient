<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useUserStore } from '../../stores/userStore';


export default {
    data() {
        return {
            email: "",
            password: "",
            user: useUserStore()
        }
    },
    methods: {
        async submitLogin(e) {
            e.preventDefault()

            let dados = {
                email: this.email,
                password: this.password
            }

            if (dados.email == '' || dados.password == '') {
                toast.error('Preencha todos os campos')
                return false
            }

            axios.post(`http://localhost:4000/login`, dados).then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.message)
                    this.user.incrementUser(res.data.user)
                    this.$router.push('/dashboard');
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
    <div class="overlay fundo">
        <div class="card">
            <form action="" class="card-form">
                <h1 class="card-title">Quick Client</h1>
                <input class="card-input" type="text" placeholder="e-mail" name="email" v-model="email">
                <input class="card-input" type="password" name="password" id="" placeholder="senha" v-model="password" >
                <RouterLink class="card-alert" to="/recovery">
                    Esqueceu sua senha?
                </RouterLink>
                <button v-on:click="submitLogin" class="card-button">Entrar</button>
                <RouterLink class="card-alert" to="/register">
                    Não possui uma conta? Inscreva-se.
                </RouterLink>

            </form>
        </div>

    </div>
</template>
