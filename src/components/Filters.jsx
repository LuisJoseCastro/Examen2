import { useState } from 'react';
import { useBookContext } from '../context/BookContext';

export default function Filters() {
  const { setBooks, allBooks } = useBookContext();
  const [search, setSearch] = useState('');

  const handleFilter = () => {
    const filtered = allBooks.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.genre.toLowerCase().includes(search.toLowerCase())
    );

    if (filtered.length === 0) {
      alert("Este libro no existe.");
    }

    setBooks(filtered);
  };

  const reset = () => {
    setBooks(allBooks);
    setSearch('');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Filtrar Libros</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Buscar por título, autor o género"
      />
      <div className="flex gap-2">
        <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-1 rounded">Buscar</button>
        <button onClick={reset} className="bg-gray-300 px-4 py-1 rounded">Reiniciar</button>
      </div>
    </div>
  );
}
