import { Navigate, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { PageNotFound, SpendingSheet, SpendingSheetList } from "./pages";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/spendingsheetlist" replace />} />
        <Route path="/spendingsheetlist" element={<SpendingSheetList />} />
        <Route path="/spendingsheet/:id" element={<SpendingSheet />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
