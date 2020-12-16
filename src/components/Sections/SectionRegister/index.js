import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const crmExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const handleSubmit = async (values, actions) => {
    const data = await new Promise((resolve) => {
      window.setTimeout(() => resolve(values), 2000);
    });
    console.log(data);
    actions.setSubmitting(false);
    actions.resetForm();
};


const optionsUF = [
    { id: 'placeholder', title: 'Selecione o seu Estado *' },
    { id: 'AC', title: 'Acre' },
    { id: 'AL', title: 'Alagoas' },
    { id: 'AP', title: 'Amapa' },
    { id: 'AM', title: 'Amazonas' },
    { id: 'BA', title: 'Bahia' },
    { id: 'CE', title: 'Ceará' },
    { id: 'DF', title: 'Distrito Federal' },
    { id: 'ES', title: 'Espirito Santo' },
    { id: 'GO', title: 'Goiás' },
    { id: 'MA', title: 'Maranhão' },
    { id: 'MT', title: 'Mato Grosso' },
    { id: 'MS', title: 'Mato Grosso do Sul' },
    { id: 'MG', title: 'Minas Gerais' },
    { id: 'PA', title: 'Pará' },
    { id: 'PB', title: 'Paraíba' },
    { id: 'PR', title: 'Paraná' },
    { id: 'PE', title: 'Pernambuco' },
    { id: 'PI', title: 'Piauí' },
    { id: 'RJ', title: 'Rio de Janeiro' },
    { id: 'RN', title: 'Rio Grande do Norte' },
    { id: 'RS', title: 'Rio Grande do Sul' },
    { id: 'RO', title: 'Rondônia' },
    { id: 'RR', title: 'Roraima' },
    { id: 'SC', title: 'Santa Catarina' },
    { id: 'SP', title: 'São Paulo' },
    { id: 'SE', title: 'Sergipe' },
    { id: 'TO', title: 'Tocantins' },
  ];

const optionsUF_CRM = [
{ id: 'placeholder', title: 'UF CRM *' },
{ id: 'AC', title: 'Acre' },
{ id: 'AL', title: 'Alagoas' },
{ id: 'AP', title: 'Amapa' },
{ id: 'AM', title: 'Amazonas' },
{ id: 'BA', title: 'Bahia' },
{ id: 'CE', title: 'Ceará' },
{ id: 'DF', title: 'Distrito Federal' },
{ id: 'ES', title: 'Espirito Santo' },
{ id: 'GO', title: 'Goiás' },
{ id: 'MA', title: 'Maranhão' },
{ id: 'MT', title: 'Mato Grosso' },
{ id: 'MS', title: 'Mato Grosso do Sul' },
{ id: 'MG', title: 'Minas Gerais' },
{ id: 'PA', title: 'Pará' },
{ id: 'PB', title: 'Paraíba' },
{ id: 'PR', title: 'Paraná' },
{ id: 'PE', title: 'Pernambuco' },
{ id: 'PI', title: 'Piauí' },
{ id: 'RJ', title: 'Rio de Janeiro' },
{ id: 'RN', title: 'Rio Grande do Norte' },
{ id: 'RS', title: 'Rio Grande do Sul' },
{ id: 'RO', title: 'Rondônia' },
{ id: 'RR', title: 'Roraima' },
{ id: 'SC', title: 'Santa Catarina' },
{ id: 'SP', title: 'São Paulo' },
{ id: 'SE', title: 'Sergipe' },
{ id: 'TO', title: 'Tocantins' },
]; 

