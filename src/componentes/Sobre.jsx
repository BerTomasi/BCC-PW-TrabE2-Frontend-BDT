import './Styles.css'
import logo from "./logo.png"
import modelo from "./BDConceito.png"

function Sobre() {

    return (
        <section className="home">
            <body className="home_body">
                <h1><b><span>Modelo Conceitual</span></b></h1>
                <img src={modelo} alt="modelo conceitual do trabalho" className='modelo'/>
            </body>

            <footer className="home_footer">
                <img src={logo} alt="logo" className="logo"/>
                <h3>By Bernardo Dirceu Tomasi</h3>
            </footer>
        </section>
    )

}

export default Sobre;