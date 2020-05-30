const description = {
    alias   : 'd',
    desc    : 'Service short desc',
    type    : 'string'
}

const name = {
    alias   : 'n',
    demand  : true,
    desc    : 'Service name',
    type    : 'string'
}

const script = {
    alias   : 's',
    demand  : true,
    desc    : 'Script path',
    type    : 'string'
}

const opt_install = {
    name,
    description,
    script
}

const opt_uninstall = {
    name,
    script
}

const argv = require('yargs')
    .command('install', 'Creates and install a new service', opt_install)
    .command('uninstall', 'Uninstalls a service', opt_uninstall)
    .demandCommand(1, 'You need at least one command before moving on')
    .help()
    .argv;

module.exports = {
    argv
};