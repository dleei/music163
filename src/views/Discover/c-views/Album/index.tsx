import { memo } from "react";
import type { FC, ReactNode } from "react";
import { AlbumWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Album: FC<IProps> = () => {
  return (
    <AlbumWrapper>
      <div>新碟上架</div>
    </AlbumWrapper>
  );
};

export default memo(Album);
