export const CurrentStorage = () => {
 const username = localStorage.getItem("userName");
 const accesstoken = localStorage.getItem("accessToken");
 const avatar = localStorage.getItem("avatar");
 const email = localStorage.getItem("email");
 const manager = localStorage.getItem("venueManager");
 
  return {
    username: username,
    accesstoken: accesstoken,
    avatar: avatar,
    email: email,
    manager: manager,
  };
}
