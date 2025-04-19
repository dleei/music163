import { request } from "@/utils";

/**
 * 获取所有歌手
 * @param limit 歌手数量 默认为 0
 *
 */

export const getSings = (limit: number = 0) =>
  request.get("/api/top/artists", {
    params: {
      limit,
    },
  });
