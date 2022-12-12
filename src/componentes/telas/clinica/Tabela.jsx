import { useContext } from 'react'
import ClinicaContext from './ClinicaContext';
import Alerta from '../../Alerta';
import '../../Styles.css'

function Tabela() {

    const { setObjeto, alerta, setAlerta, listaObjetos, remover,
        setEditar, recuperar } = useContext(ClinicaContext);

    return (

        <div style={{ padding: '20px' }}>

            <div className="home">
                <h1><b>Clínicas</b></h1>
            </div>

            <div className="botao">
                <button type="button" className="btn btn-primary"
                    data-bs-toggle="modal" data-bs-target="#modalEdicao"
                    onClick={() => {
                        setObjeto({ codigo: 0, nome: "", cep: "", numpredio: "", telefone: "", descricao: "" })
                        setEditar(false)
                        setAlerta({ status: "", message: "" })
                    }}>
                    Novo <i className="bi bi-pencil-square"></i>
                </button>
            </div>


            <Alerta alerta={alerta} />

            {listaObjetos.length === 0 && <h1>Nenhuma clínica encontrada</h1>}

            {listaObjetos.length > 0 && (

                <table className="table">

                    <thead>

                        <tr>

                            <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                            <th scope="col">Código</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CEP</th>
                            <th scope="col">Número do Prédio</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Descrição</th>
                        </tr>

                    </thead>

                    <tbody>

                        {listaObjetos.map(objeto => (

                            <tr key={objeto.codigo}>

                                <td align="center">

                                    <button className="btn btn-info"
                                        data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                        onClick={() => {
                                            recuperar(objeto.codigo)
                                            setEditar(true)
                                            setAlerta({ status: "", message: "" })
                                        }}>

                                        <i className="bi bi-pencil-square"></i>

                                    </button>

                                    <button className="btn btn-danger" title="Remover"

                                        onClick={() => { remover(objeto); }}>

                                        <i className="bi bi-trash"></i>

                                    </button>

                                </td>

                                <td>{objeto.codigo}</td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.cep}</td>
                                <td>{objeto.numpredio}</td>
                                <td>{objeto.telefone}</td>
                                <td>{objeto.descricao}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    )

}

export default Tabela;