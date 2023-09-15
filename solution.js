// with my comments 


class LongestSubstring {
  findLongestSubstring(s) {

    // currentSubstring, to track the current substring;
    // maxLength, to keep the track of the length of the longest substring without repetition;
    let currentSubstring = "";
    let maxLength = 0;

    // for loop, is iterating over each character in the s string
    for (let i = 0; i < s.length; i++) {

        // checks if the current character in the s string is present in the currentSubstring
        let isCharacterPresent = currentSubstring.includes(s[i]);

        // it checks wheather the current character from s string already exists in the currentSubstring, 
        // if yes, indexOf finds the position of that character in currentSubstring and now it is stored in position and updates the currentSubstring (ensures that there won't be any repeated characters)
        if (isCharacterPresent) {
            let position = currentSubstring.indexOf(s[i]);
            currentSubstring = currentSubstring.slice(position + 1);
        }
        
        // adds the characters of s to the end of the currentSubstring 
        // maxLength is updates by comparing its current value with the length of currentSubstring
        currentSubstring += s[i];
        maxLength = Math.max(maxLength, currentSubstring.length);
      
    }
    return maxLength;
}
}
      
      
      
      
// without comments


class LongestSubstring {
    findLongestSubstring(s) {
  
      let currentSubstring = "";
      let maxLength = 0;
  
      for (let i = 0; i < s.length; i++) {
  
      
          let isCharacterPresent = currentSubstring.includes(s[i]);
  
          if (isCharacterPresent) {
              let position = currentSubstring.indexOf(s[i]);
              currentSubstring = currentSubstring.slice(position + 1);
          }     
        
          currentSubstring += s[i];
          maxLength = Math.max(maxLength, currentSubstring.length);
        
      }
      return maxLength;
  }
  }