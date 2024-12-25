export function showAdditional(additional) {
  const additionals = Object.entries(additional);

  const information = additionals.map(additional => {
    return `${additional[0]}: ${additional[1]}`
  }).join('\n');

  alert(information)
}