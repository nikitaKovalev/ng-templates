import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CARD_ROW_ACTIONS_IMPORTS } from '@kit/components/card/actions/card-row-actions.imports';

@Component({
  standalone: true,
  imports: CARD_ROW_ACTIONS_IMPORTS,
  selector: 'card-row-actions',
  templateUrl: './card-row-actions.html',
  styleUrls: ['./card-row-actions.scss'],
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