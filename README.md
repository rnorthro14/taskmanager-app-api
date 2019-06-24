# status-tool-app-api
NodeJS, status update using express, mongoDB

Clone repository
```
$ cd status-tool-app-api
$ npm install
$ npm start
```
Optional: If you don't have it installed already, install nodemon globally
``` $ npm install -g nodemon ```

You'll need data to run app. The app is currently set up to query a mongodb named "tasks".  The data schema looks like this:
```
{
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    }, 
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
}
```
Run mongodb
``` $ mongod ```

For a quickstart to create the db, run the following in a separate terminal window:
```
$ mongo
> use tasks
switched to db tasks
> db.tasks.insert({"status":"Open", "title":"Model X test", "responsible":"Elon Musk", "description":"Teslas are great", "last_updated":new Date(Date.now()), "severity":"Medium"})
```

Once you have data in place, you can run the app:
``` $ npm start ```
or (if nodemon)
``` $ npm run dev ```
Test in browser or an API utility like 
[Postman](https://www.getpostman.com/)
[Direct](http://localhost:4000/tasks)

or load Client version for this app and test in client.
