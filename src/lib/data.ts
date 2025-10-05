export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
  topic: string;
  description: string;
  image: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  image: string;
};

export const events: Event[] = [
  {
    id: '1',
    title: 'Introduction to Serverless on AWS',
    date: 'October 26, 2024',
    time: '6:00 PM PST',
    speaker: 'Jane Doe',
    topic: 'Cloud Computing',
    description: 'An introductory workshop on building and deploying serverless applications using AWS Lambda, API Gateway, and DynamoDB.',
    image: 'event-card-1',
  },
  {
    id: '2',
    title: 'Mastering Kubernetes Networking',
    date: 'November 15, 2024',
    time: '5:30 PM PST',
    speaker: 'John Smith',
    topic: 'DevOps & Containers',
    description: 'Deep dive into Kubernetes networking models, services, ingresses, and network policies for robust microservices communication.',
    image: 'event-card-2',
  },
  {
    id: '3',
    title: 'Azure AI Fundamentals',
    date: 'December 5, 2024',
    time: '7:00 PM PST',
    speaker: 'Emily White',
    topic: 'AI & Machine Learning',
    description: 'Explore the world of artificial intelligence and machine learning with Microsoft Azure\'s powerful suite of AI services.',
    image: 'event-card-3',
  },
  {
    id: '4',
    title: 'GCP for Big Data & Analytics',
    date: 'January 20, 2025',
    time: '6:00 PM PST',
    speaker: 'Michael Brown',
    topic: 'Data Engineering',
    description: 'Learn how to leverage Google Cloud Platform tools like BigQuery, Dataflow, and Pub/Sub for large-scale data processing.',
    image: 'event-card-1',
  },
];

export const resourceCategories = [
  'AWS',
  'Azure',
  'Google Cloud',
  'Kubernetes',
  'Serverless',
  'DevOps',
  'AI/ML',
  'Security',
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Official AWS Documentation',
    description: 'The complete and official guide to all AWS services. A must-have bookmark for any AWS developer.',
    category: 'AWS',
    url: 'https://docs.aws.amazon.com/',
    image: 'resource-card-1',
  },
  {
    id: '2',
    title: 'Azure Architecture Center',
    description: 'Guidance for designing and building solutions on Azure using established patterns and practices.',
    category: 'Azure',
    url: 'https://docs.microsoft.com/en-us/azure/architecture/',
    image: 'resource-card-2',
  },
  {
    id: '3',
    title: 'Google Cloud Skills Boost',
    description: 'Hands-on labs and role-based learning paths to get certified on Google Cloud Platform.',
    category: 'Google Cloud',
    url: 'https://www.cloudskillsboost.google/',
    image: 'resource-card-3',
  },
  {
    id: '4',
    title: 'Kubernetes.io Documentation',
    description: 'The official documentation for Kubernetes. Your primary source for learning and reference.',
    category: 'Kubernetes',
    url: 'https://kubernetes.io/docs/home/',
    image: 'resource-card-1',
  },
  {
    id: '5',
    title: 'The Twelve-Factor App',
    description: 'A methodology for building software-as-a-service apps that are robust, scalable, and maintainable.',
    category: 'DevOps',
    url: 'https://12factor.net/',
    image: 'resource-card-2',
  },
  {
    id: '6',
    title: 'Serverless Framework Docs',
    description: 'A powerful framework for building, deploying, and managing serverless applications on any cloud provider.',
    category: 'Serverless',
    url: 'https://www.serverless.com/framework/docs',
    image: 'resource-card-3',
  },
];
