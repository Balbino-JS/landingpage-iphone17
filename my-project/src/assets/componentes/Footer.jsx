function Footer() {
  // Seções principais do footer
  // Cada objeto representa uma coluna
  const sections = [
    {
      title: "Buy now learn more", // Título da coluna
      links: ["iPhone 17 PRO", "iPone17 PRO Max", "Buy model", "Acessories"],
    },

    {
      title: "Specification",
      links: ["Techical characteristics", "Camera", "Battery", "Display"],
    },

    {
      title: "Support",
      links: ["iPhone support", "AppleCare+", "ios 19", "Contact"],
    },

    {
      title: "Apple",
      links: ["About Apple", "Newsroom", "Privacy", "Careers"],
    },
  ];

  // Links do rodapé inferior
  const buttonLinks = ["Privacy Policy", "Terms of Use", "Sales"];

  return (
    // Container principal do footer
    <footer className="bg-gray-900 boder-t border-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid responsivo (4 colunas no desktop) */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Renderiza cada seção */}
          {sections.map((section, index) => (
            <div key={index}>
              {/* Título da seção */}
              <h4 className="font-semibold mb-4">{section.title}</h4>

              {/* Lista de links */}
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Linha divisória inferior */}
      <div className="border-t border-gray-800 pt-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Linha principal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-gray-500 text-center">
              Copyright © 2026 Apple Inc. All rights reserved.
            </p>

            {/* Links legais */}
            <div className="flex gap-6 text-gray-400">
              {buttonLinks.map((link, index) => (
                <a
                  href="#"
                  key={index}
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Texto informativo final */}
          <p className="text-xs text-gray-500 text-center mt-4 pb-6">
            Site created for training purposes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
