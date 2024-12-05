import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaMapMarkerAlt, FaEye, FaEdit } from 'react-icons/fa';

const HRPage = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    grade: '',
    unit: '',
    birth_date: '',
    gender: '',
    nationality: '',
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    fetch('/hr/employees/data')
      .then(response => response.json())
      .then(data => {
        // Ensure the backend data includes the additional fields
        setEmployees(data.map(emp => ({
          id: emp.id,
          name: emp.name,
          position: emp.position,
          department: emp.department,
          service_status: emp.service_status,
          latitude: emp.latitude,
          longitude: emp.longitude,
          timestamp: new Date(emp.timestamp).toLocaleString() // Format timestamp for display
        })));
      })
      .catch(error => console.error('Error loading employees:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prevState => ({ ...prevState, [name]: value }));
  };

  const submitEmployee = (e) => {
    e.preventDefault();
    fetch('/hr/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          setIsModalOpen(false);
          loadEmployees();
        } else {
          alert(data.error || 'Une erreur est survenue');
        }
      })
      .catch(error => alert('Une erreur est survenue'));
  };

  return (
    <div className="hr-page">
      <div className="bg-neutral-700 shadow-lg mb-6">
        <nav className="container mx-auto px-4">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="mr-2">
              <a href="/hr/employees" className="inline-flex items-center p-4 border-b-2 border-blue-500 text-blue-500 group">
                <FaUserPlus className="w-5 h-5 mr-2" />
                Ressources Humaines
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Ressources Humaines</h1>
          <div className="flex space-x-4">
            <button onClick={() => setIsModalOpen(true)} className="btn-primary px-4 py-2 rounded-lg flex items-center">
              <FaUserPlus className="w-5 h-5 mr-2" />
              Ajouter un Employé
            </button>
            <a href="/map/personnel" className="btn-secondary px-4 py-2 rounded-lg flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 mr-2" />
              Voir sur la Carte
            </a>
          </div>
        </div>

        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Département</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Latitude</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Longitude</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-neutral-700 divide-y divide-gray-700">
              {employees.map(employee => (
                <tr key={employee.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-blue-400">
                    <a href={`/map/personnel#employee=${employee.id}`} className="hover:text-blue-300">
                      {employee.name}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{employee.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{employee.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.service_status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {employee.service_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{employee.latitude}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{employee.longitude}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{employee.timestamp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-green-400 hover:text-green-300 mr-3">
                      <FaEye />
                    </button>
                    <button className="text-yellow-400 hover:text-yellow-300">
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-medium text-gray-200 mb-4">Ajouter un Employé</h3>
            <form onSubmit={submitEmployee}>
              <input type="text" name="name" placeholder="Nom complet" onChange={handleInputChange} className="input-field mb-4" required />
              <input type="text" name="position" placeholder="Position" onChange={handleInputChange} className="input-field mb-4" />
              <input type="text" name="department" placeholder="Département" onChange={handleInputChange} className="input-field mb-4" />
              <input type="text" name="latitude" placeholder="Latitude" onChange={handleInputChange} className="input-field mb-4" />
              <input type="text" name="longitude" placeholder="Longitude" onChange={handleInputChange} className="input-field mb-4" />
              <input type="date" name="birth_date" onChange={handleInputChange} className="input-field mb-4" required />
              <select name="gender" onChange={handleInputChange} className="input-field mb-4" required>
                <option value="">Sélectionner</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
              <input type="text" name="nationality" placeholder="Nationalité" onChange={handleInputChange} className="input-field mb-4" required />
              <div className="flex justify-between mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Annuler</button>
                <button type="submit" className="btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HRPage;
