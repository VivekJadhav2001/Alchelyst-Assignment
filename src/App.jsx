import { useCallback, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Modal from "./components/common/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavOverview from "./pages/NavOverview";
import OtherWorkflowsPage from "./pages/OtherWorkflowsPage";
import CaptialEventsPage from "./pages/CaptialEventsPage";
import ReportsPage from "./pages/ReportsPage";
import PaymentsPage from "./pages/PaymentsPage";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";

function App() {
  const [activeTab, setActiveTab] = useState("activity");
  const [activeChip, setActiveChip] = useState("all");
  const [search, setSearch] = useState("");

  const [modal, setModal] = useState(null);

  const openModal = useCallback((data) => {
    console.log(data,"data in open model")
    setModal(data);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#F0F1F3] h-screen inter-regular ">
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          search={search}
          setSearch={setSearch}
          activeChip={activeChip}
          setActiveChip={setActiveChip}
        />

        <Routes>
          <Route
            path="/"
            element={<Dashboard activeTab={activeTab} openModal={openModal} />}
          />
          <Route path="nav-workflows" element={<NavOverview />} />
          <Route path="other-workflows" element={<OtherWorkflowsPage />} />
          <Route path="capital-events" element={<CaptialEventsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>

        {modal && <Modal data={modal} onClose={closeModal} />}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
