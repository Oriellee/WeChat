const DB = require('../utils/db');
module.exports = {
// 首页电影列表。
    movieList: async ctx => {
        ctx.state.data = await DB.query('SELECT * FROM movie_details a WHERE 10 >= ( SELECT COUNT( * ) FROM movie_details b WHERE a.type = b.type AND a.releaseTime <= b.releaseTime ) ORDER BY a.type,a.releaseTime DESC')
        console.log(ctx.state.data)
    },

};