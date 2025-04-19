import { request } from "@/utils";
import type { AlbumParam } from "@/types";

/**
 * 热门歌单分类
 */
export const getHotList = () => request.get("/api/playlist/hot");

/**
 * 推荐歌单
 * @param limit 限制数量默认为30
 */
export const getRecommendList = () => request.get("/api/personalized");

/**
 * 新碟上架
 * @param area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
 * @param type : new:全部 hot:热门,默认为 new
 * @param year : 年,默认本年
 * @param month : 月,默认本月
 */
export const getNewAlbum = (params: AlbumParam) =>
  request.get("/api/top/album", { params });

/**
 * 所有榜单内容摘要
 */
export const getTopList = () => request.get("/api/toplist/detail");