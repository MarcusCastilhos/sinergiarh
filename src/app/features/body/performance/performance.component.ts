import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-performance',
  imports: [],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceComponent {}
