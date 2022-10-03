
//reversing string

function reverseStr(str) {

  return str.split('').reverse().join('');

  // var listOfChars = str.split("");
  // var reverseListOfChars = listOfChars.reverse("");
  // var reversedStr = reverseListOfChars.join("");
  // return reversedStr;
}
// console.log(reverseStr("hello"))

//checking palindrome

function isPalindrome(str) {
  var reverse = reverseStr(str);

  return str === reverse;

  // if(str===reverse){
  //   return "Yay! it is a palindrome";
  // }
  // return "Nope it is not a palindrome";
}

// console.log(isPalindrome("racecar"))

var date = {
  day: 25,
  month: 2,
  year: 2020,
}


function convertDateToString(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (date.day < 10) { dateStr.day = "0" + date.day; }
  else { dateStr.day = date.day.toString(); }
  if (date.month < 10) { dateStr.month = "0" + date.month; }
  else { dateStr.month = date.month.toString(); }
  dateStr.year = date.year.toString();

  return dateStr;
}

// console.log(convertDateToString(date))

function allDateFormats(date) {
  var dateStr = convertDateToString(date);
  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// console.log(allDateFormats(date))

function checkDatesForPalindrome(date) {
  var dateList = allDateFormats(date);
  var palindromeList = [];

  for (var i = 0; i < dateList.length; i++) {
    var result = isPalindrome(dateList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}

console.log(checkDatesForPalindrome(date))

function isLeapYear(date) {
  var year = date.year;
  {
    if (year % 400 === 0) {
      return true;
    }
    if (year % 100 === 0) {
      return false;
    }

    if (year % 4 === 0) {
      return true;
    }
    return false;
  }
}
// console.log(isLeapYear(date))



function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    }
    else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  }
  else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }
  if (month > 12) {

    month = 1;
    year++;
  }

  return {

    day: day,
    month: month,
    year: year,
  }
}

// console.log(getNextDate(date))

function getNextPalindromeDate(date) {

  var nextDate = getNextDate(date);
  var ctr = 0;
  while (1) {
    ctr++;
    // var nextDateStr = convertDateToString(nextDate);
    var isItPalindrome = checkDatesForPalindrome(nextDate);

    for (let i = 0; i < isItPalindrome.length; i++) {
      if (isItPalindrome[i]) {
        return [ctr, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);

  };
}



console.log(getNextPalindromeDate(date));


const input = document.querySelector("#inputer");
const result= document.querySelector("#resulter");
const button = document.querySelector("#buttoner");





console.log(date);
function final(){
  console.log(input.value);

  var enterDate = input.value;
  var enterDateStr = enterDate.split("-");

  console.log(enterDateStr);


 var inputDate = {
  day:Number(enterDateStr[2]),
  month:Number(enterDateStr[1]),
  year:Number(enterDateStr[0]),
 }

console.log(inputDate);

if(enterDate!==""){
  var inputPalindromeDate = checkDatesForPalindrome(inputDate);
  console.log(inputPalindromeDate)
  var nextPalindromeDate = getNextPalindromeDate(inputDate);

  for(let i=0;i<inputPalindromeDate.length;i++){
    // console.log(inputPalindromeDate[i])
  if(inputPalindromeDate[i]){
    break;
    result.innerText = "Yay it is a palindrome";

  }
  result.innerText = "nope it is a palindrome";
// result.innerText = "The next palindrome date is" + nextPalindromeDate[0] + " days on " + nextPalindromeDate[1];
  
};
}

}


button.addEventListener("click",final)