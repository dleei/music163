import { NotFoundWrapper } from "./style";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <div className="flex-center min-h-screen">
       <img src="src/assets/imgs/404.png" alt="" className="w-[400px]" />
      </div>
    </NotFoundWrapper>
  );
};

export default NotFound;
