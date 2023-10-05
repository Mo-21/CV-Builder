import "../styles/App.css";
import { useState } from "react";
import CreateInputs from "./Inputs";

export default function EditPreviewPanel() {
  const [currentPersonalInfo, setPersonalInfo] = useState({
    name: "",
    profession: "",
    summary: "",
  });

  const handlePersonalInfo = () => {};

  return (
    <>
      <input
        type="text"
        value={currentPersonalInfo}
        onChange={(event) => setPersonalInfo(event.target.value)}
      />
    </>
  );
}
