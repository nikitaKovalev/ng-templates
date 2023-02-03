import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { IconRegistry } from '../core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="toolbar">
      <span 
        *ngFor="let link of links"
        class="toolbar__item"
        [routerLink]="link.path"
      >
        {{ link.title }}
      </span>
    </mat-toolbar>
    
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly links: { title: string; path: string }[] = [
    { title: 'Техника', path: '' },
    { title: 'Узлы', path: 'units' },
    { title: 'Пробы', path: 'samples' },
  ];

  constructor(@Inject(IconRegistry) registry: IconRegistry) {}
}
