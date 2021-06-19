import React, {InputHTMLAttributes, useRef} from 'react';
import {useInput} from "../../core/hooks/useInput";
import {InputTypes} from "../../core/enums/HtmlElementsEnums";
import errorStyle from "../../styles/elements/Error.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
    styleClassName: string;
    inputStyleClassName: string;
    inputId: string;
    type?: InputTypes;
    placeholder?: string;
    label?: string;
    invalid?: boolean;
    invalidMessage?: string;
}

const TextInput: React.FC<InputProps> = ({
                                             styleClassName, inputStyleClassName, label = '',
                                             inputId, placeholder = '', type = InputTypes.text,
                                             invalid = false, invalidMessage= ''
                                         }) => {
    const ref = useRef<HTMLInputElement>()
    const inputValue = useInput('')

    const error = () => {
        return invalid ? <span className={errorStyle.inputError}>{invalidMessage}</span> : null;
    }

    return (
        <>
            <label className={styleClassName} htmlFor={inputId}>
                {label.length > 0 ? `${label}:` : null}
                <input
                    className={inputStyleClassName}
                    type={type} ref={ref}
                    placeholder={placeholder}
                    onChange={inputValue.onChange}
                    id={inputId}/>
            </label>
            {error()}
        </>
    );
};

export default TextInput;
