// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from './services';
import { NavComponent } from "./components/nav/nav.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AnalyticsService],
})
export class AppComponent implements OnInit {
  constructor(private analytics: AnalyticsService) {}

  ngOnInit() {
    this.analytics.trackEvent('App Loaded', 'App Loaded', 'App Loaded');
  }
}
