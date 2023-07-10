import { useAuthStore } from "../../hooks/useAuthStore";

export const Home = () => {
  const { startLogout, user } = useAuthStore();

  const cardStyle = {
    width: "18rem",
  };

  return (
    <div className="card mx-3 my-4" style={cardStyle}>
      <img className="card-img-top" src="..." alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>
    </div>
  );
};
