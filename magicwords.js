

const randomNumber =(words) => {

    return Math.floor(Math.random()*words.length);
}


const moods = ['Exciting','mysterious ','challenging','peacefull','calm','playfull','intense','hopefull','vibrant'];
const actions =['heal old wounds','follow your curiosity','trust your instincts','plant seeds for future success','seek clarity before committing','explore a new passion','make peace with the past'];
const advice =['luck favors your boldness','the answers you seek are already within you','you are standing at the edge of something beautiful','your dreams are planting roots today','kindness will open unexpected doors','the world is ready for your light'];

const magicWord = (moods,actions,advice) => {
    const moodChoose =moods[randomNumber(moods)];
    const actionChoose =actions[randomNumber(actions)];
    const adviceChoose = advice[randomNumber(advice)];
    const horoscopeSentence =`Today feels ${moodChoose} - its prefect time to ${actionChoose} and ${adviceChoose}`;
    //return horoscopeSentence;
    document.getElementById('horoscope-message').innerHTML=horoscopeSentence;
}
const magicWordShow = () => {
    magicWord(moods,actions,advice);
}
