export interface Post {
  "id": number,
  "title": string,
  "description": string,
  "content": string,
  "comments": [],
  "categoryId": number
}


export interface PostResponse {
  content: Post[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
