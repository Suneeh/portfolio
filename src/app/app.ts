import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollAnimationDirective } from './scroll-animation.directive';

@Component({
  selector: 'app-root',
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    ScrollAnimationDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly year = signal(new Date().getFullYear());
  protected readonly age = signal(this.calculateAge(new Date(1996, 3, 7)));

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    return hasHadBirthdayThisYear ? age : age - 1;
  }

  scrollToProjects(): void {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  blogEntries: BlogListEntry[] = [
    {
      icon: 'bookmark_add',
      title: 'Database Optimization',
      subtitle: 'Write Optimization vs. Read Optimization',
      href: 'https://docs.google.com/document/d/1XTnfd2nKVVgr8nEQxD8LLyD3iIYZtoXpJIsY8v85-0o/edit?usp=sharing',
    },
    {
      icon: 'bookmark_add',
      title: 'Atmoic Habits',
      subtitle: "My summary of James Clear's bestseller",
      href: 'https://docs.google.com/document/d/1gMUX_suBYQ6v9Fom3GcZihn2pTImLWfF42bZ5wNKjXI/edit?usp=sharing',
    },
    {
      icon: 'bookmark_add',
      title: 'Domain Driven Design',
      subtitle: "My summary of Amichai Mantinband's course",
      href: 'https://docs.google.com/document/d/1SvW7vjmttxmPeD-P3sZEHPLxp64s-u9bS5z7LS_tLrQ/edit?usp=sharing',
    },
    {
      icon: 'bookmark_add',
      title: 'Rate Limiting',
      subtitle: 'How to protect your APIs',
      href: 'https://docs.google.com/document/d/1D1SDzuasZLHkxcF4b220e53eztmQB6Qy7rlfzjc8U-k/edit?usp=sharing',
    },
    {
      icon: 'bookmark_add',
      title: 'How to win friends & influence people',
      subtitle: "My summary of Dale Carnegie's bestseller",
      href: 'https://docs.google.com/document/d/1k1osH-5dCU6nuO0ktVgLOA_ZF4b2HOIzSLpKqzuddx4/edit?usp=sharing',
    },
  ];

  projectEntries: ProjectEntry[] = [
    {
      url: 'https://www.linkedin.com/in/quirin-langer',
      imageSrc: '',
      title: 'Culture Fit Interviewer - zvoove - Software Engineer',
      description:
        'In addition to my technical responsibilities, I also had the opportunity to conduct culture fit interviews for potential new hires. This involved assessing candidates not only for their technical skills but also for their alignment with our company values and culture. It was a rewarding experience to help identify individuals who would thrive in our work environment and contribute positively to our team dynamics and values.',
    },
    {
      url: 'https://www.linkedin.com/in/quirin-langer',
      imageSrc: '',
      title: 'Microservices - zvoove - Software Engineer',
      description:
        "While I can't talk about the different projects in detail, I can say that I was working on services containing Angular Frontends, .NET Backends and Cloud Infrastructure using Terraform, Helm and Kubernetes. I built and scaled services from the first customer to now over 10k customers, and I'm proud to have contributed to the growth and success of the company. I've also had the opportunity to work with a talented team of developers and learn from their expertise, which has been invaluable for my professional development.",
    },
    {
      url: 'https://www.linkedin.com/posts/quirin-langer_softwareengineering-mentoring-karriere-activity-7287430212554809344-Jn39',
      imageSrc: '',
      title: 'Software Engineering Up Close - Freelance - Mentoring',
      description:
        "I recently had the privilege of giving a two-hour talk to the senior class students at Gregor-Mendel-Gymnasium. Working closely with my former IT teacher, Armin Eckert, I was able to give the students an insight into the exciting and varied profession of software engineering. We have looked at topics such as how a software engineer works, different working models, the personal qualities that make a good developer, and how to get started in this profession. I was particularly impressed by the audience's interest, curiosity and the applause in the end.",
    },
    {
      url: 'https://github.com/Suneeh/Projektarbeit',
      imageSrc: '',
      title: 'BiLang - RIS Development - Final Thesis',
      description:
        'As the final thesis of my apprenticeship as a Software Developer who specializes in application development at RIS Web- & Software-Development GmbH & Co. KG in Regensburg I created a an API + OnPremise application to translate entire JTL Online Shop + ERP Databases into foreign languages. The project was implemented in php using the Laravel framework for the API and C# for the OnPremise application. It was a big success and many customers booked the service to reach foreign markets. Read the whole publication on GitHub.',
    },
    {
      url: 'https://www.star-piercing.com',
      imageSrc: '/star-piercing.png',
      title: 'Star Piercing - RIS Development - Apprenticeship',
      description:
        "For Star-Piercing.com, an online piercing and jewelry store, I contributed to the refinement of their e-commerce platform by focusing on their document design. I created cohesive and visually appealing templates for offers, invoices, and order confirmations, ensuring they aligned with the shop's branding and aesthetic as well as a polished customer experience.",
    },
    {
      url: 'https://www.autoglaswelt.de',
      imageSrc: '/autoglaswelt.jpg',
      title: 'Autoglaswelt - RIS Development - Apprenticeship',
      description:
        'I set up a modern, conversion-focused webshop specializing in automotive glass. The project included creating a clean, corporate-style theme for the shop as well as a sales funnel to guide users effectively from landing to checkout. I also implemented a custom shop plugin that allows customers to instantly filter through over 7000 different front windshields for a wide range of car models.',
    },
    {
      url: 'https://www.smokkers.de',
      imageSrc: '/smokkers.jpg',
      title: 'Smokkers - RIS Development - Apprenticeship',
      description:
        'For smokkers.de, I focused on both shop functionality as well as compliance by including robust age verification and content restrictions because of their tobacco product portfolio. To support international growth, I developed a custom translation tool that automatically converts product data into multiple languages—significantly expanding reach while reducing the time and cost of manual translations.',
    },
    {
      url: 'https://www.beautykaufhaus.de',
      imageSrc: '/beautykaufhaus.jpg',
      title: 'Beautykaufhaus - RIS Development - Apprenticeship',
      description:
        'I enhanced the webshop beautykaufhaus.de, a beauty and cosmetics retailer, by combining user experience design with strategic functionality. I developed a dynamic category structure to make product discovery effortless, and integrated Trusted Shops for credibility and Google Analytics for actionable insights leaving the owner with powerful administrative and marketing tools.',
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
