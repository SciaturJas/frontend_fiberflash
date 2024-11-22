import { Component, OnInit } from '@angular/core';
import { LocalhostKeys } from 'src/app/shared/enum/localhost-keys';
import { PersonalizationService } from 'src/app/shared/services/personalization.service';

@Component({
  selector: 'app-personalize',
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.scss']
})
export class PersonalizeComponent implements OnInit {

  themeColor = 'theme-blue';
  backgroundImage = 'assets/img/bg-14.jpg';
  sidebarFillColor = '';
  sidebarStyle = 'sidebar-pushcontent';
  theme = 'theme-blue';
  mode = 'light-mode';

  constructor(
    public personalizationService: PersonalizationService
  ) { }

  ngOnInit(): void {
    this.themeColor = localStorage.getItem(LocalhostKeys.THEME_COLOR) ?? 'theme-blue';
    this.sidebarFillColor = localStorage.getItem(LocalhostKeys.SIDEBAR_FILL_COLOR) ?? '';
    this.backgroundImage = localStorage.getItem(LocalhostKeys.BACKGROUND_IMAGE) ?? 'assets/img/bg-1.jpg';
    this.sidebarStyle = localStorage.getItem(LocalhostKeys.SIDEBAR_STYLE) ?? 'sidebar-pushcontent';
    this.theme = localStorage.getItem(LocalhostKeys.THEME) ?? 'theme-blue';
    this.mode = localStorage.getItem(LocalhostKeys.MODE) ?? 'light-mode';
  }

  selectThemeColor(themeColor: string) {
    this.personalizationService.setThemeColor(themeColor, this.themeColor);
    this.themeColor = themeColor;
  }

  selectBackgroundImage(backgroundImage: string) {
    this.personalizationService.setBackgroundImage(backgroundImage);
    this.backgroundImage = backgroundImage;
  }

  selectSidebarFillColor(sidebarFillColor: string) {
    this.personalizationService.setSidebarFillColor(sidebarFillColor, this.sidebarFillColor);
    this.sidebarFillColor = sidebarFillColor;
  }

  selectSidebarStyle(sidebarStyle: string) {
    this.personalizationService.setSidebarStyle(sidebarStyle, this.sidebarStyle);
    this.sidebarStyle = sidebarStyle;
  }

  selectTheme(theme: string) {
    this.personalizationService.setTheme(theme, this.theme);
    this.theme = theme;
  }

  selectMode(event: any) {
    let newMode = 'light-mode';
    if (event?.target?.checked) {
      newMode = 'dark-mode';
    } else {
      newMode = 'light-mode';
    }
    this.personalizationService.setMode(newMode, this.mode);
    this.mode = newMode;
  }

}
