import { showView } from "../view.js";

function hasUserData() {
  if(localStorage.getItem('user') === null){
    return false
  } else {
    return true
  }
}

function setUserData(data){
  localStorage.setItem('user', JSON.stringify(data));
}

function removeUserData(){
  localStorage.clear();
  showView('/home');
}
function getUserData(){
  return JSON.parse(localStorage.getItem('user'));
}

export{hasUserData, setUserData, removeUserData, getUserData}