const LoginSchema = Yup.object().shape({
        
    name: Yup.string()
        .min(5, "O nome deve ter no mínimo 3 caracteres")
        .max(20, "o nome deve ter 20 caracteres no máximo")
        .required("Nome é obrigatório "),
        
    email: Yup.string()
        .lowercase('Email deve ser em letras minusculas')
        .email("Formato de endereço de e-mail inválido")
        .required("E-mail é obrigatório"),

    // specialty: Yup.string()
    //     .email("Formato de endereço de e-mail inválido")
    //     .required("E-mail é obrigatório"),

    // password: Yup.string()
    //      .required("Senha é obrigatório")
    //      .matches( /^(?=.*[A-Za-z])(?=.*\d)[\w\W]{8,100}$/,"Digite uma senha forte. Ex: Nbb_885522"),
    //      .min(8)
    //      .matches(RegExp("(.*[a-z].*)"), "Lowercase")
    //      .matches(RegExp("(.*[A-Z].*)"), "Uppercase")
    //      .matches(RegExp("(.*\\d.*)"), "Number")
    //      .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special")



    contact: Yup.string()
        .matches(phoneRegExp, "Número de telefone não é válido")
        .required("Número de contato obrigatório"),

    crm: Yup.string()
        .matches(crmExp, "Número do CRM inválido")
        .required("CRM obrigatório"),

    state: Yup.string()
        .oneOf(optionsUF, "Seleção inválida")
        .required("Estado Obrigatório"),

    city: Yup.string().required("Cidade é obrigatório"),

    state_crm: Yup.string()
        .oneOf(optionsUF_CRM, "Seleção inválida")
        .required("CRM do Estado é Obrigatório"),


    acceptTerms: Yup.bool().oneOf([true], 'Precisa assinar os termos')
});


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
                            <Formik name="contactForm" id="contact_form"
                                initialValues={{
                                    email: "",
                                    state: "",
                                    city: "",
                                    state_crm:"",
                                    crm: "",
                                    specialty: "",
                                    name: "",
                                    contact: "",
                                    acceptTerms: false
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={handleSubmit}
                                >
                                {({ handleChange, touched, errors, isSubmitting }) => (
                                    <Form>
                                        <div className="row">
                                            <div className="col-md-6 mb-0">

                                                <div className="form-group">
                                                    <Field
                                                    type="text"
                                                    name="name"
                                                    placeholder="Nome Completo*"
                                                    className={`form-control ${
                                                        touched.name && errors.name ? "is-invalid" : ""
                                                    }`}
                                                    />
                                                    <ErrorMessage
                                                    component="div"
                                                    name="name"
                                                    className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email*"
                                                    className={`form-control ${
                                                        touched.email && errors.email ? "is-invalid" : ""
                                                    }`}
                                                    />
                                                    <ErrorMessage
                                                    component="div"
                                                    name="email"
                                                    className="invalid-feedback"
                                                    />
                                                </div>

                                                
                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="specialty"
                                                        placeholder="Especialidade"
                                                        className={`form-control ${
                                                            touched.specialty && errors.specialty ? "is-invalid" : ""
                                                        }`}
                                                        />
                                                        <ErrorMessage
                                                        component="div"
                                                        name="city"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="contact"
                                                        placeholder="Telefone com DDD *"
                                                        className={`form-control ${
                                                            touched.contact && errors.contact ? "is-invalid" : ""
                                                        }`}
                                                        />
                                                        <ErrorMessage
                                                        component="div"
                                                        name="contact"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                             </div>
                                            
                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <Field
                                                    type="text"
                                                    name="city"
                                                    placeholder="Cidade *"
                                                    className={`form-control ${
                                                        touched.city && errors.city ? "is-invalid" : ""
                                                    }`}
                                                    />
                                                    <ErrorMessage
                                                    component="div"
                                                    name="city"
                                                    className="invalid-feedback"
                                                    />
                                                </div> 

                                                <div className="form-group">
                                                    <Field
                                                        name="state"
                                                        component="select"
                                                        placeholder="Estado *"
                                                        onChange={handleChange}
                                                        className={` form-control ${
                                                            touched.state && errors.state ? "is-invalid" : ""
                                                        }`}
                                                        >
                                                        {optionsUF.map((option) => (
                                                                <option value={option.id} key={option.id}>
                                                                    {option.title}
                                                                </option>
                                                            ))}
                                                        </Field>

                                                        <ErrorMessage
                                                        component="div"
                                                        name="state"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="crm"
                                                        placeholder="CRM *"
                                                        className={`form-control ${
                                                            touched.crm && errors.crm ? "is-invalid" : ""
                                                        }`}
                                                        />
                                                        <ErrorMessage
                                                        component="div"
                                                        name="crm"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        name="state_crm"
                                                        component="select"
                                                        placeholder="UF Estado *"
                                                        onChange={handleChange}
                                                        className={` form-control ${
                                                            touched.state_crm && errors.state_crm ? "is-invalid" : ""
                                                        }`}
                                                        >
                                                        {optionsUF_CRM.map((option) => (
                                                                <option value={option.id} key={option.id}>
                                                                {option.title}
                                                                </option>
                                                            ))}
                                                        </Field>

                                                        <ErrorMessage
                                                        component="div"
                                                        name="state_crm"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group form-check">
                                            <Field 
                                                type="checkbox" 
                                                name="acceptTerms" 
                                                id="acceptTerms" 
                                                className={'form-check-input ' + (
                                                    errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : ''
                                                    )} 
                                                />

                                                <label htmlFor="acceptTerms" className="form-check-label">
                                                    Declaro que as informações acima prestadas são verdadeiras e assumo a inteira responsabilidade pelas mesmas, ciente das penalidades cabíveis da lei.
                                                </label>
                                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                        </div>

                                         <div className="row wow fadeInUp">
                                    <div className="col-md-12 text-center">
                                    <button
                                            type="submit"
                                            className="btn btn-line"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Cadastrando.." : "Inscrever-se"}                                           
                                        </button>
                                    </div>
                                </div>                
                                    
                                       
                                        
                                        
                                                        
                                    </Form>
                                )}
                                </Formik>
 
                        </div>
                    </div>
                </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionRegister;