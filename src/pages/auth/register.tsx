import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilePenLine, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useTheme } from '@/components/theme-provider';

export default function Register() {
  const { theme, setTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <CardTitle className="text-2xl text-center font-anton">Create Account</CardTitle>
            <CardDescription className="text-center">
              Enter your details to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="name" placeholder="John Doe" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="name@example.com" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-10 w-10"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters and include a mix of letters, numbers, and symbols.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Button type="submit" className="w-full">Sign Up</Button>

            <div className="relative flex items-center justify-center">
              <Separator className="w-full" />
              <span className="absolute bg-card px-2 text-xs text-muted-foreground">
                OR CONTINUE WITH
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.0003 2C6.47751 2 2.00049 6.47688 2.00049 12C2.00049 16.2378 4.63493 19.855 8.35231 21.3127C8.26769 21.1081 8.20776 20.8754 8.20776 20.6114V18.9229C7.51693 18.9229 6.53262 18.9229 6.31676 18.9229C5.55713 18.9229 4.86629 18.5847 4.54282 17.9575C4.17976 17.26 4.10415 16.156 3.31398 15.6306C3.05343 15.4267 3.23947 15.1921 3.5307 15.2211C4.14251 15.3749 4.65024 15.7759 5.12686 16.3697C5.60145 16.9634 5.83299 17.1039 6.61134 17.1039C7.23883 17.1039 8.10953 17.0749 8.93365 16.9335C9.23143 16.0218 9.75487 15.1921 10.4419 14.7911C7.49818 14.3611 5.83097 12.7138 5.83097 10.576C5.83097 9.57878 6.20385 8.63974 6.84518 7.84538C6.60183 7.07884 6.30405 5.75788 6.91586 4.95367C8.21044 4.95367 9.04437 5.67347 9.36784 5.93019C10.1421 5.67347 10.9728 5.53208 11.8319 5.53208C12.691 5.53208 13.5258 5.67347 14.2999 5.93019C14.6234 5.67347 15.4573 4.95367 16.7519 4.95367C17.3677 5.75788 17.0699 7.08478 16.8225 7.85132C17.4558 8.64568 17.8269 9.57878 17.8269 10.576C17.8269 12.7138 16.1636 14.3611 13.2298 14.7852C14.269 15.412 15.0001 16.8504 15.0001 17.9496V20.6114C15.0001 20.7528 14.9704 20.8564 14.9466 20.9722C18.3152 19.3946 20.6428 15.9725 20.6428 12C20.6428 6.47688 16.1656 2 12.0003 2Z" />
                </svg>
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.1328 12.2606C23.1328 11.4459 23.0578 10.6312 22.9078 9.83862H12V14.2507H18.1875C17.9047 15.6936 17.075 16.9425 15.8531 17.76V20.6918H19.6375C21.8438 18.6607 23.1328 15.7489 23.1328 12.2606Z" fill="#4285F4" />
                  <path d="M12 23.4986C15.24 23.4986 17.9625 22.4697 19.6406 20.6917L15.8562 17.7599C14.8219 18.4557 13.5281 18.86 12 18.86C8.86875 18.86 6.21563 16.7731 5.28438 13.9821H1.38281V16.9913C3.05313 20.9519 7.19999 23.4986 12 23.4986Z" fill="#34A853" />
                  <path d="M5.28127 13.9821C4.77502 12.52 4.77502 10.9521 5.28127 9.49006V6.48083H1.38283C-0.464673 9.80315 -0.464673 13.669 1.38283 16.9913L5.28127 13.9821Z" fill="#FBBC05" />
                  <path d="M12 5.14001C13.7156 5.11787 15.3719 5.74881 16.6047 6.9071L19.9641 3.54774C17.7891 1.52666 14.9484 0.425367 12 0.501885C7.2 0.501885 3.05313 2.94859 1.38281 6.48086L5.28125 9.4901C6.21563 6.6991 8.86875 4.61216 12 4.61216V5.14001Z" fill="#EA4335" />
                </svg>
                Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-center text-sm text-muted-foreground mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}