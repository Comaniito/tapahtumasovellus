import "./Haku.css";

function Haku({ hakusana, setHakusana }) {
  return (
    <div className="haku">
      <input
        type="text"
        placeholder="Hae tapahtumaa..."
        value={hakusana}
        onChange={(e) => setHakusana(e.target.value)}
      />
    </div>
  );
}

export default Haku;