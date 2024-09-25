import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/speakers','/teams','/theme',],
      disallow: '/private/',
    },
    sitemap: 'https://tedx.aceec.ac.in//sitemap.xml',
  }
}