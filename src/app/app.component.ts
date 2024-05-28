// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
