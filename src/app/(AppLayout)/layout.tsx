import React from 'react'
import { Footer, Header } from '@/components';

const AppLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default AppLayout