import { useBooks } from '../hooks/useBooks';

export default function BookList() {
  const { books, deleteBook, toggleRead } = useBooks();

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">Libros Registrados</h2>
      <div className="grid gap-2">
        {books.map(book => (
          <div key={book.id} className="bg-white p-3 rounded shadow flex justify-between">
            <div>
              <p><strong>{book.title}</strong> ({book.year})</p>
              <p>{book.author} - {book.genre}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toggleRead(book.id)} className="text-green-600">Marcar leído</button>
              <button onClick={() => deleteBook(book.id)} className="text-red-600">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
