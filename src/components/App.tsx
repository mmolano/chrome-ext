import React, {useEffect, useState} from "react";
import "./App.scss";

const App: React.FunctionComponent<{}> = () => {
  const [fullName, setFullName] = useState("Yes");
  const [title, setTitle] = useState("Dev");
  const [country, setCountry] = useState("France");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (chrome && chrome.tabs) {
      chrome.tabs.query({currentWindow: true, active: true}, tabs => {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id || 0, {from: "popup", subject: "getFullName"}, response => {
          setFullName(response.fullDisplayName);
          setTitle(response.title);
          setCountry(response.country);
          setImageUrl(response.imageUrl);
        })
      })
    }
  })

  return (
    <div className="app">
      <div>{fullName}</div>
      <div>{title}</div>
      <div>{country}</div>
      <img src={imageUrl} alt="profileImage"/>
    </div>
  );
}


export default App;
