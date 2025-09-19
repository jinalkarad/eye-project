import React, { HTMLAttributes, ReactNode } from 'react'
import Image from 'next/image';
import cn from '@/utils/cn';

import goggleBlackIcon from '@/assets/icons/goggle_black_icon.svg';
import goggleWhiteIcon from '@/assets/icons/goggle_icon.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
    primaryText?: ReactNode;
    description?: ReactNode;
    color?: "white" | "dark"
    children?: ReactNode;
    primaryTextClass?: string;
    secondaryTextClass?: string;
    alignment?: 'left' | 'center' | 'right'
}

const PrimaryHeader = React.forwardRef<HTMLDivElement, Props>(({
    primaryText,
    description,
    className,
    color = 'dark',
    children,
    alignment = 'center',
    primaryTextClass,
    secondaryTextClass,
    ...rest
}, ref) => {
    return (
        <div ref={ref} className={cn("container", className)} {...rest}>
            <div className={cn("d-flex headding_icon align-items-center mb_16", alignment === 'left' ? 'justify-content-xl-start justify-content-center' : alignment === 'center' ? 'justify-content-center' : 'justify-content-end')}>
                <div className={cn("divider_line", color)}></div>
                <Image className="mx_16" alt="goggle" src={color === 'dark' ? goggleBlackIcon : goggleWhiteIcon} width={50} height={18} />
                <div className={cn("divider_line", color)}></div>
            </div>
            {primaryText && (<h4 className={cn("fs_32 fw_800 mb_16 text-center size-24", primaryTextClass)}>{primaryText}</h4>)}
            {description && (<p className={cn("fs_20 text-center", secondaryTextClass)}>{description}</p>)}
            {children}
        </div>
    )
})

PrimaryHeader.displayName = 'PrimaryHeader';

export default PrimaryHeader