// Declaração do componente funcional Intro
// Essa seção apresenta o título principal, descrição, botões e especificações do produto

function Intro() {

  
  // Array de objetos com as principais especificações do produto
  const specs = [
    { value: "6.3", label: "Super Retina Display XDR", color: "text-blue-600" },
    { value: "A18 Pro", label: "Fastest chip", color: "text-orange-500" },
    { value: "48MP", label: "Camera system", color: "text-blue-600" },
    { value: "29h", label: "Battery", color: "text-orange-500" },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 ">iPhone 17 Pro</h1>
        <p className="text-2xl md:text-4xl mb-4 text-gradient">
          Titanium. So strong. So light. So Pro
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          The most refined design we've ever created. Aerospace grade
          titanium.A18 Pro chip
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mg-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 cursor-pointer rounded-full text-lg font-medium trans-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50">
          Buy now
        </button>
        <button className="border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-midium transition-all duration-300 hover:scale-105 cursor-pointer">
          Find out more
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl mt-8">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="cursor-pointer bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transitio-all duration-300 hover:scale-105"
          >
            <p className={`tex=3xl font-bold ${spec.color}`}>{spec.value}</p>
            <p  className="text-gray-400 text-sm">{spec.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro;