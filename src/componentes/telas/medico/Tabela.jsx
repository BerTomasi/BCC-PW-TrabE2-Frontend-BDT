import { useContext } from "react";
import MedicoContext from "./MedicoContext";
import Alerta from "../../Alerta";
import '../../Styles.css'

function Tabela() {

    const { setObjeto, alerta, setAlerta, listaObjetos, remover,
        setEditar, recuperar } =
        useContext(MedicoContext);

    return (
        <div style={{ padding: '20px' }}>
            <div className="home">
                <h1><b>Médicos</b></h1>
            </div>

            <div className="botao">
                <button type="button" className="btn btn-primary"
                    data-bs-toggle="modal" data-bs-target="#modalEdicao"
                    onClick={() => {
                        setObjeto({
                            codigo: 0, cpf: "", crm: "", nome: "",
                            especialidade: "", telefone: "", clinica: ""
                        })
                        setEditar(false);
                        setAlerta({ status: "", message: "" });
                    }}>
                    Novo <i className="bi bi-pencil-square"></i>
                </button>
            </div>

            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h1>Nenhum médico encontrado</h1>}
            {listaObjetos.length > 0 &&

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                            <th scope="col">Código</th>
                            <th scope="col">CPF</th>
                            <th scope="col">CRM</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Especialidade</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Clínica</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map(objeto => (
                            <tr key={objeto.codigo}>
                                <td align="center">
                                    <button className="btn btn-info"
                                        data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                        onClick={() => {
                                            recuperar(objeto.codigo);
                                            setEditar(true);
                                            setAlerta({ status: "", message: "" });
                                        }}>
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button className="btn btn-danger" title="Remover"
                                        onClick={() => {
                                            remover(objeto)
                                        }}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                                <td>{objeto.codigo}</td>
                                <td>{objeto.cpf}</td>
                                <td>{objeto.crm}</td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.especialidade}</td>
                                <td>{objeto.telefone}</td>
                                <td>{objeto.nomeclinica}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }

        </div>
    )
}

export default Tabela;