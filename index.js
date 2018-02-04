/** MAIN REQUIRE */
const util = require('util');
const Discord  = require('discord.js');
const bot = new Discord.Client();

/** COMMANDS */
const Google    = require('./cmd/google');
const Anime     = require('./cmd/anime');
const Manga     = require('./cmd/manga');
const Quote     = require('./cmd/quote');
const Help      = require('./cmd/help');

/** ON READY */
bot.on('ready', function(){
    //bot.user.setAvatar('./img/avatar.jpg').catch(console.error);
    //bot.user.setActivity('!help - Dancing on the ballroom !').catch(console.error);
});

/** GUILD MEMBER ADD */
bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function(channel){
        return channel.send('Bienvenu sur le nouveau serveur !' + member.displayName);
    }).catch(console.error)
});

/** ON MESSAGE */
bot.on('message', function(message){

    console.log(message.content);

    Google.parse(message);
    Anime.parse(message);
    Manga.parse(message);
    Quote.match(message);
    Help.parse(message);

});


bot.login(process.env.BOT_TOKEN);


