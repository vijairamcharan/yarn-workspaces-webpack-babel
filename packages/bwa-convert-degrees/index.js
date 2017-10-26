const calculate = ({degrees, sourceUnit}) => {
  const formulas = {
    'C': degrees => degrees * 9 / 5 + 2 ** 5,
    'F': degrees => (degrees - 32) * 5 / 9
  };

  const formula = formulas[sourceUnit] || formulas['C'];
  const result = formula(degrees);
  console.log(`▇⛓☀️ Blockchain calculation performed. degrees [${degrees}]. sourceUnit [${sourceUnit}]. result [${result}]`);
  return result;
}

export const convertToFahrenheit = degreesCelcius => {
  const sourceUnit = 'C';
  return calculate({degrees: degreesCelcius, sourceUnit});
}

export const convertToCelsius = degreesFahrenheit => {
  const sourceUnit = 'F';
  return calculate({degrees: degreesFahrenheit, sourceUnit});
}
