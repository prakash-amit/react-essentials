import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
test("renders an h1", () => {
    const {getByText} = render(<App />);
    const h1 = getByText(/hi react testing library/);
    expect(h1).toHaveTextContent("hi react testing library");
});