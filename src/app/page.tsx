"use client";

import { useState } from "react";
import Image from "next/image";

// 选项类型定义
type OptionType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

// 颜色选项类型
type ColorOption = {
  id: string;
  name: string;
  color: string;
};

// 自定义SVG图标组件
const MeiPingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 2a1 1 0 00-1 1v1H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2V3a1 1 0 00-1-1zm1 9.5V20c0 1.1-.9 2-2 2h2c1.1 0 2-.9 2-2v-8.5h-2z" />
  </svg>
);

const YuhuChunPingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M16 3h-8v2h8V3zm-4 3c-4.97 0-8 4.03-8 9 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 0-4.97-3.03-9-8-9z" />
  </svg>
);

const ShangPingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M7 3h10v1h2v4c0 1.1-.9 2-2 2h-1v10c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V10H7c-1.1 0-2-.9-2-2V4h2V3z" />
  </svg>
);

const GuanIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
  </svg>
);

const BeiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M18 4h-2v1h2v1H6V5h2V4H6C4.9 4 4 4.9 4 6v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
  </svg>
);

const PanIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
  </svg>
);

const HandMadeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" />
  </svg>
);

const CarvedIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M19 3l-6 6 2 2-8 8-2-2-2 2 4 4 4-4 8-8-2-2 4-4-2-2z" />
  </svg>
);

const UnderGlazeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z" />
  </svg>
);

export default function Home() {
  // 容器类型选项
  const containerOptions: OptionType[] = [
    { id: "meaping", name: "梅瓶", icon: <MeiPingIcon /> },
    { id: "yuhuchunping", name: "玉壶春瓶", icon: <YuhuChunPingIcon /> },
    { id: "shangping", name: "赏瓶", icon: <ShangPingIcon /> },
    { id: "guan", name: "罐", icon: <GuanIcon /> },
    { id: "bei", name: "杯", icon: <BeiIcon /> },
    { id: "pan", name: "盘", icon: <PanIcon /> },
  ];

  // 颜色选项
  const colorOptions: ColorOption[] = [
    { id: "qinghua", name: "青花瓷", color: "#1e3a8a" },
    { id: "youli", name: "釉里红", color: "#ef4444" },
    { id: "doucai", name: "斗彩", color: "#fbbf24" },
    { id: "fencai", name: "粉彩", color: "#c084fc" },
    { id: "falang", name: "珐琅彩", color: "#4ade80" },
    { id: "mibian", name: "密变釉", color: "#333333" },
  ];

  // 工艺选项
  const craftOptions: OptionType[] = [
    { id: "handmade", name: "手工制作", icon: <HandMadeIcon /> },
    { id: "carved", name: "雕刻工艺", icon: <CarvedIcon /> },
    { id: "underglaze", name: "釉下彩", icon: <UnderGlazeIcon /> },
  ];

  // 当前选中的选项状态
  const [selectedContainer, setSelectedContainer] = useState("meaping");
  const [selectedColor, setSelectedColor] = useState("youli");
  const [selectedCraft, setSelectedCraft] = useState("carved");
  const [showGenerator, setShowGenerator] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 获取容器名称
  const getContainerName = () => {
    return containerOptions.find(item => item.id === selectedContainer)?.name || "";
  };

  // 获取颜色名称
  const getColorName = () => {
    return colorOptions.find(item => item.id === selectedColor)?.name || "";
  };

  // 获取工艺名称
  const getCraftName = () => {
    return craftOptions.find(item => item.id === selectedCraft)?.name || "";
  };

  // 生成提示词
  const generatePrompt = () => {
    return `中国传统${getContainerName()}，${getColorName()}风格，采用${getCraftName()}`;
  };

  // 调用Coze工作流生成图片
  const handleGenerateImage = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const prompt = generatePrompt();
      
      const response = await fetch('/api/coze-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await response.json();
      
      if (data.success && data.imageUrl) {
        setGeneratedImage(data.imageUrl);
      } else {
        setError(data.message || '生成图片失败');
      }
    } catch (err) {
      setError('请求失败: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50/30">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 左侧预览区域 */}
          <div className="md:w-5/12 bg-white rounded-lg p-6 flex items-center justify-center shadow-md h-[450px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mb-4"></div>
                <p className="text-gray-500">正在生成图像...</p>
              </div>
            ) : generatedImage ? (
              <img 
                src={generatedImage} 
                alt="AI生成的陶瓷图像" 
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                  <div className="w-56 h-36 bg-white rounded-2xl relative">
                    {/* 红色小点的图案 */}
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div 
                        key={index}
                        className="absolute w-3 h-3 rounded-full" 
                        style={{
                          backgroundColor: index % 2 === 0 ? "#ef4444" : "#f97316",
                          top: `${20 + (index % 4) * 25}%`,
                          left: `${10 + Math.floor(index / 4) * 40}%`,
                          opacity: 0.8,
                          filter: "blur(1px)"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* 右侧选项区域 */}
          <div className="md:w-7/12 space-y-6">
            {!showGenerator ? (
              <>
                {/* 容器类型选择 */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">选择容器</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {containerOptions.map((option) => (
                      <div 
                        key={option.id}
                        onClick={() => setSelectedContainer(option.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all ${
                          selectedContainer === option.id ? "bg-red-50 border border-red-500" : "bg-white border border-gray-200"
                        }`}
                      >
                        <div className="text-blue-800 w-6 h-6 mb-2">
                          {option.icon}
                        </div>
                        <span className="text-sm">{option.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 颜色选择 */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">选择花色</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {colorOptions.map((option) => (
                      <div 
                        key={option.id}
                        onClick={() => setSelectedColor(option.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all ${
                          selectedColor === option.id ? "bg-red-50 border border-red-500" : "bg-white border border-gray-200"
                        }`}
                      >
                        <div 
                          className="w-10 h-10 rounded-md mb-2" 
                          style={{ backgroundColor: option.color }}
                        />
                        <span className="text-sm">{option.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 工艺选择 */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">选择工艺</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {craftOptions.map((option) => (
                      <div 
                        key={option.id}
                        onClick={() => setSelectedCraft(option.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all ${
                          selectedCraft === option.id ? "bg-red-50 border border-red-500" : "bg-white border border-gray-200"
                        }`}
                      >
                        <div className="text-blue-800 w-6 h-6 mb-2">
                          {option.icon}
                        </div>
                        <span className="text-sm">{option.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* AI生成按钮 */}
                <button 
                  onClick={handleGenerateImage}
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'} text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center`}
                >
                  <span className="mr-2">✏️</span>
                  {loading ? '生成中...' : 'AI生成设计方案'}
                </button>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {error}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">AI图像生成</h2>
                  <button 
                    onClick={() => setShowGenerator(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    返回
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">根据您的选择，我们生成了以下提示词：</p>
                  <div className="bg-gray-100 p-3 rounded-md text-gray-800">
                    {generatePrompt()}
                  </div>
                </div>
                
                
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowGenerator(false)}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    取消
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
