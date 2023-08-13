<template>
    <section id="DashboardCardSection">
        <div class="row">
            <div class="col-12">
                <section class="dashboard-Card">
                    <h4>My Account</h4>
                    <hr>
                    <div v-if="isLoggedInAtDashboard">
                        <div v-if="getTicketInfo == null">
                            Plan을 구매하고, 더 다양한 기능을 체험해보세요
                            <button class="buy_plan_button">
                                Plan 구매하기
                            </button>
                        </div>
                        <div v-else class="row">
                            <div class="col-lg-3 col-md-4 col-sm-6" style="padding-bottom: 10px;">
                                <div class="bot_dashboard_user_info_box">
                                    <p class="bot_dashboard_user_info_title">Ticket 유효기간</p>
                                    {{getTicketInfo}} 까지
                                    <button class="buy_plan_button">
                                        Plan 연장하기
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6" style="padding-bottom: 10px;">
                                <div class="bot_dashboard_user_info_box">
                                    <p class="bot_dashboard_user_info_title">최근 수익률</p>
                                    <span style="position: relative; margin: 0; font-size: 30px;">
                                        {{profitRatio}} %
                                    </span>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6" style="padding-bottom: 10px;">
                                <div class="bot_dashboard_user_info_box">
                                    <p class="bot_dashboard_user_info_title">내 승률</p>
                                    <span style="position: relative; margin: 0; font-size: 30px;">
                                        {{winRate}} %
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6" style="padding-bottom: 10px;">
                                <div class="bot_dashboard_user_info_box">
                                    <p class="bot_dashboard_user_info_title">손익비</p>
                                    <span style="position: relative; margin: 0; font-size: 30px;">
                                        {{profitLossRatio}} %
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div v-else class="row">
                        로그인 및 거래소 연동 시, 확인 가능합니다.
                    </div>
                </section>
            </div>
        </div>
    </section>


</template>
<script>
    export default{
        name:"DashBoardUserInfo",
        computed: {
            isLoggedInAtDashboard() {
                return this.$store.state.auth.isLoggedIn;
            },
            getTicketInfo() {
                return this.$store.state.auth.ticket;
            }
        },
        data() {
            return {
                profitRatio : 0,
                winRate : 0,
                profitLossRatio : 0
            }
        },
        methods: {
        }
    }
</script>
<style>
.bot_dashboard_user_info_box{
    border-style: solid; border-width:1px;
    border-color: rgb(128, 255, 172);
    border-radius: 10px;
    padding: 10px;
    height: 100%;
    box-shadow: 2px 2px 15px 5px rgba(172, 255, 203, 0.544);
    font-size: 15px;
}
.bot_dashboard_user_info_title{
    text-align: center;
    font-weight: 900;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(122, 253, 170);
}
.buy_plan_button{
    margin-top: 20px;
    border-width: 0;
    padding: 10px 20px;
    width: 100%;
    border-radius: 10px;
    background-color: rgb(93, 255, 158);
    font-weight: 700;
}
.buy_plan_button:hover{
    background-color: rgb(158, 255, 197);

    /* box-shadow: 1px 1px 5px 5px rgba(182, 255, 212, 0.554); */
}
.buy_plan_button:active{
    background-color: rgb(114, 234, 162);
    /* box-shadow: 1px 1px 5px 5px rgba(182, 255, 212, 0.554); */
}
</style>