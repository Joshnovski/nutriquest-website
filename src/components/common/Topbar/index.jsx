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
import { getAllUsers } from "../../../api/FirestoreAPI";
import ProfilePopup from "../ProfilePopup";
import SearchUsers from "../SearchUsers";
import "./index.scss";

export default function Topbar() {
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

  const openUser = (user) => {
    navigate("/profile", {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };

  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredUsers(searched);
    } else {
      setFilteredUsers(users);
    }
  };

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 1000);

    return () => clearTimeout(debounced);
  }, [searchInput]);

  useEffect(() => {
    getAllUsers(setUsers);
  });

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
      {isSearch ? (
        <SearchUsers
          setIsSearch={setIsSearch}
          setSearchInput={setSearchInput}
        />
      ) : (
        <div className="react-icons">
          {/* Wrap all icons in the same div so we can arrange them */}
          <GoSearch
            size={23}
            className="react-icon"
            onClick={() => setIsSearch(true)}
          />
          <AiFillHome
            size={26}
            className="react-icon"
            onClick={() => goToRoute("/home")}
          />
          <FaUser
            size={23}
            className="react-icon"
            onClick={() => goToRoute("/connections")}
          />
          <BsCalculatorFill size={26} className="react-icon" />
          <IoMdQrScanner size={30} className="react-icon" />
          <GiWeightLiftingUp size={28} className="react-icon" />
        </div>
      )}
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
            <div className="search-inner">No Results...</div>
          ) : (
            filteredUsers.map((user) => (
              <div className="search-inner" onClick={() => openUser(user)}>
                <img src={user.imageLink} />
                <p className="name">{user.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
