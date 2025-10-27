import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navigation/navbar/navbar';
import { SidenavService } from './services/navigation/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidebarComponent } from './components/navigation/sidebar/sidebar';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    NavbarComponent,
    SidebarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly sidenavService = inject(SidenavService);
}
