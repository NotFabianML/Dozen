import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  PenTool,
  Files,
  Users
} from 'lucide-react';

type MobileNavProps = {
  className?: string;
};

export default function MobileNav({ className }: MobileNavProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Templates', href: '/templates', icon: FileText },
    { name: 'Editor', href: '/editor/new', icon: PenTool },
    { name: 'Documents', href: '/documents', icon: Files },
    { name: 'Clients', href: '/clients', icon: Users },
  ];

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-20 flex h-16 items-center justify-around border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex flex-col items-center justify-center h-full w-full",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon size={20} className={isActive ? "text-primary" : ""} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}