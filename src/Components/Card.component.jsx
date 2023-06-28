

import axios from 'axios';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {motion} from 'framer-motion';


const Card = () => {
    //useState hook of sentences/setSentences used to store the sentences from the serverless backend
    const [sentences, setSentences] = useState([]);
    //useState hook of count/setCount used to store the current sentence number
    const [count, setCount] = useState([]);
    //useState hook of sentence/setSentence used to store the current sentence
    const [sentence, setSentence] = useState([]);
    //useState hook used to manage the state of whether the translation is displayed or not
    const [showTranslation, setShowTranslation] = useState(false);

    //method used to toggle showing the translation 
    const toggleTranslation = () => {
        setShowTranslation(!showTranslation);
    }

    //method used to change the example sentence displayed
    const countChange = () => {
        //if the count is equal to the number of sentences (i.e. all examples have been seen), reset the count to 0
        if (count == Object.keys(sentences).length){
            console.log("CountChange()resetting i");
            setCount(1, setSentence(sentences[count]));
            //shows the completed class which displays a message saying that the lesson is complete
            $('.completed_class').css('display', 'block');
            //resets showTranslation to false so that the translation is not displayed when the next sentence is displayed
            setShowTranslation(false);
        }
        //else increment the count by 1
        else{
            setCount(count+1, setSentence(sentences[count]));
            console.log(" CountChange() count: " + count)
            // resets showTranslation to false so that the translation is not displayed when the next sentence is displayed
            setShowTranslation(false);
        }
    }
  

   //Uses axios to get the sentences from the serverless backend
   //Uses useEffect to run the function once the component is mounted but only once (empty array as second argument)
    useEffect(() => {
        const response = async () => {
            try{
                const response = await axios.get('https://9kly86duui.execute-api.us-east-1.amazonaws.com/Lessons/1');
                //setSentences to the sentences from the serverless backend
                setSentences(response.data.lesson.sentences);
                //console.log(response.data.lesson.sentences);
            }
            catch(error){
                console.log(error);
            }
        }
        response();
        

    }, [])

    //Uses useEffect to run the function once the component is mounted but only once (empty array as second argument)
    //Sets the count to 1 and sets the state of sentence to the first sentence stored in the sentences array (defined on line 6)
    //used to make the first practice sentence appear on the screen when the component is mounted
    useEffect(() => {
        setCount(1);

        
        setSentence(sentences[count])
        console.log("count from useEffect: " + count)
        console.log("sentence from useEffect: " + sentence)
        
        
    }, [sentences])
    

   

    

   
    


    return (
        <div className="w-[100%] mx-auto md:w-[80%] max-w-[900px] h-[30vh] sm:h-[50vh] md:max-h-[400px]  bg-transparent   md:rounded-3xl mb-[5%] card_class ">
            <div className='flex flex-col pt-[10%]'>
                <div className='flex'>
                    {/* heading to display the sentence or 'sentence not read from server' if unable to retrieve sentence */}
                    <h3 className="text-slate-900 font-bold text-sm md:text-2xl text-center py-[5%]  md:py-[2%] mx-auto">{sentence ? Object.keys(sentence) : 'sentence not read from server'}</h3>

                </div>
                 {/* if showTranslation is true, display the translation of the sentence
                else display a button that when clicked will toggle the showTranslation state */}
                <h3 className="text-gray-700 font-bold text-sm md:text-xl text-center md:py-[2%] ">{showTranslation ? Object.values(sentence) : <button onClick={toggleTranslation} className='text-gray-700 text-md md:text-xl'>See Translation</button>}</h3>
                {/* <button onClick={countChange} className='rounded-full bg-slate-900 text-slate-300'>Next</button> */}
                {/* heading to display when all the practice examples have been completed */}
                <h4 className='hidden completed_class mx-auto text-gray-700 text-xs pt-[2%]'>You have completed all the practice examples</h4>
                <h6 className='text-gray-700 text-xs mx-auto'>*Audio coming soon*</h6>
                {/* button to change the example sentence displayed */}
                <motion.button whileTap={{translateY: 10}} className='max-w-fit mx-auto mt-[8%]' onClick={countChange}><BsFillArrowRightCircleFill className='text-[25px] md:text-[45px]'  /></motion.button>
            </div>
        </div>
    )
}

export default Card
