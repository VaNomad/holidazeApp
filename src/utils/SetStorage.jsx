// export const SetStorage = () => {
//   const username = localStorage.setItem("userName");
//   const accesstoken = localStorage.setItem("accessToken");
//   const avatar = localStorage.setItem("avatar");
//   const email = localStorage.setItem("email");
//   const manager = localStorage.setItem("venueManager");

//   return {
//     username: username,
//     accesstoken: accesstoken,
//     avatar: avatar,
//     email: email,
//     manager: manager,
//   };
// };

export function setStorage(username, accessToken, avatar, email, manager) {
  localStorage.setItem("userName", username);
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("avatar", avatar);
  localStorage.setItem("email", email);
  localStorage.setItem("venueManager", manager);
}