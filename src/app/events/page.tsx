import { events } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { RsvpDialog } from '@/components/rsvp-dialog';

export default function EventsPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Club Events</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Join our workshops, talks, and networking sessions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const eventImage = PlaceHolderImages.find((p) => p.id === event.image);
            return (
              <Card key={event.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                {eventImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={eventImage.imageUrl}
                      alt={eventImage.description}
                      data-ai-hint={eventImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="mr-2 h-4 w-4" />
                    <span>Speaker: {event.speaker}</span>
                  </div>
                   <div className="flex items-center text-sm text-muted-foreground">
                    <Tag className="mr-2 h-4 w-4" />
                    <span>Topic: {event.topic}</span>
                  </div>
                  <p className="pt-2">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <RsvpDialog eventTitle={event.title} />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
