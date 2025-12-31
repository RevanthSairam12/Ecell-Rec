import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function UpstoxPage() {
    return (
        <div>
            <AppNavbar />
            <PageHero
                title="Upstox"
                highlight="WorkShop"
                description="Empowering students today to lead industries tomorrow. At E-Cell REC, we are committed to nurturing a culture of innovation and entrepreneurship."
                useWhiteBackground={true}
            />
            <Footer />
        </div>
    );
}