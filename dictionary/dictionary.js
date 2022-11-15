const { Word } = require("./word");

/*const words = [
    new Word("English", "hello", "noun", "An expression or gesture of greeting —used interjectionally in greeting, in answering the telephone, or to express surprise.", null),
    new Word("French", "bonjour", "noun", "Souhait de bonne journée (adressé en arrivant, en rencontrant).", "hello"),
    new Word("Spanish", "hola", "noun", "Expresión con que se saluda.", "hello"),
    new Word("Armenian", "բարև", "noun", "Ողջույն, ողջունելու բառ, որ ասվում է հանդիպելիս։", "hello"),
    new Word("English", "be", "verb", "To exist.", null),
    new Word("French", "être", "verb", "Exister.", "be"),
    new Word("English", "but", "conjunction", "Used to introduce a phrase or clause contrasting with what has already been mentioned.", null),
    new Word("French", "mais", "conjunction", "Indique une opposition, une précision, une correction par rapport à ce qui a été énoncé.", "but"),
    new Word("English", "computer", "noun", "A programmable electronic device that performs mathematical calculations and logical operations", null),
    new Word("Polish", "drewno", "noun", "Materiał uzyskiwany z gałęzi i pni drzew używany w budownictwie.", null),
];

const words2 = [
    new Word("English", "pneumonoultramicroscopicsilicovolcanoconiosis", "noun", "An expression or gesture of greeting —used interjectionally in greeting, in answering the telephone, or to express surprise.", null),
    new Word("French", "intergouvernementalisation", "noun", "Souhait de bonne journée (adressé en arrivant, en rencontrant).", "hello"),
    new Word("French", "anticonstitutionnellement", "noun", "Expresión con que se saluda.", "hello"),
    new Word("Russian", "Здравствуйте", "noun", "Ողջույն, ողջունելու բառ, որ ասվում է հանդիպելիս։", "hello"),
    ];*/

function getAllWordsFromLanguage(words, language)
{
    let res = words.filter(word => word.language === language);
    return res;
}

function getConjunctions(words, count)
{
    let i = 0;
    let res = words.filter(word => (word.partOfSpeech === "conjunction") && (i++ < count))
    return res;
}

function rec_average_Length(words, len, i)
{
    if (i >= len)
    {
        return 0;
    }
    return words[i].literal.length + rec_average_Length(words, len, ++i)
}

function averageLength(words)
{
    if (words.length === 0)
    {
        return null;
    }
    let res = rec_average_Length(words, words.length, 0);
    return Math.floor((res / words.length) + 0.5)
}

function getWordsSorted(words)
{
    return words.sort((word1, word2) => {
        if (word1.literal.normalize('NFD').replace(/[\u0300-\u036f]/g, "") < word2.literal.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
        {
            return -1;
        }
        else if (word2.literal.normalize('NFD').replace(/[\u0300-\u036f]/g, "") < word2.literal.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
        {
            return 1;
        }
        else
        {
            return 0;
        }
    });
}

function getTranslations(words, word)
{
    let verif = words.find(w => w.literal === word);
    if (verif === undefined)
    {
        return null;
    }
    let get_english_word = verif.englishTranslation;
    if (verif.language == "English")
    {
        get_english_word = verif.literal;
    }
    if (get_english_word == null)
    {
        return [{
            language: verif.language,
            translation: verif.literal,
        }];
    }
    let filter_words = words.filter(w => w.englishTranslation === get_english_word);
    let unsorted_result = filter_words.map(w => { return {language: w.language, translation: w.literal}});
    unsorted_result.push({language: "English", translation: get_english_word});
    let res = unsorted_result.sort((w1, w2) => {
        if (w1.language.normalize('NFD').replace(/[\u0300-\u036f]/g, "") < w2.language.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
        {
            return -1;
        }
        else if (w2.language.normalize('NFD').replace(/[\u0300-\u036f]/g, "") < w1.language.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
        {
            return 1;
        }
        else
        {
            return 0;
        }
    });
    return res;
}

function getLongWordDefinitions(words, threshold)
{
    let lwords = words.filter(w => w.literal.length >= threshold);
    return lwords.map(word => { return {
        length: word.literal.length,
        word: word.literal,
        language: word.language,
        definition: word.definition
    }
   }).sort((w1, w2) => {
       if (w1.length > w2.length)
       {
           return -1;
       }
       else if (w2.length > w1.length)
       {
           return 1;
       }
       else
       {
           if (w1.word.normalize('NFD').replace(/[\u0300-\u036f]/g, "") < w2.word.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
           {
               return -1;
           }
           else if (w2.word.normalize('NFD').replace(/[\u0300-\u036f]/g, "") < w1.word.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
           {
               return 1;
           }
           return 0;
       }
   });

}

module.exports = {
    getAllWordsFromLanguage,
    getConjunctions,
    averageLength,
    getWordsSorted,
    getTranslations,
    getLongWordDefinitions,
}


/*let test1 = getAllWordsFromLanguage(words, "French");
let test2 = getConjunctions(words, 1);
for(let i = 0; i < test1.length; i++)
{
    console.log(test1[i].word);
}
for(let i = 0; i < test2.length; i++)
{
    console.log(test2[i].word);
}

console.log(averageLength(words));
console.log(getWordsSorted(words));
console.log(getTranslations(words, "computer"));
console.log(getLongWordDefinitions(words2, 5));*/
