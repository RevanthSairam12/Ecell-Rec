import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function HackVersePage() {
    return (
        <div>
            <AppNavbar />
            <PageHero
                title="HackVerse"
                highlight="Hackathon 1.0"
                description="Empowering students today to lead industries tomorrow. At E-Cell REC, we are committed to nurturing a culture of innovation and entrepreneurship."
                useWhiteBackground={true}
            />
            <Footer />
        </div>
    );
}