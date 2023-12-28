<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export default {
    data() {
        return {
            email: "",
        }
    },
    methods: {
        async submitRecovery(e) {
            e.preventDefault()

            let dados = {
                email: this.email,
            }

            if (dados.email == '') {
                toast.error('Preencha todos os campos')
                return false
            }

            axios.post(`http://localhost:4000/recovery`, dados).then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.message)
                    toast.success(`Sua nova senha é: ${res.data.data.newPassword}`)

                    setTimeout(() => {
                        this.$router.push('/');
                    },3000)
                }
            }).catch((err) => {
                console.log(err)
                toast.error('Email nao encontrado')
            })


        }
    }
}
</script>
<template>
    <div class="fundo overlay">
        <div class="card">
            <form action="" class="card-form">
                <h1 class="card-title">Quick Client</h1>
                <p class="card-recovery">
                    Esqueceu sua senha? Não se preocupe! Por favor, insira seu endereço de e-mail abaixo e enviaremos
                    instruções para ajudá-lo a recuperar sua conta.
                </p>
                <input class="card-input" type="text" placeholder="e-mail" name="email" v-model="email">
                <button v-on:click="submitRecovery" class="card-button">Recuperar</button>
                <RouterLink class="card-alert" to="/">
                    Já possui sua conta? Logar-se
                </RouterLink>
            </form>
        </div>

    </div>
</template>
