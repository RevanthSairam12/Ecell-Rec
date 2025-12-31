import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function innv2StartupPage() {
    return (
        <div>
            <AppNavbar />
            <PageHero
                title="Innovation"
                highlight="to Startup"
                description="Empowering students today to lead industries tomorrow. At E-Cell REC, we are committed to nurturing a culture of innovation and entrepreneurship."
                useWhiteBackground={true}
            />
            <Footer />
        </div>
    );
}