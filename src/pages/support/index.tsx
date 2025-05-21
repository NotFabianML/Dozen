import { useState } from 'react';

import { Search, Tv, MessageSquare, PhoneCall, Mail, Megaphone, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

// FAQ data
const faqs = [
  {
    question: 'How do I create my first document?',
    answer: 'To create your first document, go to the Dashboard and click on "New Document". Choose a template from the gallery that suits your needs, or start with a blank document if you prefer. You can then customize it with your content and save it to your account.',
  },
  {
    question: 'Can I customize the templates?',
    answer: 'Yes, all templates are fully customizable. Once you select a template, you can modify text, add or remove sections, change colors, upload your logo, and make any other changes you need to reflect your brand and meet your specific requirements.',
  },
  {
    question: 'How do I share documents with clients?',
    answer: 'After creating a document, click the "Share" button to generate a secure link that you can send to your clients via email. Alternatively, you can download the document as a PDF and attach it to an email or use the direct email feature to send it straight from the platform.',
  },
  {
    question: 'What file formats can I export my documents to?',
    answer: 'You can export your documents to PDF, DOCX (Word), and plain text formats. Premium plans also offer additional export options such as HTML and custom branded formats with your company logo and colors.',
  },
  {
    question: 'How do I add my branding to documents?',
    answer: 'Go to the Settings page and select the "Branding" tab. From there, you can upload your logo, select brand colors, and choose fonts. Once saved, your branding will automatically apply to all templates (you can override these settings for individual documents if needed).',
  },
  {
    question: 'Is there a limit to how many documents I can create?',
    answer: 'Document limits depend on your subscription plan. Free accounts can create up to 5 documents per month, while paid plans offer higher limits. Check the Subscription page for details on your current plan and usage.',
  },
  {
    question: 'How secure are my documents?',
    answer: 'We take security seriously. All documents are encrypted at rest and in transit. We use industry-standard security practices, and your data is stored in secure cloud infrastructure with regular backups. Only you and those you explicitly share with can access your documents.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time from the Subscription page. After cancellation, you\'ll continue to have access to the paid features until the end of your current billing period.',
  },
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast.success("Support request submitted. We'll get back to you soon!");

    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Support Center</h1>
        <p className="text-muted-foreground">
          Find answers to common questions or contact our support team.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          className="pl-10 py-6 text-lg"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="faq">
            <Tv className="mr-2 h-4 w-4" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="contact">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact Us
          </TabsTrigger>
          <TabsTrigger value="resources">
            <Lightbulb className="mr-2 h-4 w-4" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="announcements">
            <Megaphone className="mr-2 h-4 w-4" />
            Updates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find answers to commonly asked questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center p-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <Search className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">No results found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We couldn't find any FAQs matching your search. Try using different keywords or contact our support team.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="justify-between flex-wrap gap-2">
              <p className="text-sm text-muted-foreground">
                Can't find what you're looking for?
              </p>
              <Button variant="outline" onClick={() => document.querySelector('[data-value="contact"]')?.dispatchEvent(new Event('click'))}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-5 w-5 text-primary" />
                  Video Tutorials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visual step-by-step guides to help you get the most out of our platform.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Watch Tutorials
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Knowledge Base
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  In-depth articles and guides on all features and best practices.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Browse Articles
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  Live Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with our support team for real-time assistance.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Schedule Call
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactFormChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      required
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Our support team is available Monday to Friday, 9am to 5pm.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        support@documake.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <PhoneCall className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm">Monday - Friday</p>
                      <p className="text-sm font-medium">9:00 AM - 5:00 PM EST</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Saturday</p>
                      <p className="text-sm font-medium">10:00 AM - 2:00 PM EST</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Sunday</p>
                      <p className="text-sm font-medium">Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Guides & Tutorials</CardTitle>
                <CardDescription>
                  Learn how to get the most out of our platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4">
                  <h3 className="text-lg font-medium">Getting Started Guide</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Learn the basics of creating and managing documents.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Read Guide
                  </Button>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="text-lg font-medium">Template Customization</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Learn how to customize templates for your brand.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Read Guide
                  </Button>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="text-lg font-medium">Working with Clients</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Best practices for client collaboration.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Read Guide
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Guides
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>
                  Step-by-step video guides for all features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md overflow-hidden bg-muted aspect-video flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Tv className="h-12 w-12" />
                    <p>Video Preview</p>
                  </div>
                </div>
                <h3 className="font-medium">Creating Your First Document</h3>
                <p className="text-sm text-muted-foreground">
                  This tutorial covers the basics of creating a new document from scratch or using a template.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Watch Now
                  </Button>
                  <Button variant="ghost" size="sm">
                    More Videos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Templates & Resources</CardTitle>
              <CardDescription>
                Download resources to enhance your document creation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-md border p-4">
                  <h3 className="font-medium">Brand Guidelines Template</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Create professional brand guidelines for clients.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Download
                  </Button>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="font-medium">Invoice Calculator</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Spreadsheet for calculating complex invoice items.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Download
                  </Button>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="font-medium">Proposal Checklist</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ensure your proposals cover all essential elements.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest Updates</CardTitle>
              <CardDescription>
                Stay informed about our newest features and improvements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">New Templates Added</h3>
                  <p className="text-sm text-muted-foreground">
                    April 15, 2023
                  </p>
                </div>
                <p className="text-muted-foreground">
                  We've added 15 new templates to our gallery, including specialized templates for social media management, web development, and content creation. Check them out in the Template Gallery!
                </p>
                <Button variant="link" className="h-auto p-0">
                  Explore New Templates
                </Button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">AI-Powered Content Suggestions</h3>
                  <p className="text-sm text-muted-foreground">
                    April 1, 2023
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Our new AI assistant can now help you write better proposals and invoices with content suggestions based on your industry and client needs. Find it in the document editor!
                </p>
                <Button variant="link" className="h-auto p-0">
                  Learn More
                </Button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Client Portal Enhancements</h3>
                  <p className="text-sm text-muted-foreground">
                    March 15, 2023
                  </p>
                </div>
                <p className="text-muted-foreground">
                  We've improved the client experience with a redesigned portal that makes it easier for your clients to view, approve, and comment on documents you share with them.
                </p>
                <Button variant="link" className="h-auto p-0">
                  Tour the Features
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Updates
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>
                Exciting new features we're currently developing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Enhanced Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Work together with your team on documents in real-time with comments, suggestions, and approval workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Mobile App</h4>
                    <p className="text-sm text-muted-foreground">
                      Create and manage documents on the go with our upcoming iOS and Android apps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Document Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Track when clients view your documents and get insights on engagement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}