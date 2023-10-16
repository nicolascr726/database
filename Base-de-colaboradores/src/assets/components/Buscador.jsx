import React from 'react'

const Buscador = ({setSearch}) => {
    const handleONChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
    <div>
        <nav>
            <span>
                Buscar Colaboradores
            </span>
            <input type="text" onChange={handleONChangeSearch}/>
        </nav>
    </div>
    )
}

export default Buscador