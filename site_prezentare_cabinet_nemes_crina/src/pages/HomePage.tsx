import { AboutSection } from '../components/AboutSection'
import { Hero } from '../components/Hero'
import { ServicesSection } from '../components/ServicesSection'
import { TehniquesSection } from '../components/TehniquesSection'
import img3 from '../images/img3.jpeg'
    

export default function HomePage() {
    return (
        <div className="space-y-20 md:space-y-20">
            <Hero imageUrl={img3} />
            <AboutSection />
            <ServicesSection />
            <TehniquesSection />
        </div>
    )
}
