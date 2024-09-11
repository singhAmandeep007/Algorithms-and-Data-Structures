import { beforeEach, afterEach, describe, it, expect, xit } from "@jest/globals";

import { chatbot } from ".";

describe("Chatbot", () => {
  it("should recognize a valid command", () => {
    expect(chatbot.isValidCommand("Chatbot, Do you understand this command?")).toBe(true);
    expect(chatbot.isValidCommand("CHATBOT, Is it okey if I shout at you?")).toBe(true);
    expect(chatbot.isValidCommand("chatbot, please tell me what is happening here.")).toBe(true);
  });
  it("should remove all emojis from a message", () => {
    expect(chatbot.removeEmoji("What was your name? emoji2134 Sorry I forgot about it.")).toBe(
      "What was your name?  Sorry I forgot about it."
    );
    expect(chatbot.removeEmoji("emoji5321 How about ordering emoji8921 ?")).toBe(" How about ordering  ?");
  });

  it("should validate a phone number", () => {
    expect(chatbot.checkPhoneNumber("(+34) 643-876-459")).toBe("Thanks! You can now download me to your phone.");
    expect(chatbot.checkPhoneNumber("(+49) 543-928-190")).toBe("Thanks! You can now download me to your phone.");
    expect(chatbot.checkPhoneNumber("322-787-654")).toBe("Oops, it seems like I can't reach out to 322-787-654");
    expect(chatbot.checkPhoneNumber("4355-67-274")).toBe("Oops, it seems like I can't reach out to 4355-67-274");
  });

  it("should get the URL from a user input", () => {
    expect(chatbot.getURL("You can check more info on youtube.com")).toStrictEqual(["youtube.com"]);
    expect(chatbot.getURL("There is a cool website called theodinproject.com to learn from")).toStrictEqual([
      "theodinproject.com",
    ]);
    expect(chatbot.getURL("That was from reddit.com and notion.so")).toStrictEqual(["reddit.com", "notion.so"]);
  });

  it("should greet user by its proper name", () => {
    expect(chatbot.niceToMeetYou("Sanz, Pablo")).toBe("Nice to meet you, Pablo Sanz");
    expect(chatbot.niceToMeetYou("Stephan, Sandro")).toBe("Nice to meet you, Sandro Stephan");
  });
});
