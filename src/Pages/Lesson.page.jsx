import Card from '../Components/Card.component';
import { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import mrkdown from '../mark.md';
import $ from 'jquery';

//Lesson page is the page that contains the lesson
//The lesson is in markdown format

const Lesson = () => {
    //The lesson is fetched from the mark.md file
    //The lesson is then converted to html using markdown-to-jsx
    //The html is then rendered on the page
    const [markdownContent, setMarkdownContent] = useState('');
    fetch(mrkdown).then((response) => response.text()).then((text) => setMarkdownContent(text)).then(() => $('.card_class').removeClass('hidden'));

   
    // $('h1').addClass('text-black font-bold text-3xl text-center )');
    // $('h2').addClass('text-black text-xl font-semibold');



    return (
        <div className=' bg-slate-300 w-full h-auto overflow-x-hidden px-[10%] pt-[5%] pb-[10%] scroll-p-0 scroll-m-0'>
            <Markdown className="prose whitespace-normal text-center mx-auto mb-[5%]" children={markdownContent}></Markdown>
            <Card/>
            
        </div>
    )
}

export default Lesson;





