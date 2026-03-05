import { useState } from "react";
import "./TapahtumaLomake.css";

function TapahtumaLomake({ lisaaTapahtuma }) {
  const [nimi, setNimi] = useState("");
  const [paiva, setPaiva] = useState("");
  const [paikka, setPaikka] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nimi || !paiva || !paikka) return;

    const uusi = { nimi, paiva, paikka };
    lisaaTapahtuma(uusi);

    setNimi("");
    setPaiva("");
    setPaikka("");
  };

  return (
    <form onSubmit={handleSubmit} className="lomake">
      <input
        type="text"
        placeholder="Tapahtuman nimi"
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
      />
      <input
        type="date"
        value={paiva}
        onChange={(e) => setPaiva(e.target.value)}
      />
      <input
        type="text"
        placeholder="Paikka"
        value={paikka}
        onChange={(e) => setPaikka(e.target.value)}
      />
      <button type="submit">Lisää</button>
    </form>
  );
}

export default TapahtumaLomake;