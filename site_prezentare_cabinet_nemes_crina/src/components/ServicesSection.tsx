const services = [
    'Evaluare psihologică',
    'Consiliere',
    'Dezvoltare personală',
    'Dezvoltarea abilităților de comunicare',
    'Rezolvarea problemelor de comunicare în cuplu',
    'Managementul stresului',
    'Orientare în carieră',
    'Gestionarea timpului',
]

export function ServicesSection() {
    return (
        <section id="servicii" className="bg-transparent shadow-none">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                    Servicii
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-800 md:text-4xl">
                    Cum te pot sprijini
                </h2>

                <p className="mt-4 text-base leading-7 text-stone-700 md:text-lg">
                    Servicii pentru adulți, adaptate nevoilor personale, relaționale și profesionale.
                </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service}
                        className="rounded-2xl bg-white/75 p-5 text-center shadow-sm ring-1 ring-stone-200/70 transition hover:-translate-y-1 hover:shadow-md"
                    >
                        <p className="text-sm font-semibold leading-6 text-stone-800">
                            {service}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
