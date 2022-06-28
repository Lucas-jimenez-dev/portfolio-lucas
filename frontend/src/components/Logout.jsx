function Logout({ handleClick }) {
  return (
    <div>
      <button type="button" onClick={() => handleClick()}>
        Déconnexion
      </button>
    </div>
  );
}

export default Logout;
