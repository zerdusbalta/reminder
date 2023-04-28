import "./Kisi.css"

function Kisi ({kisi}){
    return(
        <div>
            <div className="resim-cerceve">
                <img src={kisi.image} alt="" srcset="" />
            </div>
            <div className="yazi-conteynir">
                <p className="ad">{kisi.name}</p>
                <p>{kisi.age}</p>
            </div>
        </div>
    )
}
export default Kisi