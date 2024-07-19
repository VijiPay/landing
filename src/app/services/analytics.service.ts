import { Injectable } from '@angular/core';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
 let gtag: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
		trackEvent(eventName: string, eventDetails: string, eventCategory: string) {
			gtag("event", eventName, {
				event_category: eventCategory,
				event_label: eventName,
				value: eventDetails,
			});
		}

	}