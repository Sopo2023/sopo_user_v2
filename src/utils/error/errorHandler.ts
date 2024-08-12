import { AxiosError } from "axios";
import { stat } from "fs";

class ErrorHandler {
  loginError = (status: number) => {
    switch (status) {
        case 400:
            return  "탈퇴된 멤버입니다.";
      case 401: 
        return  "멤버가 일치하지 않습니다.";
      case 403:
            return"비밀번호가 옳지 않습니다";
      case 404:
        return "멤버를 찾을수 없습니다.";
      case 500:
        return "서버 오류가 발생하였습니다.";
      default:
        return "로그인에 실패하였습니다.";
    }
  };

  signupError = (status: number) => {
    switch (status) {
      case 400:
        return  "인증코드가 일치하지 않습니다.";
      case 404:
        return "이미 존재하는 멤버입니다.";
      case 500:
        return "서버 오류가 발생하였습니다.";
      default:
        return "회원가입에 실패하였습니다.";
    }
    
  };
  signEmailError = (status:number)=>{
    switch (status) {
        case 403:
          return "이메일을 보낼 수 없습니다.";
        case 409:
          return "이메일이 이미 존재합니다";
        case  404:
          return  "인증코드 에러";
        case  500:
          return  "서버 에러";
        default:
          return "이메일 전송 싫패";
      }
  }

}

export default new ErrorHandler();