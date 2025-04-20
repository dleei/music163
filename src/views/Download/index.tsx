import { memo } from "react";
import type { FC, ReactNode } from "react";
import { DownloadWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Download: FC<IProps> = () => {
  return (
    <DownloadWrapper>
      <div className='common-width'>下载客户端</div>
    </DownloadWrapper>
  );
};

export default memo(Download);
