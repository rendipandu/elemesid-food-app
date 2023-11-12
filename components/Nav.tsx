"use client"

import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/constants";

const Nav = () => {

    return (
        <nav className="navbar">
            <Link href="/" className="navbar_logo">
                <Image
                    src="/assets/images/logo.svg"
                    alt='ElemesID Logo'
                    width={150}
                    height={36}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    className='object-contain'
                />
            </Link>

            {/* Desktop Navigation */}
            <ul className='list-none hidden sm:max-lg:hidden sm:flex flex-row gap-10'>
                {navLinks.map((link) => (
                    <li key={link.id} className="cursor-pointer">
                        {link.id === "promotions" ? (
                            <p className="absolute py-1 px-3 bg-red-500 rounded-xl text-xs text-center text-white top-3 left-1/2 ">Hot</p>
                        ) : (
                            ""
                        )}
                        <p className="text-sm text-[#757575] font-medium cursor-pointer">{link.title}</p>
                    </li>
                ))}
            </ul>

            <div className="flex gap-4 items-center">
                <Link href="/" className="max-lg:hidden">Masuk</Link>
                <button
                    type="button"
                    onClick={() => { }}
                    className="navbar_button"
                >
                    Daftar Sekarang
                </button>
            </div>
        </nav>
    )
}

export default Nav;