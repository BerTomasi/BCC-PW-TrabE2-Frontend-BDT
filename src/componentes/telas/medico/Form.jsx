import { useContext } from 'react'
import Alerta from '../../Alerta';
import MedicoContext from './MedicoContext';
import InputMask from 'react-input-mask';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaClinicas }
        = useContext(MedicoContext);

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
                        <h5 className="modal-title" id="exampleModalLabel">Médico</h5>
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
                                <label htmlFor="txtCpf" className="form-label">
                                    CPF
                                </label>
                                <InputMask
                                    mask="999.999.999-99"
                                    placeholder="Digite o CPF"
                                    type="text"
                                    className="form-control"
                                    id="txtCpf"
                                    name="cpf"
                                    value={objeto.cpf}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='valid-feedback'>
                                    CPF OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME O CPF CORRETAMENTE!
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtCrm" className="form-label">
                                    CRM
                                </label>
                                <InputMask
                                    mask="999999"
                                    placeholder="Digite o CRM"
                                    type="text"
                                    className="form-control"
                                    id="txtCrm"
                                    name="crm"
                                    value={objeto.crm}
                                    onChange={handleChange}
                                    required

                                />
                                <div className='valid-feedback'>
                                    CRM OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME O CRM CORRETAMENTE!
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    placeholder='Digite o nome'
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
                                <label htmlFor="txtEspecialidade" className="form-label">
                                    Especialidade
                                </label>
                                <input
                                    placeholder='Digite A especialidade'
                                    type="text"
                                    className="form-control"
                                    id="txtEspecialidade"
                                    name="especialidade"
                                    value={objeto.especialidade}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='valid-feedback'>
                                    Especialidade OK!
                                </div>
                                <div className='invalid-feedback'>
                                    INFORME A ESPECIALIDADE CORRETAMENTE!
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
                                <label htmlFor="selectClinica" className="form-label">
                                    Clínica
                                </label>
                                <select
                                    required
                                    className="form-control"
                                    id="selectClinica"
                                    value={objeto.clinica}
                                    name="clinica"
                                    onChange={handleChange}>
                                    <option disable="true" value="">(Selecione a clínica)</option>
                                    {listaClinicas.map((clinica) => (
                                        <option key={clinica.codigo} value={clinica.codigo}>
                                            {clinica.nome}
                                        </option>
                                    ))}
                                </select>
                                <div className="valid-feedback">
                                    Clinica OK
                                </div>
                                <div class="invalid-feedback">
                                    Selecione uma clínica..
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">
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