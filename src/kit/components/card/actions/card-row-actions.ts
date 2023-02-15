import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgIf],
  selector: 'card-row-actions',
  template: `
    <button *ngIf="canDownload" mat-icon-button class="card-action" (click)="$event.stopPropagation()">
      <mat-icon svgIcon="file"></mat-icon>
    </button>

    <button *ngIf="canEdit" mat-icon-button class="card-action" (click)="$event.stopPropagation()">
      <mat-icon svgIcon="edit"></mat-icon>
    </button>

    <button *ngIf="canDelete" mat-icon-button class="card-action" (click)="$event.stopPropagation()">
      <mat-icon svgIcon="delete"></mat-icon>
    </button>
  `,
  styles: [ `
    :host {
      display: flex;
      gap: calc(var(--def-size) / 2);
      align-items: center;
    }
  ` ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardRowActions {
  @Input()
  get canDownload(): boolean {
    return this._canDownload;
  }
  set canDownload(value: BooleanInput) {
    this._canDownload = coerceBooleanProperty(value);
  }
  private _canDownload = false;

  @Input()
  get canEdit(): boolean {
    return this._canEdit;
  }
  set canEdit(value: BooleanInput) {
    this._canEdit = coerceBooleanProperty(value);
  }
  private _canEdit = false;

  @Input()
  get canDelete(): boolean {
    return this._canDelete;
  }
  set canDelete(value: BooleanInput) {
    this._canDelete = coerceBooleanProperty(value);
  }
  private _canDelete = false;
}