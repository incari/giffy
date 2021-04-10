import React from "react";
import { Link } from "wouter";
import "./styles/Category.css"

export default function Category({ name, options = [] }) {
  return (
    <div className="category">
      <h3 className="category-title">{name}</h3>

      <ul className="category-list">
        {options.map((option) => (
          <li key={option}>
            <Link className="category-item" to={`/search/${option}`}>
            {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
