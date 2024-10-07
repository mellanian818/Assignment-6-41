import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom" // Pastikan ini diimpor untuk penggunaan expect
import Footer from "./Footer" // Periksa jalur ini sesuai dengan struktur folder Anda

test("renders the Footer component with given props", () => {
  render(<Footer />) // Render komponen Footer

  // Test untuk footer text
  const footerText = screen.getByTestId("footer-text")
  expect(footerText).toHaveTextContent(
    "© 2024 Company, Inc. All rights reserved."
  ) // Periksa konten teks

  // Test untuk link Facebook
  const linkFacebook = screen.getByTestId("link-facebook")
  expect(linkFacebook).toHaveAttribute("href", "https://facebook.com") // Periksa atribut href

  // Test untuk link X (Twitter)
  const linkX = screen.getByTestId("link-x")
  expect(linkX).toHaveAttribute("href", "https://x.com") // Periksa atribut href

  // Test untuk link Instagram
  const linkInstagram = screen.getByTestId("link-instagram")
  expect(linkInstagram).toHaveAttribute("href", "https://instagram.com/") // Periksa atribut href
})
