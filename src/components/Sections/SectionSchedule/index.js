import {useState} from 'react';

 import ScheduleLiData from '../../SheduleInfo/ScheduleLiData';
 import TabScheduleData from '../../SheduleInfo/TabScheduleData';


const SectionSchedule = () => {

    const [infoShedule] = useState([
        {
            id: 1,
            day: 'Dia 1',
            date: '11/12/2020',
            active: 'active',
            speakers: [
                {
                    hora:'09h00',
                    name:'Dr. João luiz',
                    picture:'../../images-event/team/1.jpg',
                    profission:'Medico',
                    descriptionH3:'Algum Tirulo Aqui',
                    descriptionP:'Mini cv, minicv ....'
                },
                {
                    hora:'10h00',
                    name:'Jhow Gama',
                    picture:'../../images-event/team/2.jpg',
                    profission:'Medico',
                    descriptionH3:'Algum Tirulo Aqui',
                    descriptionP:'Mini cv, minicv ....'
                },
                {
                    hora:'11h00',
                    name:'Cross Dev',
                    picture:'../../images-event/team/3.jpg',
                    profission:'Medico',
                    descriptionH3:'Algum Tirulo Aqui',
                    descriptionP:'Mini cv, minicv ....'
                }
            ]
        },
        {
            id: 2,
            day: 'Dia 2',
            date: '12/12/2020',
            speakers: [
                {
                    hora:'12h00',
                    name:'Rosa Gama',
                    picture:'../../images-event/team/4.jpg',
                    profission:'Medico',
                    descriptionH3:'Algum Tirulo Aqui',
                    descriptionP:'Mini cv, minicv ....'
                },
                {
                    hora:'13h00',
                    name:'Denise Leonor',
                    picture:'../../images-event/team/4.jpg',
                    profission:'Medico',
                    descriptionH3:'Algum Tirulo Aqui',
                    descriptionP:'Mini cv, minicv ....'
                }
            ]
        }
    ]);


    return(
        <>
        {/* section begin */}
        <section id="section-schedule" aria-label="section-services-tab" data-bgimage="url(images-event/bg/6.jpg) top right no-repeat">
            <div className="wm wm-border light wow fadeInDown ">agenda</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center wow fadeInUp">
                        <h1>Agenda</h1>
                        <div className="separator"><span><i className="fa fa-square" /></span></div>
                        <div className="spacer-single" />
                    </div>
                    <div className="col-md-12">
                        <div className="de_tab tab_style_4 text-center">
                            <ul class="de_nav de_nav_dark">
                                { infoShedule.map(repo => 
                                    <ScheduleLiData repo={repo}/>
                                )}  
                            </ul>
                            <div className="de_tab_content text-left">
                                { infoShedule.map(repo => 
                                    <TabScheduleData repo={repo}/>
                                )}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionSchedule;