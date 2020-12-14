import {useState} from 'react';

import CountFunFacts from '../../CountFunFacts';

const SectionFunFacts = () => {

    const [funFacts] = useState(
        [
            {
                h3: '8800 +',
                span: 'Participantes',
            },
            {
                h3: '2',
                span: 'Tópicos',
            },
            {
                h3: '8',
                span: 'Palestrantes',
            },
            {
                h3: '10',
                span: 'Sorteios',
            }
        ]
    );  

    return(
        <>
        {/* section begin */}
        <section id="section-fun-facts" className="text-light" data-bgimage="url(images-event/bg/3.jpg) fixed top">
            <div className="container">
                <div className="row">
                    {funFacts.map(funFactsInfo =>
                        <CountFunFacts funFactsInfo={funFactsInfo} />
                    )}
                </div>
            </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionFunFacts;