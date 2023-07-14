export function Mobile({brand, modelName, price, /*Specification:{screen, battery, camera}*/screen, battery, camera }){
    return(
        <section style={{border:'1px solid black', padding:'10px',margin:'10px 40px'}}>
            <div>Brant: {brand} </div>
            <div>Model: {modelName}</div>
            <div>Price: {price}</div>
            <div>
                <p>Specification</p>
                <p>Screen: {screen} </p>
                <p>Battery: {battery} </p>
                <p>Camera: {camera} </p>
            </div>
            </section>
    )
}