const fs = require('fs');
const currentIndex = process.argv[2];

fs.open(`${__dirname}/test${currentIndex}.txt`, 'w+', (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }
    const max = 1000;
    for (let i = 0; i < max; i++) {
        (function (index) {
            const writeTxt = `小红${index}是sb\n`
            fs.write(fd, writeTxt, (err, num, s) => {
                if (err) console.log(err);
                if (index === max - 1) {
                    fs.close(fd, (err) => {
                        if (err) console.log(err);
                        process.send({ payload: `子进程${currentIndex}即将执行完毕` })
                    })
                }
            })
        }(i))
    }
})


