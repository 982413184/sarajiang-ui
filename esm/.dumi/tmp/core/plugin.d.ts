import { PluginManager } from 'umi';
export declare function getPlugins(): {
    apply: any;
    path: string | undefined;
}[];
export declare function getValidKeys(): string[];
export declare function createPluginManager(): PluginManager;
export declare function getPluginManager(): any;
