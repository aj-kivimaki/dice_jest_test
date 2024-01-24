# Test cases for Dice

## **constructor(upperBound)**

### 1. create a dice with no upper bound given, initilizes dice with upper bound 6

- maximumValue is 6
- minimumValue is 1
- dots is 0

### 2. create a dice with upper bound 2 - 20

- maximumValue is upper bound
- minimumValue is 1
- dots is 0

### 3. test the exceptions

- 0 throws `'upper bound is too small'`
- 1 throws `'upper bound is too small'`
- -1 throws `'upper bound is too small'`
- -10 throws `'upper bound is too small'`
- 21 throws `'upper bound is too big'`
- 'a' throws `'upper bound must be an integer'`
- '1' throws `'upper bound must be an integer'`
- 2.5 throws `'upper bound must be an integer'`

## Test cases for **roll()**

### 1. create dice with no upper bound

- if not rolled, dots is 0 (optional, is tested in an other test)
- when rolled the dots is:
  - greater than or equal to 1
  - less than or equal to 6

### 2. create dice with upper bound 20 (or 2...20)

- when rolled the dots is:
  - greater than or equal to 1
  - less than or equal to 20 (or upper bound)

## Test cases for **toString()**

- in both cases create a new dice (no upper bound given)
  - roll the dice. Compare resulting text with dots converted to text
  - do not roll the dice. Compare the result to `'Not rolled yet'`

## Testing getters (is done in other tests)

### minimumValue

expect it to be 1

### maximumValue

expect it to be the upper bound (2...20)

### dots

if not rolled, expect it to be 0
