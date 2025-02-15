import React from 'react'

function Addposts() {

    const handlesubmit = (event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userID: 1
          })  
        headers: {
            'Content-type': 'application/json; chjarset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }



    
}