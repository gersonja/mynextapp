import Link from "next/link";

export default function Navegacion() {
  return (
	<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <Link href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <p>Menú</p>
     </Link>
     <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <Link href="#" className="mr-5">Primer Link</Link>
       <Link href="#" className="mr-5">Segundo Link</Link>
       <Link href="#" className="mr-5">Tercer Link</Link>
       <Link href="#" className="mr-5">Cuarto Link</Link>
     </div>
     <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4">Click</button>
</div>
  )
}
