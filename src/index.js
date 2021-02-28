module.exports = 

function toReadable(number) {
    let words1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
            'eight', 'nine'
        ],
        words2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
            'seventeen', 'eighteen', 'nineteen'
        ],
        words3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let res = [];
    let str = number.toString();
    let flag = true;
    let count = parseInt(str[0]);
    if (number <= 9) //от 1 до 9
    {
        res.push(words1[number]);
        return res.join();
    }
    if (number <= 19 && number >= 9) // от 10 до 19
    {
        res.push(words2[number - 10]);
        return res.join();
    }
    if (number >= 20 && number <= 99) { // от 20 до 99
        res.push(words3[count - 2]);
        count = parseInt(str[1]);
        if (count != 0) {
            res.push(words1[count]);
        }
        return res.join(' ');
    }
    if (number>=100) {
         if (str.length == 3) {
            res.push(words1[count], 'hundred');
            }
        }
        count = parseInt(str[1]);
        if(count==0){
            count = parseInt(str[2]);
            if(count!=0){
            res.push(words1[count]);
            }
            return res.join(' ');
        }
        if(count>1){
            res.push(words3[count - 2]);
            count = parseInt(str[2]);
            if (count != 0) {
                res.push(words1[count]);
            }
            return res.join(' ');
        }
        if(count == 1){
            count = parseInt(str[2]);
            res.push(words2[count]);
            return res.join(' ');
        }

}
