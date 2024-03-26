import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LyDialog } from '@alyle/ui/dialog';
import { CropperDialog } from './cropper-dialog';
import { ImgCropperEvent } from '@alyle/ui/image-cropper';
import { ThemeVariables, lyl, StyleRenderer } from '@alyle/ui';
const STYLES = (theme: ThemeVariables) => ({
  $global: lyl `{
    body {
      background-color: ${theme.background.default}
      color: ${theme.text.default}
      font-family: ${theme.typography.fontFamily}
      margin: 0
      direction: ${theme.direction}
    }
  }`,
  root: lyl `{
    display: block
  }`
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'image-cropper-app';
  // readonly classes = this.sRenderer.renderSheet(STYLES, 'root');
  constructor(
    // readonly sRenderer: StyleRenderer,
    private _dialog: LyDialog,
    private _cd: ChangeDetectorRef
  ) { }

  cropped?: string;

  openCropperDialog(event: Event) {
    this.cropped = null!;
    this._dialog.open<CropperDialog, Event>(CropperDialog, {
      data: event,
      width: 320,
      disableClose: true
    }).afterClosed.subscribe((result?: ImgCropperEvent) => {
      if (result) {
        this.cropped = result.dataURL;
        this._cd.markForCheck();
      }
    });
  }
}
