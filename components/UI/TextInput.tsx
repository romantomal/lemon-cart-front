import React, {InputHTMLAttributes, useRef} from 'react';
import {useInput} from "../../core/hooks/useInput";

interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
    styleClassName: string;
    inputStyleClassName: string;
    inputId: string;
    label?: string;
}

const TextInput: React.FC<InputProps> = ({styleClassName, inputStyleClassName, label = '', inputId}) => {
    const ref = useRef<HTMLInputElement>()
    const inputValue = useInput('')

    return (
        <label className={styleClassName} htmlFor={inputId}>
            {label.length > 0 ? `${label}:` : null}
            <input className={inputStyleClassName} type="text" ref={ref} onChange={inputValue.onChange} id={inputId}/>
        </label>
    );
};

export default TextInput;
