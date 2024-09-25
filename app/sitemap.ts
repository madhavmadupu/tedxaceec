import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https:tedx.aceec.ac.in',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https:tedx.aceec.ac.in/speakers',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: 'https:tedx.aceec.ac.in/teams',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https:tedx.aceec.ac.in/tickets',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https:tedx.aceec.ac.in/theme',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.95,
        },
    ]
}