<template>
  <div>
    <!-- Display kline data -->
    <ul>
      <WebSocketComponent></WebSocketComponent>
    </ul>
  </div>
</template>

<script>
import WebSocketComponent from './components/WebSocket.vue'; // WebSocketComponent import

export default {
  name: 'App',
  components: {
    WebSocketComponent, // 컴포넌트 등록
  },
  // ... 나머지 코드
};
</script>

