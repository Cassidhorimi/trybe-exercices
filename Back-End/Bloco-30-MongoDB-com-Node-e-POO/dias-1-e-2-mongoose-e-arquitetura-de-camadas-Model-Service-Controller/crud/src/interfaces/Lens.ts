import { z } from 'zod';

const LensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type ILens = z.infer<typeof LensZodSchema>;

export default ILens;
export { LensZodSchema };