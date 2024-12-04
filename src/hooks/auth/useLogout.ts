import token from "src/libs/token/token";


const useLogout = () => {

  const logOut = () => {
    token.clearToken();
    location.reload();
  
    
  };

  return { logOut };
};

export default useLogout;