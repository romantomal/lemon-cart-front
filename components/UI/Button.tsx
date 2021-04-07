import React from 'react';

interface ButtonProps {
    styleClassName: string;
    text: string,
    image?: string,
    icon?: string
}

const Button: React.FC<ButtonProps> = ({styleClassName, text}) => {
    return (
        <button className={styleClassName}>
            {text}
        </button>
    );
};

export default Button;
