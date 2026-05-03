import { Section } from '../components/Section'

export default function BlogPage() {
    return (
        <div className="space-y-6 md:space-y-8">
            <Section>
                <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight text-stone-800 md:text-5xl">
                    Ce este consilierea cognitiv-comportamentală?
                </h1>
                <p className="mt-3 text-base text-stone-700 md:max-w-3xl">
                    Cum se desfășoară și cui se adresează?
                </p>
            </Section>

            <Section>
                <h2 className="text-2xl font-black text-stone-800">A. Ce este consilierea cognitiv-comportamentală?</h2>
                <p className="mt-4 leading-relaxed text-stone-700">
                    Consilierea Cognitiv-Comportamentală se bazează pe ideea că gândurile, sentimentele și
                    comportamentele sunt interconectate și că schimbarea gândurilor disfuncționale poate duce la
                    schimbări pozitive în comportament și din punct de vedere emoțional.
                </p>
            </Section>

            <Section>
                <h2 className="text-2xl font-black text-stone-800">1. Cum se face consilierea cognitiv-comportamentală?</h2>
                <p className="mt-4 text-stone-700">Consilierea Cognitiv-Comportamentală implică mai multe etape și tehnici specifice:</p>

                <ul className="mt-4 grid gap-2 text-stone-700 md:grid-cols-2">
                    <li className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">Evaluarea inițială</li>
                    <li className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">Stabilirea obiectivelor</li>
                    <li className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">Identificarea gândurilor negative</li>
                    <li className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">Schimbarea gândurilor negative</li>
                    <li className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">Experimentarea comportamentală</li>
                    <li className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">Monitorizarea progresului</li>
                </ul>

                <div className="mt-5 space-y-4 leading-relaxed text-stone-700">
                    <p>
                        În etapa de evaluare inițială se discută despre problemele actuale ale clientului și
                        obiectivele terapiei.
                    </p>
                    <p>
                        În etapa de stabilire a obiectivelor, clientul și terapeutul stabilesc împreună obiective
                        concrete și realiste pentru terapie.
                    </p>
                    <p>
                        Ulterior, are loc identificarea gândurilor negative. Este momentul în care clientul este
                        ajutat să identifice gândurile negative și disfuncționale care duc la problemele sale
                        comportamentale și emoționale.
                    </p>
                    <p>
                        În urma identificării gândurilor disfuncționale, clientul este învățat, de către terapeut, o
                        serie de tehnici pentru a contesta și modifica gândurile negative. Aceste tehnici pot să
                        includă restructurarea cognitivă, învățarea de noi abilități de coping (strategiile de coping
                        sunt răspunsurile de natură cognitivă, afectivă și/sau comportamentală pe care le poate avea o
                        persoană, în momentul în care se confruntă cu situații solicitante) și exerciții de mindfulness
                        (mindfulness este o practică ce se referă la a trăi conștient în momentul de față, fără a trăi
                        ancorat în trecut sau în viitor).
                    </p>
                    <p>
                        Cât privește etapa de experimentare comportamentală, clientul este încurajat să testeze noi
                        comportamente.
                    </p>
                    <p>
                        Periodic, se evaluează progresul clientului, în scopul asigurării unei intervenții eficiente.
                    </p>
                </div>
            </Section>

            <Section>
                <h2 className="text-2xl font-black text-stone-800">2. Cui se adresează?</h2>

                <div className="mt-4 space-y-4 leading-relaxed text-stone-700">
                    <p>
                        Consilierea Cognitiv-Comportamentală este eficientă pentru o gamă largă de probleme emoționale
                        și comportamentale.
                    </p>
                    <p>
                        Pot apela la consilierea cognitiv-comportamentală toți cei interesați de aspecte precum
                        optimizarea abilităților și a eficienței personale în situații stresante, precum admiterea la
                        facultate, schimbarea locului de muncă, revenirea la lucru după încheierea concediului de
                        maternitate, confruntarea cu prea multe sarcini la serviciu sau acasă, precum și cei care se
                        lovesc de probleme în gestionarea timpului și a propriilor reacții în situații stresante.
                    </p>
                    <p>
                        De asemenea, pot apela și cei care doresc să-și dezvolte abilitățile de comunicare, de
                        gestionare a timpului ori au nevoie de ajutor în orientarea în carieră, dar și cei care amână
                        să pună în practică ceea ce își doresc și aleg să procrastineze.
                    </p>
                    <p>
                        Consilierea Cognitiv-Comportamentală este potrivită și în cazul celor care se confruntă cu
                        dificultăți în gestionarea stresului și furiei, prin învățarea de tehnici menite să fie un
                        ajutor în gestionarea acestor situații într-un mod eficient.
                    </p>
                    <p>
                        În același timp, este o terapie eficientă pentru abordarea și rezolvarea problemelor în cuplu
                        și în cazul problemelor de comunicare în relațiile de zi cu zi.
                    </p>
                    <p>
                        Consilierea Cognitiv-Comportamentală se adresează tuturor acelora care se confruntă cu diverse
                        stări anxioase, depresive, asociate cu diverse situații de viață, dar și în cazul tulburărilor
                        de alimentație. Poate ajuta persoanele să își schimbe gândurile negative și să dezvolte
                        comportamente mai pozitive care pot îmbunătăți starea de spirit și poate fi utilizată pentru a
                        aborda gândurile și comportamentele legate de alimentație și imaginea corporală.
                    </p>
                    <p>
                        Consilierea Cognitiv-Comportamentală ajută clienții să își îmbunătățească calitatea vieții, prin
                        identificarea și modificarea gândurilor și comportamentelor care nu sunt de ajutor, pentru a
                        avea o bună calitate a vieții.
                    </p>
                </div>
            </Section>
        </div>
    )
}
