import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import cn from '@/utils/cn';
import arrowLeftBlackIcon from '@/assets/icons/arrow_left_black.svg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    to: string;
}

const BackButton = React.forwardRef<HTMLButtonElement, Props>(({
    className,
    children,
    to,
    ...rest
}, ref) => {
    return (
        <Link href={to} style={{ maxWidth: 'max-content' }}>
            <button
                ref={ref}
                className={cn('btn_back', className)}
                {...rest}
            >
                <Image alt="left" src={arrowLeftBlackIcon} />
                {children}
            </button>
        </Link>
    )
})

BackButton.displayName = 'BackButton';

export default BackButton