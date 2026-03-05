import { useState } from "react";
import "./App.css";

import TapahtumaLomake from "./components/TapahtumaLomake/TapahtumaLomake";
import TapahtumaLista from "./components/TapahtumaLista/TapahtumaLista";
import Haku from "./components/Haku/Haku";

function App() {
  const [tapahtumat, setTapahtumat] = useState([]);
  const [hakusana, setHakusana] = useState("");

  // Lisää uusi tapahtuma
  const lisaaTapahtuma = (uusi) => {
    // Lisää uniikki id jokaiselle tapahtumalle
    uusi.id = Date.now();
    setTapahtumat([...tapahtumat, uusi]);
  };

  // Poista tapahtuma id:n perusteella
  const poistaTapahtuma = (id) => {
    setTapahtumat(tapahtumat.filter((t) => t.id !== id));
  };

  // Suodatetaan tapahtumat hakusanan perusteella
  const naytettavat = tapahtumat.filter((t) =>
    t.nimi.toLowerCase().includes(hakusana.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Tapahtumasovellus</h1>

      <TapahtumaLomake lisaaTapahtuma={lisaaTapahtuma} />

      <Haku hakusana={hakusana} setHakusana={setHakusana} />

      <TapahtumaLista tapahtumat={naytettavat} poistaTapahtuma={poistaTapahtuma} />
    </div>
  );
}

export default App;