import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from '@/utils/cn';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    color?: 'white'
}

const Button = React.forwardRef<HTMLButtonElement, Props>(({
    className,
    children,
    color,
    ...rest
}, ref) => {
    return (
        <button
            ref={ref}
            className={cn('btn', color === 'white' ? 'btn_white bg-white' : '', className)}
            {...rest}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button';

export default Button