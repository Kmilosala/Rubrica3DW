import { useState } from "react";

const RegistroVisitantes = () => {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    equipo: "",
    piloto: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://rubrica3dw.onrender.com/v1/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert("Registro exitoso: " + data.message);
    } catch (err) {
      console.error(err);
      alert("Error al registrar visitante");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Registro de Visitantes</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={form.edad}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="equipo"
          placeholder="Equipo favorito"
          value={form.equipo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="piloto"
          placeholder="Piloto favorito"
          value={form.piloto}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        <button type="submit" className="w-full bg-red-600 text-gray py-2 rounded hover:bg-red-700">
          Enviar registro
        </button>
      </form>
    </div>
  );
};

export default RegistroVisitantes;



