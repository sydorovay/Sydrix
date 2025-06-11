import  ua  from '../src/translations/ua';

const checkDuplicates = (obj: Record<string, any>) => {
  const keys = Object.keys(obj);
  console.log('Усі ключі:', keys);  // Дивимось ключі
  const duplicates = keys.filter((key, index) => keys.indexOf(key) !== index);
  const uniqueDuplicates = [...new Set(duplicates)];
  console.log('Дублікат ключів:', uniqueDuplicates);
  return uniqueDuplicates;
};

const result = checkDuplicates(ua);
console.log('Результат:', result);
