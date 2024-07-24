import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { HeroComponent } from "./components/hero/hero.component";
import { IntegrationsComponent } from "./components/integrations/integrations.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContentStackComponent } from "./components/content-stack/content-stack.component";
import { SupportComponent } from "./components/support/support.component";
import { FeaturesComponent } from "./components/features/features.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HeroComponent, IntegrationsComponent, FooterComponent, ContentStackComponent, SupportComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
