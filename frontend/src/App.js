import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import MainPage from './pages/main'
import PendingTasks from './pages/listTask';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="pendingTasks" element={<PendingTasks />}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App;