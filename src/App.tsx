// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="text-red-600">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";

import Layout from '@/components/layout';
import Dashboard from '@/pages/dashboard';
import TemplateGallery from '@/pages/template-gallery';
import DocumentEditor from '@/pages/document-editor';
import Documents from '@/pages/documents';
import Clients from '@/pages/clients';
import Subscription from '@/pages/subscription';
import Settings from '@/pages/settings';
import Support from '@/pages/support';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import ForgotPassword from '@/pages/auth/forgot-password';

function App() {
  // Check if user is authenticated (this would use your auth system)
  const isAuthenticated = false;

  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="templates" element={<TemplateGallery />} />
          <Route path="editor/:id" element={<DocumentEditor />} />
          <Route path="documents" element={<Documents />} />
          <Route path="clients" element={<Clients />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>

      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;