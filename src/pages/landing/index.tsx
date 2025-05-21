import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Clock,
  ArrowRight,
  FilePenLine
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FilePenLine className="h-8 w-8 text-primary" />
            <span>DocuMake</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container pt-24 md:pt-32">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-4" variant="outline">
            ✨ Launching Soon
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Create Professional Documents
            <span className="text-primary"> in Minutes</span>
          </h1>
          <p className="mb-8 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Transform your business documents with our powerful platform. Create stunning invoices, proposals, and more with our professional templates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="h-12 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-8">
              View Templates
            </Button>
          </div>

          <div className="mt-12 flex flex-col items-center gap-2 text-center">
            <div className="flex gap-4 text-muted-foreground">
              <span className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                No credit card required
              </span>
              <span className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                14-day free trial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Create professional documents in minutes, not hours.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Secure & Reliable</h3>
            <p className="text-muted-foreground">
              Your documents are encrypted and safely stored in the cloud.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Work together seamlessly with your team members.
            </p>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Professional Templates</h2>
            <p className="mx-auto max-w-[42rem] text-muted-foreground">
              Choose from our collection of professionally designed templates for every business need.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern Invoice",
                description: "Clean, professional invoice design",
                image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg"
              },
              {
                title: "Business Proposal",
                description: "Winning proposal templates",
                image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
              },
              {
                title: "Project Quote",
                description: "Detailed project quotations",
                image: "https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg"
              }
            ].map((template, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-[16/10]">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 p-6 flex items-end">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{template.title}</h3>
                    <p className="text-muted-foreground">{template.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/templates">
              <Button size="lg" variant="outline">
                View All Templates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[42rem] text-muted-foreground">
              Choose the perfect plan for your business needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "9.99",
                description: "Perfect for freelancers",
                features: [
                  "20 documents per month",
                  "5 templates",
                  "Basic support",
                  "PDF export"
                ]
              },
              {
                name: "Pro",
                price: "29.99",
                description: "Best for small businesses",
                features: [
                  "100 documents per month",
                  "All templates",
                  "Priority support",
                  "All export formats",
                  "Client portal",
                  "Team collaboration"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "79.99",
                description: "For growing teams",
                features: [
                  "Unlimited documents",
                  "Custom templates",
                  "24/7 support",
                  "API access",
                  "Advanced analytics",
                  "Custom branding"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border p-8 ${plan.popular ? "border-primary shadow-lg" : ""
                  }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                    Most Popular
                  </Badge>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/register">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <FilePenLine className="h-6 w-6 text-primary" />
                <span>DocuMake</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Professional document generation platform for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Templates</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DocuMake. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}