import './App.css';
import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ← Don't forget this!

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // colored | light | dark
        toastClassName="rounded-lg shadow-md text-sm font-medium"
        bodyClassName="flex items-center gap-2"
      />
      <AppRouter />
    </>
  );
}

export default App;
