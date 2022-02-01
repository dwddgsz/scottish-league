import styled from 'styled-components';
import Title from '../components/Title'
import {useState} from 'react';

const Contact = () => {

    const contactFormInitialState = {
        email:'',
        content:'',
    }

    const contactFormErrorsInitialState = {
        email: false,
        content: false,
    }

    const [isSuccess, setIsSuccess] = useState(false);
    const [contactForm, setContactForm] = useState(contactFormInitialState);
    const [contactFormErrors, setContactFormErros] = useState(contactFormErrorsInitialState)

    const handleErrors = () => {
        if (contactForm.content.replace(/\s/g, '').length === 0){
            setContactFormErros({...contactFormErrors, content:true})
            return;
        }
        if (contactForm.email.replace(/\s/g, '').length === 0){
            setContactFormErros({...contactFormErrors, email:true})
            return;
        } 
        setIsSuccess(true);
        setContactForm(contactFormInitialState);
    }

    const handleOnChange = (e: (React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value,
        })
        setContactFormErros(contactFormErrorsInitialState);
        setIsSuccess(false);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleErrors();
    }

  return (
    <ContactWrapper>
        <Title>Share your feedback</Title>
        <form className="feedback-form" onSubmit={(e)=>handleFormSubmit(e)}>
            <p className={isSuccess? "feedback-form__success show-success" : "feedback-form__success"}>Success!</p>
            <div className="feedback-form__group">
                <label className="feedback-form__label" htmlFor="email">Email</label>
                <input onChange={(e)=>{handleOnChange(e)}} className="feedback-form__field" name="email" type="email" value={contactForm.email}/>
                <p className={contactFormErrors.email ? "feedback-form__error show-error" : "feedback-form__error"}>Cannot be empty</p>
            </div>
            <div className="feedback-form__group">
                <label className="feedback-form__label" htmlFor="content">Message</label>
                <textarea onChange={(e)=>{handleOnChange(e)}} className="feedback-form__field" name="content" value={contactForm.content}/>
                <p className={contactFormErrors.content ? "feedback-form__error show-error" : "feedback-form__error"}>Cannot be empty</p>
            </div>
            <button className="feedback-form__submit">Submit</button>
        </form>
    </ContactWrapper>
    );
};

const ContactWrapper = styled.article`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1366px;
    min-height:calc(100vh - 55px);
    margin: 0 auto;
    padding: 15px;
    border-left: 2px solid var(--border);
    border-right: 2px solid var(--border);
    background-color: var(--white);
    color: var(--title);
    .feedback-form {
        width:100%;
        border: 2px solid var(--border);
        margin-top:10px;
        padding: 10px 15px;
        @media only screen and (min-width:600px) {
            width: calc(50% - 7.5px);
        }
        &__group {
            display:flex;
            flex-direction: column;
            margin-top: 10px;
        }
        &__label {
            font-size: 1.2rem;
            color: var(--title);
        }
        &__field {
            padding:5px;
            border: 2px solid var(--border);
            max-width:100%;
            outline:none;
            font-size:1.1rem;
        }
        &__success {
            visibility: hidden;
            color: var(--success);
            font-weight: bold;
            &.show-success {
                visibility: visible;
            }
        }
        &__error {
            visibility: hidden;
            color: var(--error);
            font-weight: bold;
            &.show-error {
                visibility: visible;
            }
        }
        &__submit {
            margin-top:10px;
            padding: 3px 8px;
            border:none;
            font-size:1.3rem;
            background-color: var(--border);
            color: var(--title);
            cursor:pointer;
            &:hover {
                background-color: var(--title);
                color: var(--border);
            }
        }
    }
`


export default Contact;
