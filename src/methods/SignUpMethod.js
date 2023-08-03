import axios from "axios";

export async function submitForm(userEmail, nickName, password, rePassword) {
  const userData = {
    userEmail,
    nickName,
    password,
    rePassword,
  };

  // 서버로 데이터를 전송하는 POST 요청
  const response = await axios.post("http://localhost:8080/signup", userData);
  // 성공적으로 가입되었을 때의 처리를 추가할 수 있습니다.
  return response.data;
}

// 중복확인 버튼을 클릭했을 때의 처리
export async function checkDuplicateEmail(userEmail) {
  const response = await axios.get(`http://localhost:8080/verify-email?email=${userEmail}`);
  return response.status;
}

// 중복확인 버튼을 클릭했을 때의 처리
export async function checkDuplicateNickname(nickName) {
  const response = await axios.get(`http://localhost:8080/verify-nickName?nickName=${nickName}`);
  return response.data;
}
