import Image from "next/image";
import Navbar from "./navbar/navbar";
import SignupForm from "./form/inputform";
import Footer from "./footer/footer";
import FormField from "./form/formfixed";
import HeroPage from "./hero/heropage";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <section>
        <div className="outline rounded-md flex flex-col h-full max-w-[980px] items-center justify-center mx-auto">
          <SignupForm />
        </div>
      </section> */}
      <HeroPage />
      {/* <InputForm /> */}
      {/* <FormField /> */}
      <Footer />
    </div>
  );
}
