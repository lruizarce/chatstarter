"use client";
import { api } from "@/convex/_generated/api";
import { SignInButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { useState } from "react";

export default function Home() {
  const messages = useQuery(api.functions.messages.list);
  const createMessage = useMutation(api.functions.messages.create);
  const [input, setInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMessage({ sender: "Alice", content: input });
    setInput("");
  };

  return (
    <div>
      <div>
        {messages?.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}</strong>: {message.content}
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            id="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
  );
}
