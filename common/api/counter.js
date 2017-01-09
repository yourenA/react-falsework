/**
 * Created by Administrator on 2017/1/3.
 */
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}

export function fetchCounter(callback){
    setTimeout(()=>{
        callback(getRandomInt(1,100))
    },500)
}

export function testFetch(app) {
    app.get('/api/counter',(req,res)=>{
        setTimeout(()=>{
            if(Math.random()<0.33){
                res.status(500).end()
            }else{
                res.json({
                    value:getRandomInt(1,100)
                })
            }
        },1000)
    })
}