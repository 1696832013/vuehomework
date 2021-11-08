const options = [{
  value: '选项1',
  label: '区域一'
}, {
  value: '选项2',
  label: '区域二'
}, {
  value: '选项3',
  label: '区域三'
}, {
  value: '选项4',
  label: '区域四'
}, {
  value: '选项5',
  label: '区域五'
}]

module.exports = [
  {
    url: '/vue-element-admin/formtest/options',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: options.length,
          items: options
        }
      }
    }
  }
]
