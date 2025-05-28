import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Pilotos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch('https://rubrica3dw.onrender.com/v1/pilotos')
      .then(res => res.json())
      .then(data => setEquipos(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  if (equipos.length === 0) {
    return <p>Cargando pilotos...</p>;
  }

  return (
    <>
      <section id="pilotos" className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-2">Pilotos de la Fórmula 1</h1>
        <p className="text-center text-gray-600 mb-16">Conoce quien te da la adrenalina sobre la pista</p>
        <div className="container mx-auto px-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipos.map((equipo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="rounded-lg p-4 shadow-lg text-white h-full flex flex-col justify-between w-full max-w-[400px] mx-auto"
                style={{ backgroundColor: equipo.color + 'cc' }}
              >
                <h2 className="text-lg font-semibold mb-4 text-center drop-shadow-md">{equipo.nombre}</h2>
                <div className="flex flex-col gap-3">
                  {equipo.pilotos.map((piloto, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-md p-3 text-black w-full flex items-center shadow-sm h-full min-h-[100px]"
                    >
                      <img
                        src={piloto.foto}
                        alt={piloto.nombre}
                        className="w-20 h-20 object-cover rounded-full border border-gray-300 mr-3"
                      />
                      <div className="flex flex-col justify-center flex-1">
                        <h3 className="text-sm font-semibold leading-tight mb-4">{piloto.nombre}</h3>
                        <div className="text-[16px] text-gray-600 leading-tight">
                          <p>Edad: {piloto.edad}</p>
                          <p>Nac: {piloto.nacimiento}</p>
                          <p>Debut: {piloto.debut}</p>
                          <p># {piloto.numero}</p>
                          <p>{piloto.pais}</p>
                          <p>Podios: {piloto.podios}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white px-6 py-10 mt-16">
        <hr className="border-gray-700 my-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>F1® a Formula company. All rights reserved</p>
          <p>© 2003–2025 Formula One</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/f1" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 h-7"
              />
            </a>
            <a href="https://www.facebook.com/Formula1/?locale=es_LA" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151296987.jpg"
                alt="Facebook"
                className="w-7 h-7"
              />
            </a>
            <a href="https://www.youtube.com/f1" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                className="w-7 h-7"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Pilotos;


