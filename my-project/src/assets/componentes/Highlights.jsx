
// Declaração do componente funcional Highlights
// Essa seção apresenta os destaques de design, performance e câmeras do produto

function Highlights() {
  return (
    <section className="bg-black py-20px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Revolutionary design</h2>
          <p className="text-xl text-gray-400">
            Every detail has been carefully considered to create the best
            experience!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/titanium-design.jpg"
              alt="iphe titanium"
            />
            <h3 className="font-bold mb-2 text-3xl">Titanium premium</h3>
            <p className="text-gray-300">
              Titanium structure made of grout. The strongest and lightest
              smartphone.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/ios-features.jpg"
              alt="ios 2025"
            />
            <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">
              The world's most advanced operating system with integrated IA
            </p>
          </div>

          <div
            className="bg-gray-900 rounded-3xl p-12 mb-16 col-span-2"
            id="performace"
          >
            <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
            <p className="text-gray-300 mb-6">
              The most powerfull chip in a smartphone.
            </p>
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/chip-a18-pro.jpg"
              alt="chip a18"
            />

            <ul className="space-y-3 text-gray-300">
              <li>CPU 20% faster</li>
              <li>GPU 25% more efficient</li>
              <li>16-core nerual engine</li>
              <li>Hardware accelerated ray tracing</li>
            </ul>
          </div>
        </div>

        <div id="camera" className="py-24 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-14">
              Advanced PRO cameras system
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 w-full max-w-xs cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  48MP
                </div>
                <h4 className="text-lg font-semibold mb-2">Main</h4>
                <p className="text-gray-400 text-sm">
                  Quad-Pixel sensor with autofocus
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 w-full max-w-xs cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  12MP
                </div>
                <h4 className="text-lg font-semibold mb-2">Ultra Wide</h4>
                <p className="text-gray-400 text-sm">
                  120° field of view with night mode
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 w-full max-w-xs cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  12MP
                </div>
                <h4 className="text-lg font-semibold mb-2">Telefoto 5x</h4>
                <p className="text-gray-400 text-sm">
                  5x optical zoom with stability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
