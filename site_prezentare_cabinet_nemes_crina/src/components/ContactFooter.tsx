export function ContactFooter() {
    return (
        <footer id="contact" className="scroll-mt-24 border-t border-amber-200 bg-amber-50/60">
            <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
                <h2 className="text-2xl font-black tracking-tight text-stone-800">Contact</h2>
                <div className="mt-3 space-y-1 text-stone-700">
                    <p>Cabinet individual de psihologie Nemes T. Crina-Maria</p>
                    <p>Programări la:</p>
                    <p>
                        Tel.:{' '}
                        <a className="font-semibold text-amber-800 hover:text-amber-900" href="tel:0722431306">
                            0722431306
                        </a>
                    </p>
                    <p>
                        Email:{' '}
                        <a
                            className="font-semibold text-amber-800 hover:text-amber-900"
                            href="mailto:nemescrinamaria_cabinet@yahoo.com"
                        >
                            nemescrinamaria_cabinet@yahoo.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}