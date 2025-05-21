import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  PenTool,
  Files,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  FilePenLine
} from 'lucide-react';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Templates', href: '/templates', icon: FileText },
    { name: 'Editor', href: '/editor/new', icon: PenTool },
    { name: 'Documents', href: '/documents', icon: Files },
    { name: 'Clients', href: '/clients', icon: Users },
    { name: 'Subscription', href: '/subscription', icon: CreditCard },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Support', href: '/support', icon: HelpCircle },
  ];

  return (
    <div className={cn("flex flex-col w-64 border-r border-border", className)}>
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <FilePenLine size={28} className="text-primary" />
        <h1 className="text-xl font-bold tracking-wider">DocuMake</h1>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-link",
                  isActive && "active"
                )}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">JD</span>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Pro Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}