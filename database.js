const mysql=require('mysql');
var conn=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'laravel_student_data_mngt'
})
conn.connect((error)=>
{
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('Connected');
        conn.query('select * from students',(err,result)=>
        {
            if(err)
            {
                throw err
            }
            console.log(result);
        });
    }
});