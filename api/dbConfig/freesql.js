const datasql= {
    // working for localhost

   // HOST: 'localhost',
     // USER: 'root',
     // PASSWORD: '',
        // DB: 'test',
  
 
// working for freesql database deployment
HOST:'sql11.freesqldatabase.com',
   USER:"sql11513243",
        PORT:"17422 ",
     PASSWORD: '5tBigjPTRi',
     DB: 'sql11513243',
     dialect: 'mysql',

// cloud cluster connection




    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

 export default datasql;