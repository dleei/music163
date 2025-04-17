import { memo, FC } from "react";
import type { ReactNode } from "react";

import TopDataWrapper from "./style";
import type { TableColumn } from "@/types";

interface IProps {
  children?: ReactNode;
  columns: TableColumn[];
}

const TopTable: FC<IProps> = ({ columns }) => {
  return (
    <TopDataWrapper className="flex justify-between mt-4">
      {columns.map((column) => (
        <dl key={column.id} className="w-[32%]">
          {/* 榜单标题 */}
          <dt className="flex items-center mb-4">
            <img
              className="w-20 h-20 mr-3 rounded"
              src={column.coverImgUrl}
              alt={column.name}
            />
            <div className="text-lg font-bold">{column.name}</div>
          </dt>

          {/* 歌曲列表 */}
          {column.tracks.map((track, index) => (
            <dd
              key={index}
              className="ml-0 px-0 flex items-center p-2 hover:bg-#f5f5f5 rounded"
            >
              <div className="w-8 text-center text-#666">{index + 1}</div>
              <div className="flex-1 ml-2">
                <div className="ellipsis">{track.first}</div>
              </div>
            </dd>
          ))}

          {/* 查看更多 */}
          <dd className="mt-4">
            <a className="text-sm text-#666 hover:text-#333 flex items-center">
              查看全部
              <span className="ml-1 text-xs"> &gt; </span>
            </a>
          </dd>
        </dl>
      ))}
    </TopDataWrapper>
  );
};

export default memo(TopTable);
