const Command = require('./command');
const Discord = require('discord.js');
const util = require('util');
const MALjs = require('MALjs');
const mal = new MALjs('process.env.MAL_USER', 'process.env.MAL_PASSWORD');

module.exports = class Manga extends Command {

    static match(message) {
        return message.content.startsWith('!manga')
    }

    static action(message) {
        let malResponse = null;
        let synopsis = null;
        let image = null;
        let args = message.content.split(' ');
        args.shift();
        args = args.join(' ');

        mal.manga.search(args).then(result => {
            synopsis = result.manga[0].synopsis;
            synopsis = synopsis.toString();
            synopsis = synopsis.replace(new RegExp("<br />", 'g'), "");
            image = result.manga[0].image;
            image = image.toString();

            const embed = new Discord.RichEmbed()
                .setTitle(result.manga[0].title)
                .setAuthor(result.manga[0].title, image)
                .setColor(0x00AE86)
                .setThumbnail(image)
                .setURL("https://myanimelist.net/manga.php?id=" + result.manga[0].id)
                .addField("Score", result.manga[0].score, true)
                .addField("Status", result.manga[0].status, true)
                .addField("Synopsis", synopsis, true);

            message.channel.send({embed});

        }).catch(err => {
            console.log(err);
            message.channel.send("Je n'arrive pas à trouver le manga sur MAL :(");
            message.channel.send("Essai de l'écrire autrement !");
        });
    }
};