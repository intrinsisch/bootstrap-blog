import { Component, createSignal } from "solid-js";

export const Navbar: Component = () => {
  const [collapsed, setCollapsed] = createSignal(true);

  return (
    <nav class="navbar navbar-expand-lg sticky-top bg-warning">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold font-monospace text-uppercase" href="#">
          Bootstrap&#92;Blog
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-expanded={collapsed() ? "false" : "true"}
          aria-label="Toggle navigation"
          onClick={() => {
            setCollapsed((c) => !c);
          }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`collapse navbar-collapse ${collapsed() || "show"}`}>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
