sequenceDiagram
    participant User as Utilisateur
    participant Browser as Navigateur Web (JS de la SPA)
    participant Server as Serveur
    
    User->>Browser: user enter note and click "Save"
    activate Browser
    
    Browser-->>Browser:  adds the new note to the local array
    Browser-->>Browser: updates the DOM (redrawNotes())
    Note right of Browser: the new note is displayed localy
    
    Browser->>Server: POST /exampleapp/new_note_spa
    Note right of Browser: Contains the new note in json format
    activate Server
    
    Server-->>Server: the server save the  note in DB
    
    Server->>Browser: 5. Response HTTP 201 Created
    deactivate Server
    
    Note right of Browser: the Js treat the response (console.log)
    deactivate Browser