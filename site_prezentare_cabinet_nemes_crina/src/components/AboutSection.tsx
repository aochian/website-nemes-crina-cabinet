import { Section } from "./Section";

export function AboutSection() {
    return (
        <Section id="despre">
            <h2 className="text-2xl font-bold text-stone-800 text-center">Despre</h2>
            <div className="mt-3 space-y-3 text-stone-700">
                <p>
                    Mă numesc Crina-Maria Nemeș-Dressel și sunt psiholog clinician și consilier cognitiv-comportamental,
                    atestat de Colegiul Psihologilor din România.
                </p>
                <p>
                    Am urmat cursurile Facultății de Psihologie și Științe ale Educației, în cadrul Universității
                    Babeș-Bolyai, Cluj-Napoca, cursuri pe care le-am finalizat în anul 2019.
                </p>
                <p>
                    În cadrul aceleiași universități, am urmat cursurile de master, respectiv programul de master:
                    Tehnici psihologice pentru controlul comportamentului și dezvoltarea potențialului uman, pe care
                    l-am terminat în 2021.
                </p>
                <p>
                    Sunt interesată de modul în care ne putem îmbunătăți calitatea vieții, prin schimbarea
                    paradigmelor de gândire care ne blochează, și cred în efectul miraculos al artei în viața
                    noastră. Cred că arta, ca terapie sau terapia prin artă, sunt două direcții demne de luat în
                    calcul și intenționez organizarea unor ateliere de artă ca terapie în viitorul apropiat.
                    Pentru detalii, te invit să urmărești pagina la capitolul Evenimente.
                </p>
                <p>
                    Motivația alegerii acestui parcurs profesional a fost întâlnirea cu domeniul oncologiei. Prin
                    urmare, ulterior încheierii programului de master am urmat, între 04.09 - 21.12.2021, cursul de
                    formare profesională continuă: Psihologie medicală aplicată în oncologie: Curs de specializare
                    în Psiho-Oncologie, Asociația pacienților cu boli cronice Restart la viață, iar între 02.03 -
                    03.03.2024, cursul de formare profesională continuă Metode psihoterapeutice și complementare de
                    combatere a cancerului (conform Metodei Simonton).
                </p>
            </div>
        </Section>
    )
}