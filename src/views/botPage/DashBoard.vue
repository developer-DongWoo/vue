<template>
    <div>
        <div class="bot-page-title">Dashboard</div>
        <DashBoardUserInfo></DashBoardUserInfo>
        <DashboardCard></DashboardCard>
        <DashboardChart></DashboardChart>
    </div>
</template>
<script>
    import DashboardCard from "../../components/ui/DashBoardCard"
    import DashboardChart from "../../components/ui/DashBoardChart"
    import DashBoardUserInfo from "../../components/ui/DashBoardUserInfo"
    export default{
        name:"BotDashBoard",
        components:{
            DashboardCard,
            DashboardChart,
            DashBoardUserInfo
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