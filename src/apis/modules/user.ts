import { request } from "@/utils";
import { LoginParams } from "@/types";
/**
 * 邮箱登录
 */

export const login = (params: LoginParams) =>
  request.post("/api/login", {
    ...params,
  });

/**
 * 二维码 key 生成
 */

export const getQrCodeKey = () => request.get("/api/login/qr/key");

/**
 * 生成二维码图片
 * @param key 二维码 key
 */
export const getQrCodeImg = (key: string) =>
  request.get(`/api/login/qr/create`, {
    params: {
      key,
    },
  });

/**
 * 检测二维码状态接口
 * @param key 二维码 key
 * status 800: 二维码过期 801: 等待扫码 802: 待确认 803: 授权登录成功（返回 cookies） 502: 则需加上noCookie参数,如&noCookie=true
 */

export const checkQrCodeStatus = (key: string, noCookie?: boolean) =>
  request.get(`/api/login/qr/check`, {
    params: {
      key,
      noCookie,
    },
  });
