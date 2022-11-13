import React, {useEffect, useRef, useState} from 'react'
import '../css/maintenance.css'
   

function Maintenance() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');


    let interval = useRef();

    const starttimer = () => {
        const countdownDate = new Date('August 12, 2021 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(((distance / 1000 / 60) % 60));
            const seconds = Math.floor((distance / 1000) % 60);


            if(distance < 0) {
                // stop timer
                clearInterval(interval);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);

             }

        }, 1000)
    };

    // ComponentDidMount

    useEffect(() => {
        starttimer();
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <section className="coming-soon">
            <div className="maintenance-title">
            <h1 className="maintenance-title">Estamos em manutenção, em breve estaremos no ar.</h1>
            
            
            </div>
            <img className="waiting" src="https://res.cloudinary.com/dnho57ne8/image/upload/v1628004034/3685835_sp5t6h.svg" alt="maintenance-image"/>

            <h1 className="contact" id="contact"></h1>
            

        </section>
    )
}

export default Maintenance;