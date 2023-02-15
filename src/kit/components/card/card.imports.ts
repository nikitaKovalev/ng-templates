import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgForOf, NgTemplateOutlet } from '@angular/common';

export const CARD_IMPORTS = [
  MatIconModule,
  MatRippleModule,
  MatButtonModule,
  NgForOf,
  NgTemplateOutlet,
];