import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [documents, setDocuments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
    }

    axios.get('/api/auth/user', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      setUser(response.data.user);
    }).catch(() => {
      router.push('/signin');
    });

    axios.get('/api/admin/documents', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      setDocuments(response.data.courses);
    }).catch(() => {
      router.push('/signin');
    });
  }, []);

  return user ? (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">User Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Available Documents</h2>
        <ul className="list-disc pl-6">
          {documents.map((doc, index) => (
            <li key={index} className="mb-2">
              <a href={doc.document} target="_blank" className="text-blue-500 hover:underline">{doc.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default UserDashboard;
