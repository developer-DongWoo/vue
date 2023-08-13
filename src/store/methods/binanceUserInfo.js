import axios from 'axios';
import CryptoJS from 'crypto-js';

export async function getAllUserIncomeFromBinance(apiKey, apiSecret) {
    const endpoint = 'https://fapi.binance.com/fapi/v1/income';

    // 요청에 대한 매개변수 정의 (symbol 제외)
    const params = {
        startTime: Date.now() - 90 * 24 * 60 * 60 * 1000, // 최근 30일 전을 밀리초로 표시
        endTime:Date.now(),
        incomeType: "REALIZED_PNL",
        timestamp: Date.now(),
        limit:1000
    };

    // API 키로 요청에 서명
    const queryString = new URLSearchParams(params).toString();
    const signature = CryptoJS.HmacSHA256(queryString, apiSecret).toString(CryptoJS.enc.Hex);

    try {
        const response = await axios.get(endpoint, {
            headers: {
                'X-MBX-APIKEY': apiKey,
            },
            params: {
                ...params,
                signature,
            },
        });
    


    
        return response.data;
    } catch (error) {
        console.error('수익 정보를 가져오는 중 오류 발생:', error);
        throw error;
    }
    
}
