import React from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from 'react-router-dom'

const Layout = React.lazy(() => import("@/layout"));
const NotFount = React.lazy(() => import("@/views/404"));
const Login = React.lazy(() => import("@/views/Login"));
const Album = React.lazy(() => import("@/views/Discover/c-views/Album"));
const AnchorDj = React.lazy(() => import("@/views/Discover/c-views/AnchorDj"));
const CloudDiscover = React.lazy(() => import("@/views/Cloud"));
const Discover = React.lazy(() => import("@/views/Discover"));
const Download = React.lazy(() => import("@/views/Download"));
const Focus = React.lazy(() => import("@/views/Focus"));
const Mall = React.lazy(() => import("@/views/Mall"));
const Mine = React.lazy(() => import("@/views/Mine"));
const Musician = React.lazy(() => import("@/views/Musician"));
const RankingList = React.lazy(() => import("@/views/Discover/c-views/Ranking"));
const Recommend = React.lazy(() => import("@/views/Discover/c-views/Recommend"));
const Singer = React.lazy(() => import("@/views/Discover/c-views/Singer"));
const SongsOrder = React.lazy(() => import("@/views/Discover/c-views/Songs"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // 重定向到发现音乐推荐页
      {
        index: true,
        element: <Navigate to="/discover/recommend" replace />,
      },
      // 发现音乐（
      {
        path: "discover",
        element: <Discover />, 
        children: [
          {
            index: true,
            element: <Navigate to="recommend" replace />,
          },
          /* 推荐 */
          {
            path: "recommend",
            element: <Recommend />,
          },
          /* 排行榜 */
          {
            path: "ranking",
            element: <RankingList />,
          },
          /* 歌单 */
          {
            path: "order",
            element: <SongsOrder />,
          },
          /* 主播电台 */
          {
            path: "anchor",
            element: <AnchorDj />,
          },
          /* 歌手 */
          {
            path: "singer",
            element: <Singer />,
          },
          /* 新碟上架 */
          {
            path: "album",
            element: <Album />,
          },
        ]
      },
      // 其他独立页面（二级路由）
      /* 我的音乐 */
      {
        path: "mine",
        element: <Mine />,
      },
      /* 关注 */
      {
        path: "focus",
        element: <Focus />,
      },
      /* 商城 */
      {
        path: "mall",
        element: <Mall />,
      },
      /* 音乐人 */
      {
        path: "musician",
        element: <Musician />,
      },
      /* 云推歌 */
      {
        path: "cloud",
        element: <CloudDiscover />,
      },
      /* 下载 */
      {
        path: "download",
        element: <Download />,
      },
    ],
  },
  // 登录和404
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFount />,
  },
];

export default routes