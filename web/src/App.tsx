import { BrowserRouter, Routes, Route } from "react-router-dom";
import posthog from 'posthog-js';

// Initialize Analytics
if (typeof window !== 'undefined' && import.meta.env.VITE_POSTHOG_KEY) {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
  });
}

function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>{'coldemailiq'}</h1>
      <p>System initialized and ready for development.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
