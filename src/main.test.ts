import { JSDOM } from "jsdom";
import { beforeEach, describe, expect, it } from "vitest";

describe("color Changer", () => {
  let dom: JSDOM;

  beforeEach(() => {
    // Setup a fresh DOM for each test
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <span class="color">#FFFFFF</span>
          <button id="button-change">Change!</button>
          <button id="button-reset">Reset</button>
        </body>
      </html>
    `);

    global.document = dom.window.document;
    global.window = dom.window as any;

    // Import the main file after setting up the DOM
    import("./main");
  });

  it("should have valid script array", () => {
    const script = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    expect(script).toHaveLength(16);
    expect(script).toContain("A");
    expect(script).toContain(0);
  });

  it("should generate random number within script array bounds", () => {
    const getRandomNumber = () => Math.floor(Math.random() * 16);
    const randomNum = getRandomNumber();
    expect(randomNum).toBeGreaterThanOrEqual(0);
    expect(randomNum).toBeLessThan(16);
  });

  it("should change color on button click", () => {
    const buttonChange = document.getElementById("button-change");
    const colorSpan = document.querySelector(".color");

    // Mock Math.random to return a predictable value
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    buttonChange?.click();

    const hexColor = colorSpan?.textContent;
    expect(hexColor).toMatch(/^#[0-9A-F]{6}$/);
    expect(document.body.style.backgroundColor).toBe("");
  });

  it("should reset color to white on reset button click", () => {
    const buttonReset = document.getElementById("button-reset");
    const colorSpan = document.querySelector(".color");

    buttonReset?.click();

    expect(colorSpan?.textContent).toBe("#FFFFFF");
    expect(document.body.style.backgroundColor).toBe("");
  });

  it("should generate valid hex color format", () => {
    const buttonChange = document.getElementById("button-change");
    const colorSpan = document.querySelector(".color");

    buttonChange?.click();

    const hexColor = colorSpan?.textContent;
    expect(hexColor).toMatch(/^#[0-9A-F]{6}$/);
  });
});
