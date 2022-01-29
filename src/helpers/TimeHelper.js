export function defineGridPosition(time) {
  const [hours, minutes] = time.split(":").map(string => Number(string));
  const position = (hours-9)*2 + (minutes/30) + 1;
  
  return position;
}
