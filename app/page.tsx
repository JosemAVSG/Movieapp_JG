import Image from "next/image";
export default function Home() {
  return (
    <main className="flex h-screen  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#091263_100%)]">
      <section className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center hero">
          <h1 className="text-white text-4xl font-bold tracking-wide">
            Bienvenido a PelisFlow
          </h1>
          <p className="text-white text-lg tracking-wide">
            Encuentra tu proxima pelicula favorita
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2 gap-6 mt-10">
          <div className="card">
            <h2>Card 1</h2>
            <Image
              src="/images/card1.jpg"
              alt="Card 1"
              width={300}
              height={300}
            />
          </div>
          <div className="card">
            <h2>Card 2</h2>
            <Image
              src="/images/card2.jpg"
              alt="Card 2"
              width={300}
              height={300}
            />
          </div>
          <div className="card">
            <h2>Card 3</h2>
            <Image
              src="/images/card3.jpg"
              alt="Card 3"
              width={300}
              height={300}
            />
          </div>
          <div className="card">
            <h2>Card 4</h2>
            <Image
              src="/images/card4.jpg"
              alt="Card 4"
              width={300}
              height={300}
            />
          </div>

        </div>
      </section>
    </main>
  );
}
