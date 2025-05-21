import { useState } from 'react';
import { Search, Filter, Plus, ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Sample document data
const documents = [
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
  {
    id: '5',
    name: 'Logo Design Package',
    type: 'Quote',
    client: 'FitnessClub',
    date: '2023-04-02',
    status: 'draft',
  },
  {
    id: '6',
    name: 'E-commerce Website Development',
    type: 'Proposal',
    client: 'RetailCo',
    date: '2023-03-28',
    status: 'sent',
  },
  {
    id: '7',
    name: 'SEO Optimization Services',
    type: 'Invoice',
    client: 'TechCorp',
    date: '2023-03-22',
    status: 'paid',
  },
  {
    id: '8',
    name: 'Corporate Video Production',
    type: 'Quote',
    client: 'Acme Inc',
    date: '2023-03-15',
    status: 'signed',
  },
];

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState(documents);

  const statusColors = {
    draft: 'bg-muted text-muted-foreground',
    sent: 'bg-blue-500/10 text-blue-500',
    signed: 'bg-green-500/10 text-green-500',
    paid: 'bg-primary/10 text-primary',
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = documents.filter(
      (doc) =>
        doc.name.toLowerCase().includes(query) ||
        doc.client.toLowerCase().includes(query) ||
        doc.type.toLowerCase().includes(query)
    );

    setFilteredDocuments(filtered);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="outline">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((document) => (
                <TableRow key={document.id}>
                  <TableCell className="font-medium">
                    <a href={`/editor/${document.id}`} className="hover:underline">
                      {document.name}
                    </a>
                  </TableCell>
                  <TableCell>{document.type}</TableCell>
                  <TableCell>{document.client}</TableCell>
                  <TableCell>{new Date(document.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "capitalize",
                        statusColors[document.status as keyof typeof statusColors]
                      )}
                    >
                      {document.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Send</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No documents found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}