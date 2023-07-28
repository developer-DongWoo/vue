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
  import { formatDate } from "../utils.js"
  export default {
    name: 'WebSocketComponent',
    data() {
      return {
        klineData: [] // Store kline data
      };
    },
    mounted() {
      // WebSocket 연결
      const socket = new WebSocket('wss://fstream.binance.com/stream?streams=xrpusdt@kline_1m');
  
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
      formatDate(timestamp) {
      return formatDate(timestamp);
    }
    }
  };
  </script>
  