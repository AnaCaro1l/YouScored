import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  overallText = 'Great';
  comparisonText = 'You scored higher than 65% of the people who have taken these tests.';

  summary = [
    { name: 'Reaction', score: 76, icon: '⚡', class: 'reaction' },
    { name: 'Memory', score: 92, icon: '🧠', class: 'memory' },
    { name: 'Verbal', score: 61, icon: '💬', class: 'verbal' },
    { name: 'Visual', score: 73, icon: '👁️', class: 'visual' }
  ];

  onContinue(): void {
    console.log('Continue clicked');
  }

  get overallScore(): number {
    const total = this.summary.reduce((sum, item) => sum + item.score, 0);
    return Math.round(total / this.summary.length);
  }
}
