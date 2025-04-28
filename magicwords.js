

const randomNumber =(words) => {

    return Math.floor(Math.random()*words);
}

const horoscopeData ={moods :['Exciting','mysterious ','challenging','peacefull','calm','playfull','intense','hopefull','vibrant'],
    actions :['heal old wounds','follow your curiosity','trust your instincts','plant seeds for future success','seek clarity before committing','explore a new passion','make peace with the past'],
    advice : ['luck favors your boldness','the answers you seek are already within you','you are standing at the edge of something beautiful','your dreams are planting roots today','kindness will open unexpected doors','the world is ready for your light'],
    asciiArt: [`><(((('>`,`=^.^=`,`@}-;-'---`,`(•ө•)`,`<:3 )~~`]
                     };

const magicWord = (horoscopeObj) => {
    let horoscopeMessage =[];
 // find the object values and random arrays inside object and attach to new array. 
    for(let  horoscope in horoscopeObj)

    {
        // create a  random array number
        let horoscopeIndex =randomNumber(horoscopeObj[horoscope].length)

        switch(horoscope){

            case "moods":
                horoscopeMessage.push(`"  Today feels ${horoscopeObj[horoscope][horoscopeIndex]} `);
                break;
            case "actions":
                horoscopeMessage.push(`- its prefect time to ${horoscopeObj[horoscope][horoscopeIndex]} `);
                break;
            case "advice":
                horoscopeMessage.push(`and ${horoscopeObj[horoscope][horoscopeIndex]}  "`);    
                break;
            case "asciiArt":
            horoscopeMessage.push(`${horoscopeObj[horoscope][horoscopeIndex]} `);    
            break;
            default :
                 horoscopeMessage.push(`Nothing to display.try again`);

        }

    }
    return horoscopeMessage;
}
const magicWordShow = () => {
    const magicWordArray= magicWord(horoscopeData);
    const allButLast = magicWordArray.slice(0,-1).join('');
   const asciiArt= magicWordArray[magicWordArray.length - 1];
   const magicWordString = allButLast +"\n"+asciiArt;
     // console.log(magicWordString);
    //To attach the random choosed words to a div
   document.getElementById('horoscope-message').innerHTML=magicWordString.replace(/\n/g,'<br>');
}
//magicWordShow();
