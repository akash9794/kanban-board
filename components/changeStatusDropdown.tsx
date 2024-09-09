"use client";
import { useState } from "react";

export function ChangeStatusDropdown() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn p-0 h-0 bg-inherit border-none shadow-none">
        <svg
          height="20"
          viewBox="0 0 48 48"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
          <path d="M0-.75h48v48h-48z" fill="none" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a className="border-b-2 rounded-b-none">Change Status</a>
        </li>
        <li>
          <a>Todo</a>
        </li>
        <li>
          <a>In Progress</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>
    </div>
  );
}
