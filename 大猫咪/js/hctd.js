var rule = {
  模板: 'mxpro',
  title: '火车太堵',
  host: 'https://tdnow.life',
  url: '/vod/showfyfilter.html',
  searchUrl: '/vod/search/page/fypage/wd/**.html',
  filterable: 1,
  filter: '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',
  filter_url: '{{fl.地区}}{{fl.排序}}{{fl.剧情}}{{fl.类型}}{{fl.语言}}{{fl.字母}}/page/fypage{{fl.年份}}',
  filter_def: {20:{类型:"/id/20"},21:{类型:"/id/21"},22:{类型:"/id/22"},23:{类型:"/id/23"},24:{类型:"/id/24"},},
}