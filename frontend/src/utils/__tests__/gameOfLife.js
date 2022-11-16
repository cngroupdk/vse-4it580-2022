// 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// 2. Any live cell with two or three live neighbours lives on to the next generation.
// 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function isAlive(alive, neighbours) {
  if (alive) {
    return neighbours > 1 && neighbours < 4;
  }
  return neighbours === 3;
}

function getNeighboursCoordinates() {
  return [
    [1, 0],
    [-1, 0],
  ];
}

describe('Get neighbours coordinates', () => {
  it('jahoda🍓', () => {
    expect(getNeighboursCoordinates(0, 0)) //
      .toEqual(
        expect.arrayContaining([
          [-1, 0],
          [1, 0],
        ]),
      );
  });
});

describe('4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
  it('dead becomes alive if it has 3 live neighbours', () => {
    expect(isAlive(false, 3)).toBe(true);
  });
  it('stays dead if it has 2 live neighbours', () => {
    expect(isAlive(false, 2)).toBe(false);
  });
  it('stays dead if it has 4 live neighbours', () => {
    expect(isAlive(false, 4)).toBe(false);
  });
});

describe('3. Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
  it('dies if 4 neighbours around', () => {
    expect(isAlive(true, 4)).toBe(false);
  });
  it('dies if 5 neighbours around', () => {
    expect(isAlive(true, 5)).toBe(false);
  });
});

describe('2. Any live cell with two or three live neighbours lives on to the next generation.', () => {
  it('lives if it has 2 live neighbours', () => {
    expect(isAlive(true, 2)).toBe(true);
  });
});

describe('1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.', () => {
  it('dies if it has 0 live neighbours', () => {
    expect(isAlive(true, 0)).toBe(false);
  });
  it('dies if it has 1 live neighbours', () => {
    expect(isAlive(true, 1)).toBe(false);
  });
});
