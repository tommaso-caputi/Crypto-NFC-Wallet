import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';

import Login from './pages/Login';
import Menu from './pages/Menu';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Menu' element={<Menu />} />
      </Routes>
    </Router>
  </>
);

export default App;
