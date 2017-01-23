function duckCount() {
    var argumentsWihQuack = Array.prototype.filter.call(arguments,function isArgumentDuck(argument) {
         return Object.prototype.hasOwnProperty.call(argument,'quack');
     });
     return  argumentsWihQuack.length;
}
module.exports = duckCount