let Phrase = require("rightmeow-palindrome")

function palindromeTester(event) {
  event.preventDefault()

  let phrase = new Phrase(string)
  let palindromeResult = document.querySelector("#palindromeResult")

  if (phrase.isPalindrome()) {
    // alert(`"${phrase.content} is a palindrome!"`)
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome`
  } else {
    // alert(`"${phrase.content}" is NOT a palindrome.`)
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome`
  }
}

docment.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester")
  tester.addEventListener("submit", function() {
    palindromeTester(event)
  })
})
