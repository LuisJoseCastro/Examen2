import { useBooks } from '../hooks/useBooks';

export default function ReadBooks() {
  const { books, toggleRead } = useBooks();

  const readBooks = books.filter(book => book.read);

  if (!readBooks.length) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">Libros Leídos</h2>
      <ul className="grid gap-2">
        {readBooks.map(book => (
          <li key={book.id} className="bg-green-100 p-3 rounded shadow flex justify-between">
            <span>{book.title} - {book.author}</span>
            <button onClick={() => toggleRead(book.id)} className="text-blue-700">Desmarcar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
