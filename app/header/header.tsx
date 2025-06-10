
export default function Header() {
   return (
        <section className="flex items-center justify-between p-4 bg-blue-600 text-white mx-auto">
            <div>
              <button className="btn btn-primary p-4">
                <img src="/public/unifamec-logo.webp" alt="Logo" className="h-16 w-auto" />
              </button>
  
            </div>
            <div className="flex items-center justify-between">
              <button className="text-lg font-semibold text-color-white p-4 hover:bg-sky-700">Home</button>
              <button className="text-lg font-semibold text-color-white p-4 hover:bg-sky-700">Sobre</button>
              <button className="text-lg font-semibold text-color-white p-4 hover:bg-sky-700">Palestrantes</button>
              <button className="text-lg font-semibold text-color-white p-4 hover:bg-sky-700">FAQ</button>
              <button className="btn p-4 hover:bg-sky-700 border-4 bg-blue-900 shadow-lg shadow-cyan-500/50 rounded-none">Login</button>
              <button className="btn p-4 hover:bg-sky-700 border-4 bg-blue-900 shadow-lg shadow-cyan-500/50 rounded-none">Passaporte</button>
            </div>
        </section>
   );
}