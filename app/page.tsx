import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import CardView from "./components/CardView";

function App() {
  return (
    <div className="bg-[#f6ede1] min-h-screen font-poppins gap-10 py-6 flex px-20">
      <div className="bg-white w-[90%] max-w-[70%] mx-auto rounded-2xl shadow-md">
        <Header />
        <div className="px-20">
          <HeroSection />
        </div>
      </div>
      <div className="max-w-[30%] mx-auto">
        <CardView />
      </div>
    </div>
  );
}

export default App;
