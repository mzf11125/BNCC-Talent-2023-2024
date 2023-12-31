import Image from "next/image";
import { FaCode } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      <Image src="/image/logoipsum.svg" width={200} height={200} alt="logo" />
      {/* <FaCode width={100} height={100} alt="logo" /> */}
    </div>
  );
};

export default Logo;
