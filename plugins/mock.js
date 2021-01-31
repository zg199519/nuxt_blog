const Mock = require('mockjs')

Mock.mock(/\/article\/list/, 'post', (parameter) => {
  // code 1文章 2吐槽
  const pp = JSON.parse(parameter.body)
  console.log(pp)
  let datas = []
  for (let index = 0; index < 20; index++) {
      datas.push({title: '测试标题code='+pp.code, date: '2020-02-08', cover: 'https://atts.w3cschool.cn/attachments/cover/cover_nuxtjs.png?t=1581585385?imageView2/1/w/48/h/48', desc: '描述描述', tag:'标签'})
  }
  // 模拟空
  if(pp.page >= 3){
    datas = []
  }
  return {
      code: 200,
      data: {
        list: datas,
        total: 40,
        pageSize: pp.pageSize,
        page: pp.page
      },
      msg: 'ok'
    }
  }
)


Mock.mock(/\/article\/detail/, 'post', (parameter) => {
  return {
    code: 200,
    data: {
      title: '文章详情周光',
      content: 'dsaasassa'
    },
    msg: 'ok'
  }
})