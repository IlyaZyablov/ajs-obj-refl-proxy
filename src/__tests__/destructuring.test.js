import getSpecialAttack from '../destructuring';

test('destructuring test', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };

  for (let i = 0; i < character.special.length; i += 1) {
    const data = getSpecialAttack(character.special[i]);
    expect(Object.keys(data[0]).length).toBe(4);
  }
});
