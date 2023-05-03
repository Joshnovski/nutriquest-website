import React, { useEffect, useState } from "react";
import nutriquestLogo from "../../../assets/nutriquestLogo.png";
import user from "../../../assets/userGrey.png";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { BsCalculatorFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { GiWeightLiftingUp } from "react-icons/gi";
import userGrey from "../../../assets/userGrey.png";
import { useNavigate } from "react-router-dom";
import ProfilePopup from "../ProfilePopup";
import "./index.scss";

export default function Topbar() {
  const [popupVisible, setPopupVisible] = useState(false);
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const openUser = (user) => {
    navigate("/profile", {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };

  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}
      <img
        className="nutriquest-Logo"
        src={nutriquestLogo}
        alt="nutriquestLogo"
      />
      <div className="react-icons">
        {/* Wrap all icons in the same div so we can arrange them */}
        <GoSearch size={23} className="react-icon" />
        <AiFillHome
          size={26}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <FaUser
          size={23}
          className="react-icon"
          onClick={() => goToRoute("/profile")}
        />
        <BsCalculatorFill size={26} className="react-icon" />
        <IoMdQrScanner size={30} className="react-icon" />
        <GiWeightLiftingUp size={28} className="react-icon" />
      </div>
      <img
        className="userGrey"
        src={userGrey}
        alt="userGrey"
        onClick={displayPopup}
      />
    </div>
  );
}
