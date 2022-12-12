import { useState, useEffect } from "react";
import MedicoContext from "./MedicoContext";
import Tabela from "./Tabela";
import Form from "./Form";

function Medico() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        cpf: "", crm: "", nome: "",
        especialidade: "", telefone: "", clinica: ""
    });
    const [listaClinicas, setlistaClinicas] = useState([]);

    const recuperar = async codigo => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/medicos/${codigo}`)
            .then(response => response.json())
            .then(data => setObjeto(data))
            .catch(err => console.log('ERRO: ' + err))
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/medicos`,
                {
                    method: metodo,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(objeto)
                })
                .then(response => response.json())
                .then(json => {
                    setAlerta({ status: json.status, message: json.message });
                    setObjeto(json.objeto);
                    if (!editar) {
                        setEditar(true);
                    }
                })
        } catch (err) {
            console.log(err.message);
        }
        recuperaMedicos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaMedicos = async () => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/medicos`)
            .then(response => response.json())
            .then(data => setListaObjetos(data))
            .catch(err => console.log('Erro: ' + err))
    }

    const recuperaClinicas = async () => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/clinicas`)
            .then(response => response.json())
            .then(data => setlistaClinicas(data))
            .catch(err => console.log('Erro: ' + err))
    }

    const remover = async objeto => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                await fetch(`${process.env.REACT_APP_ENDERECO_API}/medicos/${objeto.codigo}`,
                    { method: "DELETE" })
                    .then(response => response.json())
                    .then(json =>
                        setAlerta({ status: json.status, message: json.message }))
                recuperaClinicas();
            } catch (err) {
                console.log('Erro: ' + err)
            }
            recuperaMedicos();
        }
    }

    useEffect(() => {
        recuperaMedicos();
        recuperaClinicas();
    }, []);

    return (
        <MedicoContext.Provider value={
            {
                alerta, setAlerta,
                listaObjetos, setListaObjetos,
                recuperaClinicas,
                remover,
                objeto, setObjeto,
                editar, setEditar,
                recuperar,
                acaoCadastrar, handleChange, listaClinicas
            }
        }>
            <Tabela />
            <Form />
        </MedicoContext.Provider>
    )


}

export default Medico;