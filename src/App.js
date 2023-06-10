import './App.css';
import { 
    Routes, 
    Route 
} from 'react-router-dom';
import history from '@/@history';
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from './context/themeContext';
import { LanguageProvider } from './context/languageContext';

import routes from './pages/index';


function App() {

    return (
        <AuthProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <Routes history={history}>
                        {
                            routes.map((data,index) => (
                                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
                                ))
                        }
                    </Routes>
                </LanguageProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
