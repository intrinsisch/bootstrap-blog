import { Component } from "solid-js";
import { BlogList } from "../blog/BlogList";
import { Sidebar } from "../side/Sidebar";

export const Main: Component = () => {
  return (
    <main class="bg-white py-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-sm-8">
            <BlogList />
          </div>
          <div class="col-sm-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
