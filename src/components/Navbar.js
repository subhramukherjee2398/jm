import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();

  useEffect(() => {
    const Handlescreen = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", Handlescreen);
    Handlescreen();

    return () => window.removeEventListener("resize", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(screenSize);
    if (screenSize < 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  const handletoogle = () => {
    setActiveMenu(!activeMenu);
  };

  const Navbutton = ({ title, customFunc, color, icon, dotColor }) => {
    return (
      <TooltipComponent content={title} position="BottomCenter">
        <button
          type="button"
          onClick={() => customFunc()}
          style={{ color }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
          <span
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            style={{ background: dotColor }}
          />
          {icon}
        </button>
      </TooltipComponent>
    );
  };
  return (
    <div className="flex justify-between p-2  md:ml-6 md:mr-6 relative">
      <Navbutton
        title="Menus"
        customFunc={handletoogle}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <Navbutton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          dotColor="rgb(254, 201, 15)"
          icon={<BsChatLeft />}
        />
        <Navbutton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        />
        <Navbutton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
