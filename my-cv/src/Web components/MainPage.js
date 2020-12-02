import React from 'react'
import '../Styling/style.css'

function MainPage() {

    const displayPict = {

    }

    const contactInfo = {
        address : 'Jl. Ghanesa Boulevard, Cikarang, Jawa Barat',
        phone : '08115530196',
        mail : 'imamfahr@gmail.com'
    }

    const education ={
        campus : 'Universitas Diponegoro, Semarang',
        gpa : '3.38 / 4.00',
        period : 'Aug 2015 - Aug 2019'
    }

    const languageProficiency = {
        langaunge1 : 'english', 
        toefl : '(TOEFL-PBT 518)'
    }

    const socialMediaLink = {

    }


    return (
        <div className='aWholePage'>
        <div className='personalInfo-side'>
        <div className='displayPicture'>
            here will be your image
        </div>
        <div className='linkField'>
        here will be link box to your social media
        </div>
        <div className='personalInfo'>
        <div>
            Born Date
        </div>
        <div>
        <p>{contactInfo.address}</p>
        <p>{contactInfo.phone}</p>
        <p>{contactInfo.mail}</p>
        </div>

        </div>


        </div>
        <div className='experience-side'>
        <div className='header'>
            <div className='name'>Imam Fahreza, ST</div>
            <div className='bio'>Engineering Workers & Full-stack enthusiast</div>
        </div>
        <div className='briefExplain'>
            Gladly introduce myself as a potential fresher, an engineering workers with some special skills.
        </div>

        <div className='experienceField'>
        Professional experience
        <div className='experienceCard'>
        here will be the card to map experience
        </div>
        <div className='experienceCard'>
        here will be the card to map experience
        </div>

        </div>
        <div className = 'portfolio-area'>
        here will be portfolio area

        </div>
        </div>
        </div>
    )
}

export default MainPage
