import { render, screen, fireEvent } from "@testing-library/react"
import NavBar from "./NavBar" // Pastikan path ini sesuai dengan struktur file Anda

describe("NavBar Component", () => {
  test("renders NavBar with title and search form", () => {
    render(<NavBar search={() => {}} />) // Gunakan fungsi pencarian dummy

    // Tes keberadaan judul
    const title = screen.getByTestId("my-recipe")
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent("My Recipe")

    // Tes keberadaan form pencarian
    const searchForm = screen.getByTestId("form-search")
    expect(searchForm).toBeInTheDocument()

    // Tes keberadaan input dan button dalam form
    const input = screen.getByPlaceholderText("Recipe Name")
    expect(input).toBeInTheDocument()

    const button = screen.getByRole("button", { name: /search/i })
    expect(button).toBeInTheDocument()
  })

  test("calls search function on form submit", () => {
    const searchMock = jest.fn() // Buat mock untuk fungsi pencarian
    render(<NavBar search={searchMock} />)

    // Temukan input dan button
    const input = screen.getByPlaceholderText("Recipe Name")
    const button = screen.getByRole("button", { name: /search/i })

    // Simulasi mengetik di input
    fireEvent.change(input, { target: { value: "Pasta" } })

    // Simulasi mengklik tombol submit
    fireEvent.click(button)

    // Atau, bisa juga menggunakan fireEvent.submit() pada form
    // fireEvent.submit(screen.getByTestId("form-search"));

    // Pastikan fungsi search dipanggil dengan nilai input
    expect(searchMock).toHaveBeenCalledWith("Pasta")
  })
})
