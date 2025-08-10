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
  protected readonly title = signal('portfolio');
  protected readonly year = signal(new Date().getFullYear());
  blogEntries: BlogListEntry[] = [
    {
      icon: 'book',
      title: 'Database Optimization',
      subtitle: 'Write Optimization vs. Read Optimization',
      href: 'ööhm foo bar',
    },
    {
      icon: 'book',
      title: 'Atmoic Habits',
      subtitle: 'My summary of James Clears bestseller',
      href: 'ööhm foo bar',
    },
    {
      icon: 'book',
      title: 'Domain Driven Design',
      subtitle: "My summary of Amichai Mantinband's course",
      href: 'ööhm foo bar',
    },
    {
      icon: 'book',
      title: 'Rate Limiting',
      subtitle: 'How to protect your APIs',
      href: 'ööhm foo bar',
    },
    {
      icon: 'book',
      title: 'Tree Structured Data',
      subtitle: 'How to setup your Database correctly',
      href: 'ööhm foo bar',
    },
  ];
}

interface BlogListEntry {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}
