/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, 
  Image as ImageIcon, 
  Scissors, 
  Youtube, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  PlayCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  color: string;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      id: 0,
      title: "Bước 1: Lấy âm thanh từ NotebookLM",
      icon: <Mic className="w-8 h-8" />,
      color: "border-indigo-500",
      content: (
        <div className="space-y-6">
          <p className="text-xl leading-relaxed font-medium text-slate-700">
            Đầu tiên, Mẹ hãy nhấn vào chữ <a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-black hover:text-indigo-800 transition-colors">NotebookLM</a> để mở trang web và tải file âm thanh về máy tính nhé.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-3">
              <div className="bg-indigo-50 p-5 rounded-2xl border-l-4 border-indigo-300 transform transition-transform hover:scale-[1.01]">
                <p className="text-lg text-slate-700">1. Mẹ chọn nút <strong>"Audio Overview"</strong> (thường nằm ở góc trên bên phải).</p>
              </div>
              <div className="bg-indigo-50 p-5 rounded-2xl border-l-4 border-indigo-300 transform transition-transform hover:scale-[1.01]">
                <p className="text-lg text-slate-700">2. Đợi một lát để máy tính tạo ra file âm thanh.</p>
              </div>
              <div className="bg-indigo-50 p-5 rounded-2xl border-l-4 border-indigo-300 transform transition-transform hover:scale-[1.01]">
                <p className="text-lg text-slate-700">3. Bấm vào nút <strong>Tải xuống (Download)</strong> (hình mũi tên trỏ xuống) để lưu vào máy.</p>
              </div>
            </div>
            
            {/* Visual Guide Mockup */}
            <div className="md:w-1/3 bg-slate-100 rounded-3xl p-6 flex flex-col justify-center border-4 border-white shadow-inner">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 block text-center">Hình minh họa cái nút</span>
              <div className="bg-white rounded-2xl p-6 shadow-md border-b-4 border-slate-200 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 ring-4 ring-blue-50">
                  <PlayCircle className="w-10 h-10" />
                </div>
                <div className="bg-blue-600 text-white px-6 py-2 rounded-xl font-black text-sm uppercase">Audio Overview</div>
                <div className="mt-2 text-blue-500 animate-bounce">
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                  <Mic className="w-6 h-6 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 p-5 rounded-ed-3xl rounded-bl-3xl border-l-8 border-amber-400 mt-6 shadow-sm">
            <p className="text-amber-900 font-bold italic text-lg leading-relaxed">
              💡 Mẹo: Mẹ nhớ tên file âm thanh để lát nữa mình tìm cho dễ nhé! Thường nó sẽ nằm trong thư mục "Downloads".
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Bước 2: Chỉnh sửa & Làm nhẹ file nhạc",
      icon: <Scissors className="w-8 h-8" />,
      color: "border-indigo-500",
      content: (
        <div className="space-y-10">
          {/* Part A: Trimming */}
          <div className="space-y-4">
            <h4 className="text-2xl font-black text-indigo-700 uppercase flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-sm">A</span>
              Cắt đoạn nhạc thừa
            </h4>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-3">
                <div className="bg-indigo-50 p-5 rounded-2xl border-l-4 border-indigo-300">
                  <p className="text-lg text-slate-700">1. Mẹ hãy nhấn: <a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold ml-2 hover:bg-indigo-700 transition-all shadow-sm">Mở trang Cắt Nhạc <ArrowRight className="w-4 h-4" /></a></p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-2xl border-l-4 border-indigo-300">
                  <p className="text-lg text-slate-700">2. Bấm <strong>"Open file"</strong> màu xanh để chọn file âm thanh Mẹ vừa tải.</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-2xl border-l-4 border-indigo-300">
                  <p className="text-lg text-slate-700">3. Kéo thanh trượt để lấy đoạn nhạc Mẹ thích, rồi bấm <strong>"Save"</strong>.</p>
                </div>
              </div>
              <div className="md:w-1/3 bg-slate-800 rounded-3xl p-6 flex flex-col items-center border-4 border-slate-700 shadow-2xl">
                <span className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-4 block">Ảnh minh họa cắt nhạc</span>
                <div className="w-full h-20 bg-slate-700 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-600 mb-4">
                  <div className="flex items-end gap-1 px-4 opacity-30">
                     {[30, 50, 20, 70, 40, 80, 30, 60].map((h, i) => (
                       <div key={i} className="w-1.5 bg-indigo-400 rounded-full" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-amber-400">
                    <div className="absolute -top-1 -left-2 w-5 h-5 bg-amber-400 rounded-full"></div>
                  </div>
                  <div className="absolute right-6 top-0 bottom-0 w-1 bg-amber-400">
                    <div className="absolute -top-1 -left-2 w-5 h-5 bg-amber-400 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-indigo-500 text-white px-6 py-2 rounded-xl font-black text-xs uppercase">Save</div>
              </div>
            </div>
          </div>

          {/* Part B: Compression */}
          <div className="space-y-4 pt-6 border-t-2 border-dashed border-slate-100">
            <h4 className="text-2xl font-black text-amber-600 uppercase flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-sm">B</span>
              Nén file nhạc (Nếu file {'>'} 25MB)
            </h4>
            <div className="bg-amber-50 p-6 rounded-[32px] border-2 border-amber-200">
              <p className="text-xl text-amber-900 font-bold mb-4">
                ⚠️ Trang tạo video thường chỉ nhận file dưới 25MB. Nếu file quá "nặng", Mẹ hãy làm theo bước này:
              </p>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-amber-400">
                    <p className="text-lg text-slate-700">1. Mẹ nhấn: <a href="https://www.happyscribe.com/tools/m4a-compressor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-xl font-bold ml-2 hover:bg-amber-600 transition-all shadow-sm">Mở trang Làm Nhẹ <ArrowRight className="w-4 h-4" /></a></p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-amber-400">
                    <p className="text-lg text-slate-700">2. Bấm nút <strong>"Select a file"</strong> để chọn file nhạc.</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-amber-400">
                    <p className="text-lg text-slate-700">3. Chọn <strong>"Smallest file"</strong> (Nhỏ nhất) rồi bấm nút <strong>"Compress"</strong>.</p>
                  </div>
                </div>
                
                {/* Visual Guide Mockup - HappyScribe */}
                <div className="md:w-2/5 flex flex-col gap-4">
                  <div className="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-xl">
                    <div className="flex flex-col items-center gap-4">
                       <div className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg shadow-blue-100">
                         Select a file
                       </div>
                       <div className="w-full flex justify-between gap-2">
                          <div className="flex-1 bg-blue-50 border-2 border-blue-500 p-2 rounded-xl text-center">
                            <div className="text-[10px] font-black text-blue-600">Smallest</div>
                            <div className="text-[8px] text-blue-400">-70%</div>
                          </div>
                          <div className="flex-1 bg-slate-50 border-2 border-slate-100 p-2 rounded-xl text-center">
                            <div className="text-[10px] font-bold text-slate-400">Best</div>
                          </div>
                       </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-slate-400 italic">Tải bản nén xong là Mẹ dùng được ngay!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-emerald-700 bg-emerald-50 p-5 rounded-3xl border-2 border-emerald-100 mt-6 shadow-sm">
            <div className="bg-emerald-500 p-2 rounded-full text-white shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <p className="font-black text-xl">Xong rồi! Giờ Mẹ đã có file âm thanh chuyên nghiệp.</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Bước 3: Tạo hình ảnh đẹp với Gemini",
      icon: <ImageIcon className="w-8 h-8" />,
      color: "border-rose-500",
      content: (
        <div className="space-y-6">
          <p className="text-xl leading-relaxed font-medium text-slate-700">
            Video cần có một hình ảnh đẹp làm nền. Mẹ hãy nhờ <strong>Gemini</strong> vẽ giúp nhé:
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-rose-50 border-l-8 border-rose-400 p-8 rounded-r-[40px] shadow-inner">
                <h4 className="font-black text-rose-900 mb-4 text-2xl uppercase tracking-tight">Mẹ chọn chủ đề yêu thích:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {['Gia đình', 'Nấu ăn', 'Kỷ niệm', 'Phong cảnh', 'Tâm sự', 'Bài học'].map(topic => (
                    <button 
                      key={topic}
                      onClick={() => {
                        const prompt = `Hãy vẽ cho tôi một bức ảnh minh họa cho video nói về chủ đề ${topic}. Phong cách ấm áp, nghệ thuật, màu sắc tươi sáng, định dạng nằm ngang (16:9).`;
                        navigator.clipboard.writeText(prompt);
                        alert(`Đã chép câu lệnh cho chủ đề "${topic}". Mẹ chỉ cần sang Gemini rồi "Dán" vào là xong!`);
                      }}
                      className="bg-white border-4 border-rose-100 py-4 px-4 rounded-[24px] text-rose-600 font-black text-lg hover:border-rose-500 hover:text-rose-700 transition-all shadow-md active:scale-95"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                <div className="bg-white/60 p-5 rounded-2xl border-2 border-rose-200">
                  <p className="italic text-rose-900 text-lg leading-relaxed">
                    <strong>Cách làm đơn giản:</strong> Mẹ bấm vào một ô ở trên, sau đó sang trang Gemini, bấm chuột phải vào chỗ viết tin nhắn và chọn <strong>"Dán" (Paste)</strong>. Bấm nút Gửi là Gemini vẽ luôn!
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Guide - Gemini Interface */}
            <div className="lg:w-1/3 space-y-4">
              <div className="bg-white border-4 border-slate-100 rounded-[32px] p-6 shadow-xl relative">
                 <span className="text-xs font-black text-rose-400 uppercase tracking-widest mb-4 block text-center">Bức ảnh Mẹ sẽ nhận được</span>
                 <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center border-2 border-rose-100 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/50 to-transparent"></div>
                    <ImageIcon className="w-16 h-16 text-rose-300" />
                    {/* Mouse cursor pointer */}
                    <div className="absolute bottom-4 right-4 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur shadow-xl rounded-xl p-3 border border-slate-200 flex flex-col gap-1">
                        <div className="text-[10px] font-bold text-slate-800">Lưu hình ảnh thành...</div>
                        <div className="text-[10px] text-slate-400">Sao chép hình ảnh</div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-slate-800 -rotate-45 -translate-x-2 -translate-y-2 fill-slate-800" />
                    </div>
                 </div>
                 <p className="text-center text-sm text-slate-400 mt-4 italic">Bấm chuột phải vào ảnh Gemini vừa vẽ</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Bước 4: Ghép thành Video hoàn chỉnh",
      icon: <Youtube className="w-8 h-8" />,
      color: "border-emerald-500",
      content: (
        <div className="space-y-8">
          <p className="text-xl leading-relaxed font-medium text-slate-700">
            Đây là bước cuối cùng để làm ra video. Mẹ làm theo 3 phần nhỏ này nhé:
          </p>

          <div className="space-y-10">
            {/* Part 1: Login */}
            <div className="bg-emerald-50 rounded-[40px] p-8 border-2 border-emerald-100 shadow-sm">
              <h4 className="text-2xl font-black text-emerald-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg">1</span>
                Đăng nhập vào trang web
              </h4>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <p className="text-lg text-slate-700">
                    Mẹ nhấn nút <strong>Mở Tunestotube</strong> bên dưới. Khi trang web hiện ra, Mẹ tìm cái nút trắng có chữ <strong>"Continue with Google"</strong> như hình bên cạnh.
                  </p>
                  <a href="https://www.tunestotube.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-[24px] font-black text-xl hover:bg-emerald-700 transform transition-all active:scale-95 shadow-xl border-b-8 border-emerald-900">
                    Mở Tunestotube <ArrowRight className="w-6 h-6" />
                  </a>
                  <div className="bg-amber-100 p-4 rounded-2xl border-l-4 border-amber-400">
                    <p className="text-amber-900 font-bold">
                      ⚠️ Lưu ý: Mẹ nhớ chọn đúng tài khoản Google có tên <strong>"banoicua"</strong> của Mẹ nhé!
                    </p>
                  </div>
                </div>
                <div className="md:w-2/5 bg-white p-4 rounded-3xl shadow-lg border-2 border-emerald-100 transform -rotate-2">
                   <div className="bg-slate-50 rounded-xl p-6 flex flex-col items-center gap-3 border border-slate-200">
                      <div className="w-full h-8 bg-white rounded border border-slate-300 flex items-center px-2 gap-2 shadow-sm">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-16 h-2 bg-slate-100 rounded"></div>
                      </div>
                      <div className="mt-4 border-2 border-red-500 p-2 rounded-xl bg-white shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse">
                        <div className="flex items-center gap-2 border border-slate-300 px-4 py-2 rounded-md">
                          <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
                          <span className="text-[10px] font-bold text-slate-600">Continue with Google</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-red-500 font-black uppercase mt-1">Mẹ hãy bấm vào đây!</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Part 2: Upload */}
            <div className="bg-white rounded-[40px] p-8 border-4 border-emerald-100 shadow-xl">
              <h4 className="text-2xl font-black text-emerald-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg">2</span>
                Tải lên Âm thanh & Hình ảnh
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                   <p className="text-lg text-slate-700">Mẹ bấm vào nút màu xanh <strong>"Upload Files"</strong>:</p>
                   <ul className="space-y-3 text-slate-600">
                      <li className="flex gap-2">✅ Chọn 1 file âm thanh (đã làm ở Bước 2).</li>
                      <li className="flex gap-2">✅ Chọn 1 bức ảnh đẹp (đã làm ở Bước 3).</li>
                   </ul>
                   <p className="text-slate-500 italic">Mẹ đợi cho thanh màu xanh chạy đến <strong>100%</strong> là được.</p>
                </div>
                <div className="bg-emerald-50 rounded-3xl p-6 border-2 border-dashed border-emerald-200 flex flex-col items-center justify-center text-center">
                   <div className="bg-white px-6 py-4 rounded-2xl shadow-md font-black text-emerald-600 mb-4 border-b-4 border-emerald-100">
                      Upload Files
                   </div>
                   <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">Nút này thường có màu xanh dương</p>
                </div>
              </div>
            </div>

            {/* Part 3: Create */}
            <div className="bg-emerald-900 rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg">3</span>
                  Ghi tên & Tạo Video
                </h4>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                   <div className="flex-1 space-y-4">
                      <p className="text-xl text-indigo-100">
                        Cuối cùng, Mẹ gõ <strong>Tựa đề cho video</strong> vào ô "Title", sau đó kéo xuống dưới cùng tìm nút màu đỏ này:
                      </p>
                      <div className="bg-red-600 text-white py-6 px-10 rounded-[32px] font-black text-3xl shadow-2xl border-b-8 border-red-900 transform hover:scale-105 transition-transform text-center uppercase tracking-tighter">
                        Create Video
                      </div>
                      <p className="text-emerald-300 font-bold text-center">Bấm vào đây là Video của Mẹ sẽ tự động được gửi lên YouTube!</p>
                   </div>
                   <div className="md:w-1/3 flex justify-center">
                     <div className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center animate-pulse">
                        <Youtube className="w-20 h-20 text-red-500" />
                     </div>
                   </div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },

  ];

  return (
    <div className="min-h-screen bg-sky-50 font-sans text-slate-900 pb-24">
      {/* Header Section */}
      <header className="bg-white/80 backdrop-blur-md border-b-4 border-sky-100 py-10 px-8 shadow-lg sticky top-0 z-20 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-display font-black text-sky-900 leading-tight uppercase tracking-tight">
              Hướng Dẫn <span className="text-indigo-600">Mẹ Làm Video</span>
            </h1>
            <p className="text-xl md:text-2xl text-sky-700 font-medium font-display opacity-80">
              Chỉ với vài bước đơn giản - Mẹ làm được ngay! ❤️
            </p>
          </div>
          
          <div className="bg-white px-8 py-5 rounded-[32px] shadow-2xl border-4 border-sky-200 flex flex-col items-center min-w-[240px] transform hover:rotate-1 transition-transform">
            <span className="text-xs font-black text-sky-400 uppercase tracking-[0.2em] mb-1">Trạng thái hiện tại</span>
            <span className="text-2xl font-black text-emerald-500 whitespace-nowrap">
              {currentStep === steps.length - 1 ? '🎉 Đã hoàn thành!' : `Bắt đầu Bước ${currentStep + 1} 🚀`}
            </span>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-sky-100 rounded-full opacity-50 -z-10"></div>
      </header>

      <main className="max-w-5xl mx-auto mt-12 px-8">
        {/* Progress Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {steps.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentStep(idx)}
              className={`px-6 py-4 rounded-[20px] font-black text-lg transition-all flex items-center gap-3 border-b-4 shadow-md ${
                idx === currentStep 
                  ? 'bg-indigo-600 text-white border-indigo-800 scale-105 shadow-xl' 
                  : (idx < currentStep 
                    ? 'bg-emerald-100 text-emerald-700 border-emerald-300' 
                    : 'bg-white text-slate-400 border-slate-200 hover:border-sky-300')
              }`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                idx === currentStep ? 'bg-white text-indigo-600' : (idx < currentStep ? 'bg-emerald-500 text-white' : 'bg-slate-100')
              }`}>
                {idx < currentStep ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
              </span>
              <span className="hidden sm:inline uppercase tracking-wide">Bước {idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Step Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className={`bg-white rounded-[44px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-t-[12px] ${steps[currentStep].color} flex flex-col`}
          >
            <div className="px-10 py-12 md:px-16 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-10 text-center md:text-left">
                <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center text-4xl font-black shadow-lg ${
                  steps[currentStep].color.replace('border-', 'bg-').replace('-500', '-100').replace('indigo-500', 'indigo-100').replace('rose-500', 'rose-100').replace('emerald-500', 'emerald-100')
                } ${steps[currentStep].color.replace('border-', 'text-')}`}>
                  0{currentStep + 1}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-slate-800 uppercase tracking-tight">{steps[currentStep].title}</h2>
                  <div className="h-1.5 w-24 bg-sky-200 rounded-full mt-2 mx-auto md:mx-0"></div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                {steps[currentStep].content}
              </div>
              
              <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-6">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`group flex items-center gap-3 px-10 py-5 rounded-[28px] font-black text-xl transition-all border-b-4 ${
                    currentStep === 0 
                      ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed' 
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-lg active:scale-95'
                  }`}
                >
                  <ChevronLeft className={`w-7 h-7 transition-transform group-hover:-translate-x-1 ${currentStep === 0 ? '' : 'text-sky-500'}`} />
                  Quay lại
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    className="group flex items-center gap-4 px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[28px] font-black text-2xl shadow-xl shadow-indigo-100 border-b-8 border-indigo-900 transition-all active:scale-95 transform hover:-translate-y-1"
                  >
                    Bước tiếp theo
                    <ChevronRight className="w-8 h-8 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-4 px-12 py-5 bg-emerald-500 text-white rounded-[28px] font-black text-2xl shadow-xl shadow-emerald-200 border-b-8 border-emerald-700 animate-pulse"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                    Mẹ đã làm xong!
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Support Section - Indigo Footer Style */}
        <footer className="mt-24 mb-12 bg-indigo-950 rounded-[44px] p-10 md:p-14 text-white shadow-[0_30px_70px_-20px_rgba(30,27,75,0.4)] relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="bg-indigo-500 p-6 rounded-[32px] shadow-2xl transform -rotate-6">
              <HelpCircle className="w-16 h-16 text-white" />
            </div>
            <div className="flex-grow text-center md:text-left space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-black mb-2 text-indigo-200 uppercase tracking-tight">Mẹ Gặp Khó Khăn Gì Ư?</h3>
              <p className="text-xl text-indigo-100/80 leading-relaxed font-medium">
                Mẹ đừng lo nhé! Nếu có bước nào không rõ, Mẹ cứ thoải mái nhấn nút "Quay lại" để xem lại hoặc gọi ngay cho con. 
                <br className="hidden md:block" /> Con sẽ hướng dẫn Mẹ trực tiếp qua điện thoại bất cứ lúc nào!
              </p>
            </div>
            <div className="bg-amber-400 text-indigo-950 px-10 py-6 rounded-[32px] font-black text-2xl shadow-2xl transform rotate-3 flex flex-col items-center border-b-8 border-amber-600">
              <span className="uppercase text-sm tracking-widest opacity-70 mb-1">Cần hỗ trợ?</span>
              CHÚC MẸ THÀNH CÔNG! ❤️
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-800 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-60 h-60 bg-indigo-500 rounded-full opacity-10 blur-2xl"></div>
        </footer>
      </main>

      {/* Floating Action Button */}
      <motion.div 
        className="fixed bottom-10 right-10 z-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setCurrentStep(2)}
          className="bg-white border-4 border-rose-300 p-6 rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-4 text-rose-600 font-black text-xl hover:bg-rose-50 transition-all transform hover:-rotate-2 active:scale-95 group"
        >
          <div className="bg-rose-100 p-3 rounded-2xl text-rose-500 group-hover:scale-110 transition-transform">
            <ImageIcon className="w-8 h-8" />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs uppercase tracking-widest opacity-70">Món quà từ Gemini</span>
            <span>Mẹ chọn mẫu ảnh đẹp ở đây!</span>
          </div>
        </button>
      </motion.div>
    </div>
  );
}
