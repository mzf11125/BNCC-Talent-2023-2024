import Image from "next/image";
import Navbar from "./navbar/navbar";
import { InputForm } from "./form/inputform";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <InputForm />
      <Footer />
    </div>
  );
}
