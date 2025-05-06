import { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState(() => {
    return JSON.parse(localStorage.getItem("books")) || [];
  });

  const [books, setBooks] = useState(allBooks); // vista actual

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(allBooks));
  }, [allBooks]);

  return (
    <BookContext.Provider value={{ books, setBooks, allBooks, setAllBooks }}>
      {children}
    </BookContext.Provider>
  );
};
