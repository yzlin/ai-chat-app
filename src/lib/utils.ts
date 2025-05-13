import { createIdGenerator } from "ai";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const idGenerators = {
  chat: createIdGenerator({
    prefix: "chat",
  }),
  message: createIdGenerator({
    prefix: "msg",
  }),
};

export function generateId(type: "chat" | "message") {
  const generate = idGenerators[type];
  return generate();
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
