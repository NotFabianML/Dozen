import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import MobileNav from './mobile-nav';
import Header from './header';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar for desktop */}
      <Sidebar className="hidden md:flex" />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-4 md:p-6 lg:p-8 animate-fade-in">
          <Outlet />
        </main>

        {/* Mobile navigation */}
        <MobileNav className="md:hidden" />
      </div>
    </div>
  );
}