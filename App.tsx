
import React, { useState, useMemo } from 'react';
import { Category, KnowledgePoint } from './types';
import { KNOWLEDGE_DATABASE } from './constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
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

  const difficultyStats = useMemo(() => {
    const counts = [0, 0, 0, 0, 0];
    KNOWLEDGE_DATABASE.forEach(p => counts[p.difficulty - 1]++);
    return counts.map((count, i) => ({ name: `难度 ${i + 1}`, value: count }));
  }, []);

  const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#f87171', '#6366f1'];

  return (
    <div className="min-h-screen pb-12 bg-slate-50 print:bg-white selection:bg-indigo-100">
      {/* 全局顶部导航 */}
      <header className="bg-slate-900 text-white py-6 px-4 shadow-2xl mb-8 print:hidden sticky top-0 z-50 backdrop-blur-md bg-slate-900/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('MAP')}>
            <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg rotate-3">
              <span className="text-2xl font-black">4+</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter">苏教版数学·四上</h1>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Premium Learning Hub</p>
            </div>
          </div>
          
          <nav className="flex bg-slate-800 p-1.5 rounded-2xl border border-slate-700 shadow-inner">
            <button 
              onClick={() => setView('MAP')}
              className={`flex items-center gap-2 px-8 py-2.5 rounded-xl transition-all duration-500 ${view === 'MAP' ? 'bg-indigo-500 text-white shadow-xl font-bold scale-105' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              核心考点图谱
            </button>
            <button 
              onClick={() => setView('EXAM')}
              className={`flex items-center gap-2 px-8 py-2.5 rounded-xl transition-all duration-500 ${view === 'EXAM' ? 'bg-rose-500 text-white shadow-xl font-bold scale-105' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              模拟巅峰卷
            </button>
          </nav>
        </div>
      </header>

      {view === 'MAP' ? (
        <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* 侧边控制面板 */}
          <div className="lg:col-span-1 space-y-6">
            <section 
              onClick={() => setView('EXAM')}
              className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-8 rounded-3xl shadow-2xl cursor-pointer hover:scale-[1.03] active:scale-95 transition-all group"
            >
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
              <div className="relative z-10 text-white">
                <span className="text-[10px] font-black tracking-widest bg-white/20 px-2 py-1 rounded-md mb-4 inline-block">CHALLENGE MODE</span>
                <h3 className="text-2xl font-black mb-2">进入提优冲刺</h3>
                <p className="text-indigo-100 text-xs opacity-80 mb-6 leading-relaxed">基于高阶思维设计的7大应用题型，助你完美避开期末考试所有陷阱。</p>
                <div className="flex items-center gap-2 font-bold text-sm">
                  立即开启练习
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-black mb-6 text-slate-800 flex items-center gap-3">
                <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
                考点分类
              </h2>
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedCategory('ALL')}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-300 ${selectedCategory === 'ALL' ? 'bg-indigo-50 text-indigo-700 font-black border-2 border-indigo-200 shadow-sm' : 'hover:bg-slate-50 text-slate-500 font-bold border-2 border-transparent'}`}
                >
                  全部核心点
                </button>
                {Object.values(Category).map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-300 ${selectedCategory === cat ? 'bg-indigo-50 text-indigo-700 font-black border-2 border-indigo-200 shadow-sm' : 'hover:bg-slate-50 text-slate-500 font-bold border-2 border-transparent'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* 右侧核心内容 */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-3xl border border-slate-200 shadow-sm gap-4">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-black text-slate-900">
                  {selectedCategory === 'ALL' ? '全考点图谱' : selectedCategory}
                </h2>
                <span className="text-slate-400 text-sm font-bold">({filteredPoints.length}个活跃考向)</span>
              </div>
              <div className="relative w-full md:w-80">
                <input 
                  type="text" 
                  placeholder="搜索知识点关键词..."
                  className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-5 h-5 absolute left-4 top-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPoints.length > 0 ? (
                filteredPoints.map(point => (
                  <KnowledgeCard key={point.id} point={point} />
                ))
              ) : (
                <div className="col-span-full py-20 bg-white rounded-3xl border-4 border-dashed border-slate-100 flex flex-col items-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <p className="text-slate-400 font-black text-lg">未发现匹配的知识点</p>
                </div>
              )}
            </div>
          </div>
        </main>
      ) : (
        <MockExam />
      )}
    </div>
  );
};

interface KnowledgeCardProps {
  point: KnowledgePoint;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ point }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-100 overflow-hidden hover:border-indigo-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-indigo-100/50">
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 shadow-sm ${
            point.category === Category.NUMBER_ALGEBRA ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
            point.category === Category.GEOMETRY_SPACE ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
            point.category === Category.STATISTICS_PROBABILITY ? 'bg-rose-50 text-rose-600 border-rose-100' :
            'bg-amber-50 text-amber-600 border-amber-100'
          }`}>
            {point.category}
          </span>
          <div className="flex gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-700 ${i < point.difficulty ? 'bg-amber-400 scale-110' : 'bg-slate-200'}`} 
              />
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:translate-x-1 transition-transform">{point.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{point.description}</p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-black text-indigo-600">典</div>
            <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-black text-emerald-600">考</div>
          </div>
          <span className="text-[11px] font-black text-slate-400 tracking-tight">
            考察频次：高 | 源于：{point.sourceQuestion}
          </span>
        </div>

        <button 
          onClick={() => setExpanded(!expanded)}
          className={`w-full py-4 px-6 rounded-2xl text-xs font-black flex items-center justify-center transition-all duration-300 border-2 ${expanded ? 'bg-rose-600 text-white border-rose-600 shadow-xl shadow-rose-200 scale-[0.98]' : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'}`}
        >
          {expanded ? '关闭提优建议' : '展开查漏补缺建议'}
          <svg className={`w-4 h-4 ml-2 transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {expanded && (
          <div className="mt-6 p-6 bg-rose-50/70 rounded-[1.5rem] border-2 border-rose-100 animate-in zoom-in-95 duration-500">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-rose-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
              </div>
              <div>
                <h4 className="text-rose-900 font-black text-sm mb-1.5 uppercase tracking-wide">核心查漏补缺：</h4>
                <p className="text-rose-700/90 text-sm leading-relaxed font-bold italic">“{point.pitfall}”</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
