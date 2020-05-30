const Service       = require('node-windows').Service;
const colors        = require('colors');
const EventLogger   = require('node-windows').EventLogger;

class CustomService {
    constructor(data){
        this.name = data.name;
        this.description = data.description || '';
        this.script = data.script;

        this.log = new EventLogger('');

        return this;
    }

    install() {
        this.svc = new Service({
            name        : this.name,
            description : this.description,
            script      : this.script
        });

        this.listen();
        this.svc.install();
    }

    uninstall() {
        this.svc = new Service({
            name    : this.name,
            script  : this.script
        });

        this.listen();
        this.svc.uninstall();
    }

    listen(){
        this.svc.on('install', () => {
            console.log('Service is installed'.green);
            console.log('Starting service ...'.yellow);

            this.svc.start();
        });

        this.svc.on('alreadyinstalled', () => {
            console.log('Service is alreadyinstalled'.yellow)
        });

        this.svc.on('invalidinstallation', () => {
            console.log('Invalid Instalation'.red);
        })

        this.svc.on('uninstall', () => {
            console.log('Service has been uninstalled'.green);
        })

        this.svc.on('start', () => {
            console.log('Service is running'.green);
        });

        this.svc.on('stop', () => {
            console.log('Service has stopped'.yellow);
        });

        this.svc.on('error', function(err){
            this.log.error(err || 'Something went wrong');
        })
    }
}

module.exports = {
    CustomService
}