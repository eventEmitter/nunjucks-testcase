(function() {
    'use strict';

    const util = require('util');
    const nunjucks = require('nunjucks');
    const extension = require('./extension');


    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('tpl'));

    // register the failing extension
    env.addExtension('api', extension);


    // Fail :/
    env.render('outer.html', (err, output) => {
        if (err) console.log(err);
        console.log('render output:');
        process.stdout.write(output);
    });
})();
