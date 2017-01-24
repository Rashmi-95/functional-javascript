function isGoodUser(eachGoodUser, eachSubmittedUser) {
    return eachGoodUser.id === eachSubmittedUser.id;
}

function checkEachUser(eachSubmittedUser, goodUsers) {
    var goodUserList = goodUsers.some(isGoodUser(eachSubmittedUser));
    return goodUserList;
}

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        var submittedUserList = submittedUsers.every(checkEachUser(goodUsers));
        return submittedUserList;
    };
}

module.exports = checkUsersValid