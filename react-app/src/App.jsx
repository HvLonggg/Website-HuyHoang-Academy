import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LegacyFromRegistry from "./pages/LegacyFromRegistry";
import SchoolPage from "./pages/SchoolPage";
import { LEGACY_BY_PATH } from "./legacy/legacyRegistry";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools/:slug" element={<SchoolPage />} />

        {Object.keys(LEGACY_BY_PATH).map((path) => (
          <Route key={path} path={path} element={<LegacyFromRegistry />} />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
