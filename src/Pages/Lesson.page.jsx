import Card from '../Components/Card.component';
import { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import mrkdown from '../mark.md';
import $ from 'jquery';

const Lesson = () => {
    const [markdownContent, setMarkdownContent] = useState('');
    fetch(mrkdown).then((response) => response.text()).then((text) => setMarkdownContent(text)).then(() => $('.card_class').removeClass('hidden'));

   
    // $('h1').addClass('text-black font-bold text-3xl text-center )');
    // $('h2').addClass('text-black text-xl font-semibold');



    return (
        <div className=' bg-slate-300 w-full h-screen overflow-x-hidden px-[10%] pt-[5%] pb-[10%] scroll-p-0'>
            <Markdown className="prose whitespace-normal text-center mx-auto mb-[5%]" children={markdownContent}></Markdown>
            <Card/>
            
        </div>
    )
}

export default Lesson;




// const temp =`<h1 className='text-black font-bold text-3xl text-center py-[5%]'>Mastering the Pronunciation of Common Spanish Sounds</h1>
// <p className='md:mx-[10%] '>
// One of the key challenges when learning a new language is mastering its pronunciation. Spanish, with its rich history and global presence, is no exception. Understanding and reproducing the unique sounds of Spanish is essential for effective communication. In this article, we will explore some of the most common Spanish sounds and provide tips to help you improve your pronunciation skills.<br/><br/>

// <h3 className='text-black text-xl font-semibold'>The "RR" Sound:</h3><br/>
// The rolled "RR" sound is a distinctive feature of Spanish and often a hurdle for non-native speakers. To produce this sound, place the tip of your tongue against the roof of your mouth, just behind the front teeth. Then, vibrate your tongue as air passes through, creating a rolling or trilling sound. Practice by repeating words like "perro" (dog) or "carro" (car) until you can produce a clear, continuous roll.<br/><br/>

// <h3 className='text-black text-xl font-semibold'>The "LL" Sound:</h3><br/>
// The pronunciation of the letter "LL" varies among Spanish speakers. In some regions, it is pronounced as a "y" sound, while in others, it is closer to a "zh" sound (similar to the "s" in "measure"). To approximate the "LL" sound, position your tongue as if you were going to say "y," but relax it slightly and allow a gentle flow of air to produce the desired sound. Practice with words like "pollo" (chicken) or "amarillo" (yellow).<br/><br/>

// <h3 className='text-black text-xl font-semibold'>The "Ñ" Sound:</h3><br/>
// The letter "Ñ" is unique to Spanish and has no direct equivalent in English. To pronounce it correctly, position your tongue as if saying "n," but lift the middle part of your tongue to touch the roof of your mouth, just behind the front teeth. Allow air to pass through, creating a nasal sound. Practice with words like "niño" (child) or "baño" (bathroom) until you can produce the distinct "ñ" sound.<br/><br/>

// <h3 className='text-black text-xl font-semibold'>Vowel Sounds:</h3><br/>
// Spanish has five vowel sounds: "a," "e," "i," "o," and "u." Unlike in English, Spanish vowel sounds are consistently pronounced and do not change depending on the word. The key is to pronounce each vowel with clarity and avoid blending sounds together. For example, the "a" in "casa" (house) should sound like "ah," while the "e" in "perro" should sound like "eh."<br/><br/>

// <h3 className='text-black text-xl font-semibold'>"J" and "G" Sounds:</h3><br/>
// The "J" and "G" sounds in Spanish can be challenging for English speakers. Instead of pronouncing them as hard consonants, they are produced with a raspy or guttural sound. For the "J" sound, make a soft "h" sound as in the English word "hello" but with more emphasis on the back of the throat. For the "G" sound, position your tongue as if saying a "g" sound, but with a similar raspy effect. Practice with words like "jugo" (juice) or "gato" (cat).<br/><br/>

// <h3 className='text-black text-xl font-semibold'>Conclusion:</h3><br/>
// Mastering the pronunciation of common Spanish sounds is a significant step toward achieving fluency in the language. Remember to practice regularly, listen to native speakers, and seek feedback to refine your pronunciation skills. With dedication and persistence, you'll soon be able to communicate confidently in Spanish, immersing yourself in the rich tapestry of Spanish-speaking cultures around the world. ¡Buena suerte! (Good luck!)<br/><br/>
// </p>`;
