function getUserData (){
    return JSON.parse(localStorage.getItem("user"));
}

function setUserData (data){
    localStorage.setItem("user", JSON.stringify(data));
}

function removeUserData (){
    localStorage.removeItem("user");
}

export{
    getUserData,
    setUserData,
    removeUserData
}