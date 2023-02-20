import orderByProps from '../orderByProps';

test('order test', () => {
  const object = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const extentedData = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const keys = ['name', 'level'];
  const data = orderByProps(object, keys);
  expect(data).toEqual(extentedData);

  const extentedData2 = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  const dataWithUndefinedKeys = orderByProps(object, ['keys', 'key']);
  expect(dataWithUndefinedKeys).toEqual(extentedData2);
});
