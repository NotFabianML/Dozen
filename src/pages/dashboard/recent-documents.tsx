import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileEdit, MoreHorizontal, Download, Send, Trash, Copy } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const recentDocuments = [
  {
    id: '1',
    name: 'Website Redesign Proposal',
    type: 'Proposal',
    client: 'Acme Inc',
    date: '2023-04-15',
    status: 'draft',
  },
  {
    id: '2',
    name: 'Monthly Social Media Management',
    type: 'Invoice',
    client: 'TechCorp',
    date: '2023-04-12',
    status: 'sent',
  },
  {
    id: '3',
    name: 'Product Photography Session',
    type: 'Quote',
    client: 'BeautyCo',
    date: '2023-04-08',
    status: 'signed',
  },
  {
    id: '4',
    name: 'Brand Strategy Consultation',
    type: 'Invoice',
    client: 'StartupXYZ',
    date: '2023-04-05',
    status: 'paid',
  },
];

type RecentDocumentsProps = {
  className?: string;
};

export default function RecentDocuments({ className }: RecentDocumentsProps) {
  const [documents, setDocuments] = useState(recentDocuments);

  const statusColors = {
    draft: 'bg-muted text-muted-foreground',
    sent: 'bg-blue-500/10 text-blue-500',
    signed: 'bg-green-500/10 text-green-500',
    paid: 'bg-primary/10 text-primary',
  };

  return (
    <Card className={cn("col-span-7", className)}>
      <CardHeader>
        <CardTitle>Recent Documents</CardTitle>
        <CardDescription>
          Your recently created and modified documents
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded-lg border border-border p-3 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <FileEdit className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <Link
                    to={`/editor/${doc.id}`}
                    className="text-sm font-medium hover:underline"
                  >
                    {doc.name}
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{doc.client}</span>
                    <span>•</span>
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{new Date(doc.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "capitalize",
                    statusColors[doc.status as keyof typeof statusColors]
                  )}
                >
                  {doc.status}
                </Badge>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <FileEdit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Duplicate</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Send className="mr-2 h-4 w-4" />
                      <span>Send</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}