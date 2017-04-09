/**
 * Created by lixun on 2017/2/22.
 */

/**
 * 请求转发中间件
 */

var proxy = require('../classes/proxy');

var forward = {
    to: function (args) {
        return function (req, res, next) {
            new proxy(req, res, next).request({api: args.api});
        };
    }
};

module.exports = forward;