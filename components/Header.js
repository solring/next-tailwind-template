import React from 'react'
import Icon from './Icon'

export default function Header() {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-green-300 
            px-8 pb-24 md:px-12
            md:h-full
            md:text-left
            flex flex-col items-center justify-center
            rounded-b-xl md:rounded-none md:rounded-r-xl">
            <h1 className="text-white text-5xl md:text-4xl">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <p className="text-green-300 pt-3">
                Get started by editing <code>pages/index.js</code>
            </p>

            <Icon 
                name="keyboard_double_arrow_down"
                className="text-white text-4xl md:hidden pt-24 animate-bounce"/>
        </div>
    )
}
