import { describe, it, expect, vi } from "vitest";

// Mock external dependencies that fail in test environments
vi.mock("react-native", () => ({ Platform: { OS: "ios" } }));
vi.mock("expo-haptics", () => ({
  notificationAsync: vi.fn(),
  impactAsync: vi.fn(),
  selectionAsync: vi.fn(),
  NotificationFeedbackType: { Success: "success" },
  ImpactFeedbackStyle: { Medium: "medium" },
}));
vi.mock("better-auth", () => ({ betterAuth: vi.fn().mockReturnValue({}) }));

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
