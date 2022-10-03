
function reverseString(str) {

    var listOfChars = str.split('');
    var reversedListOfChars = listOfChars.reverse();
    var reversedString = reversedListOfChars.join('');
    return reversedString;
  }


function isStringPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
  }


function getDateAsString(date) {
      var dateInString = { day: '', month: '', year: '' };
    if (date.day < 10) { dateInString.day = '0' + date.day; }
    else { dateInString.day = date.day.toString(); }
  
    if (date.month < 10) { dateInString.month = '0' + date.month; }
    else { dateInString.month = date.month.toString(); }
  
    dateInString.year = date.year.toString();
  
    return dateInString;
  }
 
  
function getAllDateFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var yyddmm = date.year.slice(-2) + date.day + date.month;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy,yyddmm];    
  }
  


function checkPalindrome(date) {
    var dateFormatList = getAllDateFormats(date);
    var palindromeList = [];
    for (var i = 0; i < dateFormatList.length; i++) 
    {
      var result=isStringPalindrome(dateFormatList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }
  


  
function leapYear(year){
  if(year%400===0)
    return true;
  
  if (year%100===0)
    return false;
  
  
  if(year%4===0)
    return true;
                            //yaha } nahi hai 
   return false;           // for any other condition 
  }
  
  
  
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
  
  
  
//   function nextPalindromeDate(date){
   
//     var ctr = 0;  
//     var nextDate=getNextDate(date);
    
  
//     while(1){
//     ctr++;
//     var dateString=getDateAsString(nextDate);    //yaha aaya hai error
//     var resultList = checkPalindrome(dateString);
      
//       for(let i=0; i<resultList.length;i++){
// if(resultList[i]){
//   return[ctr,nextDate];
// }
// nextDate=getNextDate(nextDate);
//       }
//   }
   
  
var bdayInput = document.querySelector('#bday-input');
var showBtn = document.querySelector('#show-btn');
var resultDiv = document.querySelector('#result');

function final(){

var bdayString=bdayInput.value ;


if(bdayString !== ''){
    var inputDate = bdayString.split('-');
    var dd=inputDate[2];
     var mm=inputDate[1];
     var yyyy=inputDate[0];
    
var inputDate={
  day:Number(dd),
  month:Number(mm),
  year:Number(yyyy)                 //: ki jagah = use kar liya tha

};

    
    var isPalindrome=checkPalindrome(inputDate);
    // var nextPalindromeBday=nextPalindromeDate(inputDate);
    if(isPalindrome){
        resultDiv.innerText="Yay your birthday is a palindrome";
    }
    // else{
    //     var [ctr,nextDate] = nextPalindromeBday;
    //     outputBox.innerText='Next palindrome birthdate is ${nextDate.day}-${nextDate.month}-${nextDate.year} and you missed it by ${ctr} days'
    }
   
}


}



  showBtn.addEventListener("click",final);