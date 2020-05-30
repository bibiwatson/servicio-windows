const { argv }          = require('./yargs.js');
const { CustomService } = require('./service/CustomService');
const wincmd            = require('node-windows');


const command = argv._[0];

switch(command){
    case 'install':
        new CustomService({
            name        : argv.name,
            description : argv.description || '',
            script      : argv.script || ''
        }).install();
    break;

    case 'uninstall':
        new CustomService({
            name        : argv.name,
            script      : argv.script || ''
        }).uninstall();
    break;

    default:
        console.log('Command not accepted');
    break;
}