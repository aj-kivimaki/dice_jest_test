# Dice class API

This is a Dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upperbound (included). The maximum upperbound is 20. The minimum upperbound is 2.

If the dice has not been rolled, the number of dots is 0. After the dice has been rolled, the dot count can not become zero again.

## Operations

### **constructor(upperBound)**

- initializes the dice with an upper bound that is passed as a parameter
- if no upper bound is given, the default will be 6
- initializes the dot count to 0

- if upper bound is not a number and not an integer, throw an exception

`'upper bound must be an integer'`

- if upper bound is not between 2 and 20, throw an exception
  - upper bound is greater than 20: `'upper bound is too big'`
  - upper bound is less than 2: `'upper bpund is too small'`

### methods

#### **roll()**

- rolls the dice
- when rolled, the dot count will become a random number between 1 and the upper bound
- returns nothing

#### **toSring()**

- return dot count as a text. For example `'4'`
- if the dice has not been rolled yet, returns a text `'Not rolled yet'`

### Getters

#### **dots**

- returns the number of dots

#### **minimumValue**

- returns the minimum value of dots. It should be 1.

#### **maximumValue**

- returns the upper bound of the dice.
