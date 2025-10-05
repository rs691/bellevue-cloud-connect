import { SubmitTipForm } from '@/components/submit-tip-form';
import { Send } from 'lucide-react';
import { z } from 'zod';

const submissionSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  url: z.string().url('Please enter a valid URL'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Please select a category'),
});

export default function SubmitTipPage() {
  async function submitTip(data: z.infer<typeof submissionSchema>) {
    'use server';
    console.log('New tip submission received:', data);
    // Here you would typically save the data to a database for admin review.
    return { success: true, message: 'Thank you for your submission! It will be reviewed by our team.' };
  }

  return (
    <div className="min-h-screen bg-secondary/50">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-full bg-primary p-4 text-primary-foreground">
              <Send className="h-8 w-8" />
            </div>
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Share Your Knowledge</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Found a great article, tutorial, or tool? Share it with the community!
            </p>
          </div>
          <SubmitTipForm submissionSchema={submissionSchema} submitTip={submitTip} />
        </div>
      </div>
    </div>
  );
}
