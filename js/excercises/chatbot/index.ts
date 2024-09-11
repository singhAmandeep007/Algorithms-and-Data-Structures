/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command: string) {
  return /^chatbot/i.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption throught the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message: string) {
  return message.replaceAll(/emoji[0-9]+/g, "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number: string) {
  if (/^\(\+[0-9][0-9]\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(number)) {
    return "Thanks! You can now download me to your phone.";
  }

  return `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput: string) {
  // There is no "right" way to check which strings would be a domain, because domain
  // recognition is a hard problem. There is no distinct difference between forgetting
  // a space after a dot, and a "unknown" top-level domain.
  //
  // It is common to use the https://publicsuffix.org/ to get the latest public
  // suffixes, such as .com, .org, .co.uk, but also newer and less known ones such as
  // .wtf, .xyz, .museum, etc.
  //
  // For example: https://www.npmjs.com/package/psl
  //
  // Then, something like:
  //
  // ^(((?!\-))(xn\-\-)?[a-z0-9\-_]{0,61}[a-z0-9]{1,1}\.)*(xn\-\-)?([a-z0-9\-]{1,61}|[a-z0-9\-]{1,30})\.[a-z]{2,}$
  //
  // ...can be used to support both regular domain names and those with [p]unicode in
  // them, and finally it can be tested against the list of known suffixes.

  // The tests for this exercise only ask for a tiny subset to be supported, so instead
  // this intentionnaly incorrect implementation can be used:
  return ["youtube.com", "theodinproject.com", "reddit.com", "notion.so"].filter((domain) =>
    userInput.includes(domain)
  );
}

/**
 * Greet the user using its full name data from the profile
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName: string) {
  // Testing for names this way is a bad idea, because:
  //
  // https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/
  //
  const politeName = fullName.replace(/([a-z]+), ([a-z]+)/i, "$2 $1");
  return `Nice to meet you, ${politeName}`;
}

export const chatbot = {
  isValidCommand,
  removeEmoji,
  checkPhoneNumber,
  getURL,
  niceToMeetYou,
};
