import { ImageCarousel } from '../components/ImageCarousel'
import { Section } from '../components/Section'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'


export default function EventsPage() {
    return (
        <div className="space-y-6 md:space-y-8">
            <Section>
                <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight text-stone-800 md:text-5xl">
                    Activitate profesională și inițiative
                </h1>
                <p className="mt-3 text-base text-stone-700 md:max-w-3xl">
                    Conferințe la care am participat și evenimente organizate de cabinet.
                </p>
            </Section>

            <Section>
                <h2 className="text-2xl font-black text-stone-800">La care am participat</h2>

                <ol className="mt-5 space-y-4">
                    <li className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-amber-800">
                            27-29 Oct. 2023
                        </p>
                        <p className="mt-2 font-semibold text-stone-800">
                            Conferința Națională de Psycho-Oncologie, a treia ediție, Cluj-Napoca, România
                        </p>
                        <p className="mt-2 text-stone-700">
                            Art Therapia - parte a terapiei personalizate a cancerului.
                        </p>
                    </li>

                    <li className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-amber-800">
                            21-23 Oct. 2022
                        </p>
                        <p className="mt-2 font-semibold text-stone-800">
                            Conferința Națională de Psycho-Oncologie, a doua ediție, Cluj-Napoca, România
                        </p>
                        <p className="mt-2 text-stone-700">
                            Art Therapia în reducerea distresului emoțional la pacienții cu cancer.
                        </p>
                    </li>
                </ol>
            </Section>

            <ImageCarousel
                images={[
                    img1,
                    img2,
                    img3,
                ]}
            />
            <section className="rounded-2xl border border-dashed border-amber-300 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-black text-stone-800">Organizate de cabinet</h2>
                <p className="mt-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                    În curând!
                </p>
            </section>
        </div>
    )
}
