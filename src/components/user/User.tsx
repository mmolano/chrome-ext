import React from "react";
import {Profile} from "../../models/profile";

interface IProps extends Profile {
}

const User: React.FunctionComponent<IProps> = props => {
  const {fullName, title, country, imageUrl, cardList} = props;
  return (
    <div>
      <div>{fullName}</div>
      <div>{title}</div>
      <div>{country}</div>
      <img src={imageUrl} alt="profileImage"/>
      <div>{cardList}</div>
    </div>
  );
};

export default User;
