import { useEffect, useState} from 'react';

import CountdownAmount from '../../CountdownAmount';

import './SectionCountdown.css';

import api from '../../../services/api';

const SectionCountdown = () => {



    const [countdownDate, setCountdownDate] = useState();

    const labels = {
        days: "Dias",
        hours: "Horas",
        minutes:"Minutos",
        seconds:"Segundos"
    }

    const [state, setState] = useState(
        {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    );

    useEffect(() => {
        api
          .get(`/event/public-info?key=novalp`)
          .then((res) => {
            setCountdownDate(new Date(`${res.data.eventdate}T${res.data.eventhour}`).getTime());
            // console.log(new Date(`${res.data.eventdate}T${res.data.eventhour}`).getTime());
        })
        .catch((err) => {
          console.log(err);
        })
    
     }, []);
 


    useEffect(() => {
        if(!countdownDate)return;

        const tick = setInterval(setNewTime, 1000); 
        return () => clearInterval(tick) 
      }, [countdownDate]);
    

    function setNewTime()  {
        // console.log(countdownDate);
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate =  countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

           
            
            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }
            

            setState({ days: days, hours: hours, minutes, seconds });

            // if(days == 0 ) {
            //     const Zerado = true;
            // }
        }
    };


    return(
        <>
        <section id="section-countdown" aria-label="section" className="gradient-to-right pt60 pb40" style={{backgroundSize: 'cover'}}>
            <div className="container" style={{backgroundSize: 'cover'}}>
                <div className="row" style={{backgroundSize: 'cover'}}>
                    <div className="col-md-10 offset-md-1" style={{backgroundSize: 'cover'}}>
                        <div id="defaultCountdown" className="is-countdown" style={{backgroundSize: 'cover'}}>
                            <span className="countdown-row countdown-show4">

                                {/* <span className="countdown-section" style={{width: '100%'}}>
                                    <span className="countdown-amount" style={{fontSize: '30px'}}>
                                        <a href="#">Assistir Videos Anteriores</a>
                                    </span>
                                </span> */}

                                {/* <span className="countdown-section" style={{width: '100%'}}>
                                    <span className="countdown-amount" style={{fontSize: '45px'}}>!COMEÇOU!</span>
                                </span> */}

                                {Object.keys(state).map(campo => 
                                        <CountdownAmount stateInfo={state[campo]} label={labels[campo]}/>
                                )}

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default SectionCountdown;