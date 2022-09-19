
const dates = document.querySelector("#birth-date");
const outputBox = document.querySelector("#output");
const chkButton = document.querySelector("#check-button");






function reverseStr(str) {


    var splitStr = str.split('');
    var revSplitStr = splitStr.reverse();
    console.log(revSplitStr)
    var joinRevSplitStr = revSplitStr.join('');
    console.log(joinRevSplitStr);
    return joinRevSplitStr;
  }


function isStrPalindrome(str) {
    var joinRevSplitStr = reverseStr(str);
    return str === joinRevSplitStr;
  }



function dateToString(date) {
      var dateToString = { day: '', month: '', year: '' };
    if (date.day < 10) { dateToString.day = '0' + date.day; }
    else { dateToString.day = date.day.toString(); }
  
    if (date.month < 10) { dateToString.month = '0' + date.month; }
    else { dateToString.month = date.month.toString(); }
  
    dateToString.year = date.year.toString();
  
    return dateToString;
  }
  
//   var dateStr = dateToString(date);
  




   //   console.log(reverseStr('race'));
//   var date={
//     day:2,
//     month:3,
//     year:2032,
//          }
  
  
  
  
//   console.log(isStrPalindrome('race'))
  
  
  
function getAllDateFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var yyddmm = date.year.slice(-2) + date.day + date.month;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    return [ddmmyyyy, mmddyyyy, yyyymmdd, yyddmm, ddmmyy, mmddyy];
  }
  
  
  
 
//   console.log(getAllDateFormats(dateStr));
  
  
function checkListForPalindrome(date) {
    var listOfPalindrome = getAllDateFormats(date);
    var palindromeList = [];
    for (var i = 0; i <listOfPalindrome.length; i++) {
      var result=isStrPalindrome(listOfPalindrome[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }
  
//   console.log(listForPalindrome(dateStr))





  
function leapYear(year){
  if(year%400===0){
    return true;}
  
  if (year%100===0){
    return false;
  } 
  
  if(year%4===0){
    return true;
  }
   return false;           // for any other condition 
  }
  
  
//   console.log (leapYear(2004));
  
  
  
function getNextDate(date){
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;  
  var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
  if(month===2){
    if(year===leapYear){
      if(day>29){
        day=1;
        month=3;
      }
    
    }
    
    else{
      if(day>28){
        day=1;
        month=3;
      }
      
    } 
  }
    else{
      if(day>daysInMonth[month-1]){
        day=1;
        month++ ;
      }
      
      }
  
  if(month>12){
    month=1;
    year++;
  }
    return{
      day:day,
      month:month,
    year:year,
    }
  }
  
  
//   console.log(getNextDate(date))
  
  function nextPalindromeDate(date){
   
    var ctr = 0;  
    var nextDate=getNextDate(date);
    // var result=outputBox.innerText;
                     //a counter for calculating days
  
    while(1){
    ctr++;

    var isNextPalindromeDate = checkListForPalindrome(nextDate);
      
      if(isNextPalindromeDate){
        break;
      }
      nextDate=getNextDate(nextDate);
    }
    return [ctr,nextDate];
  }
   
  
  
//   console.log(nextPalindromeDate(date))

function final(){

var bdayStr=dates.value ;

if(bdayStr !== ''){
    var inputDate = bdayStr.split('-');
    var date={day:inputDate[2],
        month:inputDate[1],
        year:inputDate[0]
    
    }
    var isPalindrome=checkListForPalindrome(date);
    var nextPalindromeBday=nextPalindromeDate(date);
    if(isPalindrome){
        outputBox.innerText="Yay your birthday is a palindrome";
    }
    else{
        var [ctr,nextDate] = nextPalindromeBday;
        outputBox.innerText='Next palindrome birthdate is ${nextDate.day}-${nextDate.month}-${nextDate.year} and you missed it by ${ctr} days'
    }
   
}


}



  chkButton.addEventListener("click",final);