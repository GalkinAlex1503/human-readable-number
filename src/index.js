module.exports = function toReadable(number) {
    const workArr = number.toString().split('').reverse().map(n => Number(n));
    const result = [];
    const firstTens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const secondTens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundred = "hundred";
    const thousand = "thousand";
    const million = "million";

    // from 0 to 9
    if (number < 10) {
        result.push(firstTens[number]);
        return result.join("");
    }

    // from 10 to 19
    if (number < 20) {
        result.push(secondTens[number - 10]);
        return result.join("");
    }
    // cycle by numbers
    for (let pos_digit = 0; pos_digit < workArr.length; pos_digit += 1) {
        if (pos_digit === 0) {
            // from 10 to 19 special an algorithm
            if (workArr[pos_digit] > 0 && workArr[pos_digit + 1] !== 1) {
                result.push(firstTens[workArr[pos_digit]]);
            }
        }

        if (pos_digit === 1) {
            if (workArr[pos_digit] > 0) {
                // from 10 to 19 special an algorithm
                if (workArr[pos_digit] === 1) {
                    result.push(secondTens[workArr[pos_digit - 1]]);
                } else {
                    result.push(tens[workArr[pos_digit]]);
                }
            }
        }

        if (pos_digit === 2) {
            if (workArr[pos_digit] > 0) {
                result.push(firstTens[workArr[pos_digit]] + " " + hundred);
            }
        }

        if (pos_digit === 3) {
            if (workArr[pos_digit] > 0) {
                result.push(firstTens[workArr[pos_digit]] + " " + thousand);
            }
        }
    }
    return result.reverse().join(" ");
}



