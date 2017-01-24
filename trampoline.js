function repeat(operation, num) {
  return function repeatIt() {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn) {
  setTimeout(function() {
    while(fn) {
      return repeat();
    }
  }, 0);
}

module.exports = function (operation, num) {
  trampoline();
  return repeat(operation, num)
}