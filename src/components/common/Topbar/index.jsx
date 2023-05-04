import React, { useEffect, useState } from "react";
import nutriquestLogo from "../../../assets/nutriquestLogo.png";
import userGrey from "../../../assets/userGrey.png";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { BsCalculatorFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import ProfilePopup from "../ProfilePopup";
import "./index.scss";

export default function Topbar({ currentUser }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const openUser = (userGrey) => {
    navigate("/profile", {
      state: {
        id: userGrey.id,
        email: userGrey.email,
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

      {searchInput.length === 0 ? (
        <></>
      ) : (
        <div className="search-results">
          {filteredUsers.length === 0 ? (
            <div className="search-inner">No Results Found..</div>
          ) : (
            filteredUsers.map((userGrey) => (
              <div className="search-inner" onClick={() => openUser(userGrey)}>
                <img src={userGrey.imageLink} />
                <p className="name">{userGrey.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
