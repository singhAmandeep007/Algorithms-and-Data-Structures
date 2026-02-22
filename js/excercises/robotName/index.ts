/**
 *
 * Manage robot factory settings.
 * When a robot comes off the factory floor, it has no name.
 * The first time you turn on a robot, a random name is generated in the format of two uppercase letters followed by three digits, such as RX837 or BC811.
 * Every once in a while we need to reset a robot to its factory settings, which means that its name gets wiped. The next time you ask, that robot will respond with a new random name.
 * The names must be random: they should not follow a predictable sequence. Using random names means a risk of collisions. Your solution must ensure that every existing robot has a unique name.
 */

// ---------------------------------------------------------------------------
// Solution 1 — Rejection sampling (simple, but O(n²) worst-case as namespace fills)
// ---------------------------------------------------------------------------
export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string;

  constructor() {
    this._name = Robot.generateUniqueName();
  }

  public get name(): string {
    if (!this._name) {
      this._name = Robot.generateUniqueName();
    }
    return this._name;
  }

  public resetName() {
    this._name = "";
  }

  public static releaseNames() {
    Robot.usedNames.clear();
  }

  private static generateUniqueName() {
    let newName: string;

    do {
      newName = Robot.generateRandomName();
    } while (Robot.usedNames.has(newName));

    Robot.usedNames.add(newName);

    return newName;
  }

  private static generateRandomName() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";

    return (
      letters[Math.floor(Math.random() * letters.length)] +
      letters[Math.floor(Math.random() * letters.length)] +
      digits[Math.floor(Math.random() * digits.length)] +
      digits[Math.floor(Math.random() * digits.length)] +
      digits[Math.floor(Math.random() * digits.length)]
    );
  }
}

// ---------------------------------------------------------------------------
// Solution 2 — Pre-shuffled pool (O(1) per name, zero collisions)
//
// Pre-generates all 676,000 possible names and Fisher-Yates shuffles them.
// Drawing from the pool is O(1) with guaranteed uniqueness — no retry spin
// as the namespace fills up.
// ---------------------------------------------------------------------------
export class Robot2 {
  private static namePool: string[] = [];
  private static poolIndex: number = 0;
  private _name: string;

  constructor() {
    this._name = Robot2.acquireName();
  }

  public get name(): string {
    if (!this._name) {
      this._name = Robot2.acquireName();
    }
    return this._name;
  }

  public resetName() {
    this._name = "";
  }

  public static releaseNames() {
    Robot2.namePool = [];
    Robot2.poolIndex = 0;
  }

  private static acquireName(): string {
    if (Robot2.namePool.length === 0) {
      Robot2.namePool = Robot2.buildShuffledPool();
      Robot2.poolIndex = 0;
    }

    if (Robot2.poolIndex >= Robot2.namePool.length) {
      throw new Error("All robot names have been exhausted");
    }

    return Robot2.namePool[Robot2.poolIndex++];
  }

  private static buildShuffledPool(): string[] {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pool: string[] = [];

    for (let a = 0; a < 26; a++) {
      for (let b = 0; b < 26; b++) {
        for (let n = 0; n < 1000; n++) {
          pool.push(letters[a] + letters[b] + String(n).padStart(3, "0"));
        }
      }
    }

    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool;
  }
}
