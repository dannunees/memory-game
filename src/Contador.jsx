import React, {useEffect, useState} from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleClickContador = () => {
        setContador(contador + 1);
    }

    useEffect(() => {
        if(contador > 20 ) {
            alert('você atingiu o número 50');
            setContador(100)
        }
    }), [contador]


    return <button onClick={handleClickContador}>{contador}</button>
}

export default Contador