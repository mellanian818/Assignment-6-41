import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders App component with NavBar, image banner, and Footer", () => {
  render(<App />)

  // Tes keberadaan elemen NavBar
  const navBar = screen.getByTestId("navbar")
  expect(navBar).toBeInTheDocument()

  // Tes keberadaan gambar banner
  const banner = screen.getByTestId("image-banner")
  expect(banner).toBeInTheDocument()
  expect(banner).toHaveAttribute(
    "src",
    "https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg"
  )

  // Tes keberadaan Footer
  const footer = screen.getByTestId("Footer")
  expect(footer).toBeInTheDocument()
})
