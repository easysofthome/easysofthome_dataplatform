/**
 * Created by wspandihai on 2016/7/21.
 */


var yog = require('yog2-kernel');


module.exports.get = function () {
    return yog.ralP('DATAPLATFORM_SERVICE', {
        path: '/api/index'
    });
};