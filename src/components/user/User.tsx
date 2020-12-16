import React from "react";
import {Profile} from "../../models/profile";

interface IProps extends Profile {
}

const User: React.FunctionComponent<IProps> = props => {
  const {fullName, title, country, imageUrl, cardList} = props;
  return (
    <div>
      <img className={'ts'} src={imageUrl} alt="profileImage"/>
      <h1>{fullName}</h1>
      <div>{title}</div>
      <div>{country}</div>
      <div>{cardList}</div>
    </div>
  );
};

export default User;
