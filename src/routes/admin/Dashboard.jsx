import { useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
import axios from 'axios';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    stats: {
      totalPosts: 0,
      totalContacts: 0,
      totalComments: 0,
    },
    latestPosts: [],
    latestContacts: [],
  });
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/dashboard`,
      );

      setDashboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async (postId) => {
    if (!window.confirm('Delete this post? This cannot be undone.')) return;

    setDeletingId(postId);
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/posts/${postId}`,
        { withCredentials: true },
      );

      setDashboard((prev) => ({
        ...prev,
        stats: {
          ...prev.stats,
          totalPosts: prev.stats.totalPosts - 1,
        },
        latestPosts: prev.latestPosts.filter((post) => post._id !== postId),
      }));
    } catch (error) {
      console.log(error);
      alert('Failed to delete post.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteContact = async (contactId) => {
    if (!window.confirm('Delete this message? This cannot be undone.')) return;

    setDeletingId(contactId);
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/contacts/${contactId}`,
        { withCredentials: true },
      );

      setDashboard((prev) => ({
        ...prev,
        stats: {
          ...prev.stats,
          totalContacts: prev.stats.totalContacts - 1,
        },
        latestContacts: prev.latestContacts.filter(
          (contact) => contact._id !== contactId,
        ),
      }));
    } catch (error) {
      console.log(error);
      alert('Failed to delete message.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 pt-20 pb-20 mb-20">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-500">Total Posts</h2>

            <p className="text-4xl font-bold text-blue-600 mt-2">
              {dashboard.stats.totalPosts}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-500">Contact Messages</h2>

            <p className="text-4xl font-bold text-green-600 mt-2">
              {dashboard.stats.totalContacts}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-500">Comments</h2>

            <p className="text-4xl font-bold text-red-600 mt-2">
              {dashboard.stats.totalComments}
            </p>
          </div>
        </div>

        {/* Latest Posts */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>

          {dashboard.latestPosts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            dashboard.latestPosts.map((post) => (
              <div
                key={post._id}
                className="border-b py-2 flex items-center gap-x-10 "
              >
                <div className="flex gap-x-10 items-center">
                  <h3 className="font-semibold">{post.title}</h3>

                  <p className="text-gray-500 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <button
                  onClick={() => handleDeletePost(post._id)}
                  disabled={deletingId === post._id}
                  className="text-sm text-red-600 hover:text-red-800 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deletingId === post._id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            ))
          )}
        </div>

        {/* Latest Contacts */}
        <div className="bg-white rounded-lg shadow p-6 ">
          <h2 className="text-xl font-semibold mb-4">
            Latest Contact Messages
          </h2>

          {dashboard.latestContacts.length === 0 ? (
            <p>No contact messages.</p>
          ) : (
            dashboard.latestContacts.map((contact) => (
              <div
                key={contact._id}
                className="border-b py-2 flex items-center gap-x-10"
              >
                <div className="flex items-center gap-x-10">
                  <h3 className="font-semibold">{contact.fullName}</h3>

                  <p>{contact.subject}</p>

                  <p className="text-gray-500 text-sm">{contact.email}</p>
                </div>

                <button
                  onClick={() => handleDeleteContact(contact._id)}
                  disabled={deletingId === contact._id}
                  className="text-sm text-red-600 hover:text-red-800 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deletingId === contact._id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            ))
          )}
        </div>
        {/* Latest Comment */}
        <div className="bg-white rounded-lg shadow p-6 mt-10">
          <h2 className="text-xl font-semibold mb-4">
            Latest Contact Messages
          </h2>

          {dashboard.latestContacts.length === 0 ? (
            <p>No contact messages.</p>
          ) : (
            dashboard.latestContacts.map((contact) => (
              <div key={contact._id} className="border-b py-3">
                <div>
                  <h3 className="font-semibold">{contact.fullName}</h3>

                  <p>{contact.subject}</p>

                  <p className="text-gray-500 text-sm">{contact.email}</p>
                </div>

                <button
                  onClick={() => handleDeleteContact(contact._id)}
                  disabled={deletingId === contact._id}
                  className="text-sm text-red-600 hover:text-red-800 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deletingId === contact._id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
