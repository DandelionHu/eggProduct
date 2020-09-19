import request from '@/utils/request'

const articleApi = {
  // 文章管理
  ArticleCreate: '/article/create', // 添加
  ArticleLists: '/article/lists', // 列表
  ArticleDetail: '/article/detail' // 详情
}

/**
 * 添加接口
 * parameter: {
 * }
 */
export function ArticleCreate (parameter) {
  return request({
    url: articleApi.ArticleCreate,
    method: 'post',
    data: parameter
  })
}
/**
 * 获取列表
 */
export function ArticleLists () {
  return request({
    url: articleApi.ArticleLists,
    method: 'get'
  })
}
/**
 * 获取详情
 */
export function ArticleDetail () {
  return request({
    url: articleApi.ArticleDetail,
    method: 'get'
  })
}
