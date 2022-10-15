import { act, render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { userContext } from '../App';
import axios from "axios";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));
jest.mock("axios");

describe("Login", () => {
    let page;
    let currentUser;
    let mockUserState = [
        () => currentUser,
        (user) => currentUser = user
    ];

    const expectedUser = {
        id: 1,
        name: "Test",
        email: "test@test.com"
    };


    beforeEach(() => {
      currentUser = undefined;
      page = render(
        <div>
          <userContext.Provider value={mockUserState}>
            <Login />
          </userContext.Provider>
        </div>);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should login succeeed", async () => {
      // Mocck axios
      axios.get.mockClear();
      axios.get.mockResolvedValueOnce({ data: expectedUser });

      // Get input fields
      let emailInput = screen.getByLabelText("Email");
      let passwordInput = screen.getByLabelText("Password");
      let loginButton = screen.getByRole("button", { name: "Login" });

      // Simulate input
      await act(async () => {  
        fireEvent.change(emailInput, { target: { value: expectedUser.email } });
        fireEvent.change(passwordInput, { target: { value: "123456" } });
        fireEvent.click(loginButton);
      });

      // Check if values are correct
      expect(currentUser).toEqual(expectedUser);
    });

    it("Should login fail", async () => {
      // Mocck axios
      axios.get.mockClear();
      axios.get.mockRejectedValueOnce();

      // Get input fields
      let emailInput = screen.getByLabelText("Email");
      let passwordInput = screen.getByLabelText("Password");
      let loginButton = screen.getByRole("button", { name: "Login" });

      // Simulate input
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: expectedUser.email } });
        fireEvent.change(passwordInput, { target: { value: "123456" } });
        fireEvent.click(loginButton);
      });

      // Check if values are correct
      expect(currentUser).toEqual(undefined);
    });
});

// test('renders login page', () => {
//     render(<Login />);
//     const linkElement = screen.getByText(/Login/i);
//     expect(linkElement).toBeInTheDocument();
// });

//test('login button is disabled when email and password are empty', () => {
//    render(<Login />);
//    const loginButton = screen.getByText(/Login/i);
//    expect(loginButton).toBeDisabled();
//});