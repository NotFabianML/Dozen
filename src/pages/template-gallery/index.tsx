import { useState } from 'react';
import { Filter, Search, Info, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import TemplateCard from './template-card';

// Template data
const templates = [
  {
    id: '1',
    title: 'Modern Invoice',
    description: 'Clean, professional invoice with itemized billing',
    category: 'Invoice',
    tags: ['Business', 'Financial'],
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg',
    popular: true,
  },
  {
    id: '2',
    title: 'Branded Proposal',
    description: 'Stylish proposal template with customizable sections',
    category: 'Proposal',
    tags: ['Marketing', 'Business'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    popular: false,
  },
  {
    id: '3',
    title: 'Simple Receipt',
    description: 'Minimalist receipt design for quick transactions',
    category: 'Receipt',
    tags: ['Retail', 'Financial'],
    image: 'https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg',
    popular: false,
  },
  {
    id: '4',
    title: 'Project Quote',
    description: 'Detailed quotation template for project-based work',
    category: 'Quote',
    tags: ['Business', 'Projects'],
    image: 'https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg',
    popular: true,
  },
  {
    id: '5',
    title: 'Consulting Agreement',
    description: 'Professional consulting contract with legal clauses',
    category: 'Agreement',
    tags: ['Legal', 'Consulting'],
    image: 'https://images.pexels.com/photos/5849576/pexels-photo-5849576.jpeg',
    popular: false,
  },
  {
    id: '6',
    title: 'Itemized Invoice',
    description: 'Detailed invoice with multiple line items and calculations',
    category: 'Invoice',
    tags: ['Business', 'Financial'],
    image: 'https://images.pexels.com/photos/4386340/pexels-photo-4386340.jpeg',
    popular: true,
  },
];

export default function TemplateGallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Filter templates based on search query and category
  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      categoryFilter === 'all' || template.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Extract unique categories for filter dropdown
  const categories = ['all', ...new Set(templates.map(t => t.category))];

  return (
    <div className="space-y-6 pb-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Template Gallery</h1>
        <p className="text-muted-foreground">
          Browse and select from our collection of professional document templates.
        </p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select
            value={categoryFilter}
            onValueChange={setCategoryFilter}
          >
            <SelectTrigger className="w-[180px] bg-card">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">More filters</span>
          </Button>
        </div>
      </div>

      {/* Popular templates section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Popular Templates</h2>
          <Button variant="link" className="h-auto p-0">
            View all <span className="sr-only">popular templates</span>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates
            .filter(template => template.popular)
            .map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
        </div>
      </div>

      {/* All templates section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">All Templates</h2>
          <div className="flex items-center text-sm text-muted-foreground">
            <Info className="mr-2 h-4 w-4" />
            <span>Showing {filteredTemplates.length} templates</span>
          </div>
        </div>

        {filteredTemplates.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-fade-in">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <FileText className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">No templates found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}