import React from "react"
import { Link } from "gatsby"
import { AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-white px-5 m500:h-16">
            <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
                <Link className="text-3xl font-bold m500:text-xl" to={'/'}>
                    The Vault
                </Link>
                <a
                    target="_blank"
                    href="https://github.com/ekmas/neobrutalism-components"
                    className="flex items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                >
                    <AiFillGithub className="h-6 w-6 m500:h-4 m500:w-4" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar