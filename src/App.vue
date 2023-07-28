<template>
  <div>
    <!-- Display kline data -->
    <ul>
      <li v-for="data in klineData" :key="data.t">
        {{ formatDate(data.t) }} - {{ data.c }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      klineData: [] // Store kline data
    };
  },
  mounted() {
    // WebSocket 연결
    const socket = new WebSocket('wss://fstream.binance.com/stream?streams=btcusdt@kline_1m');

    // WebSocket 메시지 수신
    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      const kline = message.data.k;

      // kline 데이터 업데이트
      this.updateKlineData({
        t: kline.t, // 타임스탬프
        c: kline.c, // 종가 (또는 다른 원하는 데이터)
      });
    };
  },
  methods: {
    // kline 데이터 업데이트 메서드
    updateKlineData(newData) {
      // 새 데이터를 klineData에 추가 또는 기존 데이터 업데이트
      const index = this.klineData.findIndex(data => data.t === newData.t);
      if (index !== -1) {
        // 이미 존재하는 데이터라면 업데이트
        this.klineData.splice(index, 1, newData);
      } else {
        // 새로운 데이터라면 추가
        this.klineData.push(newData);
      }

      // klineData를 타임스탬프를 기준으로 오름차순으로 정렬 (옵션)
      this.klineData.sort((a, b) => a.t - b.t);
    },
    // 타임스탬프를 yyyy-MM-dd hh:mm:ss 형태로 변환하는 함수
    formatDate(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
  }
};
</script>
