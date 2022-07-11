import React, { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Traduction({ reference }) {
  const { traductions, lang } = useContext(GlobalContext);
  return (
    <div>
      {traductions[reference]
        ? traductions[reference][lang]
        : "Chargement en cours..."}
    </div>
  );
}
