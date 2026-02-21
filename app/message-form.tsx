"use client";

import { useState } from "react";
import { supabase } from "./supabase";

export default function MessageForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("sending");
    const { error } = await supabase.from("messages").insert({ message });

    if (error) {
      setStatus("error");
    } else {
      setMessage("");
      setStatus("sent");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-full">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="all message are anonymous"
        rows={3}
        className="resize-none bg-transparent border border-foreground/20 p-2 text-sm w-full"
      />
      <button
        type="submit"
        disabled={status === "sending" || !message}
        className="self-start text-sm underline underline-offset-2 disabled:opacity-50"
      >
        {status === "sending" ? "sending..." : "send"}
      </button>
      {status === "sent" && <p className="text-sm">message sent :)</p>}
      {status === "error" && <p className="text-sm">something went wrong :(</p>}
    </form>
  );
}
