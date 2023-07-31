import React from "react";
import {Box, Button} from "@mui/material";
import useCount from "../jotai/store.ts";

const CountButton: React.FC = () => {
    const [count, setCount] = useCount();
    return (
        <Box sx={{my: 2}}>
            <Button variant={"contained"} onClick={() => setCount(count + 1)}>
                Count == {count}
            </Button>
        </Box>
    );
};

export default CountButton;