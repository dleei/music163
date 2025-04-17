import { memo } from "react";
import type { FC, ReactNode } from "react";

import type { AlbumDataType } from "@/types";

interface IProps {
  children?: ReactNode;
  albums: AlbumDataType;
  className?: string;
}

import AlbumCardWrapper from "./style";

const AlbumCard: FC<IProps> = ({ albums }) => {
  return (
    <AlbumCardWrapper>
      <div className="w-[100px]">
        <img className="w-[100px]" src={albums.picUrl} alt="" />
        <div className="text-xs ellipsis">{albums.name}</div>
        <div className="text-xs mt-1">{albums.artist.name}</div>
      </div>
    </AlbumCardWrapper>
  );
};

export default memo(AlbumCard);
