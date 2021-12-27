import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CatProfile } from "../CatProfile"

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


test('CatProfile rendering with correct name', () => {
    const getFullName = (firstName: string, lastName: string) => {
        return firstName + ' ' + lastName;
    };
    const fName = "Jesse";
    const lName = "Meowmington";
    const fullName = getFullName(fName, lName)

    const { getByTestId, getByText } = render(
        <CatProfile
            avatar="https://reactnative.dev/docs/assets/p_cat1.png"
            firstName={fName}
            lastName={lName} />
    );

    const component = getByTestId("cat-profile-view");
    expect(component).toBeDefined();
    const catNameComponent = getByText(fullName);
    expect(catNameComponent).toBeDefined();
});

test('pour milk within CatProfile view', () => {
    const fName = "Jesse";
    const lName = "Meowmington";
    const clickedButtonText = "Thank you!";

    const { getByTestId, getByText } = render(
        <CatProfile
            avatar="https://reactnative.dev/docs/assets/p_cat1.png"
            firstName={fName}
            lastName={lName} />
    );

    const button = getByTestId("feed-button");
    expect(button).toBeDefined();
    fireEvent.press(button);
    const clickedButton = getByText(clickedButtonText);
    expect(clickedButton).toBeDefined();
});

test('input new name for cat', () => {
    const fName = "Jesse";
    const lName = "Meowmington";
    const newName = "Draco Malfoy";

    const { getByTestId, getByText } = render(
        <CatProfile
            avatar="https://reactnative.dev/docs/assets/p_cat1.png"
            firstName={fName}
            lastName={lName} />
    );

    const textInput = getByTestId("cat-name-input");
    expect(textInput).toBeDefined();
    fireEvent.changeText(textInput, newName);
    const textInputAfterChange = getByText(newName);
    expect(textInputAfterChange).toBeDefined();
});