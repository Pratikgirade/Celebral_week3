import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TablePage from './pages/Table';
import ChartsPage from './pages/Charts';
import CalendarPage from './pages/Calendar';
import KanbanPage from './pages/Kanban';
import { ThemeContext, ThemeUpdateContext } from './context/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Router>
            <Header />
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flexGrow: 1, padding: '20px' }}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/table" element={<TablePage />} />
                  <Route path="/charts" element={<ChartsPage />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/kanban" element={<KanbanPage />} />
                </Routes>
              </div>
            </div>
          </Router>
        </ThemeProvider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
