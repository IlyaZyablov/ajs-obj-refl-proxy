export default function orderByProps(object, [...props]) {
  // сортируем по алфавиту
  const orderedObject = {};
  Object.keys(object).sort().forEach((key) => {
    orderedObject[key] = object[key];
  });

  // создаём массив и добавляем в него только элементы с ключами props
  const result = [];
  for (let i = 0; i < props.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(orderedObject, props[i])) {
      result.push({ key: props[i], value: orderedObject[props[i]] });
      delete orderedObject[props[i]]; // удаляем добавленный элемент
    }
  }

  // добавляем остальные элементы
  for (const key in orderedObject) {
    if (Object.prototype.hasOwnProperty.call(orderedObject, key)) {
      result.push({ key, value: orderedObject[key] });
    }
  }

  return result;
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

orderByProps(obj, ['name', 'level']);
