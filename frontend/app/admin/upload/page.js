import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AdminUpload = () => {
  const [title, setTitle] = useState('');
  const [document, setDocument] = useState(null);
  const [error, setError] = useState('');
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
    }).catch(() => {
      router.push('/signin');
    });
  }, []);

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('document', document);

    try {
      await axios.post('/api/admin/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      setTitle('');
      setDocument(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl mb-4">Upload Document</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 p-2 w-full border"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 p-2 w-full border"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload</button>
      </form>
    </div>
  );
};

export default AdminUpload;
