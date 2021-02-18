import React, {useState} from 'react'

const Perimetr = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [square, setSquare] = useState(0)

    return (
        <div>
            <h1>Perymetr PAGE</h1>
            <br/>

            <input type='text'
                   placeholder='Введіть сторону а:'
                   onChange={(e) => setFirst(e.target.value)}
            />

            <input type='text'
                   placeholder='Введіть сторону b:'
                   onChange={(e) => setSecond(e.target.value) }
            />
            <button type="button"
                    className="btn btn-success"
                    onClick={() => setSquare((first*2)+(second*2))}
            >Обчислити
            </button>
            <p>Периметр прямокутника: {square}</p>
        </div>

    )
}

export default Perimetr;