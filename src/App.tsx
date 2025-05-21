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
import Landing from './pages/landing';

function App() {
  // Check if user is authenticated (this would use your auth system)
  // const isAuthenticated = false;

  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route path="/dashboard" element={<Layout />}>
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