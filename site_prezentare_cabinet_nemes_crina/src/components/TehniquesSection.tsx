import { Section } from "./Section";

export function TehniquesSection() {
    return (
        <Section id="tehnici">
            <h2 className="text-2xl font-bold text-stone-800 text-center">Tehnici</h2>
            <details className="mt-3 rounded-xl border border-amber-200 bg-amber-50/50 p-4">
                <summary className="cursor-pointer text-base font-semibold text-amber-900">
                    Consiliere cognitiv-comportamentală
                </summary>
                <div className="mt-3 space-y-3 text-stone-700">
                    <p>
                        Consilierea Cognitiv-Comportamentală este o formă de terapie axată pe schimbarea gândurilor
                        și comportamentelor negative sau ineficiente pentru îmbunătățirea stării emoționale și
                        comportamentale a unei persoane.
                    </p>
                    <p>
                        Acest tip de terapie se bazează pe ideea că gândurile, sentimentele și comportamentele sunt
                        interconectate și că schimbarea gândurilor disfuncționale poate duce la schimbări pozitive în
                        comportament și din punct de vedere emoțional.
                    </p>
                </div>
            </details>
        </Section>
    )
}