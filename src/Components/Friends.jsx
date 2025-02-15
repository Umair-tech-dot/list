import React from 'react'

function Friends() {
console.log('Friends');
let friends = ["Fayyaz", "Ebad" , "Rehan" , "Tahir"];
return (
    <>
        <ul>
            {
                friends.map((a)=>{
                    return <li>{a}</li>
                })
            }
        </ul>
    </>
)
}


export default Friends