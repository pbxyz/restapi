import mogoose from 'mogoose'

mogoose.connect("mongodb://localhost/companydb")
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))
