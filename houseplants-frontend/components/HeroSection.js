import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-screen lg:h-[600px] sm:h-[400px] flex items-center justify-center text-center bg-green-800 text-white">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-plant.jpg"
          alt="Green plants"
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 p-6 w-full flex flex-col items-center">
        <h1 className="text-green-900 text-4xl font-bold md:text-7xl leading-tight">
          Discover the Beauty of Nature
        </h1>
        <p className="mt-4 text-lg md:text-3xl">
          Shop the best indoor and outdoor plants for your home.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/shop">
            <button className="bg-white text-green-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-100 transition">
              Shop Now
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-800 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
