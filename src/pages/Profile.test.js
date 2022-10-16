import { act, render, screen, fireEvent } from "@testing-library/react";
import Profile from "./Profile";
import { userContext } from '../App';
import axios from "axios";

// NOT WORKING

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));
jest.mock("axios");

describe("Profile", () => {
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
        currentUser = expectedUser;
        page = render(
            <div>
            <userContext.Provider value={mockUserState}>
                <Profile />
            </userContext.Provider>
            </div>);
        }
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should update profile", async () => {
        // Mocck axios
        axios.put.mockClear();
        axios.put.mockResolvedValueOnce({ data: expectedUser });

        // Get input fields
        let nameInput = screen.getByLabelText("Name");
        let emailInput = screen.getByLabelText("Email");
        let updateButton = screen.getByRole("button", { name: "Save" });

        // Simulate input
        await act(async () => {  
            fireEvent.change(nameInput, { target: { value: "Test2" } });
            fireEvent.change(emailInput, { target: { value: "test2@test2.com" } });
            fireEvent.click(updateButton);
        });

        // Check if values are correct
        expect(currentUser).toEqual(expectedUser);
    });
    
});
