export default function getSpecialAttack({
  id, name, icon, description = 'Описание недоступно',
}) {
  const result = [];
  result.push({
    id, name, icon, description,
  });
  return result;
}
