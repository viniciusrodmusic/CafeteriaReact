import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-black w-full max-w-full min-h-28 px-4 py-6 flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-8'>

            <a href='https://www.linkedin.com/in/viniciusrodmusic/' className='max-w-full text-center text-sm text-stone-700 break-words'>
                2025 | developed by @viniciusrodmusic
            </a>

            <a href='https://github.com/viniciusrodmusic/CafeteriaReact' className='max-w-full text-center text-sm text-stone-700 break-words'>
               @ Coffee Time
            </a>

        </footer>
    )
}
