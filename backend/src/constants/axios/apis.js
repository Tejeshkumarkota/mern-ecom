import axios from 'axios'
import { APIs } from './endpoints'

export const getPhysicalProducts = async () => {
  try {
    const response = await axios.get(`${APIs.URL + '/' + APIs.getPhysicalProducts.endPoint}`)
    return response.data
  } catch (err) {
    return err
  }
}

export const getPhysicalCategories = async () => {
  try {
    const response = await axios.get(`${APIs.URL + '/' + APIs.getPhysicalCategories.endPoint}`)
    return response.data
  } catch (err) {
    return err
  }
}

export const getPhysicalSubcategories = async () => {
  try {
    const response = await axios.get(`${APIs.URL + '/' + APIs.getPhysicalSubcategories.endPoint}`)
    return response.data
  } catch (err) {
    return err
  }
}

export const getDigitalProducts = async () => {
  try {
    const response = await axios.get(`${APIs.URL + '/' + APIs.getDigitalProducts.endPoint}`)
    return response.data
  } catch (err) {
    return err
  }
}

export const getDigitalCategories = async () => {
  try {
    const response = await axios.get(`${APIs.URL + '/' + APIs.getDigitalCategories.endPoint}`)
    return response.data
  } catch (err) {
    return err
  }
}

export const getDigitalSubcategories = async () => {
  try {
    const response = await axios.get(`${APIs.URL + '/' + APIs.getDigitalSubcategories.endPoint}`)
    return response.data
  } catch (err) {
    return err
  }
}
