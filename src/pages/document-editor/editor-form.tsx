import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface DocumentFormProps {
  document: any;
  setDocument: React.Dispatch<React.SetStateAction<any>>;
}

export default function EditorForm({ document, setDocument }: DocumentFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDocument({ ...document, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setDocument({ ...document, [name]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Document Information</h3>

        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={document.title}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select
              value={document.type}
              onValueChange={(value) => handleSelectChange('type', value)}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="invoice">Invoice</SelectItem>
                <SelectItem value="quote">Quote</SelectItem>
                <SelectItem value="receipt">Receipt</SelectItem>
                <SelectItem value="proposal">Proposal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={document.date}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Client Information</h3>

        <div className="space-y-2">
          <Label htmlFor="client">Client</Label>
          <Select
            value={document.client}
            onValueChange={(value) => handleSelectChange('client', value)}
          >
            <SelectTrigger id="client">
              <SelectValue placeholder="Select client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="acme">Acme Inc</SelectItem>
              <SelectItem value="techcorp">TechCorp</SelectItem>
              <SelectItem value="beautyco">BeautyCo</SelectItem>
              <SelectItem value="startupxyz">StartupXYZ</SelectItem>
              <SelectItem value="">Add new client...</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="clientAddress">Client Address</Label>
          <Textarea
            id="clientAddress"
            name="clientAddress"
            placeholder="Enter client address"
            className="resize-none"
            rows={3}
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Payment Details</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              name="dueDate"
              type="date"
              value={document.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Select
              value={document.paymentMethod}
              onValueChange={(value) => handleSelectChange('paymentMethod', value)}
            >
              <SelectTrigger id="paymentMethod">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="card">Credit Card</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Additional Information</h3>

        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Enter any additional notes"
            value={document.notes}
            onChange={handleChange}
            className="resize-none"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="terms">Terms & Conditions</Label>
          <Textarea
            id="terms"
            name="terms"
            placeholder="Enter terms and conditions"
            value={document.terms}
            onChange={handleChange}
            className="resize-none"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}