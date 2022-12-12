import { SiWorldhealthorganization } from "react-icons/si";
import './Styles.css'
import logo from "./logo.png"

function Home() {

    return (
        <section className="home">
            <body className="home_body">
                <h1>Bem-vindo ao <b><span>Grey + Sloan Memorial Hospital</span></b></h1>
                <h2>Central de Registros: clínicas e médicos</h2>
                <SiWorldhealthorganization size={520} />
            </body>

            <footer className="home_footer">
                <img src={logo} alt="logo" className="logo"/>
                <h3>By Bernardo Dirceu Tomasi</h3>
            </footer>
        </section>
    )

}

export default Home;