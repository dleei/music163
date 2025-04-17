export interface CardType {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
  trackNumberUpdateTime: number;
}

export interface AlbumParam {
  area?: "ALL" | "ZH" | "EA" | "KR" | "JP";
  type?: "new" | "hot";
  year?: number;
  month?: number;
}

interface ArtistType {
  id: number;
  albumSize: number;
  name: string;
  picUrl: string;
}

export interface AlbumDataType {
  areaId: number;
  artist: ArtistType;
  name: string;
  picUrl: string;
}

export interface TableColumn {
  id: number;
  coverImgUrl: string;
  name: string;
  tracks: {
    first: string;
    second: string;
  }[];
}
