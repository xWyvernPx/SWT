console.log(""); // Same as System.out.println() in Java

describe("hehe", () => {
  test.each([
    [1, 2],
    [2, 4],
  ])("double(%d)", (input, expected) => {
    expect(input).toBe(expected);
  });
})

