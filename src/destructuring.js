export default function getSpecialAttack(object) {
  const result = [];
  for (let i = 0; i < object.special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = object.special[i];
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}
