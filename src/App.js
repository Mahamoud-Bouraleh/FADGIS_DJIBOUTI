import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import correct
import "./App.css";
import logo from "./logo.png";
import { useTranslation } from "react-i18next";
import MapPage from "./components/MapPage";
import CarteInteractivePage from "./components/CarteInteractivePage";
import LocaliVehicule from "./components/LocaliVehicule";
import PersonnTemp from "./components/PersonnTemp";
import ZoneControl from "./components/ZoneControl";
import GestionEmploy from "./components/employe/GestionEmploy";
import Dashboard from "./components/tableauBord/Dashboard"; // Corrected import
import { EmployeeProvider } from "./components/EmployeeContext";
import GeneratePayroll from "./components/Payroll/submenu/GeneratePayroll";
import FormationPage from "./components/FormationPage";
import Planification from "./components/Planification";
import ModifierEmploye from "./components/employe/ModifierEmploye";
import EmployeDetail from "./components/employe/EmployeDetail";
import OperationsMilitaires from "./components/Operation/OperationsMilitaires";
import AffectationEquipes from "./components/AffectationEquipes/AffectationEquipes";
import TaxReduction from "./components/Payroll/submenu/TaxReduction";


import {
  FaUser,
  FaCog,
  FaChartBar,
  FaHome,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaSignOutAlt,
  FaBoxOpen,
  FaMoneyBillWave,
} from "react-icons/fa";

function App() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeItem, setActiveItem] = useState("Dashboard"); // Default to "Dashboard"
  const { t, i18n } = useTranslation();

  // Language change handler
  const handleLanguageChange = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  const menuItems = [
    {
      title: t("dashboard"),
      icon: <FaHome />,
      subItems: [{ name: t("dashboard"), component: "Dashboard" }],
    },
    {
      title: t("humanResources"),
      icon: <FaUser />,
      subItems: [
        { name: t("training"), component: "FormationPage" }, // Relier ici
        { name: t("scheduling"), component: "Planification" },
        { name: t("employeeManagement"), component: "GestionEmploy" },
        { name: t("militaryOps"), component: "OperationsMilitaires"},
        { name: t("teamAssignment"), component: "AffectationEquipes" },
      ],
    },
    {
      title: t("payrol"),
      icon: <FaMoneyBillWave />,
      subItems: [
        { name: t("general payroll"), component: "GeneratePayroll" },
        { name: t("tax reduction"), component: "TaxReduction" },
      ],
    },
    {
      title: t("mapping"),
      icon: <FaMapMarkedAlt />,
      subItems: [
        { name: t("generalMap"), component: "MapPage" },
        { name: t("interactiveMap"), component: "CarteInteractivePage" },
        { name: t("vehicleLocation"), component: "LocaliVehicule" },
        { name: t("realTimePersonnel"), component: "PersonnTemp" },
        { name: t("controlZones"), component: "ZoneControl" },
      ],
    },
    {
      title: t("control"),
      icon: <FaShieldAlt />,
      subItems: [
        { name: t("realTimeTracking"), component: null },
        { name: t("vehicleRegistration"), component: null },
        { name: t("accessManagement"), component: null },
        { name: t("preventiveMaintenance"), component: null },
      ],
    },
    {
      title: t("inventory"),
      icon: <FaBoxOpen />,
      subItems: [
        { name: t("equipmentInventory"), component: null },
        { name: t("renewalAlerts"), component: null },
        { name: t("materialTracking"), component: null },
        { name: t("materialNeeds"), component: null },
        { name: t("materialRegistration"), component: null },
      ],
    },
    {
      title: t("reports"),
      icon: <FaChartBar />,
      subItems: [
        { name: t("performanceReports"), component: null },
        { name: t("securityStats"), component: null },
        { name: t("operationsTracking"), component: null },
      ],
    },
    {
      title: t("settings"),
      icon: <FaCog />,
      subItems: [
        { name: t("userRoles"), component: null },
        { name: t("mapSettings"), component: null },
        { name: t("alertConfig"), component: null },
        { name: t("gisConfig"), component: null },
      ],
    },
  ];

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const renderComponent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <Dashboard />;
      case "MapPage":
        return <MapPage />;
      case "CarteInteractivePage":
        return <CarteInteractivePage />;
      case "LocaliVehicule":
        return <LocaliVehicule />;
      case "PersonnTemp":
        return <PersonnTemp />;
      case "GeneratePayroll":
        return <GeneratePayroll />;
        case "TaxReduction":
          return <TaxReduction />;


      case "ZoneControl":
        return <ZoneControl />;
      case "GestionEmploy":
        return <GestionEmploy />;
        case "OperationsMilitaires":
          return <OperationsMilitaires />;

          case "AffectationEquipes":
            return <AffectationEquipes />;

      case "FormationPage": // Nouveau cas
        return <FormationPage />;
      case "Planification": // Nouveau cas
        return <Planification />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <EmployeeProvider>
      <Router>
        <div className="app-container">
          <header className="header">
            <div className="Garde">
              <img src={logo} alt="Logo" className="logo" />
              <h1>FADSGI DJIBOUTI</h1>
            </div>
            <div className="user-info">
              <span>Ali Mohamed Yacoub</span>
              <div className="language-select">
                <select
                  onChange={handleLanguageChange}
                  value={i18n.language}
                  className="language-selector"
                >
                  <option value="fr">{t("french")}</option>
                  <option value="en">{t("english")}</option>
                </select>
              </div>
              <div className="search-container">
                <div className="icons">
                  <span className="icon">🔔</span>
                  <span className="icon">⚙️</span>
                </div>
              </div>
              <button className="logout-button">
                <span className="icon">👤</span>
              </button>
            </div>
          </header>

          <div className="content-container">
            <aside className="sidebar">
              {menuItems.map((menuItem, index) => (
                <div key={index}>
                  <div
                    className="menu-item"
                    onClick={() => handleSubmenuToggle(index)}
                  >
                    <span className="menu-icon">{menuItem.icon}</span>
                    {menuItem.title}
                  </div>
                  {openSubmenu === index && menuItem.subItems.length > 0 && (
                    <div className="submenu">
                      {menuItem.subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className={`submenu-item ${
                            activeItem === subItem.name ? "active" : ""
                          }`}
                          onClick={() => handleItemClick(subItem.component)}
                        >
                          {subItem.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </aside>

            <main className="main-content">
              <Routes>
                <Route path="/" element={renderComponent()} />
                <Route path="/gestion-employes" element={<GestionEmploy />} />
                <Route path="/modifier-employe" element={<ModifierEmploye />} />
                <Route path="/employe-detail" element={<EmployeDetail />} />
                <Route path="/operations-militaires" element={<OperationsMilitaires />} />
                <Route path="/affectation-equipes" element={<AffectationEquipes />} />

              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
