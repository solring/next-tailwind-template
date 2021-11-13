import React from 'react'
import Header from '../components/Header'

export default function Layout({children}) {
    return (
        <div className="flex flex-col md:flex-row md:h-screen md:overflow-scroll items-stretch">
            <div className="md:h-screen w-full md:w-3/12 lx:w-2/12">
                <Header />
            </div>
            <div className="md:w-9/12 lx:w-10/12">
                {children}
            </div>
        </div>
    )
}
