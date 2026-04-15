import { useCallback, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Modal from "./components/common/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavOverview from "./pages/NavOverview";
import OtherWorkflows from "./pages/OtherWorkflows";
import CaptialEventsPage from "./pages/CaptialEventsPage";
import ReportsPage from "./pages/ReportsPage";
import Payments from "./pages/Payments";

function App() {
  const [activeTab, setActiveTab] = useState("activity");
  const [activeChip, setActiveChip] = useState("all");
  const [search, setSearch] = useState("");

  const [modal, setModal] = useState(null);

  const openModal = useCallback((data) => {
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
          <Route path="/" element={<Dashboard activeTab={activeTab} openModal={openModal} />}/>
          <Route path="nav-workflows" element={<NavOverview />} />
          <Route path="other-workflows" element={<OtherWorkflows/>}/>
          <Route path="capital-events" element={<CaptialEventsPage />}/>
          <Route path="reports" element={<ReportsPage />}/>
          <Route path="payments" element={<Payments />}/>
        </Routes>

        

        

        {modal && <Modal data={modal} onClose={closeModal} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
