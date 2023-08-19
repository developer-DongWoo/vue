import axios from 'axios';

export async function createBot(params) {
    const endpoint = "https://78aa-121-176-132-24.ngrok-free.app/bots";

    // POST 요청 보내기
    return axios.post(endpoint, params)
        .then(response => {
            // 성공적으로 요청이 처리되었을 때 실행할 코드
            console.log("Bot 생성 성공:", response.data);
            return response.data; // 필요하다면 응답 데이터를 반환
        })
        .catch(error => {
            // 요청이 실패했을 때 실행할 코드
            console.error("Bot 생성 실패:", error);
            throw error; // 에러를 다시 던져서 상위에서 처리하도록 함
        });
}