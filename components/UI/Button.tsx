import React, {ButtonHTMLAttributes} from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    styleClassName: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'reset' | 'submit';
    image?: string;
    icon?: string;
}

const Button: React.FC<ButtonProps> = ({styleClassName, type = 'button', text, onClick}) => {
    return (
        <button className={styleClassName} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;
