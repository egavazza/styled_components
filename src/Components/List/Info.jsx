import React from "react";
import { Box, Btn } from "../UI/Index";
import { lista } from "../../info";
import Card from "../Card";

const Lista = () => {
    return <Box>
        { lista.cargos.map((cargo, i) => {
            return <Card key={i} cargo={cargo} />
        })
        }
        <Btn>Ver más</Btn>
    </Box>
}

export default Lista;
