import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenavOpen = signal(false);

  public readonly isOpen = this.sidenavOpen.asReadonly();

  public toggle(): void {
    this.sidenavOpen.update(open => !open);
  }
}
