const Command = require('./command');
const Discord  = require('discord.js');
const util = require('util');
const MALjs = require('MALjs');
const mal = new MALjs(process.env.MAL_USER, process.env.MAL_PASSWORD);

module.exports = class Anime extends Command {

    static match(message){
        return message.content.startsWith('!anime');
    }

    static action(message){
        let malResponse = null;
        let synopsis = null;
        let image = null;
        let args = message.content.split(' ');
        args.shift();
        args = args.join(' ');

        mal.anime.search(args).then(result => {
            console.log(util.inspect(result, false, null));
            synopsis = result.anime[0].synopsis;
            synopsis = synopsis.toString();
            synopsis = synopsis.replace(new RegExp("<br />", 'g'), "");
            image = result.anime[0].image;
            image = image.toString();

            console.log(result.anime[0]);

            const embed = new Discord.RichEmbed()
                .setTitle(result.anime[0].title)
                .setAuthor(result.anime[0].title, image)
                .setColor(0x00AE86)
                .setThumbnail(image)
                .setURL("https://myanimelist.net/anime.php?id=" + result.anime[0].id)
                .addField("Episodes", result.anime[0].episodes, true)
                .addField("Score", result.anime[0].score, true)
                .addField("Status", result.anime[0].status, true)
                .addField("Synopsis", synopsis, true);

            message.channel.send({embed});

        }).catch(err => {
            console.log(err);
            message.channel.send("Je n'arrive pas à trouver l'anime sur MAL :(");
            message.channel.send("Essai de l'écrire autrement !");
        });
    }
};