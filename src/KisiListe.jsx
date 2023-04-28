import kisiler from './veri.js'
import Kisi from './Kisi.jsx'
import './KisiListe.css'
import { useState } from 'react'

function KisiListe () {
    const [goster, gosterGuncelle] = useState(true)

    return(
        <>
        <main className='kart-cerceve' id='cerceve'>
        <h1 id='h1-etiket'>5 birthdays today</h1>
        {goster===true? kisiler.map((kisi)=>{return <Kisi kisi={kisi} key={kisi.id}/>}):"" }
        <button id='buton' onClick={()=>{gosterGuncelle(false)}}>Clear All</button>
        </main>
        </>
    )
}

export default KisiListe