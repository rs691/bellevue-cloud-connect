import { resources } from '@/lib/data';
import { ResourcesList } from '@/components/resources-list';

export default function ResourcesPage() {
  return (
    <div className="bg-secondary/50 min-h-screen">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Resource Library</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A curated collection of articles, tutorials, and tools for cloud professionals.
          </p>
        </div>
        <ResourcesList resources={resources} />
      </div>
    </div>
  );
}
