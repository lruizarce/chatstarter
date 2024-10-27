import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// Query to list all messages from the "messages" collection
export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});

// Mutation to create a new message in the "messages" collection
export const create = mutation({
  args: {
    sender: v.string(), // The sender of the message
    content: v.string(), // The content of the message
  },
  handler: async (ctx, args) => {
    const { sender, content } = args;
    await ctx.db.insert("messages", { sender, content });
  },
});
