<template>
    <div>
        <section id="DashboardCardSection">
            <div class="row" style="justify-content: space-between;">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 첫 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        <!-- todo // 바이낸스 비트코인 실시간 현재가를 가져와서 반영되어야 함 //  -->
                        <div class="dashboard-Card-div">
                            <h6>BTC(USD-M) </h6>
                            <span class="dashboard-card-span">Binance</span>
                        </div>
                        <p id="btc-price">$ {{ bitcoinPrice }}</p>
                        <div class="dashboard-Card-div" style="border: none; height: 30px;">
                            <p>USDT</p>
                            <p :class="priceChangeClass">
                                <span style="font-size: x-small; color: gray; margin-right: 10px;">24h</span> 
                                <svg v-if="pricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>

                                <svg v-else-if="!pricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg>
                                {{ bitcoin24hr }} % <!-- Todo // 24시간 가격변화율을 표시해야함 -->
                            </p>
                        </div>
                        <div id="priceRatio">
                            <span :style="{ width:bitcoin24hrlocation}"></span>
                        </div>
                    </section>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 두 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        <div class="dashboard-Card-div">
                            <h6>ETH(USD-M) </h6>
                            <span class="dashboard-card-span">Binance</span>
                        </div>
                        <p id="btc-price">$ {{ ethPrice }}</p>
                        <div class="dashboard-Card-div" style="border: none; height: 30px;">
                            <p>USDT</p>
                            <p :class="ethPriceChangeClass">
                                <span style="font-size: x-small; color: gray; margin-right: 10px;">24h</span> 
                                <svg v-if="ethPricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>

                                <svg v-else-if="!ethPricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg>
                                {{ eth24hr }} % <!-- Todo // 24시간 가격변화율을 표시해야함 -->
                            </p>
                        </div>
                        <div id="priceRatio">
                            <span :style="{ width:eth24hrlocation}"></span>
                        </div>
                    </section>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 세 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        <div class="dashboard-Card-div">
                            <h6>XRP(USD-M) </h6>
                            <span class="dashboard-card-span">Binance</span>
                        </div>
                        <p id="btc-price">$ {{ xrpPrice }}</p>
                        <div class="dashboard-Card-div" style="border: none; height: 30px;">
                            <p>USDT</p>
                            <p :class="xrpPriceChangeClass">
                                <span style="font-size: x-small; color: gray; margin-right: 10px;">24h</span> 
                                <svg v-if="xrpPricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>

                                <svg v-else-if="!xrpPricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg>
                                {{ xrp24hr }} % <!-- Todo // 24시간 가격변화율을 표시해야함 -->
                            </p>
                        </div>
                        <div id="priceRatio">
                            <span :style="{ width:xrp24hrlocation}"></span>
                        </div>
                    </section>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <!-- 네 번째 항목 내용 -->
                    <section class="dashboard-Card">
                        <div class="dashboard-Card-div">
                            <h6>SOL(USD-M) </h6>
                            <span class="dashboard-card-span">Binance</span>
                        </div>
                        <p id="btc-price">$ {{ solPrice }}</p>
                        <div class="dashboard-Card-div" style="border: none; height: 30px;">
                            <p>USDT</p>
                            <p :class="solPriceChangeClass">
                                <span style="font-size: x-small; color: gray; margin-right: 10px;">24h</span> 
                                <svg v-if="solPricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>

                                <svg v-else-if="!solPricePositive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg>
                                {{ sol24hr }} % <!-- Todo // 24시간 가격변화율을 표시해야함 -->
                            </p>
                        </div>
                        <div id="priceRatio">
                            <span :style="{ width:sol24hrlocation}"></span>
                        </div>
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
            socket: null,
            bitcoinPrice: null,
            bitcoin24hr: null,
            isBtcPricePositive: null,
            bitcoin24hrlocation: "0%",

            ethPrice: null,
            eth24hr: null,
            isethPricePositive: null,
            eth24hrlocation: "0%",

            xrpPrice: null,
            xrp24hr: null,
            isxrpPricePositive: null,
            xrp24hrlocation: "0%",

            solPrice: null,
            sol24hr: null,
            issolPricePositive: null,
            sol24hrlocation: "0%"
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
        },
        ethPriceChangeClass() {
            if (this.eth24hr > 0) {
                return 'positive-change';
            } else if (this.eth24hr < 0) {
                return 'negative-change';
            } else {
                return 'no-change';
            }
        },
        xrpPriceChangeClass() {
            if (this.xrp24hr > 0) {
                return 'positive-change';
            } else if (this.xrp24hr < 0) {
                return 'negative-change';
            } else {
                return 'no-change';
            }
        },
        solPriceChangeClass() {
            if (this.sol24hr > 0) {
                return 'positive-change';
            } else if (this.sol24hr < 0) {
                return 'negative-change';
            } else {
                return 'no-change';
            }
        },
        pricePositive() {
            if (this.bitcoin24hr > 0) {
                return true;
            } else if (this.bitcoin24hr < 0) {
                return false;
            } else {
                return null;
            }
        },
        ethPricePositive() {
            if (this.eth24hr > 0) {
                return true;
            } else if (this.eth24hr < 0) {
                return false;
            } else {
                return null;
            }
        },
        xrpPricePositive() {
            if (this.xrp24hr > 0) {
                return true;
            } else if (this.xrp24hr < 0) {
                return false;
            } else {
                return null;
            }
        },
        solPricePositive() {
            if (this.sol24hr > 0) {
                return true;
            } else if (this.sol24hr < 0) {
                return false;
            } else {
                return null;
            }
        }
    },
    methods: {
        initWebSocket() {
            this.socket = new WebSocket('wss://fstream.binance.com/stream?streams=btcusdt@ticker/ethusdt@ticker/xrpusdt@ticker/solusdt@ticker');

            initWebSocket(this.socket, price => {
                if (price.ticker == 'BTCUSDT'){
                    this.bitcoinPrice = price.close;
                    this.bitcoin24hr = price.price_percent
                    this.bitcoin24hrlocation = ((price.close - price.low) / (price.high - price.low) * 100) + "%";
                }
                else if (price.ticker == 'ETHUSDT'){
                    this.ethPrice = price.close;
                    this.eth24hr = price.price_percent
                    this.eth24hrlocation = ((price.close - price.low) / (price.high - price.low) * 100) + "%";
                }
                else if (price.ticker == 'XRPUSDT'){
                    this.xrpPrice = price.close;
                    this.xrp24hr = price.price_percent
                    this.xrp24hrlocation = ((price.close - price.low) / (price.high - price.low) * 100) + "%";
                }
                else if (price.ticker == 'SOLUSDT'){
                    this.solPrice = price.close;
                    this.sol24hr = price.price_percent
                    this.sol24hrlocation = ((price.close - price.low) / (price.high - price.low) * 100) + "%";
                }


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

#priceRatio{
    width: 100%;
    background-color: rgb(255, 0, 0);
    display: flex;
}

#priceRatio span{
    height: 7px;
    background-color: rgb(0, 203, 37);
    margin: 0;
    padding: 0;
    border-width: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
</style>