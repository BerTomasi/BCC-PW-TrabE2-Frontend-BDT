import { useState, useEffect } from "react";
import ClinicaContext from "./ClinicaContext";
import Tabela from "./Tabela";
import Form from "./Form";

function Clinica() {
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({codigo : "", nome : "", cep : "", numpredio : "", telefone : "", descricao : ""})

    const recuperaClinicas = async () => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/clinicas`)
            .then(Response => Response.json())
            .then(data => setListaObjetos(data))
            .catch(err => console.log('ERRO: ' + err))
    }

    const remover = async objeto => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                await fetch(`${process.env.REACT_APP_ENDERECO_API}/clinicas/${objeto.codigo}`,
                    { method: "DELETE" })
                    .then(response => response.json())
                    .then(json => setAlerta({ status: json.status, message: json.message }))
            } catch (err) {
                console.log('ERRO: ' + err);
            }
            recuperaClinicas();
        }
    }

    const recuperar = async codigo => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/clinicas/${codigo}`)
            .then(Response => Response.json())
            .then(data => setObjeto(data))
            .catch(err => console.log('ERRO: ' + err))
    }

    const acaoCadastrar = async e => {
        e.preventDefault();

        const metodo = editar ? "PUT" : "POST";

        try{

            await fetch (`${process.env.REACT_APP_ENDERECO_API}/clinicas`,
            {
                method : metodo,
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(objeto)
            })
            .then(response => response.json())
            .then(json => {
                setAlerta({status : json.status, message : json.message})
                setObjeto(json.objeto)

                if(!editar){
                    setEditar(true)
                }
            })
        }catch(err){
            console.log(err.message);
        }

        recuperaClinicas();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({...objeto, [name] : value});
    }

    

    useEffect(() => {
        recuperaClinicas();
    }, []);

    return (
        <ClinicaContext.Provider value={
            {
                alerta, setAlerta, 
                listaObjetos, setListaObjetos, 
                recuperaClinicas, 
                remover,
                objeto, setObjeto,
                editar, setEditar,
                recuperar,
                acaoCadastrar,
                handleChange,
            }
        }>
            <Tabela/>
            <Form/>
        </ClinicaContext.Provider>

    )
}

export default Clinica;