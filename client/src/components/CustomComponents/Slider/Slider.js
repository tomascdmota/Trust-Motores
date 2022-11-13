import React from "react";

 export default function Slider() {

    const sliderData = [{
        title: "10% de desconto em motores Renault Reconstruídos",
        description: "Até dia 15 de novembro, aproveite 10% de desconto numa seleção variada de motores Renault",
        button: "Saber mais",
        image: "https://res.cloudinary.com/dnho57ne8/image/upload/v1651762101/image_processing20220122-18201-272elw_d7q4p2.png",
    
    },
    {
        title: "10% de desconto em motores Renault Reconstruídos",
        description: "Até dia 15 de novembro, aproveite 10% de desconto numa seleção variada de motores Renault",
        button: "Saber mais",
        image: "https://res.cloudinary.com/dnho57ne8/image/upload/v1651762101/image_processing20220122-18201-272elw_d7q4p2.png",
    
    },
    {
        title: "10% de desconto em motores Renault Reconstruídos",
        description: "Até dia 15 de novembro, aproveite 10% de desconto numa seleção variada de motores Renault",
        button: "Saber mais",
        image: "https://res.cloudinary.com/dnho57ne8/image/upload/v1651762101/image_processing20220122-18201-272elw_d7q4p2.png",
    
    },
    {
        title: "10% de desconto em motores Renault Reconstruídos",
        description: "Até dia 15 de novembro, aproveite 10% de desconto numa seleção variada de motores Renault",
        button: "Saber mais",
        image: "https://res.cloudinary.com/dnho57ne8/image/upload/v1651762101/image_processing20220122-18201-272elw_d7q4p2.png",
    
    }
    
    ];


    return(
        <div className="slider">
            {
            sliderData.map((item, index) => {
                return(
                    <div key={index} className="slide">
                        <h1 className="title">{item.title}</h1>
                        <p className="description">{item.description}</p>
                        <button>{item.button}</button>
                        <img src={item.image}/>
                    </div>
                )
            })}

            <button id="goLeft"> left</button>
            <button id="goRight"> right</button>
        </div>
    )
}