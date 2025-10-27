import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTask {}
