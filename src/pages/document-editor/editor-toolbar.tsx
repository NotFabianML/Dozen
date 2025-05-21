import { Button } from '@/components/ui/button';
import {
  Heading2,
  Type,
  Image,
  Table,
  ListOrdered,
  Link as LinkIcon,
  FileText,
  PencilLine,
  PaintBucket,
  Maximize
} from 'lucide-react';

export default function EditorToolbar() {
  return (
    <div className="flex items-center space-x-1 mb-3 p-2 border rounded-md bg-card">
      <Button variant="ghost" size="sm">
        <Heading2 className="h-4 w-4" />
        <span className="sr-only">Heading</span>
      </Button>
      <Button variant="ghost" size="sm">
        <Type className="h-4 w-4" />
        <span className="sr-only">Text</span>
      </Button>
      <Button variant="ghost" size="sm">
        <Image className="h-4 w-4" />
        <span className="sr-only">Image</span>
      </Button>
      <Button variant="ghost" size="sm">
        <Table className="h-4 w-4" />
        <span className="sr-only">Table</span>
      </Button>
      <Button variant="ghost" size="sm">
        <ListOrdered className="h-4 w-4" />
        <span className="sr-only">List</span>
      </Button>
      <Button variant="ghost" size="sm">
        <LinkIcon className="h-4 w-4" />
        <span className="sr-only">Link</span>
      </Button>
      <div className="h-4 w-px bg-border mx-1" />
      <Button variant="ghost" size="sm">
        <FileText className="h-4 w-4" />
        <span className="ml-2 hidden md:inline-flex">Template</span>
      </Button>
      <Button variant="ghost" size="sm">
        <PencilLine className="h-4 w-4" />
        <span className="ml-2 hidden md:inline-flex">Signatures</span>
      </Button>
      <Button variant="ghost" size="sm">
        <PaintBucket className="h-4 w-4" />
        <span className="ml-2 hidden md:inline-flex">Theme</span>
      </Button>
      <div className="flex-1" />
      <Button variant="outline" size="sm">
        <Maximize className="mr-2 h-4 w-4" />
        Full Editor
      </Button>
    </div>
  );
}