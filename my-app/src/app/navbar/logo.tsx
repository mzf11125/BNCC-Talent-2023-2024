import Image from "next/image";
import { FaCode } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      {/* <Image src="/image/logoipsum.svg" width={200} height={200} alt="logo" /> */}
      <Image
        src="/image/0f303aa5-7488-42a7-a831-29e1c22d2b6c.svg"
        width={150}
        height={100}
        alt="logo"
      />
      {/* <FaCode width={100} height={100} alt="logo" /> */}
    </div>
  );
};

export default Logo;
