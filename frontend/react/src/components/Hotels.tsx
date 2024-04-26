import { z } from "zod";

interface Hotel {
  id: number;
  name: string;
  pricePerNightInUSD: number;
}

interface QueryParameters {
  min?: number;
  max?: number;
  includes?: string;
}

const HotelSchema = z.object({
  id: z.number(),
  name: z.string(),
  pricePerNightInUSD: z.number(),
});

const QueryParametersSchema = z.union([
  z.object({ min: z.number(), max: z.number() }),
  z.object({ includes: z.string() }),
]);

export { HotelSchema, QueryParametersSchema };    export type { Hotel, QueryParameters };

