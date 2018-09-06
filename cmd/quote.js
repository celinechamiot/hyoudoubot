let quotes = {
    "data": [
        {
            "keywords": [
                "hyoudou?",
                "hyoudou",
                "kyoharu"
            ],
            "words": [
                "Oui Maître ?",
            ]
        },
        {
            "keywords": [
                "pourquoi?",
                "pourquoi",
            ],
            "words": [
                "I was too focused on my banana",
            ]
        },
        {
            "keywords": [
                "maisoui",
                "oui",
            ],
            "words": [
                "Mais oui c'est clair !",
            ]
        },
        {
            "keywords": [
                "commentonvaalleràl'écoledemain?",
            ],
            "words": [
                "Comme aujourd'hui...",
            ]
        },
        {
            "keywords": [
                "cetété",
            ],
            "words": [
                "L'été c'est loin...",
            ]
        },
        {
            "keywords": [
                "arrêteça!",
                "arrêteça",
                "stop",
                "stop!",
                "çasuffit!",
                "çasuffit",
            ],
            "words": [
                "Non non non tu arrêtes ça Baptiste !",
            ]
        },
        {
            "keywords": [
                "génial",
                "génial!",
                "géniale!",
                "géniale"
            ],
            "words": [
                "Ah bah c'est bien Nils, super pour l'appareil photo !",
                "T'es vraiment un sale petit con hein",
                "Il est foutu c'est pas grâve hein ?",
            ]
        },
        {
            "keywords": [
                "doyouknowtheway?",
                "doyouknowdaway?",
                "it'snottheway",
                "it'snotdaway"
            ],
            "words": [
                "This is the way of the devil",
                "I will show you the way my brudda",
                "You have to go to the volcano",
                "Where is the queen ?",
            ]
        },
        {
            "keywords": [
                "ah",
                "ah !",
                "denis",
                "kohlanta",
                "denisbrogniart"
            ],
            "words": [
                "Vous voulez dire que les cabanes ne savent pas faire les femmes ? <:bolchevik:407621742178074624>",
                "Les aventuriers de la tribu réunifiée ont décidé de vous éliminer. <:bolchevik:407621742178074624>",
                "La sentence est irrévocable ! <:bolchevik:407621742178074624>",
                "AH ! <:bolchevik:407621742178074624>",
            ]
        },
        {
            "keywords": [
                "bonjour",
                "ohayo",
                "ohayo!",
                "bonjour!",
                "bondour",
                "bondour!",
                "hyoudoudisbonjour",
            ],
            "words": [
                "Ohayo mina !"
            ]
        },
        {
            "keywords": [
                "hyoudouexcusetoi",
                "excusetoi",
                "pardon",
            ],
            "words": [
                "Gomen Nasai..."
            ]
        },
        {
            "keywords": [
                "philippe",
            ],
            "words": [
                "SALAAAAUUUUD"
            ]
        },
        {
            "keywords": [
                "spitonhim!",
            ],
            "words": [
                "*spit*"
            ]
        },
        {
            "keywords": [
                "hyoudout'eslemeilleur!",
                "hyoudout'eslemeilleur",
            ],
            "words": [
                "<:bolchevik:407621742178074624>"
            ]
        },
        {
            "keywords": [
                "❤",
            ],
            "words": [
                "Merci de m'avoir crée maître !"
            ]
        },
        {
            "keywords": [
                "hyoudouest-cehygiénique?",
                "Est-cehygiénique?",
                "hygiénique",
                "hygienique",
                "vrac",
                "venteenvrac",
                "huileenvrac",
            ],
            "words": [
                "https://media.giphy.com/media/13SFY2a8JkdcGsxbkA/giphy.gif"
            ]
        }
    ]
};
let currentMessage = null;
let currentQuotes = null;
let randomWords = null;

module.exports = class Quote {

    static match(message) {
        currentMessage = message.content;
        currentMessage = currentMessage.trim();
        currentMessage = currentMessage.toLowerCase();
        currentMessage = currentMessage.replace(/\s/g, '');

        for (const key in quotes.data) {
            currentQuotes = quotes.data[key];

            for (const index in currentQuotes.keywords) {
                if (currentMessage === currentQuotes.keywords[index]) {
                    randomWords = Math.floor(Math.random() * (currentQuotes.words.length - 0 + 0) + 0);
                    message.channel.send(currentQuotes.words[randomWords]);
                }
            }
        }
    }
};