// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from './services';
import { NavComponent } from "./components/nav/nav.component";
import { HeroComponent } from "./components/hero/hero.component";
import { IntegrationsComponent } from "./components/integrations/integrations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HeroComponent, IntegrationsComponent],
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
