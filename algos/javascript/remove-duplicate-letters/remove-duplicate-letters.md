# Remove duplicate letters from a string

Given a string, remove letters having a lowercase letter followed by same uppercase letter and vice-versa and then return a new string with those characters removed.

Example 1:

```js
Input: abcCkDdppGGa;
Output: abkppGGa;
```

Explanation:

- cC is one such pair where same lowercase and uppercase letters are repeated.
- Dd is one such pair where same uppercase and lowercase letters are repeated.

Example 2:

```js
Input: jHYti;
Output: jHYti;
```

Explanation:

- Since there are no pairs where same lowercase and uppercase letters repeated adjacently no characters were removed and the original string has been returned.

## Function signature

```js
/**
 * @param str
 * @returns {string}
 */
function removePairDuplicate(str) {}

console.log(removePairDuplicate('abcCkDdppGGa'));
console.log(removePairDuplicate('jHYti'));
```

Note: This is a Google Phone screen question.
