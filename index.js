try {
    var binding = require('./build/Release/microtime');
} catch (e) {
    var binding = require('./build/default/microtime');
}

exports.now = binding.now
exports.nowDouble = binding.nowDouble
exports.nowStruct = binding.nowStruct
