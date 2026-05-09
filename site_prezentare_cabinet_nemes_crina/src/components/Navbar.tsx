import { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo_cabinet_ndc.png'

const homeSections = [
    { id: 'despre', label: 'Despre' },
    { id: 'servicii', label: 'Servicii' },
    { id: 'tehnici', label: 'Tehnici' },
    { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const handleEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setIsOpen(true)
    }

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 150)
    }

    const navClassName = ({ isActive }: { isActive: boolean }) =>
        [
            'rounded-full px-4 py-2 text-sm font-semibold transition',
            isActive
                ? 'bg-amber-200 text-amber-900'
                : 'text-stone-700 hover:bg-amber-100 hover:text-amber-900',
        ].join(' ')

    return (
        <header className="sticky top-0 z-20 border-b border-amber-200/70 bg-white/85 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
                <Link to="/" className="group flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Logo Cabinet Nemeș-Dressel Crina-Maria"
                        className="h-11 w-11 rounded-2xl object-cover shadow-sm ring-1 ring-amber-200/60 transition group-hover:scale-105"
                    />

                    <div className="leading-tight">
                        <p className="hidden text-base font-black tracking-tight text-stone-800 md:text-lg sm:block">
                            Cabinet Nemeș-Dressel Crina-Maria
                        </p>
                        <p className="hidden text-xs font-medium text-stone-500 sm:block">
                            Psihologie & consiliere
                        </p>
                    </div>
                </Link>

                <nav className="flex items-center gap-1">
                    <div
                        className="relative"
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                    >
                        <Link
                            to="/"
                            className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-amber-100 hover:text-amber-900"
                        >
                            Acasa
                        </Link>

                        {isOpen && (
                            <div className="absolute right-0 top-11 w-48 rounded-xl border border-amber-200 bg-white p-2 shadow-lg">
                                {homeSections.map((section) => (
                                    <Link
                                        key={section.id}
                                        to={{ pathname: '/', hash: `#${section.id}` }}
                                        className="block rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-amber-50 hover:text-amber-900"
                                        onClick={() => {
                                            const targetHash = `#${section.id}`
                                            if (window.location.pathname === '/' && window.location.hash === targetHash) {
                                                window.dispatchEvent(
                                                    new CustomEvent('force-hash-scroll', {
                                                        detail: { hash: targetHash },
                                                    }),
                                                )
                                            }

                                            setIsOpen(false)
                                        }}
                                    >
                                        {section.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink to="/blog" className={navClassName}>
                        Blog
                    </NavLink>
                    <NavLink to="/evenimente" className={navClassName}>
                        Evenimente
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}