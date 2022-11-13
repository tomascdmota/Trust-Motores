import React from 'react'
import '../css/countdown.css'

function countdown() {
    return (
        <div className="countdown">
            <article>
        <section className="animation col">
            <div className="box">
                <h1>A Trust Motores Oferece:</h1>
            </div>
        </section>
        <section className="time col">
            <span>
                <div className="days">01</div>
                Dias
            </span>
            <span>
                <div className="hours">01</div>
                Horas
            </span>
            <span>
                <div className="minutes">01</div>
                Minutos
            </span>
        </section>
        </article>
        </div>
    )
}

export default countdown
