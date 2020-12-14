import {useState} from 'react';
import SpeakersInfo from '../../SpeakersInfo';


const SectionSpeakers = () => {

 
    const [speaker] = useState(
        [
            {
                avatar: '../../../images-event/team/4.jpg',
                name: 'Dr Evan S. Dellon',
                profission: 'Gastroenterologista',
                description: 'Gastroenterologista acadêmico com treinamento formal em pesquisa em epidemiologia, pesquisa clínica e translacional, e desenho de ensaios clínicos. É responsável por uma pesquisa que se concentra em otimizar o diagnóstico, caracterizar a epidemiologia, estudar a patogênese e refinar o tratamento e o monitoramento de EEo, com o objetivo geral de melhorar o atendimento ao paciente e os resultados em EoE. É especialista reconhecido internacionalmente em esôfago eosinofílico.',
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/'        },
            {
                avatar: '../../../images-event/team/1.jpg',
                name: 'Dr Vincenzo Savarino',
                profission: 'Gastroenterologista',
                description: 'Professor titular de gastroenterologia e diretor do departamento de medicina interna. Possui pós-graduação em doenças do aparelho digestivo e em medicina interna na Universidade de Gênova. Em 2008, se tornou diretor do departamento de medicina interna e especialidades médicas da universidade de Gênova. Diretor adjunto do departamento de medicina interna e especialidades médicas da Universidade de Gênova e diretor da escola de doutorado de medicina interna clínica-experimental da Universidade de Gênova.',
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/'
            },
            {
                avatar: '../../../images-event/team/2.jpg',
                name: 'Dr Décio Chinzon',
                profission: 'Gastroenterologista',
                registerNumber: 'CRM/SP : 49552',
                description: 'Possui graduação em Medicina pela Universidade Federal do Rio de Janeiro e Doutorado em Gastroenterologia Clínica pela Universidade de São Paulo. Atualmente é Professor Assistente Doutor e Professor de Pós Graduação Disciplina de Gastroenterologia da USP. Foi Presidente da Sociedade de Gastroenterologia do Estado de São Paulo e Diretor Científico da Federação Brasileira de Gastroenterologia. Fellow da American gastroenterologiacal Association e International Member do American College of Gastroenterology.',
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/'
            },
            {
                avatar: '../../../images-event/team/3.jpg',
                name: 'Dr Gerson Domingues',
                profission: 'Gastroenterologista',
                registerNumber: 'CRM/RJ: 52.46442-7',
                description: 'Graduado em Medicina pela Universidade Gama Filho, especialista em Gastroenterologia pela Federação Brasileira de Gastroenterologia, mestrado em Gastroenterologia e doutorado em Medicina Interna com área de concentração em Gastroenterologia, ambos pela Universidade Federal do Rio de Janeiro. Possui pós-doutorado em Gastroenterologia pela Universidade Estadual do Rio de Janeiro. Atualmente, é Professor Adjunto do Serviço de Gastroenterologia e Responsável técnico pela Unidade de Esôfago do Serviço de Gastroenterologia do Hospital Universitário Pedro Ernesto - UERJ.',
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/'
            }
        ]
    );  

    return(
        <>
       {/* section begin */}
       <section id="section-speakers" className data-bgimage="url(images-event/bg/1.jpg) fixed top center" data-stellar-background-ratio=".2">
            <div className="wm wm-border dark wow fadeInDown">palestras</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center wow fadeInUp text-light">
                            <h1>Palestrantes</h1>
                            <div className="separator"><span><i className="fa fa-square" /></span></div>
                            <div className="spacer-single" />
                        </div>
                        <div className="clearfix" />
                           {speaker.map(speaker => (
                            <SpeakersInfo speaker={speaker}/>
                            ))}  
                        <div className="clearfix" />
                    </div>
                </div>
            </section>
            {/* section close */}
        </>
    );
}

export default SectionSpeakers;