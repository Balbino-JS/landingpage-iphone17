// Declaração do componente funcional NavBar
// Esse componente representa a barra de navegação fixa no topo do site

function NavBar() {
    
  // O return define o JSX que será renderizado na tela
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
                <a href="#disign" className="hover:text-gray-300">Design</a>
                <a href="#camera" className="hover:text-gray-300">Camera</a>
                <a href="#performace" className="hover:text-gray-300">Perfomace</a>
                <a href="#colors" className="hover:text-gray-300">Colors</a>
                <button className="bg-blue-700 rounded-full hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer transition-all px-10 py-2">Buy</button>
            </div>
        </nav>
    )

}

export default NavBar