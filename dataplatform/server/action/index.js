/**
 * Created by wspandihai on 2016/7/21.
 */


var indexVM=require('../model/Dataindex')

module.exports.get=function(req, res, next){
    res.bigpipe.bind('testbigpipe', function(setter) {

        // simulate an async progress
        setTimeout(function() {

            // now set data to the pagelet
            setter(null, {
                asyncData: 'xxx'
            });
        }, 2000);
    });

    res.bigpipe.bind('testbigpipe1', function(setter) {

        // simulate an async progress
        setTimeout(function() {

            // now set data to the pagelet
            setter(null, {
                asyncData: 'xxx'
            });
        }, 2000);
    });

    res.render('dataplatform/page/index.tpl');
}