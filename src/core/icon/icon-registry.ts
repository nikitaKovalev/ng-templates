import { Inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from './icon';

@Injectable({ providedIn: 'root' })
export class IconRegistry {
  constructor(
    @Inject(MatIconRegistry) registry: MatIconRegistry,
    @Inject(DomSanitizer) sanitizer: DomSanitizer,
  ) {
    const folderPath = 'assets/icons';

    ICONS.forEach(name =>
      registry.addSvgIcon(
        name,
        sanitizer.bypassSecurityTrustResourceUrl(`${folderPath}/${name}.svg`),
      )
    );
  }
}