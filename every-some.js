function isGoodUser(eachGoodUser, eachSubmittedUser) {
  console.log('f3', eachGoodUser, eachSubmittedUser);
  return eachGoodUser.id === eachSubmittedUser.id;
}

function checkEachUser(eachSubmittedUser, goodUsers) {
  console.log('f2', eachSubmittedUser, goodUsers);
  var goodUserList = goodUsers.some(isGoodUser(eachSubmittedUser));
  return goodUserList;
}

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    console.log('f1', goodUsers, submittedUsers);
    var submittedUserList = submittedUsers.every(checkEachUser());
    return submittedUserList;
  };
}

module.exports = checkUsersValid