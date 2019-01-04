const DB = require('../utils/db');
module.exports = {
  // 首页电影列表。
  movieList: async ctx => {
    let list = await DB.query('SELECT DISTINCT * FROM movie_details a WHERE	20 >= (	SELECT count( * ) FROM ( SELECT DISTINCT * FROM movie_details ) b WHERE	a.type = b.type AND a.releaseTime <= b.releaseTime 	) ORDER BY	a.type,	a.releaseTime DESC')
    let listMap = {}
    let data = []
    if (list.length) {
      for (let i = 0; i < list.length; i++) {
        if (listMap[list[i]['type']]) {
          listMap[list[i]['type']].push(list[i])
        } else {
          listMap[list[i]['type']] = [list[i]]

        }
      }
    }
    for (let key in listMap) {
      if (listMap[key].length >= 4) {
        data.push({
          'type': key,
          'list': listMap[key]
        })
      }
    }
    ctx.state.data = data
  },
  // 详情页电影列表。
  typeList: async ctx => {
    let data = ctx.request.body.queryData || {}
    let list
    let type = data.type
    let pageIndex = data.pageIndex
    if (type) {
      list = await DB.query('select DISTINCT * from movie_details where type = ? ORDER BY releaseTime DESC limit 0,?', [type, pageIndex])
    } else {
      list = []
    }
    ctx.state.data = {
      'type': type,
      'list': list
    }
  },
  //书影音电影列表。
  billboardList: async ctx => {
    let classiclist = await DB.query('select DISTINCT * from movie_list a where type in ("经典") ORDER BY rate DESC LIMIT 0,3')
    let hotlist = await DB.query('select DISTINCT * from movie_list a where type in ("热门") ORDER BY rate DESC LIMIT 0,3')
    let newlist = await DB.query('select DISTINCT * from movie_list a where type in ("最新") ORDER BY rate DESC LIMIT 0,3')
    let otherSumList = await DB.query('SELECT * FROM (select DISTINCT * from movie_list where type not in ("热门","最新","经典","可播放")) a WHERE 	2 >= (	SELECT count( * ) FROM (select DISTINCT * from movie_list where type not in ("热门","最新","经典","可播放")) b WHERE	a.type = b.type and a.id <b.id ) ORDER BY	a.type,a.rate DESC')
    let otherList = []
    let listMap = {}
    if (otherSumList.length) {
      for (let i = 0; i < otherSumList.length; i++) {
        if (listMap[otherSumList[i]['type']]) {
          listMap[otherSumList[i]['type']].push(otherSumList[i])
        } else {
          listMap[otherSumList[i]['type']] = [otherSumList[i]]
        }
      }
    }
    for (let key in listMap) {
        otherList.push({
          'type': key,
          'list': listMap[key]
        })
    }
    let data = {
      'hot': hotlist,
      'new': newlist,
      'classic': classiclist,
      'other': otherList
    }
    ctx.state.data = data
  },
  //书影音——类型电影列表。
  billboardTypeList: async ctx => {
    let data = ctx.request.body.queryData || {}
    let list
    let type = data.type
    let pageIndex = data.pageIndex
    if (type) {
      list = await DB.query('select DISTINCT * from movie_details WHERE movieId in (select id from movie_list a where type in (?)) ORDER BY rate DESC,releaseTime DESC limit 0,?', [type, pageIndex])
    } else {
      list = []
    }
    ctx.state.data = {
      'type': type,
      'list': list
    }
  },

  // 搜索电影。
  search: async ctx => {
    let searchText = ctx.params.text
    let list
    if (searchText) {
      list = await DB.query('select DISTINCT * from movie_details where title like ? ORDER BY releaseTime DESC', ['%'+searchText+'%'])
    } else {
      list = []
    }
    ctx.state.data = list
  },

  // 电影详情页。
  detail: async ctx => {
    let id = ctx.params.id
    let data = {}
    let starts = []
    if (id) {
      data = (await DB.query('select DISTINCT * from movie_details where movieId = ?', [id]))[0]
      starts = await DB.query('select DISTINCT * from movie_starts where movieId = ?', [id])
    }
    data["starts"] = starts
    ctx.state.data = data
  },

};