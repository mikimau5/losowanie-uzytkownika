import React from "react";
import "./Style.css";

const ButtonFetchUsers = props => {
  return (
    <button href="#" onClick={props.click}>
      {" "}
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUsers;
