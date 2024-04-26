import { safeFetch } from "../lib";
import { z } from "zod";

export const check = (name: string) =>
  safeFetch({
    method: "GET",
    url: `http://localhost:3000/api/check?name=${name}`,
    schema: z.object({ exists: z.boolean() }),
  });

export const signup = async (user: {
  id: number;
  name: string;
  pricePerNightInUSD: number;
}) =>
  safeFetch({
    method: "POST",
    url: `http://localhost:3000/api/signup`,
    schema: z.object({ id: z.number() }),
    payload: user,
  });
