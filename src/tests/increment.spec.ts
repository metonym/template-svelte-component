describe('increment', () => {
  it('increments correctly', () => {
    expect(increment(0)).toEqual(1);
  });
});

function increment(count: number) {
  return count + 1;
}
