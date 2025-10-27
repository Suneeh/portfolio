import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly year = signal(new Date().getFullYear());
  blogEntries: BlogListEntry[] = [
    {
      icon: 'book',
      title: 'Database Optimization',
      subtitle: 'Write Optimization vs. Read Optimization',
      href: 'https://docs.google.com/document/d/1XTnfd2nKVVgr8nEQxD8LLyD3iIYZtoXpJIsY8v85-0o/edit?usp=sharing',
    },
    {
      icon: 'book',
      title: 'Atmoic Habits',
      subtitle: 'My summary of James Clears bestseller',
      href: 'https://docs.google.com/document/d/1gMUX_suBYQ6v9Fom3GcZihn2pTImLWfF42bZ5wNKjXI/edit?usp=sharing',
    },
    {
      icon: 'book',
      title: 'Domain Driven Design',
      subtitle: "My summary of Amichai Mantinband's course",
      href: 'https://docs.google.com/document/d/1SvW7vjmttxmPeD-P3sZEHPLxp64s-u9bS5z7LS_tLrQ/edit?usp=sharing',
    },
    {
      icon: 'book',
      title: 'Rate Limiting',
      subtitle: 'How to protect your APIs',
      href: 'https://docs.google.com/document/d/1D1SDzuasZLHkxcF4b220e53eztmQB6Qy7rlfzjc8U-k/edit?usp=sharing',
    },
  ];

  projectEntries: ProjectEntry[] = [
    {
      url: 'https://www.beautykaufhaus.de',
      imageSrc: '/beautykaufhaus.jpg',
      title: 'Beautykaufhaus - Webshop',
      description:
        'I enhanced the webshop beautykaufhaus.de, a beauty and cosmetics retailer, by combining user experience design with strategic functionality. I developed a dynamic category structure to make product discovery effortless, and integrated Trusted Shops for credibility and Google Analytics for actionable insights leaving the owner with powerful administrative and marketing tools.',
    },
    {
      url: 'https://www.smokkers.de',
      imageSrc: '/smokkers.jpg',
      title: 'Smokkers - Webshop',
      description:
        'For smokkers.de, I focused on both shop functionality as well as compliance by including robust age verification and content restrictions because of their tobacco product portfolio. To support international growth, I developed a custom translation tool that automatically converts product data into multiple languages—significantly expanding reach while reducing the time and cost of manual translations.',
    },
    {
      url: 'https://www.autoglaswelt.de',
      imageSrc: '/autoglaswelt.jpg',
      title: 'Autoglaswelt - Webshop',
      description:
        'I set up a modern, conversion-focused webshop specializing in automotive glass. The project included creating a clean, corporate-style theme for the shop as well as a sales funnel to guide users effectively from landing to checkout. I also implemented a custom shop plugin that allows customers to instantly filter through over 7000 different front windshields for a wide range of car models.',
    },
    {
      url: 'https://www.star-piercing.com',
      imageSrc: '/3.png',
      title: 'Star Piercing - Webshop',
      description:
        "For Star-Piercing.com, an online piercing and jewelry store, I contributed to the refinement of their e-commerce platform by focusing on their document design. I created cohesive and visually appealing templates for offers, invoices, and order confirmations, ensuring they aligned with the shop's branding and aesthetic as well as a polished customer experience.",
    },
    {
      url: 'https://www.autoglaswelt.de',
      imageSrc: '/autoglaswelt.jpg',
      title: 'Autoglaswelt - Webshop',
      description:
        'I set up a modern, conversion-focused webshop specializing in automotive glass. The project included creating a clean, corporate-style theme for the shop as well as a sales funnel to guide users effectively from landing to checkout. I also implemented a custom shop plugin that allows customers to instantly filter through over 7000 different front windshields for a wide range of car models.',
    },
    {
      url: 'https://www.star-piercing.com',
      imageSrc: '/4.png',
      title: 'Star Piercing - Webshop',
      description:
        "For Star-Piercing.com, an online piercing and jewelry store, I contributed to the refinement of their e-commerce platform by focusing on their document design. I created cohesive and visually appealing templates for offers, invoices, and order confirmations, ensuring they aligned with the shop's branding and aesthetic as well as a polished customer experience.",
    },
  ];
}

interface BlogListEntry {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}

interface ProjectEntry {
  url: string;
  imageSrc: string;
  title: string;
  description: string;
}
