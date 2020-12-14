import {useState} from 'react';
import ThemesTitles from '../../ThemesTitles';


const SectionFeatures = () => {

    const [themes] = useState(
        [
            "Update in Diagnosis of Responsive and Refractory Gastroesophageal Reflux Disease", 
            "Management of GERD in 202",
            "Tema 03",
            "Tema 04" 
        ]
    );  

    return(
        <>
        {/* section begin */}
        <section id="section-features" className="de_light section">
            <div className="wm wm-border light wow fadeInDown ">temas</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center wow fadeInUp">
                        <h1>Temas das aulas</h1>
                        <div className="separator"><span><i className="fa fa-square" /></span></div>
                        <div className="spacer-single" />
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center text-center">
                        {themes.map(temas => (
                            <ThemesTitles temas={temas}/>
                        ))}         
                    </div>
                </div>
            </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionFeatures;