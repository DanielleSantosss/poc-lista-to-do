import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './components/pages/mainPage'
import PendingTasks from './components/pages/pendingTasks';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="pendingTasks" element={<PendingTasks />}/>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;