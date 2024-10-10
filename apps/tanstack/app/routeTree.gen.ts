/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as DashboardImport } from "./routes/dashboard";
import { Route as DashboardIndexImport } from "./routes/dashboard.index";
import { Route as DashboardPostsImport } from "./routes/dashboard.posts";
import { Route as DashboardPostsPostIdImport } from "./routes/dashboard.posts.$postId";
import { Route as DashboardPostsIndexImport } from "./routes/dashboard.posts.index";
import { Route as IndexImport } from "./routes/index";

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: "/dashboard",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const DashboardIndexRoute = DashboardIndexImport.update({
  path: "/",
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardPostsRoute = DashboardPostsImport.update({
  path: "/posts",
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardPostsIndexRoute = DashboardPostsIndexImport.update({
  path: "/",
  getParentRoute: () => DashboardPostsRoute,
} as any);

const DashboardPostsPostIdRoute = DashboardPostsPostIdImport.update({
  path: "/$postId",
  getParentRoute: () => DashboardPostsRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/dashboard": {
      id: "/dashboard";
      path: "/dashboard";
      fullPath: "/dashboard";
      preLoaderRoute: typeof DashboardImport;
      parentRoute: typeof rootRoute;
    };
    "/dashboard/posts": {
      id: "/dashboard/posts";
      path: "/posts";
      fullPath: "/dashboard/posts";
      preLoaderRoute: typeof DashboardPostsImport;
      parentRoute: typeof DashboardImport;
    };
    "/dashboard/": {
      id: "/dashboard/";
      path: "/";
      fullPath: "/dashboard/";
      preLoaderRoute: typeof DashboardIndexImport;
      parentRoute: typeof DashboardImport;
    };
    "/dashboard/posts/$postId": {
      id: "/dashboard/posts/$postId";
      path: "/$postId";
      fullPath: "/dashboard/posts/$postId";
      preLoaderRoute: typeof DashboardPostsPostIdImport;
      parentRoute: typeof DashboardPostsImport;
    };
    "/dashboard/posts/": {
      id: "/dashboard/posts/";
      path: "/";
      fullPath: "/dashboard/posts/";
      preLoaderRoute: typeof DashboardPostsIndexImport;
      parentRoute: typeof DashboardPostsImport;
    };
  }
}

// Create and export the route tree

interface DashboardPostsRouteChildren {
  DashboardPostsPostIdRoute: typeof DashboardPostsPostIdRoute;
  DashboardPostsIndexRoute: typeof DashboardPostsIndexRoute;
}

const DashboardPostsRouteChildren: DashboardPostsRouteChildren = {
  DashboardPostsPostIdRoute: DashboardPostsPostIdRoute,
  DashboardPostsIndexRoute: DashboardPostsIndexRoute,
};

const DashboardPostsRouteWithChildren = DashboardPostsRoute._addFileChildren(
  DashboardPostsRouteChildren,
);

interface DashboardRouteChildren {
  DashboardPostsRoute: typeof DashboardPostsRouteWithChildren;
  DashboardIndexRoute: typeof DashboardIndexRoute;
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardPostsRoute: DashboardPostsRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
};

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(DashboardRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/dashboard": typeof DashboardRouteWithChildren;
  "/dashboard/posts": typeof DashboardPostsRouteWithChildren;
  "/dashboard/": typeof DashboardIndexRoute;
  "/dashboard/posts/$postId": typeof DashboardPostsPostIdRoute;
  "/dashboard/posts/": typeof DashboardPostsIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/dashboard": typeof DashboardIndexRoute;
  "/dashboard/posts/$postId": typeof DashboardPostsPostIdRoute;
  "/dashboard/posts": typeof DashboardPostsIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/dashboard": typeof DashboardRouteWithChildren;
  "/dashboard/posts": typeof DashboardPostsRouteWithChildren;
  "/dashboard/": typeof DashboardIndexRoute;
  "/dashboard/posts/$postId": typeof DashboardPostsPostIdRoute;
  "/dashboard/posts/": typeof DashboardPostsIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/dashboard"
    | "/dashboard/posts"
    | "/dashboard/"
    | "/dashboard/posts/$postId"
    | "/dashboard/posts/";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/dashboard" | "/dashboard/posts/$postId" | "/dashboard/posts";
  id:
    | "__root__"
    | "/"
    | "/dashboard"
    | "/dashboard/posts"
    | "/dashboard/"
    | "/dashboard/posts/$postId"
    | "/dashboard/posts/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  DashboardRoute: typeof DashboardRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/posts",
        "/dashboard/"
      ]
    },
    "/dashboard/posts": {
      "filePath": "dashboard.posts.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/posts/$postId",
        "/dashboard/posts/"
      ]
    },
    "/dashboard/": {
      "filePath": "dashboard.index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/posts/$postId": {
      "filePath": "dashboard.posts.$postId.tsx",
      "parent": "/dashboard/posts"
    },
    "/dashboard/posts/": {
      "filePath": "dashboard.posts.index.tsx",
      "parent": "/dashboard/posts"
    }
  }
}
ROUTE_MANIFEST_END */
