import { Link } from 'react-router-dom';
import { FilePenLine, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { useState } from 'react';
import { toast } from 'sonner';
import { useTheme } from '@/components/theme-provider';

export default function ForgotPassword() {
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Reset link sent to your email");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="w-full max-w-[400px] animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="flex items-center text-2xl font-bold">
            <FilePenLine className="h-8 w-8 mr-2 text-primary" />
            <span>DocuMake</span>
          </div>
        </div>

        <Card className="border-muted">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-anton">Reset Password</CardTitle>
            <CardDescription className="text-center">
              {isSubmitted
                ? "Check your email for the reset link"
                : "Enter your email to receive a password reset link"}
            </CardDescription>
          </CardHeader>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending Reset Link...</span>
                    </div>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </CardContent>
            </form>
          ) : (
            <CardContent className="space-y-4">
              <div className="rounded-md bg-primary/10 p-4 text-center">
                <Mail className="h-12 w-12 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-2">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-xs text-muted-foreground">
                  If you don't see it in your inbox, please check your spam folder.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsSubmitted(false)}
              >
                Send Again
              </Button>
            </CardContent>
          )}
          <CardFooter className="flex flex-col">
            <div className="flex justify-center mt-4">
              <Button variant="link" asChild>
                <Link to="/login" className="flex items-center text-muted-foreground">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}