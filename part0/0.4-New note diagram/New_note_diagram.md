sequenceDiagram
    participant User 
    participant Browser 
    participant Server  
    
    User->>Browser:  User enter the note and click the save button
    activate Browser

    Browser->>Server:  POST
    https://studies.cs.helsinki.fi/exampleapp/new_note 
    Note right of Browser: contains the new note (payload)
    activate Server
    
    Server-->>Server:  the server save it to the DB
    
    Server->>Browser:  Response HTTP 302 Found (Redirection)
    Note left of Server: reload  /exampleapp/notes
    deactivate Server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "", date: "2025-11-01T18:00:10.178Z"}, {content: "", date: "2025-11-01T18:00:11.457Z"},…]

    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes