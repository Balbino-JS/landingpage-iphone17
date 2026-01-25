import { useState } from "react"

function Colors() {
    // Lista de cores disponíveis do produto
    const colors = [
        {id: 'blue', name: 'Titaniun Blue', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500'},
        {id: 'silver', name: 'Titaniun Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-300'},
        {id: 'orange', name: 'Titaniun Orange', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500'}
    ]

     // Lista de modelos do iPhone e suas especificações
    const models = [
        { name: 'Pro Max', screen: '6.9 inch', storage: '256GB, 512GB ou 1TB', battery: '33h de video', weight: '221g' },
        { name: 'Pro', screen: '6.3 inch', storage: '128GB, 256GB ou 512GB', battery: '29h de video', weight: '199g' }  
    ]

    // Estado que guarda qual cor está selecionada
    // Começa com a cor azul por padrão
    const [selectedColor, setSelectedColor] = useState('blue')

    return (
         // Seção principal da área de cores
        <section id="colors" className="bg-black-20 py-20 px-8">
            <div className=" max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Choose your color</h2>
                    <p className="text-xl text-gray-400">Three beautiful titanium finishes</p>
                </div>

                {/* Área da imagem do iPhone */}
                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center min-h-[500px]">
                            <img src={colors.find(color => color.id === selectedColor).image} alt="iphone" className="max-w-full max-h-[600] mx-auto" />
                        </div>

                         {/* Nome da cor sobre a imagem */}
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold">{colors.find( color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

               {/* Botões de cores */}
                <div className="flex justify-center items-center gap-4">
                    {colors.map(color => (
                        <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className="relative transition-all duration-300 cursor-pointer"
                        >
                            <div
                                className={`
                                    w-16 h-16 rounded-full border-4
                                    ${color.colorClass}
                                    ${selectedColor === color.id ? 'border-white' : 'border-gray-600'}
                                `}
                            />
                        </button>
                    ))}
                </div>
                
                {/* Cards com informações dos modelos */}
                <div className="grid gap-8 mt-20 grid-cols-2">
                    {models.map( (model, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border-gray-800">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                            <p className="text-gray-400 text-gray-300">{model.screen}</p>
                            <ul  className="text-gray-400 text-sm">
                                <li>{model.storage}</li>
                                <li>{model.battery}</li>
                                <li>{model.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                
                 {/* Botão de compra */}
                <div className="text-center mt-16">
                    <button className="bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all decoration-fuchsia-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">Buy now starting from $9.952,00</button>
                    <p  className="text-gray-400 text-sm">Or in up to 12x of $ 994,92 interest free</p>
                </div>

            </div>
        </section>
    )
}
export default Colors