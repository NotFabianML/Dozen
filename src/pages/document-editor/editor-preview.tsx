import { Download, Maximize2, Minimize2, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface EditorPreviewProps {
  document: any;
}

export default function EditorPreview({ document }: EditorPreviewProps) {
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);

  const handleZoomIn = () => {
    if (zoom < 200) setZoom(zoom + 25);
  };

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 25);
  };

  const handleResetZoom = () => {
    setZoom(100);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b p-2">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleZoomOut} disabled={zoom <= 50}>
            <ZoomOut className="h-4 w-4" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <span className="text-sm">{zoom}%</span>
          <Button variant="ghost" size="icon" onClick={handleZoomIn} disabled={zoom >= 200}>
            <ZoomIn className="h-4 w-4" />
            <span className="sr-only">Zoom in</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={handleResetZoom} disabled={zoom === 100}>
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Reset zoom</span>
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            {fullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
            <span className="sr-only">
              {fullscreen ? "Exit fullscreen" : "Fullscreen"}
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download preview</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-muted/30 p-4">
        <div className="mx-auto flex justify-center">
          <div
            className={cn(
              "bg-white shadow-lg transition-all",
              fullscreen ? "w-full max-w-4xl" : "w-[21cm]"
            )}
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top center',
            }}
          >
            {/* Document preview content */}
            <div className="p-12">
              {/* Document Header */}
              <div className="flex justify-between mb-8 border-b pb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    {document.title || 'Untitled Document'}
                  </h1>
                  <p className="text-muted-foreground capitalize">
                    {document.type || 'Document'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Your Company</p>
                  <p>123 Business Street</p>
                  <p>City, State 12345</p>
                  <p>contact@company.com</p>
                </div>
              </div>

              {/* Client Information */}
              <div className="mb-8 grid grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Bill To:</h2>
                  <p className="font-medium">
                    {document.client === 'acme' ? 'Acme Inc' :
                      document.client === 'techcorp' ? 'TechCorp' :
                        document.client === 'beautyco' ? 'BeautyCo' :
                          document.client === 'startupxyz' ? 'StartupXYZ' :
                            'Client Name'}
                  </p>
                  <p>Client Address Line 1</p>
                  <p>City, State 12345</p>
                  <p>client@email.com</p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Document #:</p>
                      <p>INV-{document.id === 'new' ? '0001' : document.id}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Date:</p>
                      <p>{document.date || new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Due Date:</p>
                      <p>{document.dueDate || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Amount Due:</p>
                      <p>${document.total || '0.00'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Items */}
              <div className="mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-t">
                      <th className="py-2 text-left">Item</th>
                      <th className="py-2 text-right">Quantity</th>
                      <th className="py-2 text-right">Rate</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {document.items && document.items.length > 0 ? (
                      document.items.map((item: any, index: number) => (
                        <tr key={item.id} className="border-b">
                          <td className="py-3">{item.description || `Item ${index + 1}`}</td>
                          <td className="py-3 text-right">{item.quantity || 1}</td>
                          <td className="py-3 text-right">${item.rate || '0.00'}</td>
                          <td className="py-3 text-right">${item.amount || '0.00'}</td>
                        </tr>
                      ))
                    ) : (
                      <tr className="border-b">
                        <td className="py-3">Example Item</td>
                        <td className="py-3 text-right">1</td>
                        <td className="py-3 text-right">$100.00</td>
                        <td className="py-3 text-right">$100.00</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-end mb-8">
                <div className="w-1/3">
                  <div className="flex justify-between py-1">
                    <span>Subtotal:</span>
                    <span>${document.subtotal || '100.00'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Tax (10%):</span>
                    <span>${document.tax || '10.00'}</span>
                  </div>
                  <div className="flex justify-between py-3 border-t font-bold">
                    <span>Total:</span>
                    <span>${document.total || '110.00'}</span>
                  </div>
                </div>
              </div>

              {/* Notes & Terms */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Notes</h3>
                <p className="text-muted-foreground">
                  {document.notes || 'Thank you for your business!'}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Terms & Conditions</h3>
                <p className="text-muted-foreground">
                  {document.terms || 'Payment is due within 30 days of receipt.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}