import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface CardData {
    id: number;
    name: string;
    email: string;
}

const StyledCard = styled(Card)({
    maxWidth: 345,
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
});

const CardComponent: React.FC<{ card: CardData }> = ({ card }) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    ID: {card.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {card.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {card.email}
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default CardComponent;
