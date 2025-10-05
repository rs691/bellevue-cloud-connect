import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="container mx-auto py-16 sm:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
          <Lock className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="font-headline text-3xl font-bold md:text-4xl">Admin Portal</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          This area is restricted. Here you can manage events, resources, and member submissions.
        </p>
        <Card className="mt-8 w-full max-w-md text-left">
          <CardHeader>
            <CardTitle className="font-headline">Management Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Event Management</li>
              <li>Resource Library Curation</li>
              <li>Member Tip Submissions Review</li>
              <li>User Administration</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
