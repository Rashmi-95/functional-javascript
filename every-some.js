/*function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        var submittedUserList = submittedUsers.every(checkEachUser(eachSubmittedUser));
        return submittedUserList
    };
}

var checkEachUser = function (eachSubmittedUser) {
    eachSubmittedUser.some( {
        return eachGoodUser.id === eachSubmittedUser.id;
    }) 

//     var isGoodUser = function (eachGoodUser, eachSubmittedUser) {
    
// }();
}

module.exports = checkUsersValid
*/

/*
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function checkEachUser(submittedUser) {
            return goodUsers.some(function isGoodUser (goodUser) {
                return goodUser.id === submittedUser.id
            })
        })
    }
}

module.exports = checkUsersValid

*/

function isGoodUser(eachGoodUser) {
    return eachGoodUser.id === eachSubmittedUser.id;
}

function checkEachUser(eachSubmittedUser) {
    var goodUserList = goodUsers.some(isGoodUser());
    return goodUserList;
}

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        var submittedUserList = submittedUsers.every(checkEachUser());
        return submittedUserList;
    };
}

module.exports = checkUsersValid