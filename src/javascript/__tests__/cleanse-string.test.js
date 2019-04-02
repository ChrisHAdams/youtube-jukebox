import CleanseString from '../cleanse-string';

test(`Cleanse String should replace &amp; with & `, () => {
  expect(CleanseString('Adam &amp; the ants')).toBe('Adam & the ants')
})

test(`Cleanse String should replace &quot; with ' `, () => {
  expect(CleanseString('String containing &quot;quoted string&quot;.')).toBe("String containing 'quoted string'.")
})

test(`Cleanse String should replace &#39; with ' `, () => {
  expect(CleanseString('String containing &#39;quoted string&#39;.')).toBe("String containing 'quoted string'.")
})

test(`Cleanse String should replace multiple html codes. `, () => {
  expect(CleanseString('String&amp;containing &#39;quoted&quot;string&#39;.')).toBe("String&containing 'quoted'string'.")
})