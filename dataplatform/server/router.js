module.exports = function(router){

    router.route('/index')
        .get(router.action('index').get);
};