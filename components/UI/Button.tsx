import React from 'react';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    styleClassName: string;
    text: string,
    image?: string,
    icon?: string
}

const Button: React.FC<ButtonProps> = ({styleClassName, text, onClick}) => {
    return (
        <button className={styleClassName} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
