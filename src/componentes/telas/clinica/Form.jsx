import { useContext } from 'react'
import Alerta from '../../Alerta';
import ClinicaContext from './ClinicaContext';
import InputMask from 'react-input-mask';

function Form() {
    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ClinicaContext);
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (

        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Clínica</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form id="formulario" onSubmit={acaoCadastrar}
                        className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtCodido" className="form-label">
                                    Código
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtCodido"
                                    name="codigo"
                                    value={objeto.codigo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    value={objeto.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='valid-feedback'>
                                    Nome OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME O NOME CORRETAMENTE!
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtCep" className="form-label">
                                    CEP
                                </label>
                                <InputMask
                                    type="text"
                                    placeholder='Digite o CEP da clínica'
                                    mask="99999999"
                                    className="form-control"
                                    id="txtCep"
                                    name="cep"
                                    value={objeto.cep}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='valid-feedback'>
                                    CEP OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME O CEP CORRETAMENTE!
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtnumpredio" className="form-label">
                                    Número do Prédio
                                </label>
                                <InputMask
                                    type="text"
                                    placeholder='Digite o número do prédio da clínica'
                                    mask="9999"
                                    className="form-control"
                                    id="txtnumpredio"
                                    name="numpredio"
                                    value={objeto.numpredio}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='valid-feedback'>
                                    Número OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME O NÚMERO CORRETAMENTE!
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtTelefone" className="form-label">
                                    Telefone
                                </label>
                                <InputMask
                                    mask="(99)99999-9999"
                                    placeholder="Digite o número de telefone"
                                    type="text"
                                    className="form-control"
                                    id="txtTelefone"
                                    name="telefone"
                                    value={objeto.telefone}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='valid-feedback'>
                                    Telefone OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME O TELEFONE CORRETAMENTE!
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDescricao" className="form-label">
                                    Descrição
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtSite"
                                    name="descricao"
                                    value={objeto.descricao}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='valid-feedback'>
                                    Descrição OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME A DESCRIÇÃO CORRETAMENTE!
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form;