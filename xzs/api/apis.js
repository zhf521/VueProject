import {request} from '../utils/request.js'

export function listNav(){
  return request({
    url:'/nav/get',
    method:'post',
  })
}

export function queryNews(data){
  return request({
    url:'/news/get',
    method:'post',
    data
  })
}

export function newsDetail(data){
  return request({
    url:'/news/detail',
    method:'post',
    data
  })
}

export function queryProduct(data){
  return request({
    url:'/product/getlist',
    method:'post',
    data
  })
}

export function productDetail(data){
  return request({
    url:'/product/detail',
    method:'post',
    data
  })
}