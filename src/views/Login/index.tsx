import { FC, useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { LoginWrapper } from "./style";
import { Button } from "@arco-design/web-react";
import { getQrCodeKey, getQrCodeImg, checkQrCodeStatus } from "@/apis";

enum QRCodeStatus {
  EXPIRED = 800,
  WAITING = 801,
  CONFIRMED = 802,
  SUCCESS = 803,
}

const QrCodeLogin: FC = () => {
  const [qrKey, setQrKey] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const initQrCode = async () => {
  
      const {
        data: { unikey },
      } = await getQrCodeKey();
      const {
        data: { qrurl },
      } = await getQrCodeImg(unikey);
      setQrKey(unikey);
      setQrUrl(qrurl);
      setIsLoading(false);

  };

  const handleReload = async () => {
    setError("");
    setIsLoading(true);
    await initQrCode();
  };

  useEffect(() => {
    initQrCode();
  }, []);

  // 二维码状态轮询检查
  useEffect(() => {
    if (!qrKey) return;

    const timer = setInterval(async () => {
      
        const { code } = await checkQrCodeStatus(qrKey);
        
        switch (code) {
          case QRCodeStatus.SUCCESS:
            clearInterval(timer);
            window.location.reload();
            break;
          case QRCodeStatus.EXPIRED:
            clearInterval(timer);
            setError("二维码已过期，点击刷新");
            break;
        }
    
    }, 1500);

    return () => clearInterval(timer);
  }, [qrKey]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-[200px] h-[200px] flex-center">
        <div className=" flex-center rounded-2xl bg-white">
          {isLoading ? (
            <div className="text-center">正在生成二维码...</div>
          ) : (
            <QRCodeSVG value={qrUrl} size={168} level="H" />
          )}
        </div>

        {error && (
          <div className="absolute inset-0 bg-[#fff] bg-opacity-20 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm">
            <p className="text-white text-center px-2">{error}</p>
            <Button
              onClick={handleReload}
              className="mt-2 !bg-blue-500 !text-white"
              size="small"
            >
              重新获取
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const OtherLogin: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-[200px] h-[120px] justify-center">
      <button className="px-6 py-3  bg-blue-500 text-white rounded-full">
        手机号登录
      </button>
      <button className="px-6 py-3 bg-green-500 text-white rounded-full">邮箱登录</button>
    </div>
  );
};

const Login: FC = () => {
  const [isQrCodeLogin, setIsQrCodeLogin] = useState(true);

  return (
    <LoginWrapper className="bg-[#F5F5F5] min-h-screen flex-center">
      <div className="bg-white p-7 rounded-2xl shadow-lg">
        {isQrCodeLogin ? <QrCodeLogin /> : <OtherLogin />}

        <div className="mt-2 text-center">
          <Button
            onClick={() => setIsQrCodeLogin(!isQrCodeLogin)}
            className="text-blue-500 rounded-2xl"
          >
            {isQrCodeLogin ? <span>使用其他方式登录</span> : <span>扫码登录</span>}
          </Button>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
