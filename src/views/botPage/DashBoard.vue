<template>
    <div>
        <div class="bot-page-title">Dashboard</div>
        <DashboardCard></DashboardCard>
    </div>
</template>
<script>
    import DashboardCard from "../../components/ui/DashBoardCard"
    export default{
        name:"BotDashBoard",
        components:{
            DashboardCard
        }
    }
</script>
<style>
    .bot-page-title{
        text-align: center;
        font-size: x-large;
        font-weight: 800;
        margin-bottom: 50px;
    }
</style>