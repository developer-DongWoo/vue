const api = {
    async loginUser(credentials, apiUrl) {
      try {
        // 로그인 요청을 서버에 보냄
        // const response = await fetch(`${apiUrl}/login`, { // apiUrl을 사용하여 요청 URL을 만듭니다.
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(credentials),
        // });
  
        // // 서버로부터 받은 응답 데이터를 JSON 형태로 파싱하여 반환
        // const data = await response.json();
        console.log(1313)
        console.log(credentials)
        console.log(apiUrl)
        return {user:1}
      } catch (error) {
        // 에러 처리
        throw new Error('로그인 실패');
      }
    },
    async signupUser(userData, apiUrl) {
        try {
          // 회원가입 요청을 서버에 보냄
          // const response = await fetch(`${apiUrl}/signup`, { // apiUrl을 사용하여 요청 URL을 만듭니다.
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(userData),
          // });
      
          // // 서버로부터 받은 응답 데이터를 JSON 형태로 파싱하여 반환
          // const data = await response.json();
          console.log(1313)
          console.log(userData)
          console.log(apiUrl)
          return { user: 2 }; // 가정: 회원가입 성공 후 사용자 정보를 반환
        } catch (error) {
          // 에러 처리
          throw new Error('회원가입 실패');
        }
      },
      async testMethod(test) {
        console.log(test);
      }
    };
    
    export default api;

    
    
  