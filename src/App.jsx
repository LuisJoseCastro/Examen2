import { BookProvider } from './context/BookContext';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import ReadBooks from './components/ReadBooks';
import Filters from './components/Filters';

function App() {
  return (
    <BookProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Gestor de Libros</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <BookForm />
          <Filters />
        </div>
        <BookList />
        <ReadBooks />
      </div>
    </BookProvider>
  );
}

export default App;
