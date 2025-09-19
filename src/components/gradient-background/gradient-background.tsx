import cn from '@/utils/cn';
import React, { HTMLAttributes } from 'react'

const GradientBackground = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
    className,
    style,
    ...rest
}, ref) => {
    return (
        <div ref={ref} className={cn('cta_bg_area', className)} style={{ borderRadius: '0px', height: '42px', ...style }} {...rest} />
    )
})

GradientBackground.displayName = 'GradientBackground';

export default GradientBackground;
