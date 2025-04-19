import { request } from "@/utils";

/**
 * 最热主播榜
 * @param limit 取出数量 , 默认为 100 (不支持 offset)
 */
export const getHotAnchor = (limit: number) =>
  request.get("/api/dj/toplist/popular", {
    params: {
      limit,
    },
  });
  
/**
 * 24小时主播榜
 * @param limit 取出数量 , 默认为 100 (不支持 offset)
 */
export const get24HourAnchor = (limit: number) =>
  request.get("/api/dj/toplist/hours", {
    params: {
      limit,
    },
  });
