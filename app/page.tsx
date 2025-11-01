import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";

function App() {
  return (
    <div className="bg-[#f6ede1] min-h-screen font-poppins py-10">
      <div className="bg-white w-[90%] max-w-[70%] mx-auto rounded-2xl shadow-md p-6">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
