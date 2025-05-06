import { useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { v4 as uuidv4 } from 'uuid';

export default function BookForm() {
  const { addBook } = useBooks();
  const [form, setForm] = useState({ title: '', author: '', genre: '', year: '', read: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    addBook({ ...form, id: uuidv4() });
    setForm({ title: '', author: '', genre: '', year: '', read: false });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Agregar Libro</h2>
      {[
        { name: "title", placeholder: "Título" },
        { name: "author", placeholder: "Autor" },
        { name: "genre", placeholder: "Género" },
        { name: "year", placeholder: "Año" },
      ].map(({ name, placeholder }) => (
        <input
          key={name}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full mb-2 p-2 border rounded"
        />
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Agregar
      </button>
    </form>
  );
}
