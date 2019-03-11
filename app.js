const readline = require('readline');
const fs = require('fs');

const inputFolder = './input/';
const outputFolder = './output/';


const lineiterator = async (file) => {
    var emails = [];

    var rl = readline.createInterface({
        input: fs.createReadStream(file),
        terminal: false
    });

    return new Promise(function(resolve, reject) {
        rl.on('line', function (line){
            if (line.indexOf('@') == -1) return true;

            let email = line.split(';')[0];

            if (emails.indexOf(email) != -1) return true;
            emails.push(email);
        })
        rl.on('close', function () {
            resolve(emails);
        })
    })
}

const saveToFile = (file, data) => {
    fs.writeFileSync(file, data, { encoding: 'utf8' });
};

const main = async () => {
    let files = fs.readdirSync(inputFolder);

    console.log(files);
    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        let lines = await lineiterator(inputFolder + file);
        let data = lines.join('\n');

        saveToFile(outputFolder+file, data);
    }

    console.log('Райт Мяу!');
};

main();