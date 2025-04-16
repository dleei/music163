import { request } from "@/utils";
/**
 *  获取首页轮播图图片
 * @returns 首页轮播图图片
 */
export const getBanner = () => request.get("/api/banner");
