import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Save, FileDown, Send, Eye, History, PlusCircle, Trash, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import EditorForm from './editor-form';
import EditorPreview from './editor-preview';
import EditorToolbar from './editor-toolbar';

// Placeholder document data
const initialDocument = {
  id: 'new',
  title: 'New Document',
  type: 'invoice',
  client: '',
  date: new Date().toISOString().split('T')[0],
  dueDate: '',
  items: [
    { id: '1', description: '', quantity: 1, rate: 0, amount: 0 },
  ],
  notes: '',
  terms: 'Payment is due within 30 days of receipt.',
  subtotal: 0,
  tax: 0,
  total: 0,
};

export default function DocumentEditor() {
  const { id = 'new' } = useParams<{ id: string }>();
  const [document, setDocument] = useState(initialDocument);
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);

    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      toast.success("Document saved successfully");
    }, 1000);
  };

  const handleExport = () => {
    toast.success("Document exported to PDF");
  };

  const handleSend = () => {
    toast.success("Document sent to client");
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="/documents">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </a>
          </Button>
          <h1 className="text-2xl font-bold">{document.title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" onClick={handleSend}>
            <Send className="mr-2 h-4 w-4" />
            Send
          </Button>
          <Button size="sm" onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <span className="animate-pulse">Saving...</span>
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save
              </>
            )}
          </Button>
        </div>
      </div>

      <EditorToolbar />

      <Card className="flex-1 overflow-hidden">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full"
        >
          <ResizablePanel defaultSize={40} minSize={30}>
            <Tabs defaultValue="details" className="h-full">
              <div className="border-b px-4">
                <TabsList className="mb-0 mt-2">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
              </div>
              <div className="p-4 h-[calc(100%-3rem)] overflow-auto pb-20">
                <TabsContent value="details" className="m-0">
                  <EditorForm document={document} setDocument={setDocument} />
                </TabsContent>
                <TabsContent value="content" className="m-0">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Line Items</h4>
                    {document.items.map((item, index) => (
                      <div key={item.id} className="space-y-3 rounded-md border p-3">
                        {/* Item fields would go here */}
                        <div className="text-sm">Item {index + 1}</div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Item
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="m-0">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Template Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Configure appearance and behavior of your document.
                    </p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={60}>
            <EditorPreview document={document} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Card>
    </div>
  );
}