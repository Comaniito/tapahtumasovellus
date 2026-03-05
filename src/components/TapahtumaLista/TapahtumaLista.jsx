import Tapahtuma from "../Tapahtuma/Tapahtuma";
import "./TapahtumaLista.css";

function TapahtumaLista({ tapahtumat, poistaTapahtuma }) {
  if (tapahtumat.length === 0) {
    return <p>Ei tapahtumia.</p>;
  }

  return (
    <div>
      {tapahtumat.map((t) => (
        <Tapahtuma key={t.id} tapahtuma={t} poistaTapahtuma={poistaTapahtuma} />
      ))}
    </div>
  );
}

export default TapahtumaLista;