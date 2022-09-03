/*Karan's company makes software that provides different features based on the version of operating system of the user.

For finding which version is more recent, Karan uses the following method:

function compareVersions (version1, version2) {
  return parseFloat(version1) >= parseFloat(version2);
}
While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

Karan's function fails for the new version:

compareVersions ("10.9", "10.10");       // returns true, while it should return false
Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

Help Karan write this function. Here are a few sample cases:

compareVersions("11", "10");                    // returns true
compareVersions("11", "11");                    // returns true
compareVersions("10.4.6", "10.4");              // returns true
compareVersions("10.4", "11");                  // returns false
compareVersions("10.4", "10.10");               // returns false
compareVersions("10.4.9", "10.5");              // returns false
It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.
*/

function compareVersions (version1, version2) {
    let v1 = version1.split(".")
    let v2 = version2.split(".")
    let boolArr = [];

    
    for (let i = 0; i <= v2.length - 1 || i <= v1.length -1; i++) {
      if (v1[i] == undefined) {
        v1.push(0)
      }
      if (v2[i] == undefined) {
        v2.push(0)
      }
    
      if (Number(v1[i]) > Number(v2[i])) {
        boolArr.push(true)
      } else if (Number(v1[i]) < Number(v2[i])) {
        boolArr.push(false)
      } else {
        boolArr.push("equal")
      }
    }
    
    
    if ((boolArr.includes(true) == true) && (boolArr.includes(false) == true)) {
        if (boolArr.indexOf(true) < boolArr.indexOf(false)) { 
          return true 
        } else {return false}
    } else if (boolArr.includes(false) == true) {
      return false
    } else {
      return true
    }
}