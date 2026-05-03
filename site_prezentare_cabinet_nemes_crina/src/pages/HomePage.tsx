import { AboutSection } from '../components/AboutSection'
import { Hero } from '../components/Hero'
import { ServicesSection } from '../components/ServicesSection'
import { TehniquesSection } from '../components/TehniquesSection'

export default function HomePage() {
    return (
        <div className="space-y-20 md:space-y-20">
            <Hero imageUrl="src/images/img3.jpeg" />
            <AboutSection />
            <ServicesSection />
            <TehniquesSection />
        </div>
    )
}
