interface BaseResponse {
  success: boolean;
  dataSize: number;
  timestamp: string;
}

interface BasePageResponse {
  subdata: any[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
