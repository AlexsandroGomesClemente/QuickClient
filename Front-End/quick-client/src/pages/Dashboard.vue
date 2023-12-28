<script>
import { RouterLink } from 'vue-router'
import DashboardMain from '../components/dashboard/Dashboardmain.vue'
import Clients from '../components/dashboard/Clients.vue'
import Profile from '../components/dashboard/Profile.vue'


export default {
    data() {
        return {
            type: "Clientes"
        }
    },
    components: {
        Clients,
        DashboardMain,
        Profile
    },
    methods: {
        changeParams(value) {
            this.type = value
        }
    }
}

</script>

<template>
    <div class="dashboard-main">
        <section class="menu">
            <h3 class="menu-title">{{ type }}</h3>
            <nav class="menu-nav">
                <div class="menu-nav-title">
                    <img src="../assets/img/logo.png">
                    <h4>Quick Client</h4>
                </div>
                <ul class="menu-nav-ul">
                    <li v-on:click="changeParams('Clientes')" class="menu-nav-li">
                        <img src="../assets/img/icons/clients.png" />
                        <span>Clientes</span>

                    </li>

                    <li>
                        <RouterLink class="menu-nav-li" to="/">
                            <img src="../assets/img/icons/saida.png" />
                            <span>Sair</span>
                        </RouterLink>

                    </li>
                </ul>
            </nav>
        </section>
        <main class="dashboard">
            <Profile v-if="type === 'Profile'" />
            <Clients v-if="type === 'Clientes'" />
            <DashboardMain v-if="type === 'Dashboards'" />
        </main>
    </div>
</template>
