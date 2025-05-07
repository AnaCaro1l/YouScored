import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BgColorDirective } from './bg-color.directive';
import { RoundPipe } from './round.pipe';
import { AveragePipe } from './average.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BgColorDirective,
    RoundPipe,
    AveragePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  overallScore!: number;
  overallText = 'Great';
  comparisonText = 'You scored higher than 65% of the people who have taken these tests.';

  summary: any = [
    { name: 'Reaction', score: 33.3, icon: '⚡', color: '#d65a5a', bgColor: '#fff6f5' },
    { name: 'Memory', score: 92.6, icon: '🧠', color: '#e3b341', bgColor: '#fffbf2' },
    { name: 'Verbal', score: 61.8, icon: '💬', color: '#45b6a1', bgColor: '#f2fafa' },
    { name: 'Visual', score: 73.2, icon: '👁️', color: '#5555d6', bgColor: '#f3f3fd' }
  ];

  onContinue(): void {
    console.log('Continue clicked');
  }
}
