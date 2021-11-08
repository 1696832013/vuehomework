import request from '@/utils/request'

export function getFormOptions(params) {
  return request({
    url: '/vue-element-admin/formtest/options',
    method: 'get',
    params
  })
}
