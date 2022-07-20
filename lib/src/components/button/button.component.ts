import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";

@Component({
  selector: "lib-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  @Input()
  disabled: boolean = false;

  @Output()
  click: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild("button")
  private buttonRef!: ElementRef<HTMLButtonElement>;

  constructor() {}

  public focus(): void {
    this.buttonRef.nativeElement.focus();
  }

  public blur(): void {
    this.buttonRef.nativeElement.blur();
  }
}
