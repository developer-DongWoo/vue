<template>
    <div>
        <section id="botCreateSection">
            <div class="input-container">
                <input v-model="botName" type="text" placeholder="Bot Name을 입력하세요">
            </div>
            <div class="input-container">
                <input v-model="apiKey" type="password" placeholder="API Key를 입력하세요">
            </div>
            <div class="input-container">
                <input v-model="secretKey" type="password" placeholder="Secret Key를 입력하세요">
            </div>
            <div class="input-container">
                <select v-model="exchange">
                    <option value="binance">바이낸스</option>
                    <option value="bybit">바이비트</option>
                </select>
            </div>
            <div class="input-container">
                <select v-model="productType">
                    <option value="futures">USD-M</option>
                    <option value="spot">Spot</option>
                </select>
            </div>
            <div class="input-container">
                <select v-model="orderType">
                    <option value="market">시장가</option>
                    <option value="limit">지정가</option>
                </select>
            </div>
            <div class="input-container">
                <input v-model="isMainBot" type="number" placeholder="amount">
            </div>
            <div class="input-container">
                <button @click="createNewBot">
                    만들기
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import { createBot } from '../../store/methods/createBot';
export default {
    name: "CreateBotUi",
    data() {
        return {
            botName:"adfadfafd",
            apiKey:"aaffdafafdafdafafadfdafaaf",
            secretKey:"adfafadfadfadfafddafafaf",
            exchange:"binance",
            productType:"futures",
            orderType:"market",
            amount:100,
            isMainBot:false
        }
    },
    methods : {
        async createNewBot() {
            const botData = {
                botName:this.botName,
                accessKey:this.apiKey,
                secretKey:this.secretKey,
                exchange:this.exchange,
                productType:this.productType,
                orderType:this.orderType,
                amount:this.amount,
                isMainBot:false
            };
            console.log(botData)
            try {
                const response = await createBot(botData);
                console.log("Bot 생성 결과:", response);
            } catch (error) {
                console.error("Bot 생성 오류:", error);
            }
        }
    }
}
</script>

<style>
#botCreateSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
}

.input-container {
    margin: 10px;
    width: 100%;
}

.input-container select, input {
    width: 100%;
}

/* 추가적인 스타일링을 필요에 따라 수정하세요 */
</style>
