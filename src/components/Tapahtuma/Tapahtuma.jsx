import "./Tapahtuma.css";

function Tapahtuma({ tapahtuma, poistaTapahtuma }) {
  return (
    <div className="tapahtuma">
      <h3>{tapahtuma.nimi}</h3>
      <p>{tapahtuma.paiva}</p>
      <p>{tapahtuma.paikka}</p>
      <button onClick={() => poistaTapahtuma(tapahtuma.id)}>Poista</button>
    </div>
  );
}

export default Tapahtuma;