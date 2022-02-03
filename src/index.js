function getHundreds(number) {
    return Math.floor(number / 100);
}

function getTens(number, hundreds) {
    return Math.floor((number - hundreds * 100) / 10);
}

function getHundredsText(hundreds) {
    let hundredsText = "";
    switch (hundreds) {
        case 9:
            hundredsText = "nine hundred";
            break;
        case 8:
            hundredsText = "eight hundred";
            break;
        case 7:
            hundredsText = "seven hundred";
            break;
        case 6:
            hundredsText = "six hundred";
            break;
        case 5:
            hundredsText = "five hundred";
            break;
        case 4:
            hundredsText = "four hundred";
            break;
        case 3:
            hundredsText = "three hundred";
            break;
        case 2:
            hundredsText = "two hundred";
            break;
        case 1:
            hundredsText = "one hundred";
            break;
        case 0:
            break;
    }
    return hundredsText;
}

function getTensText(number, hundreds, tens) {
    let tensText = "";
    if (tens > 1) {
        switch (tens) {
            case 9:
                tensText = "ninety";
                break;
            case 8:
                tensText = "eighty";
                break;
            case 7:
                tensText = "seventy";
                break;
            case 6:
                tensText = "sixty";
                break;
            case 5:
                tensText = "fifty";
                break;
            case 4:
                tensText = "forty";
                break;
            case 3:
                tensText = "thirty";
                break;
            case 2:
                tensText = "twenty";
                break;
        }
    } else if (tens === 1) {
        const tensResult = number - hundreds * 100;
        switch (tensResult) {
            case 19:
                tensText = "nineteen";
                break;
            case 18:
                tensText = "eighteen";
                break;
            case 17:
                tensText = "seventeen";
                break;
            case 16:
                tensText = "sixteen";
                break;
            case 15:
                tensText = "fifteen";
                break;
            case 14:
                tensText = "fourteen";
                break;
            case 13:
                tensText = "thirteen";
                break;
            case 12:
                tensText = "twelve";
                break;
            case 11:
                tensText = "eleven";
                break;
            case 10:
                tensText = "ten";
                break;
        }
    } else {
        tensText = "";
    }
    return tensText;
}

function getUnitsText(number, hundreds, tens) {
    let unitsText = "";
    if (tens > 1 || tens === 0) {
        const units = number - hundreds * 100 - tens * 10;
        switch (units) {
            case 9:
                unitsText = "nine";
                break;
            case 8:
                unitsText = "eight";
                break;
            case 7:
                unitsText = "seven";
                break;
            case 6:
                unitsText = "six";
                break;
            case 5:
                unitsText = "five";
                break;
            case 4:
                unitsText = "four";
                break;
            case 3:
                unitsText = "three";
                break;
            case 2:
                unitsText = "two";
                break;
            case 1:
                unitsText = "one";
                break;
            case 0:
                break;
        }
    } else {
        unitsText = "";
    }
    return unitsText;
}

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    const hundreds = getHundreds(number);
    const tens = getTens(number, hundreds);

    const arrayEl = [
        getHundredsText(hundreds),
        getTensText(number, hundreds, tens),
        getUnitsText(number, hundreds, tens),
    ];
    const arrayNotEmpty = arrayEl.filter((element) => {
        return element !== "";
    });
    return arrayNotEmpty.join(" ");
};
