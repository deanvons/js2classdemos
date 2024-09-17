const sum = require("./caclulator");


test("Should add 1 + 1 then give me 2", () => {
  expect(sum(1, 1)).toBe(2);
});

