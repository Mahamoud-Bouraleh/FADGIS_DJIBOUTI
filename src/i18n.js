import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Menu principal
      "dashboard": "Tableau de bord",
      "humanResources": "Ressources humaines",
      "mapping": "Cartographie",
      "control": "Contrôle",
      "planning": "Planification",
      "inventory": "Inventaire",
      "reports": "Rapports",
      "settings": "Paramètres",
      
      // Sous-menus RH
      "training": "Formation",
      "scheduling": "Planification",
      "employeeManagement": "Gestion des employés",
      "militaryOps": "Opérations militaires",
      "teamAssignment": "Affectation des équipes",
      
      // Sous-menus Cartographie
      "generalMap": "Carte générale",
      "interactiveMap": "Carte interactive",
      "vehicleLocation": "Localisation des véhicules",
      "realTimePersonnel": "Personnel en temps réel",
      "controlZones": "Zones de contrôle",
      
      // Sous-menus Contrôle
      "realTimeTracking": "Suivi en temps réel",
      "vehicleRegistration": "Enregistrement des véhicules",
      "accessManagement": "Gestion des accès",
      "preventiveMaintenance": "Maintenance préventive",
      
      // Sous-menus Inventaire
      "equipmentInventory": "Inventaire des équipements",
      "renewalAlerts": "Alertes de renouvellement",
      "materialTracking": "Suivi du matériel",
      "materialNeeds": "Besoins en matériel",
      "materialRegistration": "Enregistrement du matériel",
      
      // Sous-menus Rapports
      "performanceReports": "Rapports de performance",
      "securityStats": "Statistiques de sécurité",
      "operationsTracking": "Suivi des opérations",
      
      // Sous-menus Paramètres
      "userRoles": "Rôles utilisateurs",
      "mapSettings": "Paramètres de carte",
      "alertConfig": "Configuration des alertes",
      "gisConfig": "Configuration SIG",
      
      // Interface utilisateur
      "welcome": "Bienvenue",
      "logout": "Déconnexion",
      "french": "Français",
      "english": "Anglais",

      // Gestion des employés
      "employeeManagementTitle": "Gestion des employés",
      "employeeList": "Liste des employés",
      "addWeapon": "Ajouter Arme",
      "importList": "Import Liste",
      "inactiveWeapon": "Inactif Arme",
      "departmentInfo": "Info Département",

      // Ajouter un employé
      "addNewEmployee": "Ajouter un nouvel employé",
      "name": "Nom",
      "email": "Email",
      "phone": "Téléphone",
      "department": "Département",
      "position": "Poste",
      "photo": "Photo",
      "save": "Sauvegarder",
      "cancel": "Annuler",

      // Enregistrement d'arme
      "weaponRegistration": "Enregistrement de l'Arme",
      "step1": "Étape 1 - Info l'arme",
      "step2": "Étape 2 - Info nouveaux études",
      "step3": "Étape 3 - Tuteur",
      "step4": "Étape 4 - Parents",
      "step5": "Étape 5 - Santé",
      "fillAllInfo": "Remplir toutes les informations",
      "gender": "Sexe",
      "male": "Masculin",
      "female": "Féminin",
      "birthDate": "Date de naissance",
      "next": "Suivant",

      // Info étudiant
      "yearCompleted": "Année de fin d'études",

      // Tuteur
      "guardianInfo": "Remplir toutes les informations ci-dessous",
      "relationship": "Relation",
      "addParent": "Ajouter un parent +",

      // Santé
      "healthInfo": "Info santé",
      "backToParents": "Retour à l'information sur les parents",

      // Carte
      "establishmentMap": "Carte des Établissements",
      "search": "Rechercher",
      "chooseEstablishment": "Choisir un établissement",
      "layers": "Couches",
      "addRoute": "Ajouter Trajet",
      "showMyLocation": "Afficher mon emplacement",
      "latitude": "Latitude",
      "longitude": "Longitude",

      // Couches de carte
      "openStreetMap": "OpenStreetMap",
      "openTopoMap": "OpenTopoMap",
      "googleHybrid": "Google Maps Hybrid",
      "cartoDB": "CartoDB",
      "trafficMap": "Carte du trafic",
      "twoDView": "2D",
      "threeDView": "3D",
      "legend": "Légende",

      // Filtres
      "filters": "Filtres",
      "installationType": "Type d'installation",
      "camp": "Camp",
      "securityZone": "Zone de sécurité",
      "missionZone": "Zone de mission",
      "status": "Statut",
      "active": "Actif",
      "maintenance": "En maintenance",

      // Couches de carte supplémentaires
      "openStreet": "OpenStreet",
      "satellite": "Satellite",
      "trafficLayer": "Trafic Routier"
    }
  },
  en: {
    translation: {
      // Main menu
      "dashboard": "Dashboard",
      "humanResources": "Human Resources",
      "mapping": "Mapping",
      "control": "Control",
      "planning": "Planning",
      "inventory": "Inventory",
      "reports": "Reports",
      "settings": "Settings",
      
      // HR submenus
      "training": "Training",
      "scheduling": "Scheduling",
      "employeeManagement": "Employee Management",
      "militaryOps": "Military Operations",
      "teamAssignment": "Team Assignment",
      
      // Mapping submenus
      "generalMap": "General Map",
      "interactiveMap": "Interactive Map",
      "vehicleLocation": "Vehicle Location",
      "realTimePersonnel": "Real-time Personnel",
      "controlZones": "Control Zones",
      
      // Control submenus
      "realTimeTracking": "Real-time Tracking",
      "vehicleRegistration": "Vehicle Registration",
      "accessManagement": "Access Management",
      "preventiveMaintenance": "Preventive Maintenance",
      
      // Inventory submenus
      "equipmentInventory": "Equipment Inventory",
      "renewalAlerts": "Renewal Alerts",
      "materialTracking": "Material Tracking",
      "materialNeeds": "Material Needs",
      "materialRegistration": "Material Registration",
      
      // Reports submenus
      "performanceReports": "Performance Reports",
      "securityStats": "Security Statistics",
      "operationsTracking": "Operations Tracking",
      
      // Settings submenus
      "userRoles": "User Roles",
      "mapSettings": "Map Settings",
      "alertConfig": "Alert Configuration",
      "gisConfig": "GIS Configuration",
      
      // User interface
      "welcome": "Welcome",
      "logout": "Logout",
      "french": "French",
      "english": "English",

      // Employee Management
      "employeeManagementTitle": "Employee Management",
      "employeeList": "Employee List",
      "addWeapon": "Add Weapon",
      "importList": "Import List",
      "inactiveWeapon": "Inactive Weapon",
      "departmentInfo": "Department Info",
      
      // Add New Employee
      "addNewEmployee": "Add New Employee",
      "name": "Name",
      "email": "Email",
      "phone": "Phone",
      "department": "Department",
      "position": "Position",
      "photo": "Photo",
      "save": "Save",
      "cancel": "Cancel",

      // Weapon Registration
      "weaponRegistration": "Weapon Registration",
      "step1": "Step 1 - Weapon Info",
      "step2": "Step 2 - New Study Info",
      "step3": "Step 3 - Guardian",
      "step4": "Step 4 - Parents",
      "step5": "Step 5 - Health",
      "fillAllInfo": "Fill in all information",
      "gender": "Gender",
      "male": "Male",
      "female": "Female",
      "birthDate": "Birth Date",
      "next": "Next",
      
      // Student Info
      "yearCompleted": "Year of Study Completion",
      
      // Guardian
      "guardianInfo": "Fill in all information below",
      "relationship": "Relationship",
      "addParent": "Add Parent +",
      
      // Health
      "healthInfo": "Health Information",
      "backToParents": "Back to Parent Information",
      
      // Map
      "establishmentMap": "Establishment Map",
      "search": "Search",
      "chooseEstablishment": "Choose an Establishment",
      "layers": "Layers",
      "addRoute": "Add Route",
      "showMyLocation": "Show My Location",
      "latitude": "Latitude",
      "longitude": "Longitude",
      
      // Map Layers
      "openStreetMap": "OpenStreetMap",
      "openTopoMap": "OpenTopoMap",
      "googleHybrid": "Google Maps Hybrid",
      "cartoDB": "CartoDB",
      "trafficMap": "Traffic Map",
      "twoDView": "2D",
      "threeDView": "3D",
      "legend": "Legend",
      
      // Filters
      "filters": "Filters",
      "installationType": "Installation Type",
      "camp": "Camp",
      "securityZone": "Security Zone",
      "missionZone": "Mission Zone",
      "status": "Status",
      "active": "Active",
      "maintenance": "Under Maintenance",
      
      // Additional Map Layers
      "openStreet": "OpenStreet",
      "satellite": "Satellite",
      "trafficLayer": "Traffic Layer"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;