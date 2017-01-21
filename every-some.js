function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function checkEachUser(eachSubmittedUser) {
            return goodUsers.some(function isGoodUser(eachGoodUser) {
                return eachGoodUser.id === eachSubmittedUser.id;    
            });
        });
    };
}

module.exports = checkUsersValid

/*
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {

        return goodUsers.filter(function isGoodUser(element) {
                return submittedUsers.some(function isSubmittedUser(eachGoodUser) {
                    return eachGoodUser === element;    
                });  
        });
    };
}

module.exports = checkUsersValid
*/
