import React from 'react';
export declare function getRoutes(): Promise<{
    routes: {
        readonly "404": {
            readonly id: "404";
            readonly path: "*";
            readonly parentId: "DocLayout";
        };
        readonly "dumi-context-layout": {
            readonly id: "dumi-context-layout";
            readonly path: "/";
            readonly isLayout: true;
        };
        readonly DocLayout: {
            readonly id: "DocLayout";
            readonly path: "/";
            readonly parentId: "dumi-context-layout";
            readonly isLayout: true;
        };
        readonly "docs/getting-started": {
            readonly path: "getting-started";
            readonly id: "docs/getting-started";
            readonly parentId: "DocLayout";
        };
        readonly "docs/index": {
            readonly path: "";
            readonly id: "docs/index";
            readonly parentId: "DocLayout";
        };
        readonly "docs/help": {
            readonly path: "help";
            readonly id: "docs/help";
            readonly parentId: "DocLayout";
        };
        readonly "components/alert/index": {
            readonly id: "components/alert/index";
            readonly path: "components/alert";
            readonly parentId: "DocLayout";
        };
        readonly "demo-render": {
            readonly id: "demo-render";
            readonly path: "~demos/:id";
            readonly parentId: "dumi-context-layout";
        };
    };
    routeComponents: {
        '404': React.LazyExoticComponent<any>;
        'dumi-context-layout': React.LazyExoticComponent<React.ComponentType<any>>;
        DocLayout: React.LazyExoticComponent<React.FC<{}>>;
        'docs/getting-started': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/index': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/help': React.LazyExoticComponent<React.ComponentType<any>>;
        'components/alert/index': React.LazyExoticComponent<React.ComponentType<any>>;
        'demo-render': React.LazyExoticComponent<React.FC<{}>>;
    };
}>;
