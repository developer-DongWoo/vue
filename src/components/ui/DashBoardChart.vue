<template>
    <div>
        <section id="DashboardCardSection">
            <div class="row" style="justify-content: space-between;">
                <div class="col-12">
                    <section class="dashboard-Card" style="height: 70vh;">
                        <div class="tradingview-widget-container">
                            <div id="tradingview_6238e"></div>
                            <div class="tradingview-widget-copyright">
                                <a href="https://kr.tradingview.com/" rel="noopener nofollow" target="_blank">
                                    <span class="blue-text">트레이딩뷰에서 모든 시장 추적</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'DashboardChart',
    mounted() {
        this.$nextTick(() => {
            this.loadTradingViewScript()
        })
    },
    methods: {
        loadTradingViewScript() {
            const script = document.createElement('script');
            script.id = 'tradingview-widget-loading-script';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.type = 'text/javascript';
            script.onload = this.initializeTradingViewWidget;

            document.head.appendChild(script);
        },
        initializeTradingViewWidget() {
            // console.log("Initializing TradingView Widget...");
            this.$nextTick(() => {
                if (document.getElementById('tradingview_6238e') && window.TradingView) {
                new window.TradingView.widget({
                    width:"100%",
                    height:"100%",
                    symbol: 'BINANCE:BTCUSDT.P',
                    interval: '60',
                    timezone: 'Etc/UTC',
                    theme: 'light',
                    style: '1',
                    locale: 'kr',
                    enable_publishing: false,
                    allow_symbol_change: true,
                    studies: ['STD;Average_True_Range'],
                    container_id: 'tradingview_6238e'
                });
            }
            }
            )
        }
    }
};
</script>
