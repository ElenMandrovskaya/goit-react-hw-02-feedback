import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonContainer } from "./FeedbackOptions.styles";

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ButtonContainer>
            {options.map((option) => (
                <Button onClick={() => onLeaveFeedback(option)} key={option}>{option}</Button>
            ))}
        </ButtonContainer>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;