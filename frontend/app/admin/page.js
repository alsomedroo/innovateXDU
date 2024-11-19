import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
    }

    axios.get('/api/auth/user', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      if (response.data.user.role !== 'admin') {
        router.push('/signin');
      }
      setUser(response.data.user);
    }).catch(() => {
      router.push('/signin');
    });
  }, []);

  return user ? (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <p>Welcome, {user.name}</p>
    </div>
  ) : null;
};

export default AdminDashboard;
