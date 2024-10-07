import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom" // Memperbaiki cara impor
import Card from "./Card"

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
}

test("renders the Card component with given props", () => {
  render(<Card el={el} />)

  // Test untuk elemen gambar
  const imgRecipe = screen.getByTestId("img-recipe-1")
  expect(imgRecipe).toHaveAttribute("src", "https://via.placeholder.com/150")
  expect(imgRecipe).toHaveAttribute("alt", "Test Recipe")

  // Test untuk nama resep
  const titleRecipe = screen.getByTestId("title-recipe-1")
  expect(titleRecipe).toHaveTextContent("Test Recipe")

  // Test untuk rating resep
  const ratingRecipe = screen.getByTestId("rating-recipe-1")
  expect(ratingRecipe).toHaveTextContent("4.5")

  // Test untuk tautan
  const linkRecipe = screen.getByTestId("link-recipe-1")
  expect(linkRecipe).toHaveAttribute("href", "https://dummyjson.com/recipes/1")
})
