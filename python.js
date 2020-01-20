const app = require('express')();
const ps = require('python-shell');
console.log(process.env.PATH);
let options = {
    mode: 'text',
    //pythonPath: '/usr/bin/python',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'e:/node',
    args: ['value1', 'value2']
};

ps.PythonShell.run('myp.py', options, function(err, results) {
    if (err) throw err;
    console.log('finished');
    console.log(results);
});

app.listen(4000);