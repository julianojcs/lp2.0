const SectionRegister = () => {
    return(
        <>
        {/* section begin */}
        <section id="section-register" className="text-light">
            <div className="wm wm-border dark wow fadeInDown">inscrição</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center wow fadeInUp">
                            <h1>Inscreva-se</h1>
                            <div className="separator"><span><i className="fa fa-square" /></span></div>
                            <div className="spacer-single" />
                        </div>
                        <div className="col-md-8 offset-md-2 wow fadeInUp">
                            <form name="contactForm" id="contact_form" method="post" action="email.php">
                                <div className="row">
                                    <div className="col-md-6 mb-0">

                                        <input type="text" name="name" id="name" className="form-control" placeholder="Nome Completo *" />

                                        <input type="text" name="email" id="email" className="form-control" placeholder="Email *" />

                                        <input type="text" name="specialty" id="specialty" className="form-control" placeholder="Especialidade *" />

                                        <input type="text" name="phone" id="phone" className="form-control" placeholder="Telefone com DDD *" />

                                    </div>
                                    <div className="col-md-6">
                                        
                                    <input type="text" name="city" id="city" className="form-control" placeholder="Cidade *" />

                                   
                                    <div className="select-form ">
                                        <select name="state" id="state" className="form-control select-form-text" placeholder="Estado *">
                                        <option value selected>Estado *</option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espirito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                        </select>
                                    </div>
                                    <div id="crm_error" className="error">Insira um CRM Válido</div>
                                    <div>
                                        <input type="text" name="crm" id="crm" className="form-control" placeholder="CRM *" />
                                    </div>
                                    <div id="ufcrm_error" className="error">Insira seu estado</div>
                                    <div className="select-form ">
                                        <select name="ufcrm" id="ufcrm" className="form-control select-form-text" placeholder="Estado *">
                                        <option value selected>Estado *</option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espirito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                            </form>
                            <form className="was-validated">
                                <div className="custom-control custom-checkbox mb-3">
                                    <div className="terms">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                                        <label classname="form-check-label" htmlFor="exampleCheck1">
                                            Declaro que as informações acima prestadas são verdadeiras e assumo a inteira responsabilidade pelas mesmas, ciente das penalidades cabíveis da lei.
                                        </label>
                                    </div>
                                </div>
                                <div className="row wow fadeInUp">
                                    <div className="col-md-12 text-center">
                                        <p id="submit">
                                            <input type="submit" id="send_message" defaultValue="Inscrever-se" className="btn btn-line" />
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionRegister;