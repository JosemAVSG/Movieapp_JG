import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex  bg-transparent py-6 mx-6 justify-between">
      <h1 className="text-white font-semibold m-4 text-2xl">Pelisflow</h1>
      <ul className="flex text-xl space-x-4 m-4">
        <li>
          <Link className="text-white hover:text-gray-300" href={"/"}>
            Inicio
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" href={"/peliculas"}>
            Peliculas
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" href={"/genero"}>
            Genero
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" href={"/series"}>
            Series
          </Link>
        </li>
      </ul>
      <input className='w-1/4 rounded-full self-center p-2 pl-5 h-10 bg-gray-100 focus:outline-none focus:shadow-md' type='search' placeholder='Busqueda'></input>
    </nav>
  );
}
