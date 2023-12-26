import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Product() {
  return (
    <>
      <Header />
      <div className="body flex flex-wrap gap-7 justify-center py-10 bg-gray-50 flex-grow">
        <div className="card card-compact w-64 bg-base-100 shadow-xl max-h-[400px] h-[400px]">
          <figure className="object-contain max-h-[226px] m-2">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex-grow"></div>
            <h2 className="card-title truncate">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h2>
            <div className="badge badge-secondary">₱109.95</div>
            <p className="truncate">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
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
      </div>

      <Footer />
    </>
  );
}
