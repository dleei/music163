import { Input } from "@arco-design/web-react";
import { memo, useState } from "react";
import type { FC, ReactNode } from "react";

import { InputWrapper } from "./styles";
import Icon from "../Icon";
import { searchSong } from "@/apis";

interface IProps {
  children?: ReactNode;
}

const Search: FC<IProps> = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    if (searchValue.trim() === "") return alert("请输入搜索内容！");
    searchSong(searchValue).then(({ result }) => {
      console.log(result);
    });
  };

  return (
    <InputWrapper>
      <Input
        allowClear
        value={searchValue}
        onChange={setSearchValue}
        onPressEnter={() => onSearch()}
        prefix={<Icon onClick={() => onSearch()} name="search" />}
        placeholder="音乐/视频/电台/用户"
        className="search placeholder:text-xs placeholder:text-[#9b9b9b]"
      />
    </InputWrapper>
  );
};

export default memo(Search);
