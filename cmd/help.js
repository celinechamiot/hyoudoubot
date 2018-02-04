const Command = require('./command');

module.exports = class Help extends Command {

    static match(message){
        console.log(message.content.startsWith('!help'));
        return message.content.startsWith('!help')
    }

    static action(message){
        let help = "" +
            "**LISTE DES COMMANDES**" +
            "```" +
            "!anime Nom de l'anime \n" +
            "!manga Nom du manga" +
            "```";

        message.channel.send(help);
    }
};