db.createUser(
    {
        user: "root",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "person"
            }
        ]
    }
);
db.createCollection("people");