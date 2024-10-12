import { durationFormat } from "./durationFormat";

describe("Функция форматирования времени трека", () => {
  it("Правильно форматировет число в строку", () => {
    const result = durationFormat(5);
    expect(result).toBe("0:05");
  });
  it("Правильно форматировет 0 в строку", () => {
    const result = durationFormat(0);
    expect(result).toBe("0:00");
  });
});
