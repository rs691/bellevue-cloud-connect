import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, BookOpen, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { events, resources } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

export default function Home() {
  const upcomingEvents = events.slice(0, 3);
  const featuredResources = resources.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">
            Connect, Learn, and Grow with Bellevue Cloud
          </h1>
          <p className="max-w-2xl text-lg text-primary-foreground/90">
            Join a thriving community of cloud enthusiasts and professionals.
            Share knowledge, attend exclusive events, and accelerate your career in the cloud.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/events">
              Explore Events <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="features" className="bg-secondary/50 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-bold">Exclusive Events</h3>
              <p className="mt-2 text-muted-foreground">
                Engage with experts and peers in workshops and talks.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-bold">Resource Library</h3>
              <p className="mt-2 text-muted-foreground">
                Access a curated collection of learning materials.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-bold">Community Driven</h3>
              <p className="mt-2 text-muted-foreground">
                Share your knowledge and contribute to our growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="container mx-auto py-16 sm:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Upcoming Events</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't miss our next lineup of insightful talks and workshops.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => {
             const eventImage = PlaceHolderImages.find(p => p.id === event.image);
            return (
            <Card key={event.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
              {eventImage && <Image
                src={eventImage.imageUrl}
                alt={eventImage.description}
                data-ai-hint={eventImage.imageHint}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />}
              <CardHeader>
                <CardTitle className="font-headline">{event.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{event.date} @ {event.time}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/events">View Details</Link>
                </Button>
              </div>
            </Card>
          )})}
        </div>
         <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/events">View All Events <ArrowRight className="ml-2"/></Link>
          </Button>
        </div>
      </section>

      <section id="resources" className="bg-secondary/50 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Featured Resources</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Hand-picked articles and tutorials to expand your cloud knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <Card key={resource.id} className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">{resource.title}</CardTitle>
                <p className="text-sm font-medium text-primary">{resource.category}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button asChild variant="secondary" className="w-full">
                  <Link href="/resources">Read More</Link>
                </Button>
              </div>
            </Card>
          ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/resources">Explore All Resources <ArrowRight className="ml-2"/></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
