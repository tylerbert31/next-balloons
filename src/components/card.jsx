export default function Card({ product }) {
  const { title, price, description, image, category, rating } = product;
  return (
    <>
      <div className="card card-compact w-64 bg-base-100 shadow-xl max-h-[400px] h-[400px] transform transition-transform hover:-translate-y-2">
        <figure className="object-contain h-[226px] max-h-[226px] m-2">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title truncate">{title}</h2>
          <div className="badge badge-secondary">₱{price}</div>
          <p className="truncate">{description}</p>
          <div className="card-actions justify-end">
            <div className="btn btn-primary btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>{" "}
              BUY
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
