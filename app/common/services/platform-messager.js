var Messager = function () {
    var __this = this,
        stack = {};

    var listen = function (key, eventFn) {
        var __stack = stack[key];
        if (typeof __stack !== 'undefined') {
            __stack = [];
        }
        return __stack.push(eventFn);
    }

    var trigger = function () {
        var key = Array.prototype.slice.call(arguments, 0, 1);
        var __stack = stack[key];
        if (typeof __stack !== 'undefined') {
            for (var i = 0; i < __stack.length; i++) {
                var fn = __stack[i];
                if (fn.apply(__this, arguments) === false) {
                    return false;
                }
            }
        }
    }

    return {
        listen: listen,
        trigger: trigger
    }
};

var messager = new Messager();

export default  messager;