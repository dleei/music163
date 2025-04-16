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
      // 发现音乐（包含三级路由）
      {
        path: "discover",
        element: <Discover />,  // 这个组件需要包含二级导航和三级路由出口
        children: [
          {
            index: true,
            element: <Navigate to="recommend" replace />,
          },
          {
            path: "recommend",
            element: <Recommend />,
          },
          {
            path: "ranking",
            element: <RankingList />,
          },
          {
            path: "order",
            element: <SongsOrder />,
          },
          {
            path: "anchor",
            element: <AnchorDj />,
          },
          {
            path: "singer",
            element: <Singer />,
          },
          {
            path: "album",
            element: <Album />,
          },
        ]
      },
      // 其他独立页面（二级路由）
      {
        path: "mine",
        element: <Mine />,
      },
      {
        path: "focus",
        element: <Focus />,
      },
      {
        path: "mall",
        element: <Mall />,
      },
      {
        path: "musician",
        element: <Musician />,
      },
      {
        path: "cloud",
        element: <CloudDiscover />,
      },
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