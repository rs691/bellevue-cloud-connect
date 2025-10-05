'use client';

import { useState, useMemo } from 'react';
import type { Resource } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

export function ResourcesList({ resources }: { resources: Resource[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = useMemo(() => {
    if (!searchTerm) return resources;
    return resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, resources]);

  return (
    <div>
      <div className="relative mb-8 mx-auto max-w-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search resources..."
          className="w-full pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">{resource.title}</CardTitle>
                <CardDescription className="!mt-2 font-medium text-primary">{resource.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="w-full">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    View Resource <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No resources found for "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
}
