import React from 'react';

const MockExam: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 shadow-2xl border border-slate-200 print:shadow-none print:border-none print:p-0 animate-in fade-in zoom-in-95 duration-500 mb-10 text-black exam-paper-container">
      {/* 打印专用样式注入及新宋体配置 */}
      <style dangerouslySetInnerHTML={{ __html: `
        .exam-paper-container {
          font-family: 'NSimSun', '新宋体', 'SimSun', '宋体', serif !important;
        }
        .exam-paper-container *:not(button):not(svg):not(path) {
          font-family: 'NSimSun', '新宋体', 'SimSun', '宋体', serif !important;
        }
        @media print {
          @page {
            size: A4;
            margin: 15mm 15mm;
          }
          body {
            background: white;
            -webkit-print-color-adjust: exact;
          }
          .print-avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .print-new-page {
            break-before: page;
            page-break-before: always;
          }
          .exam-paper-container {
            width: 100%;
            margin-bottom: 0;
            padding: 0 !important;
          }
          .section-three {
            margin-top: 1.5rem;
          }
        }
      `}} />

      {/* 顶部控制栏 - 打印时隐藏 */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-black print:hidden">
        <div>
          <h2 className="text-xl font-black text-black tracking-tight">
            苏教版数学四上·期末提优冲刺卷
          </h2>
          <p className="text-black/60 text-xs mt-0.5">难度等级：特训提优 | 重点：除法、几何逻辑、最优策略</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md font-bold text-sm active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          立即打印 (标准A4两页装)
        </button>
      </div>

      {/* 试卷标头 */}
      <div className="text-center mb-10">
        <div className="inline-block border border-black px-3 py-0.5 mb-2 text-[10px] font-black tracking-widest uppercase text-black">Elite Academic Excellence</div>
        <h1 className="text-2xl font-black text-black mb-4 tracking-tight leading-tight">
          苏教版四年级数学（上）· 期末考点深度提优检测卷
        </h1>
        <div className="flex justify-center items-center gap-12 text-base text-black font-bold py-3 border-y-2 border-black mx-auto max-w-xl">
          <span>姓名：<span className="inline-block w-40 border-b border-black"></span></span>
          <div className="flex items-center gap-2">
            <span>实得分：</span>
            <div className="w-16 h-10 border-2 border-black flex items-center justify-center text-xl font-black text-black rounded"></div>
          </div>
        </div>
      </div>

      {/* 第一部分：思维挑战 - 选择题 */}
      <section className="mb-10 print-avoid-break">
        <h3 className="text-lg font-black bg-black text-white inline-block px-6 py-1.5 mb-6 rounded shadow-sm">
          一、精准分析：精挑细选（每题5分，共20分）
        </h3>
        <div className="space-y-6 pl-4 text-black text-[15px]">
          {[
            {
              q: "1. 容器 A 盛水 2 升，容器 B 盛水 800 毫升。将 B 中的水倒入 A 中( )毫升后，A 容器中的水恰好是 B 容器中水的 3 倍。",
              opts: ["A. 100", "B. 200", "C. 300", "D. 400"]
            },
            {
              q: "2. 在算式 A ÷ B = 15...12 中，如果被除数 A 和除数 B 同时乘 10，那么现在的余数是( )。",
              opts: ["A. 12", "B. 1.2", "C. 120", "D. 1200"]
            },
            {
              q: "3. 一个立体图形从正面看是 3 个小正方形（排成一行），从右面看也是 3 个小正方形（排成一行）。要搭成这个立体图形，最多需要( )个小正方体。",
              opts: ["A. 3", "B. 5", "C. 7", "D. 9"]
            },
            {
              q: "4. 钟面上从 4 时整走到 4 时 30 分，时针转过的角是( )度。",
              opts: ["A. 180", "B. 15", "C. 30", "D. 150"]
            }
          ].map((item, idx) => (
            <div key={idx} className="print-avoid-break">
              <p className="font-bold leading-relaxed mb-3">{item.q}</p>
              <div className="grid grid-cols-4 gap-4 text-black pl-6 font-medium italic">
                {item.opts.map((opt, oIdx) => <span key={oIdx}>{opt}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 第二部分：思维进阶 - 填空题 */}
      <section className="mb-10 print-avoid-break">
        <h3 className="text-lg font-black bg-black text-white inline-block px-6 py-1.5 mb-6 rounded shadow-sm">
          二、缜密思考：认真钻研（每题5分，共25分）
        </h3>
        <div className="space-y-5 pl-4 text-black text-[15px]">
          {[
            "算式 3□5 ÷ 37，要使商是两位数，□里最小填( )；若商的末尾有 0，□里可以填( )。",
            "小强在计算除法时，把被除数 470 看成了 425，结果得到的商比原来小了 5，且余数都是 2。正确的除数是( )，正确的商是( )。",
            "已知 ∠1、∠2、∠3 是一个平角内的三个角，且 ∠1 = 2∠2，∠3 = ∠1 + 30°，那么 ∠1 = ( )°。",
            "一列数按 1, 2, 2, 3, 3, 3, 1, 2, 2, 3, 3, 3... 循环排列，第 100 个数是( )，这 100 个数的总和是( )。",
            "一个盒子内有红、黄、蓝三种球共 20 个。摸到红球可能性最大，摸到蓝球可能性最小且不为 0。黄球最少可能有( )个，最多可能有( )个。"
          ].map((q, idx) => (
            <div key={idx} className="leading-loose print-avoid-break">
              <p className="font-bold">{idx + 1}. {q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 第三部分：应用奥义 - 解决问题 */}
      <section className="section-three mb-12">
        <h3 className="text-lg font-black bg-black text-white inline-block px-6 py-1.5 mb-8 rounded shadow-sm">
          三、实战突破：解决问题（每题11分，共55分）
        </h3>
        <div className="space-y-6 pl-4 text-black text-[15px]">
          <div className="print-avoid-break">
            <p className="font-bold mb-4 leading-relaxed text-base">1. 【排水法逻辑】一个长方体水缸，底面积是 500 平方厘米，缸内水深 12 厘米。现将一个底面积为 200 平方厘米、高为 10 厘米的长方体石块完全浸没于水中（水未溢出）。此时水面升高了多少厘米？</p>
            <div className="h-16"></div>
          </div>

          <div className="print-avoid-break">
            <p className="font-bold mb-4 leading-relaxed text-base">2. 【行程追及】甲、乙两列火车，甲车长 180 米，每秒行 20 米；乙车长 220 米，每秒行 15 米。两车在双轨上同向而行，从甲车头追上乙车尾，到甲车尾完全超过乙车头，一共需要多少秒？</p>
            <div className="h-16"></div>
          </div>

          <div className="print-avoid-break">
            <p className="font-bold mb-4 leading-relaxed text-base">3. 【分段策略】某市出租车收费标准：3 公里以内（含 3 公里）收费 10 元；超过 3 公里的部分，每公里加收 2 元（不足 1 公里按 1 公里计算）。小华打车去图书馆付了 26 元，他最远坐了多少公里？</p>
            <div className="h-16"></div>
          </div>

          <div className="print-avoid-break">
            <p className="font-bold mb-4 leading-relaxed text-base">4. 【组合优化】某景区门票价格：成人票 80 元，儿童票 40 元；10 人以上团体票（含 10 人）一律 50 元。现有 6 名家长带着 5 名学生去游玩，怎样购票最省钱？最少需要多少元？</p>
            <div className="h-16"></div>
          </div>

          <div className="flex flex-col gap-6 print-avoid-break">
            <div className="flex-1">
              <p className="font-bold mb-4 leading-relaxed text-rose-800 text-base">5. 【复合角推演】如图，在直角 ∠AOB 的内部有两条射线 OC 和 OD。已知 ∠AOC 的度数是 ∠COD 的 4 倍，且 ∠BOD 的度数比 ∠COD 的 2 倍多 6°。请通过逻辑列式计算出 ∠COD 的度数。并判断 ∠BOC 是什么角？</p>
              <div className="h-12"></div>
            </div>
            <div className="w-80 h-40 bg-white border border-black relative rounded shrink-0 self-center mt-2">
               <svg viewBox="0 0 320 160" className="w-full h-full">
                  <line x1="160" y1="140" x2="160" y2="20" stroke="black" strokeWidth="2" />
                  <text x="155" y="15" fontSize="14" fontWeight="bold">A</text>
                  <line x1="160" y1="140" x2="280" y2="140" stroke="black" strokeWidth="2" />
                  <text x="285" y="145" fontSize="14" fontWeight="bold">B</text>
                  <circle cx="160" cy="140" r="3" fill="black" />
                  <text x="145" y="150" fontSize="14" fontWeight="bold">O</text>
                  <polyline points="160,130 170,130 170,140" fill="none" stroke="black" strokeWidth="1" />
                  <line x1="160" y1="140" x2="242" y2="66" stroke="black" strokeWidth="2" strokeDasharray="4,2" />
                  <text x="245" y="60" fontSize="14" fontWeight="bold">C</text>
                  <line x1="160" y1="140" x2="255" y2="85" stroke="black" strokeWidth="2" strokeDasharray="4,2" />
                  <text x="260" y="85" fontSize="14" fontWeight="bold">D</text>
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 答案解析页 - 打印时强制另起一页 */}
      <div className="print-new-page pt-10 border-t-2 border-black mt-16 text-black">
        <h2 className="text-xl font-black text-center mb-10 tracking-tighter underline underline-offset-8">参考答案与提优解析 (Deep Analysis)</h2>
        
        <div className="space-y-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-black print-avoid-break">
            <h4 className="font-bold text-base mb-4 underline">【一、选择题答案】</h4>
            <div className="space-y-2 text-sm leading-relaxed">
              <p><b>1. 答案：A</b>。解析：设从 B 倒入 A 的水量为 x 毫升。(2000 + x) = 3 * (800 - x) =&gt; 4x = 400, x = 100。</p>
              <p><b>2. 答案：C</b>。解析：商不变规律中，被除数和除数同时乘 10，商不变，余数也要乘 10。12 * 10 = 120。</p>
              <p><b>3. 答案：D</b>。解析：从正面和右面看都是一行 3 个，最多可填满 3x3 底部一层，即 9 个。</p>
              <p><b>4. 答案：B</b>。解析：时针每小时 30 度，30 分钟走 15 度。</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-black print-avoid-break">
            <h4 className="font-bold text-base mb-4 underline">【二、填空题答案】</h4>
            <div className="space-y-2 text-sm leading-relaxed text-justify">
              <p>1. <b>7 ; 7/8/9</b> | 2. <b>9 ; 52</b> | 3. <b>60°</b> | 4. <b>3 ; 232</b> | 5. <b>2 ; 9</b></p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-black print-avoid-break">
            <h4 className="font-bold text-base mb-4 underline">【三、解决问题答案】</h4>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p><b>Q1:</b> 200 * 10 / 500 = 4 厘米。 (石块体积等于排开水体积)</p>
              <p><b>Q2:</b> (180 + 220) / (20 - 15) = 80 秒。 (路程和除以速度差)</p>
              <p><b>Q3:</b> 3 + (26 - 10) / 2 = 11 公里。 (分段计算，超出 3 公里部分收费 16 元)</p>
              <p><b>Q4:</b> 团体票优惠方案：(6 + 5) * 50 = 550 元。 散买：6 * 80 + 5 * 40 = 680 元。 550 &lt; 680，故最少 550 元。</p>
              <p><b>Q5:</b> 设 ∠COD=x，则 4x + x + (2x + 6) = 90 =&gt; 7x = 84, x = 12°。 ∠BOC = 12 + 30 = 42°，为锐角。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockExam;