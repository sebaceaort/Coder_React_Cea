import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <div className="col-md-4 my-3">
        <div className="card border border-0">
          <Link
            to={"/item/" + producto.id}
            className="text-dark text-decoration-none"
          >
            <img
              src={producto.imagen}
              style={{ maxHeight: "250px" }}
              className="card-img-top img-fluid w-75 justify-self-center"
              alt={producto.descripcion}
            />
            <div className="card-body">
              <h3>{producto.descripcion}</h3>
              <p className="card-text">
                <span className="text-secondary">{producto.descripcion}</span>
                <br />
                <b>${producto.precio}</b>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
