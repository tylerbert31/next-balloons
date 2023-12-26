import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://specialyou.in/cdn/shop/files/81H441vCCPL._SL1500.jpg?v=1690027111&width=2048)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello!</h1>
            <p className="mb-5">
              Enter a world of celebration! Our hero crafts unforgettable
              moments, turning ordinary events into extraordinary experiences.
              Welcome to a realm where every moment is a cause for jubilation!
            </p>
            <Link href="/products" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
