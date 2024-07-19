// biome-ignore lint/style/useImportType: <explanation>
import { AfterViewInit, Component, OnDestroy, Renderer2 } from "@angular/core";

@Component({
	selector: "app-nav",
	standalone: true,
	imports: [],
	templateUrl: "./nav.component.html",
	styleUrl: "./nav.component.scss",
})
export class NavComponent implements AfterViewInit, OnDestroy {
	private hamburgerIcon!: HTMLElement | null;
	private menuContainer!: HTMLElement | null;
	private mobileMenuContainer!: HTMLElement | null;
	private mobileMenuContent!: HTMLElement | null;
	private bodyClickListener: (() => void) | null = null;

	constructor(private renderer: Renderer2) {}

	ngAfterViewInit() {
		this.hamburgerIcon = document.querySelector(".hamburger-icon");
		this.menuContainer = document.querySelector(".menu-container");
		this.mobileMenuContainer = document.querySelector(".mobile-menu-container");
		this.mobileMenuContent = document.querySelector(".mobile-menu-content");

		if (this.hamburgerIcon || this.mobileMenuContent) {
			this.bodyClickListener = this.renderer.listen("document", "click", (e) =>
				this.onBodyClick(e),
			);
		}
	}

	ngOnDestroy() {
		if (this.bodyClickListener) {
			this.bodyClickListener();
		}
	}

	showMobileMenu() {
		if (
			this.menuContainer &&
			this.mobileMenuContainer &&
			this.mobileMenuContent
		) {
			this.menuContainer.style.display = "none";
			this.mobileMenuContainer.classList.add("enter");
			this.mobileMenuContent.classList.add("enter");
		}
	}

	hideMobileMenu() {
		if (
			this.menuContainer &&
			this.mobileMenuContainer &&
			this.mobileMenuContent
		) {
			this.mobileMenuContainer.classList.remove("enter");
			this.mobileMenuContent.classList.remove("enter");
			this.menuContainer.style.display = "flex";
		}
	}

	private onBodyClick(event: Event) {
		if (this.hamburgerIcon && this.mobileMenuContent) {
			if (
				event.target !== this.hamburgerIcon &&
				(event.target as HTMLElement).offsetParent !== this.mobileMenuContent
			) {
				this.hideMobileMenu();
			}
		}
	}
}
