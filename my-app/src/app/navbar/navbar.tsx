import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

const navbar = () => {
  return (
    <div
      className="
    flex
    justify-between
    items-center px-10  h-20
    bg-gray-900
    text-white
    "
    >
      <NavigationMenuBar />
      <div className="flex justify-center items-center mr-80">
        {" "}
        <Logo />
      </div>
      <ActionButtons />
    </div>
  );
};

export default navbar;
