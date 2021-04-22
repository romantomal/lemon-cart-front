import React, {ButtonHTMLAttributes} from 'react';
import {ButtonTypes} from "../../core/enums/HtmlElementsEnums";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    styleClassName: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: ButtonTypes;
    image?: string;
    icon?: string;
}

const Button: React.FC<ButtonProps> = ({styleClassName, type = ButtonTypes.button, text, onClick}) => {
    return (
        <button className={styleClassName} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;
