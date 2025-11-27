import { Route, Routes } from 'react-router-dom';
import '../App.css';
import HomeScreen from '../screens/homeScreen';
import Experience from '../screens/experience';
import NotFound from '../screens/notFound';
// import { DarkThemeBg, DarkThemeBorder } from './common/utilities/styles';

function LandingScreen() {
  return (
    <div>
            {/* Navigation */}
            {/* <nav style={{ padding: 20, background: "#121212", color: "#fff" }}>
                <Link to="/" style={{ marginRight: 20, color: "#00FFFF" }}>Home</Link>
                <Link to="/experience" style={{ marginRight: 20, color: "#00FFFF" }}>Experience</Link>
            </nav> */}

            {/* Routes */}
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

    </div>
  );
}

export default LandingScreen;
