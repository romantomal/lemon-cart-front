import React, {useState} from 'react';
import validator from 'validator';
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";
import {ButtonTypes, InputTypes} from "../../core/enums/HtmlElementsEnums";
import textInputStyles from "../../styles/component/TextInput.module.scss";
import buttonStyles from "../../styles/component/Button.module.scss";
import formStyles from "../../styles/component/AuthForm.module.scss";
import {FormTypes} from "../../core/enums/FormEnums";
import {useActions} from "../../core/hooks/useAction";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../core/hooks/useTypedSelector";

const textConstants = {
    loginField: 'Введите ваш email...',
    passwordField: 'Введите ваш пароль...',
    confirmPasswordField: 'Подтвердите пароль...',
    submitLoginButtonText: 'Войти',
    submitRegisterButton: 'Зарегистрироваться',
    swapLoginFormButtonText: 'Ещё нет аккаунта? Зарегистрироваться.',
    swapRegisterFormButtonText: 'Есть зарегистрированный аккаунт? Войти.'
}

const fieldsStatus = {
    emailInvalidMessage: 'Please enter correct email',
    passwordEmptyInvalidMessage: 'Please enter your passwrod',
    passwordInvalidMessage: 'Password must be 5-10 char length and contain letters and numbers',
    confirmPasswordInvalidMessage: 'Passwords are different. Please check and retry',
}

const AuthForm: React.FC = () => {
    const [formType, setFormType] = useState(FormTypes.LOGIN_FORM);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);
    const {showLoader, hideLoader, loginUser, registerUser} = useActions();
    const router = useRouter();
    const {user} = useTypedSelector(state => state.user);

    if (user && user._id) {
        router.push({ pathname: '/user/[uid]', query: { uid: user._id }});
    }

    const logIn = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        if (validator.isEmpty(email) || !validator.isEmail(email)) {
            setEmailInvalid(true);
            return;
        }
        if (validator.isEmpty(password)) {
            setPasswordInvalid(true);
            return;
        }
        setEmailInvalid(false);
        setPasswordInvalid(false);
        showLoader();
        await loginUser(email, password);
        hideLoader();
    }

    const register = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        const confirmPassword = event.target[2].value;
        if (!validator.isEmail(email) || validator.isEmpty(email)) {
            setEmailInvalid(true);
            return;
        }
        if (!(validator.isLength(password, { minLength: 5, max: 10}) && validator.isAlphanumeric(password))) {
            setPasswordInvalid(true);
            return;
        }
        if (password !== confirmPassword) {
            setConfirmPasswordInvalid(true);
            return;
        }
        setEmailInvalid(false);
        setPasswordInvalid(false);
        setConfirmPasswordInvalid(false);
        showLoader();
        await registerUser(email, password);
        hideLoader();
    }

    const swapFormType = () => {
        setEmailInvalid(false);
        setPasswordInvalid(false);
        setConfirmPasswordInvalid(false);
        if (isLoginForm()) {
            setFormType(FormTypes.REGISTER_FORM);
        } else {
            setFormType(FormTypes.LOGIN_FORM);
        }
    }

    const isLoginForm = () => {
        return formType === FormTypes.LOGIN_FORM;
    }

    return (
        <div>
            {isLoginForm() ?
            <form className={formStyles.form} onSubmit={logIn}>
                <TextInput styleClassName={textInputStyles.authTextInput} inputStyleClassName={textInputStyles.input} placeholder={textConstants.loginField} inputId={textConstants.loginField} type={InputTypes.email} invalid={emailInvalid} invalidMessage={fieldsStatus.emailInvalidMessage}/>
                <TextInput styleClassName={textInputStyles.authTextInput} inputStyleClassName={textInputStyles.input} placeholder={textConstants.passwordField} inputId={textConstants.passwordField} type={InputTypes.password} invalid={passwordInvalid} invalidMessage={fieldsStatus.passwordEmptyInvalidMessage}/>
                <div className={formStyles.buttons}>
                    <Button styleClassName={buttonStyles.swapAuthButton} text={textConstants.swapLoginFormButtonText} type={ButtonTypes.button} onClick={() => swapFormType()}/>
                    <Button styleClassName={buttonStyles.submitAuthButton} text={textConstants.submitLoginButtonText} type={ButtonTypes.submit}/>
                </div>
            </form>
                :
                <form className={formStyles.form} onSubmit={register}>
                    <TextInput styleClassName={textInputStyles.authTextInput} inputStyleClassName={textInputStyles.input} placeholder={textConstants.loginField} inputId={textConstants.loginField} type={InputTypes.email} invalid={emailInvalid} invalidMessage={fieldsStatus.emailInvalidMessage}/>
                    <TextInput styleClassName={textInputStyles.authTextInput} inputStyleClassName={textInputStyles.input} placeholder={textConstants.passwordField} inputId={textConstants.passwordField} type={InputTypes.password} invalid={passwordInvalid} invalidMessage={fieldsStatus.passwordInvalidMessage}/>
                    <TextInput styleClassName={textInputStyles.authTextInput} inputStyleClassName={textInputStyles.input} placeholder={textConstants.confirmPasswordField} inputId={textConstants.passwordField} type={InputTypes.password} invalid={confirmPasswordInvalid} invalidMessage={fieldsStatus.confirmPasswordInvalidMessage}/>
                    <div className={formStyles.buttons}>
                        <Button styleClassName={buttonStyles.swapAuthButton} text={textConstants.swapRegisterFormButtonText} type={ButtonTypes.button} onClick={() => swapFormType()}/>
                        <Button styleClassName={buttonStyles.submitAuthButton} text={textConstants.submitRegisterButton} type={ButtonTypes.submit}/>
                    </div>
                </form>
                }
        </div>
    );
};

export default AuthForm;
