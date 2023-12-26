import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import Header from "@/components/header.jsx";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="body">
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
