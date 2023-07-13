 export function PersonList() {
    const names=['vipin', 'nitin', 'mohit', 'monu', 'pankaj', 'sachin'];
    const username='vipin chauhan';
    const Status = false;

    return(
        <div>
             <div>Welcome {Status? username : 'Guest'}</div>
            <h3>Persons list</h3>
            {names.map((el ,index)=>{
                return <div key={`id-${index}`}>Person - {index+1} : {el}</div>
            })}
        </div>

    )

    
}