import { act, render, screen, fireEvent } from "@testing-library/react";
import Signup from "./Signup";
import { userContext } from '../App';
import axios from "axios";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));
jest.mock("axios");

describe("Signup", () => {
    let page;
    let currentUser;
    let mockUserState = [
        () => currentUser,
        (user) => currentUser = user
    ];

    const expectedUser = {
        id: 1,
        name: "Test",
        email: "test@test.com",
    };


    beforeEach(() => {
        currentUser = undefined;
        page = render(
            <div>
            <userContext.Provider value={mockUserState}>
                <Signup />
            </userContext.Provider>
            </div>);
        }
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should signup succeeed", async () => {
        // Mocck axios
        axios.post.mockClear();
        axios.post.mockResolvedValueOnce({ data: expectedUser });

        // Get input fields
        let emailInput = screen.getByLabelText("Email");
        let nameInput = screen.getByLabelText("Name");
        let passwordInput = screen.getByLabelText("Password");
        let signupButton = screen.getByRole("button", { name: "Register" });

        // Simulate input
        await act(async () => {  
            fireEvent.change(nameInput, { target: { value: expectedUser.name } });
            fireEvent.change(emailInput, { target: { value: expectedUser.email } });
            fireEvent.change(passwordInput, { target: { value: "12345678" } });
            fireEvent.click(signupButton);
        });

        // Check if values are correct
        expect(currentUser).toEqual(expectedUser);
    });

    it("Should signup fail", async () => {
        // Mocck axios
        axios.post.mockClear();
        axios.post.mockRejectedValueOnce();

        // Get input fields
        let nameInput = screen.getByLabelText("Name");
        let emailInput = screen.getByLabelText("Email");
        let passwordInput = screen.getByLabelText("Password");
        let signupButton = screen.getByRole("button", { name: "Register" });

        // Simulate input
        await act(async () => {  
            fireEvent.change(nameInput, { target: { value: expectedUser.name } });
            fireEvent.change(emailInput, { target: { value: expectedUser.email } });
            fireEvent.change(passwordInput, { target: { value: "" } });
            fireEvent.click(signupButton);
        });

        // Check if values are correct
        expect(currentUser).toEqual(undefined);
    });

    // check if register button fails if password is too short
    it("Should signup fail if password is too short", async () => {
        // Get input fields
        let nameInput = screen.getByLabelText("Name");
        let emailInput = screen.getByLabelText("Email");
        let passwordInput = screen.getByLabelText("Password");
        let signupButton = screen.getByRole("button", { name: "Register" });

        // Simulate input
        await act(async () => {  
            fireEvent.change(nameInput, { target: { value: expectedUser.name } });
            fireEvent.change(emailInput, { target: { value: expectedUser.email } });
            fireEvent.change(passwordInput, { target: { value: "123" } });
            fireEvent.click(signupButton);
        });

        // Check if values are correct
        expect(currentUser).toEqual(undefined);
    });

    // check if email is invalid
    it("Should signup fail if email is invalid", async () => {
        // Get input fields
        let nameInput = screen.getByLabelText("Name");
        let emailInput = screen.getByLabelText("Email");
        let passwordInput = screen.getByLabelText("Password");
        let signupButton = screen.getByRole("button", { name: "Register" });

        // Simulate input
        await act(async () => {  
            fireEvent.change(nameInput, { target: { value: expectedUser.name } });
            fireEvent.change(emailInput, { target: { value: "test" } });
            fireEvent.change(passwordInput, { target: { value: "12345678" } });
            fireEvent.click(signupButton);
        });

        // Check if values are correct
        expect(currentUser).toEqual(undefined);        
    });

    // check if signup button fails when email and password is empty
    it("Should signup fail if email and password is empty", async () => {
        // Get input fields
        let nameInput = screen.getByLabelText("Name");
        let emailInput = screen.getByLabelText("Email");
        let passwordInput = screen.getByLabelText("Password");
        let signupButton = screen.getByRole("button", { name: "Register" });

        // Simulate input
        await act(async () => {  
            fireEvent.change(nameInput, { target: { value: expectedUser.name } });
            fireEvent.change(emailInput, { target: { value: "" } });
            fireEvent.change(passwordInput, { target: { value: "" } });
            fireEvent.click(signupButton);
        });

        // Check if values are correct
        expect(currentUser).toEqual(undefined);        
    });
});
