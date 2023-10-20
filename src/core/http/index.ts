import axios from 'axios'
import HttpClient from './client'
import { captureBusinessError, handleRejection } from './interceptors'

export const axiosInstance = axios.create({})

axiosInstance.interceptors.response.use(captureBusinessError, handleRejection)

export default new HttpClient(axiosInstance)
export type { HttpResponse } from './types'
export { HttpError } from './error'
export { HttpErrorStream } from './event'
