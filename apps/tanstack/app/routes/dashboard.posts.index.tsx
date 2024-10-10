import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/dashboard/posts/")({
  component: DashboardPostsIndexComponent,
});

function DashboardPostsIndexComponent() {
  return <div className="p-2">Select a post to view.</div>;
}
