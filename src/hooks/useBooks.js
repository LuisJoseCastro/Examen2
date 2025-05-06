// hooks/useBooks.js
import { useBookContext } from '../context/BookContext';

export function useBooks() {
  const { books, setBooks, allBooks, setAllBooks } = useBookContext();

  const addBook = (book) => {
    const updated = [...allBooks, book];
    setAllBooks(updated); // actualiza el almacenamiento real
    setBooks(updated);    // actualiza lo que se muestra en pantalla
  };

  const deleteBook = (id) => {
    const updated = allBooks.filter(b => b.id !== id);
    setAllBooks(updated);
    setBooks(updated);
  };

  const toggleRead = (id) => {
    const updated = allBooks.map(book =>
      book.id === id ? { ...book, read: !book.read } : book
    );
    setAllBooks(updated);
    setBooks(updated);
  };

  return {
    books,
    addBook,
    deleteBook,
    toggleRead,
  };
}
