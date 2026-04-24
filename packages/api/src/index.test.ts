import { describe, it, expect } from "vitest";
import { UserSchema, fetchUser } from "./index";

describe("UserSchema", () => {
  it("should validate a correct user", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
    };
    expect(UserSchema.parse(user)).toEqual(user);
  });

  it("should fail on invalid email", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "invalid-email",
    };
    expect(() => UserSchema.parse(user)).toThrow();
  });
});

describe("fetchUser", () => {
  it("should throw if id is empty", async () => {
    await expect(fetchUser("")).rejects.toThrow();
  });

  it("should return user for valid id", async () => {
    const user = await fetchUser("123");
    expect(user.id).toBe("123");
  });
});
