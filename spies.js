function Spy(target, method) {
    //console.log(target,method);
    var spy = {
        'count' : 0
    };
    methodToCall = target[method];
    target[method] = function countIt() {
        spy.count++;
        return methodToCall.apply(this,arguments);
    }
    return spy;
}

module.exports = Spy