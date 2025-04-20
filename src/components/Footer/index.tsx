import { memo } from "react";
import type { FC, ReactNode } from "react";

import FooterWrapper from "./style";
interface IProps {
  children?: ReactNode;
}

const Footer: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="footer h-[260px] bg-[#f2f2f2] pt-[33px]">
        <div className="content m-center common-width">
          <div className=" flex justify-evenly">
            <div className=" col-items-center">
              <div className="foot_img_1"></div>
              <div className="text-xs mt-2 text-[#666]">音乐开发平台</div>
            </div>
            <div className=" col-items-center">
              <div className="foot_img_2"></div>
              <div className="text-xs mt-2 text-[#666]">云村交易所</div>
            </div>
            <div className=" col-items-center">
              <div className="foot_img_3"></div>
              <div className="text-xs mt-2 text-[#666]">X StudioAI歌手</div>
            </div>
            <div className=" col-items-center">
              <div className="foot_img_4"></div>
              <div className="text-xs mt-2 text-[#666]">用户认证</div>
            </div>
            <div className="col-items-center">
              <div className="foot_img_5"></div>
              <div className="text-xs mt-2 text-[#666]">AI 免费写歌</div>
            </div>
            <div className=" col-items-center">
              <div className="foot_img_6"></div>
              <div className="text-xs mt-2 text-[#666]">云推歌</div>
            </div>
            <div className="col-items-center">
              <div className="foot_img_7"></div>
              <div className="text-xs mt-2 text-[#666]">赞赏</div>
            </div>
          </div>
          {/* 底部版权信息 */}
          <div className="copyright mt-[60px]">
            <div className="flex justify-center mb-1">
              <span className="link copyright_text">服务条款</span>
              <span className="link copyright_text">隐私政策</span>
              <span className="link copyright_text">儿童隐私政策</span>
              <span className="link copyright_text">版权投诉</span>
              <span className="link copyright_text">投资者关系</span>
              <span className="link copyright_text">广告合作</span>
              <span className="link copyright_text">联系我们</span>
            </div>
            <div className="flex justify-center mb-1">
              <span className="copyright_text">廉政举报</span>
              <span className="copyright_text">
                不良信息举报邮箱: 51jubao@service.netease.com
              </span>
              <span className="copyright_text">客服热线：95163298</span>
            </div>
            <div className="flex justify-center mb-1">
              <span className="copyright_text">
                互联网宗教信息服务许可证：浙（2022）0000120
              </span>
              <span className="copyright_text">
                增值电信业务经营许可证：浙B2-20150198
              </span>
              <span className="copyright_text">
                粤B2-20090191-18 浙ICP备15006616号-4 工业和信息化部备案管理系统网站
              </span>
            </div>
            <div className="flex justify-center mb-1">
              <span className="copyright_text">网易公司版权所有©1997-2025</span>
              <span className="copyright_text">杭州乐读科技有限公司运营：</span>
              <div className='flex items-center'>
              <img
                src={new URL("@/assets/imgs/police.png", import.meta.url).href}
                alt=""
                className="w-[14px] h-[14px]"
              />
              <span className="copyright_text">浙网文[2024] 0900-042号</span>
              </div>
              <span className="copyright_text">算法服务公示信息</span>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default memo(Footer);
