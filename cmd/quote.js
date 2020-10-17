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
                "hajar"
            ],
            "words": [
                "Hajar la BG ?",
            ]
        },
        {
            "keywords": [
                "camille"
            ],
            "words": [
                "Camille ou K-mille ?",
            ]
        },
        {
            "keywords": [
                "leah"
            ],
            "words": [
                "🐸",
            ]
        },
        {
            "keywords": [
                "asma"
            ],
            "words": [
                "Asma elle est asmagnifique",
            ]
        },
        {
            "keywords": [
                "stob it"
            ],
            "words": [
                "Hey, stob it!",
            ]
        },
        {
            "keywords": [
                "snake"
            ],
            "words": [
                "I hate snakeu !",
            ]
        },
        {
            "keywords": [
                "my heart"
            ],
            "words": [
                "My heart is omg",
            ]
        },
        {
            "keywords": [
                "kelly"
            ],
            "words": [
                "Kelly c'est la meilleure ❤",
            ]
        },
        {
            "keywords": [
                "yasmine"
            ],
            "words": [
                "Yasmine la sirène ❤ :mermaid_tone1:",
            ]
        },
        {
            "keywords": [
                "syrineiloveyou"
            ],
            "words": [
                "https://media.giphy.com/media/kyp7rbgP493Ax2esyH/giphy.gif",
            ]
        },
        {
            "keywords": [
                "jecomprendpas"
            ],
            "words": [
                "C'est la mer noire",
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
                "Vous voulez dire que les cabanes ne savent pas faire les femmes ?",
                "Les aventuriers de la tribu réunifiée ont décidé de vous éliminer.",
                "La sentence est irrévocable !",
                "AH !",
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
                "❤",
            ],
            "words": [
                "Merci de m'avoir crée maître !"
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