import { zod as z } from "/home/jr0349/learning/sarajiang-ui/node_modules/@umijs/utils";
import { IConfigFromPluginsJoi } from "./pluginConfigJoi.d";
declare const IConfig: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
type IConfigTypes = z.infer<typeof IConfig>;
export type IConfigFromPlugins = IConfigFromPluginsJoi & Partial<IConfigTypes>;
export {};
