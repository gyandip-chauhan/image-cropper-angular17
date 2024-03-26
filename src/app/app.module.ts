import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LyThemeModule } from '@alyle/ui';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { AppComponent } from './app.component';
import { LyIconModule } from '@alyle/ui/icon'; // Import LyIconModule
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig} from '@alyle/ui';
import {
  HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

import { LyDialogModule } from '@alyle/ui/dialog';
import { LySliderModule } from '@alyle/ui/slider';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
// import { MatIconModule } from '@angular/material/icon';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LyThemeModule.setTheme('minima-light'),
    LyIconModule,
    LyDialogModule,
    LySliderModule,
    // MatIconModule,
    LyToolbarModule,
    LyImageCropperModule,
    HammerModule
  ],
  /** Add themes */
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig } // Required for <ly-carousel>
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
