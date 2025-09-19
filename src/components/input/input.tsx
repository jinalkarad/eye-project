import React, { InputHTMLAttributes, ReactNode } from 'react';
import cn from '@/utils/cn';
import styles from './input.module.scss';
import { SizeType } from '@/types/types';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
    inputSize?: SizeType;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, Props>(({
    fullWidth,
    className,
    inputSize = 'medium',
    leftIcon,
    rightIcon,
    ...rest
}, ref) => {
    return (
        <div className={cn(styles['input-root'], fullWidth ? styles['fullWidth'] : '')}>
            <div className={cn(styles['input-container'])}>
                <input
                    ref={ref}
                    className={cn(className, styles[inputSize], leftIcon ? 'leftIcon' : '', rightIcon ? 'rightIcon' : '')}
                    {...rest}
                />
                <div className={styles.rightIcon}>{rightIcon}</div>
                <div className={styles.leftIcon}>{leftIcon}</div>
            </div>
        </div>
    )
});

Input.displayName = 'Input';

export default Input