
import React, { useState, useMemo } from 'react';
import { Category, KnowledgePoint } from './types';
import { KNOWLEDGE_DATABASE } from './constants';
import MockExam from './MockExam';

const App: React.FC = () => {
  const [view, setView] = useState<'MAP' | 'EXAM'>('MAP');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPoints = useMemo(() => {
    return KNOWLEDGE_DATABASE.filter(p => {
      const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pb-6 bg-slate-50 print:bg-white selection:bg-indigo-100 font-sans">
      {/* 打印样式优化：强制背景色打印，压缩页边距 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4; margin: 10mm; }
          .print-compact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .print-no-break { break-inside: avoid; }
        }
      `}} />

      {/* 顶部控制栏 - 打印时隐藏 */}
      <header className="bg-slate-900 text-white py-4 px-4 shadow-xl mb-4 print:hidden sticky top-0 z-50 backdrop-blur-md bg-slate-900/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('MAP')}>
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl font-black text-white">4+</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter">苏教版数学·四上</h1>
            </div>
          </div>
          
          <nav className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button 
              onClick={() => setView('MAP')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${view === 'MAP' ? 'bg-indigo-500 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              考点清单
            </button>
            <button 
              onClick={() => setView('EXAM')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${view === 'EXAM' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              提优冲刺卷
            </button>
          </nav>
        </div>
      </header>

      {view === 'MAP' ? (
        <main className="max-w-7xl mx-auto px-4 print:max-w-none print:px-0">
          {/* 筛选与操作区 - 打印时隐藏 */}
          <div className="mb-6 flex flex-wrap gap-3 items-center print:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button 
                onClick={() => setSelectedCategory('ALL')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${selectedCategory === 'ALL' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
              >
                全部
              </button>
              {Object.values(Category).map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold ${selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative flex-1 max-w-xs">
              <input 
                type="text" 
                placeholder="搜索..."
                className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs outline-none focus:ring-1 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <button 
              onClick={handlePrint}
              className="bg-indigo-600 text-white px-5 py-1.5 rounded-full font-bold text-xs shadow-md hover:bg-indigo-700 flex items-center gap-2"
            >
              一键打印清单 (省纸版)
            </button>
          </div>

          {/* 知识点图谱内容 - 紧凑排版 */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 md:p-8 print:shadow-none print:border-none print:p-0">
            <div className="text-center mb-6 border-b-2 border-slate-900 pb-4 print:mb-4">
              <h2 className="text-2xl font-black text-slate-900">苏教版数学四年级（上）· 核心考点手册</h2>
              <div className="text-slate-500 font-bold text-[10px] mt-1">
                考点总计：{filteredPoints.length} | 复习范围：{selectedCategory === 'ALL' ? '全册' : selectedCategory} | 打印日期：{new Date().toLocaleDateString()}
              </div>
            </div>

            {/* 考点列表 - 打印时双栏显示以省纸 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 print:grid-cols-2 print:gap-x-6 print:gap-y-3">
              {filteredPoints.length > 0 ? (
                filteredPoints.map((point, index) => (
                  <div key={point.id} className="print-no-break border border-slate-100 rounded-xl p-3 hover:bg-slate-50 transition-colors print:p-2 print:border-slate-200">
                    <div className="flex gap-3">
                      {/* 紧凑编号 */}
                      <div className="w-6 h-6 bg-slate-900 text-white rounded-md flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                        {index + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-sm font-black text-slate-900 truncate">{point.title}</h3>
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold border ${
                            point.category === Category.NUMBER_ALGEBRA ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
                            point.category === Category.GEOMETRY_SPACE ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                            point.category === Category.STATISTICS_PROBABILITY ? 'bg-rose-50 text-rose-700 border-rose-100' :
                            'bg-amber-50 text-amber-700 border-amber-100'
                          }`}>
                            {point.category}
                          </span>
                        </div>
                        
                        <p className="text-slate-600 text-[11px] leading-relaxed mb-2">
                          {point.description}
                        </p>

                        {/* 整合查漏补缺内容 */}
                        <div className="bg-rose-50 rounded-lg p-2 border-l-2 border-rose-400">
                          <p className="text-rose-800 text-[10px] font-bold leading-snug">
                            <span className="text-rose-600 mr-1">⚠️ 易错点:</span>
                            {point.pitfall}
                          </p>
                        </div>
                        
                        <div className="mt-1.5 flex justify-between items-center text-[9px] text-slate-400 font-medium">
                          <span>难度: {'★'.repeat(point.difficulty)}{'☆'.repeat(5-point.difficulty)}</span>
                          <span className="italic">来源: {point.sourceQuestion}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-10 text-center text-slate-400 text-sm font-bold">未找到匹配的知识点</div>
              )}
            </div>

            {/* 紧凑页脚 */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-slate-400 text-[9px] font-bold print:mt-4">
              <span>苏教版数学复习库 (内部版)</span>
              <span>珍惜纸张，高效复习</span>
            </div>
          </div>
        </main>
      ) : (
        <MockExam />
      )}
    </div>
  );
};

export default App;
