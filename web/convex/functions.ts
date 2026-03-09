import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getStatus = query({
  args: {},
  handler: async (ctx) => {
    return { status: "Online", timestamp: Date.now() };
  },
});
