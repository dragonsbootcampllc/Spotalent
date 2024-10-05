import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
