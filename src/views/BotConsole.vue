<template>
    <div>
        <SideBar/>
        <div style="width: 100%; height: 100vh;">
        <Dashboard v-if="currentBotPage === 'dashboard'"></Dashboard>
        <CreateBot v-else-if="currentBotPage === 'botCreate'"></CreateBot>
        <OrderHistory v-else-if="currentBotPage === 'orderHistory'"></OrderHistory>
        </div>
        
    </div>
</template>
<script>
    import SideBar from "../components/ui/SideBar"
    import Dashboard from "./botPage/DashBoard"
    import CreateBot from "./botPage/CreateBot"
    import OrderHistory from "./botPage/OrderHistory"
    export default {
        name:'BotConsole',
        components:{
            SideBar,
            Dashboard,
            CreateBot,
            OrderHistory
        },
        computed: {
            currentBotPage() {
                return this.$store.getters.getCurrentBotPage;
            }
        },

        data() {
            return {
            }
        }
    }
</script>