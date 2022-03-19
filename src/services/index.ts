import axios, { AxiosResponse } from "axios";

// create an axios instance, with base url: https://avl-frontend-exam.herokuapp.com/
export const api = axios.create({
  baseURL: "https://avl-frontend-exam.herokuapp.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// getFriends with params page and pageSize, endpoint is /api/users/friends
// ex: https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10
export const getFriends = (
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  return api.get(`/api/users/all?page=${page}&pageSize=${pageSize}`);
};

// getUser with params page, pageSize and keyword(optional), endpoint is /api/users/all
// without keyword ex: https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10
// with keyword ex: https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10&keyword=a
export const getUsers = (
  page: number,
  pageSize: number,
  keyword?: string
): Promise<AxiosResponse<any>> => {
  return api.get(
    `/api/users/all?page=${page}&pageSize=${pageSize}${
      keyword ? `&keyword=${keyword}` : ""
    }`
  );
};

// getFollowing with param page, pageSize
// ex:  [https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10](https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10)
export const getFollowing = (
  page: number,
  pageSize: number
): Promise<AxiosResponse<any>> => {
  return api.get(`/api/users/friends?page=${page}&pageSize=${pageSize}`);
};

// getTags with url https://avl-frontend-exam.herokuapp.com/api/tags
export const getTags = (): Promise<AxiosResponse<any>> => {
  return api.get(`/api/tags`);
};
