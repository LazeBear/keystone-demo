# quick demo for keystone

## setup

make sure your mongo server is running

```sh

npm i

npm start
```

Navigate to
`localhost:3000/keystone`

login as

```
test@test.com
123
```

add some data into City, Job and University.

The relationship are:
City (1) - Job (many)
Job (1) - City (1)

City (1) - University (1)
University (1) - City (1)

## query the data

All results for each collection:
`localhost:3000/api/jobs`
`localhost:3000/api/cities`
`localhost:3000/api/universities`

Single document with relation expanded (find the id from above apis)
`localhost:3000/api/jobs/{id}`
`localhost:3000/api/cities/{id}`
`localhost:3000/api/universities/{id}`
