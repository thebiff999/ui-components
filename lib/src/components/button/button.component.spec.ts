import { CUSTOM_ELEMENTS_SCHEMA, NgZone } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";

describe("SidebarComponent", () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it("should create the component", () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const buttonComponent = fixture.componentInstance;
    expect(buttonComponent).toBeTruthy();
  });
});
