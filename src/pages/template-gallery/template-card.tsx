import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  ExternalLink,
  Check,
  FileText
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  popular: boolean;
}

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const [selected, setSelected] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  const handleOpenPreview = () => {
    setPreviewOpen(true);
  };

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover-glow group">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-full bg-background p-0"
                onClick={handleOpenPreview}
              >
                <Eye className="h-4 w-4" />
                <span className="sr-only">Preview</span>
              </Button>
              <Button
                variant={selected ? "default" : "outline"}
                size="sm"
                className="h-8 w-8 rounded-full bg-background p-0"
                onClick={handleSelect}
              >
                {selected ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <FileText className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {selected ? "Selected" : "Select"}
                </span>
              </Button>
            </div>
            <img
              src={template.image}
              alt={template.title}
              className="object-cover transition-all duration-300 group-hover:brightness-75"
            />
            {selected && (
              <div className="absolute right-2 top-2 rounded-full bg-primary p-1">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{template.title}</h3>
              <Badge variant="outline">{template.category}</Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {template.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {template.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex w-full gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={handleOpenPreview}
            >
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              asChild
            >
              <Link to={`/editor/${template.id}`}>
                <FileText className="mr-2 h-4 w-4" />
                Use Template
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Template Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{template.title}</DialogTitle>
            <DialogDescription>
              {template.description}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3].map((_, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={16 / 10}>
                      <img
                        src={template.image}
                        alt={`${template.title} Preview ${index + 1}`}
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Template Features</h4>
              <ul className="mt-2 grid grid-cols-2 gap-1 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Customizable fields</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>PDF export</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Digital signatures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Client-ready design</span>
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter className="flex sm:justify-between">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button asChild>
              <Link to={`/editor/${template.id}`}>
                <FileText className="mr-2 h-4 w-4" />
                Use This Template
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}