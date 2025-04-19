import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import NewAlbumWrapper from "./style";
import type { AlbumDataType } from "@/types";
import { getNewAlbum } from "@/apis";
import { Carousel } from "@arco-design/web-react";
import Title from "../Title";

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  const [albums, setAlbums] = useState<AlbumDataType[]>([]);

  useEffect(() => {
    getNewAlbum({
      area: "ALL",
      type: "hot",
    }).then(({ weekData }) => {
      const albumData = [...weekData].slice(0, 10).map((item) => ({
        id: item.id,
        name: item.name,
        picUrl: item.picUrl,
        singer: item.artist.name,
      }));
      setAlbums(albumData);
    });
  }, []);

  return (
    <NewAlbumWrapper>
      <Title title="新碟上架" morePath="/discover/album" />
      <div className="my-6">
        <div className="h-[185px] w-full bg-#f5f5f5 border-solid border-#d3d3d3 border-width-[0.5px] py-4 box-border relative">
          <Carousel
            autoPlay={false}
            indicatorPosition="bottom"
            showArrow="always"
            moveSpeed={800}
            indicatorType="never"
            arrowClassName="custom-arrow"
          >
            {[0, 1].map((item) => {
              return (
                <div key={item} className="flex  w-full justify-around px-9">
                  {albums.slice(item * 5, item * 5 + 5).map((album) => {
                    return (
                      <div className="w-[100px]" key={album.id}>
                        <img
                          className=" h-[100px] object-cover rounded"
                          src={album.picUrl}
                          alt={album.name}
                        />
                        <div className="mt-1 text-xs ellipsis px-1">{album.name}</div>
                        <div className="text-xs text-#666 ellipsis px-1">
                          {album.singer}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  );
};

export default memo(NewAlbum);
