import { mount } from "enzyme";
import "jest-enzyme";
import * as React from "react";
import ThemeProvider from "../../themes/ThemeProvider";
import Hero from "./Hero";

describe("Hero", () => {
  it("should show the supplied message", () => {
    const result = mount(
      <ThemeProvider>
        <Hero firstName="John" lastName="Tester" />
      </ThemeProvider>
    );
    expect(result).toIncludeText("Hi John Tester!");
  });
});
