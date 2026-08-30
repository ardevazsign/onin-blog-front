import axios from 'axios';
import { useEffect, useState } from 'react';
import Dashboard from './admin/Dashboard';

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/dashboard`,
    );

    setDashboard(res.data);
  };

  if (!dashboard) return <h1>Loading...</h1>;

  return <div>{<Dashboard />}</div>;
};

export default AdminDashboard;
