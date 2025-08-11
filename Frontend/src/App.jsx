import './App.css';
import AppRouter from './routes/AppRouter';
import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css'; // ← Don't forget this!

function App() {
  return (
    <>
       <Toaster position="top-center" />
      <AppRouter />
    </>
  );
}

export default App;
