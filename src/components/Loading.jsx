export const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="spinner-border text-secondary spinner-border-xl mt-5" style={{width: "10rem", height: "10rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
