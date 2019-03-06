export default function cleanseString(inString) {
  let temp = inString;
  temp = temp.replace(/&amp;/gi, "&");
  temp = temp.replace(/&quot;/gi, "'");
  temp = temp.replace(/&#39;/gi, "'");
  console.log(temp);
  return temp;
}