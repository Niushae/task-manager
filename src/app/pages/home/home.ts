import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly taskService = inject(TaskService);

  displayedColumns: string[] = ['title', 'deadline', 'assigned to', 'completed'];

  tasks = toSignal(this.taskService.getTasks(), {
    initialValue: [] as Task[],
  });
}
