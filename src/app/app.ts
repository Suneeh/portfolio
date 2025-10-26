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
}

interface BlogListEntry {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}
