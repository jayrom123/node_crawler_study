var Crawler = require("crawler");

var c = new Crawler({
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            debugger;
            // console.log(res.body);
            let b  = res.$("a[href]");
            let length = b.length;
            let depot = [];
            while(length){
                depot.push(b[--length].attribs.href);
            }
            depot = depot.filter((item)=>/^ftp:\/\/.+/.test(item))
            let result = depot.join('\n\r');
            console.log(result);
        }
        done();
    }
});

c.queue({
    uri:"http://www.dy2018.com/i/98940.html",
    // encoding:null,
    // jquery:false,
    parameter1:"value1",
    parameter2:"value2",
    parameter3:"value3"
});