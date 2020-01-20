const app = require('express')();
const ps = require('python-shell');
console.log(process.env.PATH);
let options = {
    mode: 'text',
    //pythonPath: '/usr/bin/python',//only enable it if you have python installed different from default location
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'e:/node',//Path to your python script
    args: ['value1', 'value2']//If you want to add some variable that can be accessed in Python script by system.value1 etc
};

ps.PythonShell.run('myp.py', options, function(err, results) {/running your script file actually
    if (err) throw err;
    console.log('finished');
    console.log(results);
});

app.listen(4000);
