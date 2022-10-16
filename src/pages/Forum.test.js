import { act, render, screen, fireEvent } from "@testing-library/react";
import Forum from "./Forum";
import { userContext } from '../App';
import axios from "axios";

// NOT WORKING

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));
jest.mock("axios");

describe("Forum", () => {
    let page;
    let currentUser;
    let mockUserState = [
        () => currentUser,
        (user) => currentUser = user
    ];

    const expectedPosts = [
        {
            id: 1,
            title: "Test",
            body: "Test",
            user_id: 1,
            created_at: "2021-05-31T14:00:00.000Z",
            updated_at: "2021-05-31T14:00:00.000Z",
            user: {
                id: 1,
                name: "Test",
                email: "test@test.com"
            }
        },
    ];

    beforeEach(() => {
        currentUser = undefined;
        page = render(
            <div>
                <userContext.Provider value={mockUserState}>
                    <Forum />
                </userContext.Provider>
            </div>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it("Should render posts", async () => {
        // Mock axios
        axios.get.mockClear();
        axios.get.mockResolvedValueOnce({ data: expectedPosts });

        // Get input fields
        let postTitle = screen.getByText(expectedPosts[1].title);
        let postBody = screen.getByText(expectedPosts[1].body);
        let postAuthor = screen.getByText(expectedPosts[1].user.name);

        // Simulate input
        await act(async () => {
            expect(postTitle).toBeInTheDocument();
            expect(postBody).toBeInTheDocument();
            expect(postAuthor).toBeInTheDocument();
        });
    });
});
