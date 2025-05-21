import {
  FileText,
  Users,
  FileSignature,
  Send,
  Clock,
  FileQuestion
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type DashboardActionsProps = {
  className?: string;
};

export default function DashboardActions({ className }: DashboardActionsProps) {
  return (
    <Card className={cn("col-span-3", className)}>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>
          Frequently used actions and shortcuts
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Button
          variant="outline"
          className="justify-start h-auto py-3"
        >
          <FileText className="mr-2 h-4 w-4 text-primary" />
          <div className="flex flex-col items-start">
            <span>Create New Invoice</span>
            <span className="text-xs text-muted-foreground">
              Generate a new invoice for a client
            </span>
          </div>
        </Button>

        <Button
          variant="outline"
          className="justify-start h-auto py-3"
        >
          <FileQuestion className="mr-2 h-4 w-4 text-accent" />
          <div className="flex flex-col items-start">
            <span>Create New Quote</span>
            <span className="text-xs text-muted-foreground">
              Generate a new quote for a potential client
            </span>
          </div>
        </Button>

        <Button
          variant="outline"
          className="justify-start h-auto py-3"
        >
          <FileSignature className="mr-2 h-4 w-4 text-primary" />
          <div className="flex flex-col items-start">
            <span>Create New Proposal</span>
            <span className="text-xs text-muted-foreground">
              Start a new client proposal from template
            </span>
          </div>
        </Button>

        <Button
          variant="outline"
          className="justify-start h-auto py-3"
        >
          <Users className="mr-2 h-4 w-4 text-accent" />
          <div className="flex flex-col items-start">
            <span>Add New Client</span>
            <span className="text-xs text-muted-foreground">
              Create a new client record in the system
            </span>
          </div>
        </Button>

        <Button
          variant="outline"
          className="justify-start h-auto py-3"
        >
          <Send className="mr-2 h-4 w-4 text-primary" />
          <div className="flex flex-col items-start">
            <span>Send Document</span>
            <span className="text-xs text-muted-foreground">
              Email a document to a client
            </span>
          </div>
        </Button>

        <Button
          variant="outline"
          className="justify-start h-auto py-3"
        >
          <Clock className="mr-2 h-4 w-4 text-accent" />
          <div className="flex flex-col items-start">
            <span>Schedule Follow-up</span>
            <span className="text-xs text-muted-foreground">
              Set a reminder to follow up on a document
            </span>
          </div>
        </Button>
      </CardContent>
    </Card>
  );
}