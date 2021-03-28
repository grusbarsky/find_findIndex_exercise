function findUserByUsername(arr, username){
    return arr.find(function(value){
        return value.username === username;
    });
}

function removeUser(arr, username){
    let userIndex = arr.findIndex(function(value){
        return value.username === username;
    });
    if (userIndex === -1) return;
    return arr.splice(userIndex,1)[0];
}