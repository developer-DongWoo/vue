<template>
    <div>
        <section id="DashboardCardSection">
            <div class="row" style="justify-content: space-between;">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 첫 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        <!-- todo // 바이낸스 비트코인 실시간 현재가를 가져와서 반영되어야 함 //  -->
                        <div class="dashboard-Card-div">
                            <h6>BTC </h6>
                            <span class="dashboard-card-span">Binance</span>
                        </div>
                        <p id="btc-price">$ {{ bitcoinPrice }}</p>
                        <div class="dashboard-Card-div" style="border: none; height: 30px;">
                            <p>USD</p>
                            <p :class="priceChangeClass">
                                <span style="font-size: x-small; color: gray; margin-right: 10px;">24h</span> {{ bitcoin24hr }} % <!-- Todo // 24시간 가격변화율을 표시해야함 -->
                            </p>
                        </div>
                    </section>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 두 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        card
                    </section>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 세 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        card
                    </section>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 네 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        card
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { initWebSocket } from '../../store/methods/binanceBtcWebsocket';

export default {
    name: "DashboardCard",
    data() {
        return {
            bitcoinPrice: null,
            bitcoin24hr: null,
            socket: null
        };
    },
    mounted() {
        this.initWebSocket();
    },
    computed:{
        priceChangeClass() {
            if (this.bitcoin24hr > 0) {
                return 'positive-change';
            } else if (this.bitcoin24hr < 0) {
                return 'negative-change';
            } else {
                return 'no-change';
            }
        }
    },
    methods: {
        initWebSocket() {
            this.socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@miniTicker');

            initWebSocket(this.socket, price => {
                this.bitcoinPrice = price.close;
                this.bitcoin24hr = ((price.close-price.open)/price.open * 100).toFixed(2)
            });
        }
    },
    beforeDestroy() {
        if (this.socket) {
            this.socket.close();
        }
    }
};
</script>
<style>
#DashboardCardSection{
    text-align: center;
    width: 90vw;
    margin: 0 auto;
}
.dashboard-Card{
    border-style: solid; border-width: 1px; border-color: rgba(128, 128, 128, 0.093); border-radius: 5px;
    margin-top: 20px;
    padding: 10px;
    box-shadow: 1px 1px 5px 1px rgba(128, 128, 128, 0.263);
}
.dashboard-Card h6 {
    margin-top: 2px;
    text-align: left;
}
#btc-price{
    margin-top: 10px;
    font-size: x-large;
}
.dashboard-Card-div{
    display: flex;
    justify-content: space-between;
    border-bottom-color: gray;
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.dashboard-card-span{
    font-size: 13px;
    background-color: rgb(255, 238, 0); color: black;
    padding:0px 10px;
    height: 20px;
    border-style: solid; border-width: 1px; border-color: rgba(255, 244, 37, 0.228); border-radius: 5px;
}
.positive-change {
    color: red;
}

.negative-change {
    color: blue;
}

.no-change {
    color: black;
}
</style>