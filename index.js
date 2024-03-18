// Write your code in this file!
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const upperCaseCurrentUser = currentUser.toUpperCase(); // sets upperCaseCurrentUser to currentUser but in ALL CAPS
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`; //${currentUser.slice(0, 1)} - produces first character [IF THEY WANTED THE FIRST 2 CHARACTERS USE (0, 2) INSTEAD AND SO ON]

// ...., ${currentUser}!`  IS A SHORTCUT FOR ['.....,' + currentUser + '!']